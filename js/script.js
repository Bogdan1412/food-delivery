import tabs from './modules/tabs';
import calc from './modules/calc';
import forms from './modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';
import cards from './modules/cards';
import { openModal } from './modules/modal'

document.addEventListener('DOMContentLoaded', () => {
	const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 5000)

	tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active')
	calc()
	forms('form', modalTimerId)
	modal('[data-modal]', '.modal', modalTimerId)
	slider({
		container: '.offer__slider',
		slide: '.offer__slide',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		currentCounter: '#current',
		totalCounter: '#total',
		field: '.offer__slider-inner',
		wrapper: '.offer__slider-wrapper'
	})
	timer('.timer', '2025-12-14')
	cards()
	
})

