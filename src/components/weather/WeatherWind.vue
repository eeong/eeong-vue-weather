<template lang='pug'>
	div.weather-wind.p-3.text-center
		span.mr-3
			| 풍속 : 
			strong.mr-3 {{speed}} m/s
			| 풍향 : 
			i.fa.fa-arrow-down.mr-1(:style="`transform: rotate(${-deg}deg)`")
</template>

<script>
export default {
	name: 'weather-temp',
	props: ['deg','speed']
}
</script>

<style lang='scss' scoped>
	.weather-wind {font-size: 1.25em;}
</style>
