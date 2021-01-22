<template lang='pug'>
	.city-wrapper.text-right
		b-dropdown#dropdown-offset.m-md-2(text='날씨를 확인할 도시를 선택하세요' variant='primary' @:change='onCityChange' right)
			b-dropdown-item.w-100(v-for='v in GET_CITY' :key='v.id' :value='v.id' @click='onCityChange(v.id || null)') {{v.name}}
		//-div.form-inline.text-center
			select.form-control.mx-auto(v-model='selectCity' @change='onCityChange')
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
		onCityChange(a){
			this.$store.dispatch('ACT_SEL_CITY', a)
			if(a && (this.$route.path=='/daily' || this.$route.path=='/')) this.$router.push('/daily').catch(()=>{});
			else if (a && this.$route.path=='/weekly') this.$router.push('/weekly').catch(()=>{});
			else this.$router.push('/');
		}
	},
	computed: {
		...mapGetters(['GET_CITY', 'GET_SEL_CITY'])
	},
}
</script>

<style lang='scss' scoped>
@import "../assets/css/variables";

.city-wrapper{
width: 80%; margin: auto;
}
</style>