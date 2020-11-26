<template lang='pug'>
	div.weather-desc.pb-2.text-center
		div.desc.text-primary {{ main }} / {{ description }}
</template>

<script>
export default {
	name : 'weather-desc',
	props: ['main', 'description']
}
</script>

<style lang='scss' scoped>
	.desc {font-size: 1.5em;}
</style>