const items = document.querySelectorAll(".item");

items.forEach(function (item) {
  console.log(`Категория: ${item.firstElementChild.textContent}`);
  let ulList = item.children[1],
    ulListChildrens = ulList.children;
  console.log(`Количество элемнтов: ${ulListChildrens.length}`);
});
