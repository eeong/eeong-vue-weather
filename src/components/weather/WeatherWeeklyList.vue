<template lang="pug">
	.d-flex.justify-content-center.align-items-center
		weather-icon.weather-icon(:icon='val.icon')
		.desc-wrap.d-flex.flex-column.align-items-end.justify-content-end
			weather-temp.weather-temp(:temp='val.main.temp' :tempMin='val.main.temp_min' :tempMax='val.main.temp_max' :feel='val.main.feels_like')
			weather-desc.weather-desc.text-primary(:main='val.weather[0].main' :description='val.weather[0].description')
			weather-time.weather-time(:time='val.time')
</template>

<script>
import { mapGetters } from "vuex"

import WeatherIcon from './WeatherIcon.vue'
import WeatherTemp from './WeatherTemp.vue'
import WeatherDesc from './WeatherDesc.vue'
import WeatherWind from './WeatherWind.vue'
import WeatherTime from './WeatherTime.vue'


export default {
	name: 'WeatherWeeklyList',
	props: ['val'],
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
	components: {
		'weather-icon': WeatherIcon,
		'weather-temp': WeatherTemp,
		'weather-desc' : WeatherDesc,
		'weather-wind' : WeatherWind,
		'weather-time' : WeatherTime
	},
	watch: {
		list: (v) => {
			console.log(v)
		}
	}

}
</script>

<style lang="scss" scoped>
	.weather-icon {margin-left: 1em;}
	@media screen and (max-width: 767px) {
		.weather-temp {font-size: 0.875em;}
		.weather-desc {font-size: 0.875em;}
	}
	@media screen and (max-width: 575px) {
		.weather-temp {font-size: 0.6em;}
		.weather-desc {font-size: 0.6em;}
		.weather-icon {margin-left: 0;}
	}
	
</style>