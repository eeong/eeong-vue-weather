<template lang='pug'>
	.header
		.d-flex.align-items-center.bg-dark.text-light
			.logo.p-3.mr-2
				i.fa.fa-sun
			router-link(to='/')
				.p-3.mr-3 Home
			router-link(to='/daily')
				.p-3.mr-3 Daily Weather
			router-link(to='/weekly')
				.p-3.mr-3 Weekly Weather
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
@import "../assets/css/variables";
a {
	&:link {color:$lightColor}
	&:visited {color:$lightColor}
	&:active {color:$lightColor}
	&:hover {color:$lightColor}
}
</style>