const categoryList = document.getElementById('categories');
const categoryItems = categoryList.querySelectorAll('li.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(item => {
  const heading = item.querySelector('h2').textContent;
  const subItems = item.querySelectorAll('li').length;
  console.log(`Category: ${heading}`);
  console.log(`Elements: ${subItems}`);
});
