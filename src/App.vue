<template lang="pug">
	#app.container.d-flex.flex-column.justify-content-between 
		nav-bar
		router-view.wrapper
		footer-bar
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
	
	name: 'app',
	components: {
		'nav-bar': NavBar,
		'footer-bar' : Footer,
	},
}
</script>

<style lang="scss">
	@import "./assets/css/normalize";
	@import "./assets/css/variables";
	html,body {
		background: url("./assets/img/weather.jpg") no-repeat;
		background-size: cover;
	}
	#app {
		height: 100vh;
		border-left: 2px solid $lightColor;
		overflow: hidden; 
		border-right: 2px solid $lightColor; 
		padding: 0 !important; 
		backdrop-filter: blur(4px);
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		.wrapper { 
			flex-grow: 1;
		}
	}

	
</style>
