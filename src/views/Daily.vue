<template lang='pug'>
	.home-wrapper
		.jumbotron
			h2.text-info Daily Weather 
				hr
				p.text-primary.float-right
					small vue.js를 활용한 날씨 정보 웹앱
						span.text-secondary.ml-3
		city-list
		weather-daily.d-felx.align-items-center.justify-content-center(:result='GET_DAILY')

</template>

<script>
import CityList from '../components/CityList.vue'
import WeatherDaily from '../components/weather/WeatherDaily.vue'
import { mapGetters } from 'vuex'


export default {
	name: 'daily',
	
	data(){
		return {
			info: null,
		}
	},
	created() {
		this.$store.dispatch('ACT_DAILY', this.$store.state.selectCity)
	},
	components: {
		'weather-daily' : WeatherDaily,
		'city-list' : CityList
	},
	computed: {
		...mapGetters(['GET_DAILY', 'GET_SEL_CITY']),
		
	},
	watch: {
		GET_SEL_CITY: function(v) { 
			
			this.$store.dispatch('ACT_DAILY', v)
		}
	}
	
}


</script>

<style lang='scss' scoped>

</style>