const books = [
  {
    author: "Люсі Фолі",
    name: "Список запрошених",
    price: 70,
  },
  {
    author: "Сюзанна Кларк",
    name: "Джонатан Стрейндж і м-р Норрелл",
  },
  {
    name: "Дизайн. Книга для недизайнерів.",
    price: 70,
  },
  {
    author: "Алан Мур",
    name: "Неономікон",
    price: 70,
  },
  {
    author: "Террі Пратчетт",
    name: "Рухомі картинки",
    price: 40,
  },
  {
    author: "Анґус Гайленд",
    name: "Коти в мистецтві",
  },
];

const ul = document.createElement("ul");
root.append(ul);

books.forEach((book) => {
  try {
    if (!book.author) {
      throw "Відсутнє поле Автор";
    } else if (!book.name) {
      throw "Відсутнє поле Назва";
    } else if (!book.price) {
      throw "Відсутнє поле Ціна";
    }
    const li = document.createElement("li");
    li.innerHTML = `Автор: ${book.author}, назва: ${book.name}, ціна: ${book.price}`;
    ul.append(li);
  } catch (error) {
    console.log(error);
  }
});
