<template lang="pug">
	div.weather-weekly.text-center.d-flex.flex-column.justify-content-center
		city-list
		weather-title.py-3(:city='city' :country='country' :time='time')
		div.list-wrap.d-flex.flex-column.align-items-center.justify-content-start
			weather-weekly-list.list(v-for='v in list' :val='v')
</template>

<script>
import { mapGetters } from "vuex"

import CityList from '../CityList.vue'
import WeatherTitle from './WeatherTitle.vue'
import WeatherWeeklyList from './WeatherWeeklyList.vue'


export default {
	name: 'WeatherWeekly',
	props: ['result'],
	data() {
		return {
			city:'', country:'', time: null, index: 0,
			list:[],
		}
	},
	components: {
		'city-list' : CityList,
		'weather-title' : WeatherTitle,
		'weather-weekly-list' : WeatherWeeklyList
	},
	watch: {
		result: function(val) {
			this.city= val.city.name ? val.city.name : ""
			this.country = val.city ? val.city.country : ""
			this.list = val.list.length ? val.list : []
		}
	}

}
</script>

<style lang="scss" scoped>
	.city-wrapper {
		padding-top: 1em;
		width: 90%;
	}
	.list-wrap {
		width: 100%;
		height: calc( 100vh - 186px );
		overflow-y: auto;
		
		.list {
			width: 70%;
			margin: 0.5em 0;
			border-bottom: 1px solid #ddd; padding: 0.5em;
			border-radius: 0.5em;
			background:rgba(255,255,255,0.2) ;
			
		}
	}
	#dropdown-offset.btn-group {
		margin: 0;
	}
</style>