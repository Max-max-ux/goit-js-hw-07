const categ = document.querySelector("#categories");
const categItems = categ.querySelectorAll(".item");

console.log("Number of categories: ", categItems.length);

categItems.forEach((item) => {
   const title = item.querySelector("h2").textContent;
   console.log("Category: ", title); 

   const liCount = item.querySelectorAll(".t1-item-cat").length;
   console.log("Elements: ", liCount);
})
