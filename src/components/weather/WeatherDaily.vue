<template lang='pug'>
	div.weather-daily.text-center.d-flex.flex-column.justify-content-center
		weather-title(:city='city' :country='country' :time='time')
		weather-icon.weather-icon(:icon='icon')
		weather-temp(:temp='temp' :tempMin='tempMin' :tempMax='tempMax' :feel='tempFeel')
		weather-desc(:main='main' :description='description')
		weather-wind(:deg='deg' :speed='speed')
</template>

<script>
import { mapGetters } from "vuex"

import WeatherIcon from './WeatherIcon.vue'
import WeatherTemp from './WeatherTemp.vue'
import WeatherDesc from './WeatherDesc.vue'
import WeatherWind from './WeatherWind.vue'
import WeatherTitle from './WeatherTitle.vue'

export default {
	name: 'weather-daily',
	props: ['result'],
	data() {
		return {
			icon: '', 
			temp: '', 
			tempMax: '', 
			tempMin: '', 
			tempFeel: '', 
			main: '', 
			description: '', 
			deg:'',
			speed:'',
			city:'',
			country:'',
			time: '',
		}
	},
	watch:{
		result: function(val){
			this.icon= val.icon || ""
			this.temp= val.main ? val.main.temp : ""
			this.tempMax= val.main ? val.main.temp_max : ""
			this.tempMin= val.main ? val.main.temp_min : ""
			this.tempFeel= val.main ? val.main.feels_like : ""
			this.main= val.weather ? val.weather[0].main : ""
			this.description= val.weather ? val.weather[0].description : ""
			this.deg= val.wind ? val.wind.deg : ""
			this.speed= val.wind ? val.wind.speed : ""
			this.city= val.name ? val.name : ""
			this.country = val.sys ? val.sys.country : ""
			this.time = val.time ? val.time : ""
		},
	},
	components: {
		'weather-title' : WeatherTitle,
		'weather-icon': WeatherIcon,
		'weather-temp': WeatherTemp,
		'weather-desc' : WeatherDesc,
		'weather-wind' : WeatherWind,
	},
	
}
</script>

<style lang='scss' scoped>
	@import '@/assets/css/variables';

	.weather-daily { max-width: 500px; width: 96%; margin: 3em auto 0 auto;	}
	.weather-icon {max-width: 300px; margin:auto;}
	.time {color: $midColor; font-size: 0.875em;}
</style>