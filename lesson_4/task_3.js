// 3.* Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины, но и для каталога.
// Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.

let good = {
	id: Number,
	photo: String,
	name: String,
	additionalText: String, // бестселлер, хит и т.д.
	price: Number,
	info: {
		type: String, // тип продукта (электроника, продовольствие, бытовая химия ...)
		description: String,
		characteristics: {
			brand: String,
			countryOfOrigin: String,
			// и еще куча других характеристик, по типу  https://i.imgur.com/yLDfHjt.png или https://i.imgur.com/XUY7b3O.png
		},
	},
	sale: {
		isOnSale: Boolean,
		saleMultiplier: Number, // число от 0 до 1
	},
	isAvailable: Boolean, // есть ли на  складе, либо в продаже
	quantity: Number,
	renderCatalog() {
		// здесь отдает на отрисовку
		this.photo, this.name, this.additionalText, this.price, this.sale;
	},
	renderGoodPage() {
		// а здесь уже всю остальную информацию
	},
	// ну и так далее
};
