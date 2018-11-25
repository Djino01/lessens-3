window.addEventListener('DOMContentLoaded', function() {
	// Получаем информацию для работы
	let products = document.querySelectorAll('.product'),
		buttons = document.getElementsByTagName("button");
		
	// Функция для создания корзины
	function createCart() {
		// Создаём элемент для нашей корзины
		let cart = document.createElement("div"),
			field = document.createElement('div'),
			heding = document.createElement('h2'),
			close = document.createElement("button");

		// Добавили классы к элементам
		cart.classList.add("cart");
		field.classList.add("cart-field");
		close.classList.add("close");

		// Добавили текст к элементам
		heding.textContent = "В нашей корзине:";
		close.textContent = "Закрыть!";

		// Добавили элементы на страницу
		document.body.appendChild(cart);
		cart.appendChild(heding);
		cart.appendChild(field);
		cart.appendChild(close);
	}

	createCart();

	let field = document.querySelector(".cart-field"),
		cart = document.querySelector(".cart"),
		open = document.querySelector(".open"),
		close = document.querySelector(".close");

	for (let i = 0; i < buttons.length; i++) {
		// Вешаем обработчик события клика, на каждую из кнопок
		buttons[i].addEventListener('click', function() {
			// Создали копию карточки с товаром
			let item = products[i].cloneNode(true),
				btn = item.querySelector('button');

			btn.remove()
			field.appendChild(item);
			products[i].remove();
		})
	}

	function openCart() {
		cart.style.display = "block"
	};
	function closeCart() {
		cart.style.display = "none"
	};

	open.addEventListener('click', openCart);
	close.addEventListener('click', closeCart);

});