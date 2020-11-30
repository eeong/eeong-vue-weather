<template lang="pug">
	.d-flex.justify-content-start.align-items-center
		weather-icon.weather-icon(:icon='icon')
		.desc-wrap
			weather-temp(:temp='temp' :tempMin='tempMin' :tempMax='tempMax' 	:feel='tempFeel')
			weather-desc(:main='main' :description='description')
			weather-wind(:deg='deg' :speed='speed')
</template>

<script>
import { mapGetters } from "vuex"

import WeatherIcon from './WeatherIcon.vue'
import WeatherTemp from './WeatherTemp.vue'
import WeatherDesc from './WeatherDesc.vue'
import WeatherWind from './WeatherWind.vue'


export default {
	name: 'WeatherWeeklyList',
	props: ['data'],
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
	},
	watch: {
		
	}

}
</script>

<style lang="scss" scoped>

</style>