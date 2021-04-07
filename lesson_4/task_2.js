// 2.Продолжить работу с интернет-магазином:
// 2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// 2.2. Реализуйте такие объекты.
// 2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.

let cart = {
	items: [
		{ id: 1, name: "Яблоки", price: 40, quantity: 3 },
		{ id: 2, name: "Малина", price: 32, quantity: 8 },
		{ id: 3, name: "Молоко", price: 60, quantity: 2 },
	],
	countCartPrice() {
		return this.items.reduce(
			(totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity,
			0
		);
	},
};

console.log(cart.countCartPrice());
