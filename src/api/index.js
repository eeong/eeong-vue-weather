import axios from 'axios'
import moment from 'moment'

const CITY_PATH = '/json/city.json'

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

export { axCity, getLocation }