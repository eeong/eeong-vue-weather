<template lang='pug'>
	div.weather-temp.p-3.text-center
		div.p-2.temp
			| 현재기온: 
			strong {{temp}}
			| ℃ / 체감온도: 
			strong {{feel}}
			| ℃
		div.ml-3.temp-detail 
			| 최저기온: 
			strong {{tempMin}}
			| ℃ / 최고기온: 
			strong {{tempMax}}
			| ℃
</template>

<script>
export default {
	name: 'weather-temp',
	props: ['temp', 'tempMin', 'tempMax', 'feel']
}
</script>

<style lang='scss' scoped>
	.temp {font-size: 1.625em;}
	.temp-detail { font-size: 1.25em;}
</style>