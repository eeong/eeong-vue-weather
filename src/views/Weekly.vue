<template lang='pug'>
	weather-weekly(:result='GET_WEEKLY')
</template>

<script>
import CityList from '../components/CityList.vue'
import WeatherWeekly from '../components/weather/WeatherWeekly.vue'
import { mapGetters } from 'vuex'


export default {
	name: 'weekly',
	data(){
		return {
			info: null,
		}
	},
	created() {
		if(this.$route.params && this.$route.params.id) this.$store.dispatch('ACT_WEEKLY', this.$route.params.id)
		else if (this.$store.state.selectCity) this.$store.dispatch('ACT_WEEKLY', this.$store.state.selectCity)
	},
	components: {
		'weather-weekly' : WeatherWeekly,
		'city-list' : CityList
	},
	computed: {
		...mapGetters(['GET_WEEKLY', 'GET_SEL_CITY']),
	},
	watch: {
		GET_SEL_CITY: function(v) { 
			this.$store.dispatch('ACT_WEEKLY', v)
		}
	}
	
}

</script>

<style lang='scss' scoped>

</style>