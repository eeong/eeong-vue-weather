import moment from 'moment'

const ICON_URL = 'https://openweathermap.org/img/wn/';

const iconGen = (icon) => {

	return ICON_URL + icon + '@2x.png'

}

const dateGen = (dt, mode=1) => {
	let format;
	switch (mode) {
		case 1:
		case 'iso':
			format = 'YYYY-MM-DD HH:mm:ss '
			break;
		case 2:
			format = 'YYYY-MM-DD HH:mm '
			break;
		case 3:
			format = 'MM-DD HH:mm '
			break;
			
	}
	return moment(dt).format(format)
}

export { iconGen, dateGen }