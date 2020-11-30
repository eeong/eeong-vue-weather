<template lang="pug">
	div.weather-weekly.text-center.d-flex.flex-column.justify-content-center
		weather-title(:city='city' :country='country' :time='time')
		ul.list-wrap.d-flex.flex-column.align-items-start.justify-content-start
			li.list(v-for='v in list')
				weather-weekly-list(:data='v')
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
			city:'', country:'', time: null,
			list:[],
		}
	},
	components: {
		'weather-title' : WeatherTitle,
		'weather-weekly-list' : WeatherWeeklyList
	},
	watch: {
		result: function(val) {
			this.city= val.name ? val.name : ""
			this.country = val.sys ? val.sys.country : ""
			this.list = val.list ? val.list : []
		}
	}

}
</script>

<style lang="scss" scoped>
	
	.list-wrap {
		overflow-y: auto;
		.list {border-bottom: 1px solid #ddd; padding: 0.5em;}
	}
</style>