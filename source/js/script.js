//Сдвиг экрана header
const displayScale = document.documentElement;
const displayScaleHeight = displayScale.clientHeight;

const arrowButton = document.querySelector('.header__button');

arrowButton.addEventListener("click", function (event) {
	window.scrollTo({
		top: displayScaleHeight,
		left: 0,
		behavior: "smooth"
	});
});

//Скрытие групп товаров чекбоксами
const menuItem1 = document.querySelector('.one');
const checkBox1 = menuItem1.children;
const checkBoxChecked1 = checkBox1[0];
const checkBoxEmpty1 = checkBox1[1];
const container1 = document.querySelector('.men__container1');

checkBoxChecked1.addEventListener("click", function (event) {
	checkBoxChecked1.classList.toggle('hidden');
	checkBoxEmpty1.classList.toggle('hidden');
	container1.classList.toggle('hidden');
});

checkBoxEmpty1.addEventListener("click", function (event) {
	checkBoxChecked1.classList.toggle('hidden');
	checkBoxEmpty1.classList.toggle('hidden');
	container1.classList.toggle('hidden');	
});

const menuItem2 = document.querySelector('.two');
const checkBox2 = menuItem2.children;
const checkBoxChecked2 = checkBox2[0];
const checkBoxEmpty2 = checkBox2[1];
const container2 = document.querySelector('.men__container2');

checkBoxChecked2.addEventListener("click", function (event) {
	checkBoxChecked2.classList.toggle('hidden');
	checkBoxEmpty2.classList.toggle('hidden');
	container2.classList.toggle('hidden');
});

checkBoxEmpty2.addEventListener("click", function (event) {
	checkBoxChecked2.classList.toggle('hidden');
	checkBoxEmpty2.classList.toggle('hidden');
	container2.classList.toggle('hidden');	
});

//Показ групп товаров кнопкой
const button = document.querySelector('.form__button');

button.addEventListener("click", function (event) {
	if (checkBoxChecked1.classList.contains('hidden')) {
		checkBoxChecked1.classList.remove('hidden');
	};
	if (!checkBoxEmpty1.classList.contains('hidden')) {
		checkBoxEmpty1.classList.add('hidden');
	};
	if (container1.classList.contains('hidden')) {
		container1.classList.remove('hidden');
	};
	if (checkBoxChecked2.classList.contains('hidden')) {
		checkBoxChecked2.classList.remove('hidden');
	};
	if (!checkBoxEmpty2.classList.contains('hidden')) {
		checkBoxEmpty2.classList.add('hidden');
	};
	if (container2.classList.contains('hidden')) {
		container2.classList.remove('hidden');
	};
});
//Выбор цвета товара

const color1 = document.querySelector('.men__color1');
const color2 = document.querySelector('.men__color2');
const color3 = document.querySelector('.men__color3');

const color4 = document.querySelector('.men__color4');
const color5 = document.querySelector('.men__color5');

color1.addEventListener("click", function (event) {
	if (!color1.classList.contains('color-frame')) {
		color1.classList.add('color-frame');
	};
	if (color2.classList.contains('color-frame')) {
		color2.classList.remove('color-frame');
	};
	if (color3.classList.contains('color-frame')) {
		color3.classList.remove('color-frame');
	};		
});

color2.addEventListener("click", function (event) {
	if (!color2.classList.contains('color-frame')) {
		color2.classList.add('color-frame');
	};
	if (color3.classList.contains('color-frame')) {
		color3.classList.remove('color-frame');
	};
	if (color1.classList.contains('color-frame')) {
		color1.classList.remove('color-frame');
	};		
});

color3.addEventListener("click", function (event) {
	if (!color3.classList.contains('color-frame')) {
		color3.classList.add('color-frame');
	};
	if (color1.classList.contains('color-frame')) {
		color1.classList.remove('color-frame');
	};
	if (color2.classList.contains('color-frame')) {
		color2.classList.remove('color-frame');
	};		
});

color4.addEventListener("click", function (event) {
	if (!color4.classList.contains('color-frame')) {
		color4.classList.add('color-frame');
	};
	if (color5.classList.contains('color-frame')) {
		color5.classList.remove('color-frame');
	};
});

color5.addEventListener("click", function (event) {
	if (!color5.classList.contains('color-frame')) {
		color5.classList.add('color-frame');
	};
	if (color4.classList.contains('color-frame')) {
		color4.classList.remove('color-frame');
	};
});