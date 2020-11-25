<template lang="pug">
	#app.container.d-flex.flex-column 
		nav-bar
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
	}
}
</script>

<style lang="scss">
	$lightColor: #f0f1f4;
	html,body,div,p,ul,li,h1,h2,h3,h4,h5 {
		margin: 0; padding: 0; list-style: none;
	}
	#app {height: 100vh; border-left: 2px solid	$lightColor; border-right: 2px solid $lightColor; padding: 0 !important;}

</style>
