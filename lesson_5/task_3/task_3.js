// Сделать так, чтобы товары в каталоге выводились при помощи JS:
// 1. Создать массив товаров (сущность Product);
// 2. При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.

let catalog = document.getElementById("catalog");

let Product = {
	items: [
		{ id: 1, name: "Мышь", price: 4000, quantity: 12 },
		{ id: 2, name: "Клавиатура", price: 3200, quantity: 13 },
		{ id: 3, name: "Монитор", price: 6000, quantity: 5 },
	],
};

function renderCatalog() {
	Product.items.forEach((element) => {
		catalog.insertAdjacentHTML(
			"afterbegin",
			`
        <div id="${element.id}"> 
            <p>Название: ${element.name}</p>
            <p>Цена: ${element.price}</p>
            <p>Кол-во: ${element.quantity}</p>
        </div>
        `
		);
	});
}
renderCatalog();
