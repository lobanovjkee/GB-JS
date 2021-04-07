// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.
//  Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
// Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

let num = 622;

function numberToObject(number) {
	if (number > 999) {
		console.log("Введите число от 0 до 999");
		let obj = {};
		return obj;
	}
	let hundreds = parseInt(number / 100);
	let foo = number % 100;
	let dozens = parseInt(foo / 10);
	let ones = foo % 10;

	let obj = {
		единицы: ones,
		десятки: dozens,
		сотни: hundreds,
	};
	return obj;
}

console.log(numberToObject(num));
