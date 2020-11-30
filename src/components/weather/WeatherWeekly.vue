<template lang="pug">
	div.weather-weekly.text-center.d-flex.flex-column.justify-content-center
		weather-title.py-3(:city='city' :country='country' :time='time')
		div.list-wrap.d-flex.flex-column.align-items-center.justify-content-start
			weather-weekly-list.list(v-for='v in list' :val='v')
</template>

<script>
import { mapGetters } from "vuex"

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
	
	.list-wrap {
		width: 100%;
		height: calc( 100vh - 186px );
		overflow-y: auto;
		.list {border-bottom: 1px solid #ddd; padding: 0.5em;}
	}
</style>