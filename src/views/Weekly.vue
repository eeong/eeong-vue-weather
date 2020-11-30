<template lang='pug'>
	weather-weekly(:result='GET_WEEKLY')
</template>

<script>
import CityList from '../components/CityList.vue'
import WeatherWeekly from '../components/weather/WeatherWeekly.vue'
import { mapGetters } from 'vuex'


export default {
	name: 'weekly',

	created() {
		if(this.$route.params && this.$route.params.id) this.$store.dispatch('ACT_WEEKLY', this.$route.params.id)
		else if (this.$store.state.selectCity) this.$store.dispatch('ACT_WEEKLY', this.$store.state.selectCity)
	},
	components: {
		'weather-weekly' : WeatherWeekly,
		'city-list' : CityList
	},
	computed: {
		...mapGetters(['GET_WEEKLY']),
	},
	
}

</script>

<style lang='scss' scoped>

</style>