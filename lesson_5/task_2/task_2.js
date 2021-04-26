//  Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 1. Пустая корзина должна выводить строку «Корзина пуста»;
// 2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

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
	getQuantity() {
		return this.items.reduce(
			(totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
			0
		);
	},
};

let div = document.getElementById("cart");

function renderCart() {
	if (cart.getQuantity() == 0) {
		div.insertAdjacentHTML("afterbegin", `<h2>Корзина пуста!</h2>`);
	}
	div.insertAdjacentHTML(
		"afterbegin",
		`<h2> В корзине ${cart.getQuantity()} товаров на ${cart.countCartPrice()} рублей.`
	);
}

renderCart();
