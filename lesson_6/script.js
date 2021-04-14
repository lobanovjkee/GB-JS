// 1. Доработать модуль корзины.
// a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
// b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
// 2 *У товара может быть несколько изображений. Нужно:
// a. Реализовать функционал показа полноразмерных картинок товара в модальном окне
// b. Реализовать функционал перехода между картинками внутри модального окна ("листалка")

const cart = {
	element: document.getElementById("cart"),
	clearCartBtn: null,
	items: [],
	
	countCartPrice() {
		return this.items.reduce(
			(totalPrice, cartItem) => totalPrice + cartItem,
			0
		);
	},
	renderCart() {
		if (this.items.length == 0) {
			this.element.insertAdjacentHTML(
				"beforeend",
				`<h2 class="cart-text">Корзина пуста</h2>`
			);
		} else {
			this.element.insertAdjacentHTML(
				"beforeend",
				`<h2 class="cart-text">В корзине ${
					this.items.length
				} товаров на сумму ${this.countCartPrice()}</h2>`
			);
		}
	},
	refreshCart() {
		this.element.removeChild(document.querySelector(".cart-text"));
	},
	clearCart() {
		this.items = [];
		this.refreshCart();
		this.renderCart();
	},
};

const catalog = {
	element: document.getElementById("catalog"),
	cart,
	products: [
		{ id: 1, name: "Мышь", price: 4000, quantity: 12 },
		{ id: 2, name: "Клавиатура", price: 3200, quantity: 13 },
		{ id: 3, name: "Монитор", price: 6000, quantity: 5 },
	],

	init() {
		this.renderCatalog();
		cart.renderCart();
		cart.clearCartBtn = document.querySelector(".cart-btn");
		cart.clearCartBtn.addEventListener("click", () => cart.clearCart());
		this.initEventHandlers();
	},
	renderCatalog() {
		this.products.forEach((item) => {
			this.element.insertAdjacentHTML(
				"beforeend",
				`<div class="product">
                <p>Название: ${item.name}</p>
                <p>Цена: ${item.price}</p>
                <button class="catalog-btn" id="${item.id}">В корзину</button>
            </div>`
			);
		});
		this.element.insertAdjacentHTML(
			"afterend",
			`<button class="cart-btn">Очистить корзину</button>`
		);
	},
	initEventHandlers() {
		let buttons = document.getElementsByClassName("catalog-btn");
		for (let button of buttons) {
			button.addEventListener("click", (event) => this.addToCart(event));
		}
	},
	addToCart(event) {
		cart.items.push(this.products[event.target.id - 1].price);
		cart.refreshCart();
		cart.renderCart();
	},
};

catalog.init();
