<template lang='pug'>
	.city-wrapper.text-right
		//b-dropdown#dropdown-offset.m-md-2(text='날씨를 확인할 도시를 선택하세요' variant='primary' @:change='onCityChange'  right)
		//b-dropdown-item.w-100(v-for='v in GET_CITY' :key='v.id' :value='v.id' @click='onCityChange(v.id)') {{v.name}}
		div.form-inline.text-center
			select.form-control(v-model='selectCity' @change='onCityChange')
				option(value='' selected) 날씨를 확인할 도시를 선택하세요
				option(v-for='v in GET_CITY' :key='v.id' :value='v.id') {{v.name}}
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
		onCityChange(){
			this.$store.dispatch('ACT_DAILY', this.selectCity);
			this.$store.dispatch('ACT_WEEKLY', this.selectCity);
		}
	},
	computed: {
		...mapGetters(['GET_CITY', 'GET_DAILY','GET_WEEKLY', 'GET_POSITION'])
	},
	watch: {
		GET_POSITION: function(newValue) {
			this.$store.dispatch('ACT_DAILY', {lat: newValue.lat, lon: newValue.lon});
		},
		GET_WEEKLY: function() {
			this.$router.push('/daily')
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