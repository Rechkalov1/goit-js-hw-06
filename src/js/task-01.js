// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента
//   (тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).

const categoriesAnimal = document.querySelectorAll(".item");
console.log(`Categories ${categoriesAnimal.length}`);
categoriesAnimal.forEach((elem) => {
  return console.log(`Category: ${elem.querySelector("h2").textContent}
    Elements:${elem.querySelectorAll("li").length}`);
});
