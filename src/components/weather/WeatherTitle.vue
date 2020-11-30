<template lang='pug'>
	div.city-wrap
		h3.city {{city}} , {{country}}
		h5.time(v-show='time') {{time}} 기준
	
</template>

<script>
	export default {
		name: 'weather-title',
		props: ['city','country','time']
	}
</script>

<style lang='scss' scoped>
	@import "@/assets/css/variables.scss";

	.time {color: $midColor; font-size: 0.875em;}
</style>