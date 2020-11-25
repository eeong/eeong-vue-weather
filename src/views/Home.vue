<template lang='pug'>
	.home-wrapper
		.jumbotron
			h2.text-info Daily/Weekly Weather Infomation
				hr
				p.text-primary.float-right
					small vue.js를 활용한 날씨 정보 웹앱
						span.text-secondary.ml-3
		city-list
</template>

<script>
import CityList from '../components/CityList.vue'

export default {
	name:'home',
	components : {
		'city-list': CityList,
	}

}
</script>

<style lang='scss' scoped>
	
</style>