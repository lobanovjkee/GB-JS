// 1. Для практикума из занятия 7 продумать, где можно применить замыкания.
// Нет идей, так как в змейке всё довольно гармонично сделано(по моему мнению). Хотелось бы узнать ваше мнение.
// 2. Не выполняя кода, ответить, что выведет браузер и почему:
if (!("a" in window)) {
	var a = 1;
}
alert(a);
// undefined
var b = function a(x) {
	x && a(--x);
};
alert(a);
// ошибка a is not defined, имя функции не видно вне тела, самой функции
function a(x) {
	return x * 2;
}
var a;
alert(a);
//  Код функции, из-за всплытия var

function b(x, y, a) {
	arguments[2] = 10;
	alert(a);
}
b(1, 2, 3);
// 10, потому что, arguments - это подобный массиву объект, который содержит аргументы, переданные в функцию.
function a() {
	alert(this);
}
a.call(null);
// Object window, если использовать с "use strict", то null