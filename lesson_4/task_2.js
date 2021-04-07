// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

let basket = [
	{ id: 1, name: "Яблоки", price: 40, quantity: 3 },
	{ id: 2, name: "Малина", price: 32, quantity: 8 },
	{ id: 3, name: "Молоко", price: 60, quantity: 2 },
];

function countBasketPrice(array) {
	let summ = 0;
	array.forEach((element) => {
		summ += element.price * element.quantity;
	});
	return summ;
}

console.log(countBasketPrice(basket));
