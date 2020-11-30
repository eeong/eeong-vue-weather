export default {
	MUT_CITY(state, r) {
		state.cityLists = r;
	},
	MUT_SEL_CITY(state, r) {
		state.selectCity = r;
	},
	MUT_POSITION(state, r) {
		state.position = r;
	},
	MUT_DAILY(state, r) {
		state.daily = r;
	},
	MUT_WEEKLY(state, r) {
		state.weekly = r;
	},
}