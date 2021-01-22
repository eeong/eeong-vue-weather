import axios from 'axios'
import { iconGen , dateGen } from '../modules/util'

const APP_ID = 'd905c12b72e24ba0ea5f7746a96c3d73';
const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather';
const WEEKLY_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const SEND_DATA = {units:'metric', lang: 'kr', appid:APP_ID}

const CITY_PATH = '/json/city.json'


const axDaily = async (val) => {
	try {
		if(typeof val === 'string') {
			SEND_DATA.id = val;
			SEND_DATA.lat = null;
			SEND_DATA.lon = null;
		}

		else {
			SEND_DATA.id = null;
			SEND_DATA.lat = val.lat;
			SEND_DATA.lon = val.lon;
		}
		const r = await axios.get(DAILY_URL, {params: SEND_DATA})
		r.data.icon = iconGen(r.data.weather[0].icon)
		r.data.time = dateGen(r.data.dt*1000 ,1)
		return r.data
	}
	catch(err){
		console.log(err)
		return {code:500, error: err}
	}
}

const axWeekly = async (val) => {
	try {
		SEND_DATA.id = val
		const r = await axios.get(WEEKLY_URL, {params: SEND_DATA})
		r.data.title = r.data.city.name + ', ' + r.data.city.country
		for(let v of r.data.list) {
			v.icon = iconGen(v.weather[0].icon)
			v.time = dateGen(v.dt*1000,1)
		}
		//r.data.icon = iconGen(r.data.weather[0].icon)
		//r.data.time = moment(r.data.dt*1000).format('YYYY-MM-DD HH:mm')
		return r.data
	}
	catch(err){
		console.log(err)
		return {code:500, error: err}
	}
}

const axCity = async () => {
	try {
		const r = await axios.get(CITY_PATH);
		return r.data.cities;
	}
	catch(err){
		console.log(err);
		return {code:500, error: err}; 
	}
}

const getLocation = () => {
	return new Promise((resolve,reject) => {
		navigator.geolocation.getCurrentPosition( (r) => {
			resolve({ error: null, lat: r.coords.latitude, lon: r.coords.longitude });
		}, (err) => {
			reject( { error:err, lat: null, lon: null});
		});
	})
}

export { axCity, axWeekly, axDaily, getLocation }