// 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
//  Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
// 2*. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п.,

let board = document.getElementById("board");

let cells = [];
function initArrayForBoard() {
	let foo = [];

	for (let i = 0; i < 4; i++) {
		foo.push(0);
		foo.push(1);
	}

	let bar = [...foo];
	bar.reverse();

	for (let i = 0; i < 8; i++) {
		if (i % 2 == 0) {
			cells.push(foo);
		} else {
			cells.push(bar);
		}
	}
}

function renderBoard() {
	cells.forEach((rows) => {
		rows.forEach((cell) => {
			if (cell == 0) {
				board.insertAdjacentHTML(
					"afterbegin",
					`<div class="cell cell--dark"></div>`
				);
			} else {
				board.insertAdjacentHTML(
					"afterbegin",
					`<div class="cell cell--light"></div>`
				);
			}
		});
	});
}

let cell = document.getElementsByClassName("cell");
function boardDesignations() {
	let letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
	for (let i = 0; i < 8; i++) {
		cell[i].insertAdjacentHTML(
			"afterbegin",
			`<div class="number"><p class="number--text">${i + 1}</p> </div>`
		);
	}
	for (let i = 0; i < cell.length; i++) {
		if (i % 8 == 0) {
			cell[i].insertAdjacentHTML(
				"afterbegin",
				`<div class="letter"><p class="letter--text">${
					letters[i / 8]
				}</p></div>`
			);
		}
	}
}

function figureRender(i, figure) {
	return cell[i].insertAdjacentHTML(
		"afterbegin",
		`<div class="figure">${figure}</div>`
	);
}

function chessFigures() {
	let figures = {
		white_pawn: "&#9817;",
		white_rook: "&#9814;",
		white_horse: "&#9816;",
		white_bishop: "&#9815;",
		white_queen: "&#9813;",
		white_king: "&#9812;",
		black_pawn: "&#9823;",
		black_rook: "&#9820;",
		black_horse: "&#9822;",
		black_bishop: "&#9821;",
		black_queen: "&#9819;",
		black_king: "&#9818;",
	};
	for (let i = 0; i < cell.length; i++) {
		if (i == 1 || (i % 8 == 1 && i != 0)) {
			figureRender(i, figures.white_pawn);
		} else if (i == 0 || i == 8 * 7) {
			figureRender(i, figures.white_rook);
		} else if (i == 7 || i == cell.length - 1) {
			figureRender(i, figures.black_rook);
		} else if (i == 8 || i == 8 * 6) {
			figureRender(i, figures.white_horse);
		} else if (i == 15 || i == cell.length - 9) {
			figureRender(i, figures.black_horse);
		} else if (i == 16 || i == 8 * 5) {
			figureRender(i, figures.white_bishop);
		} else if (i == 23 || i == cell.length - 17) {
			figureRender(i, figures.black_bishop);
		} else if (i == 24) {
			figureRender(i, figures.white_queen);
		} else if (i == 31) {
			figureRender(i, figures.black_queen);
		} else if (i == 32) {
			figureRender(i, figures.white_king);
		} else if (i == 39) {
			figureRender(i, figures.black_king);
		}
	}
	for (let i = 6; i < cell.length; i += 8) {
		figureRender(i, figures.black_pawn);
	}
}

initArrayForBoard();
renderBoard();
boardDesignations();
chessFigures();
console.log(cells);
