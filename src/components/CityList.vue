<template lang='pug'>
	.city-wrapper
		select.form-control(v-model='selectCity' @:change='onCityChange')
			option(value='' selected) 날씨정보를 확인할 도시를 선택하세요.
			option(v-for='v in GET_CITY' :key='v.id' :value='v.id' ) {{v.name}}
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
	name: 'cityLists',
	data() {
		return {
			selectCity:'',
		}
	},
	created() {
		this.$store.dispatch('ACT_CITY');
		this.$store.dispatch('ACT_POSITION');
	},
	methods: {
		onCityChange(e){
			this.$store.dispatch('ACT_DAILY', this.selectCity);
			this.$store.dispatch('ACT_WEEKLY', this.selectCity);
		}
	},
	computed: {
		...mapGetters(['GET_CITY', 'GET_DAILY','GET_WEEKLY', 'GET_POSITION'])
	},
	watch: {
		GET_POSITION(newValue, oldValue) {
			alert(`lat:${newValue.lat},lon:${newValue.lon}`)
		}
	}
}
</script>

<style lang='scss' scoped>
@import "../assets/css/variables";

.city-wrapper{
width: 80%; margin: auto;
}
</style>