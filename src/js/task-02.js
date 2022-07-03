// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listIngredients = document.querySelector("#ingredients");

// 1 вариант

// let ulEl = document.querySelector("ul");
// const markup = ingredients
//   .map((ingredients) => `<li class="item">${ingredients}</li>`)
//   .join("");
// console.log(markup);
// ulEl.innerHTML = markup;

// 2 вариант

const createItems = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = `${ingredient}`;
  return itemEl;
});
listIngredients.append(...createItems);

//
