<template lang='pug'>
	.home-wrapper
		.jumbotron
			h2.text-info Daily/Weekly Weather Infomation
				hr
				p.text-primary.float-right
					small vue.js를 활용한 날씨 정보 웹앱
						span.text-secondary.ml-3
		city-list
		weather-daily(:result='GET_DAILY')
</template>

<script>
import CityList from '../components/CityList.vue'
import WeatherDaily from '../components/weather/WeatherDaily.vue'
import { mapGetters } from 'vuex'

export default {
	name:'home',
	created() {
		this.$store.dispatch('ACT_POSITION')
	},
	components : {
	'city-list': CityList,
	'weather-daily' : WeatherDaily,
	},
	computed: {
		...mapGetters([ 'GET_POSITION', 'GET_DAILY'])
	},
	watch: {
	GET_POSITION: function(newValue) {
		this.$store.dispatch('ACT_DAILY', {lat: newValue.lat, lon: newValue.lon});
		},
	}
}
</script>

<style lang='scss' scoped>
	
</style>