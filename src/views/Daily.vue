<template lang='pug'>
	.home-wrapper
		.jumbotron
			h2.text-info Daily/Weekly Weather Infomation
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
			selectCity: '',
		}
	},
	beforeMount(){
		this.selectCity = this.$route.params.id

	},
	created() {
		this.selectCity = this.$route.params.id
		this.$store.dispatch('ACT_DAILY', this.selectCity)
	},
	components: {
		'weather-daily' : WeatherDaily,
		'city-list' : CityList
	},
	computed: {
		...mapGetters(['GET_DAILY']),

	},
}
</script>

<style lang='scss' scoped>

</style>