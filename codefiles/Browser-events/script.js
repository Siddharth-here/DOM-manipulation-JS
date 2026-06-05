const btn = document.getElementById("btn");

//override
// btn.onclick = function () {
//   console.log("hello world");
// };

// btn.onclick = function () {
//   console.log("hello world -2");
// };

//best approch - addEventlistener

// btn.addEventListener("click", function () {
//   console.log("clicked");
// });

// //cant be overide
// btn.addEventListener("click", function () {
//   console.log("clicked -1");
// });

// btn.addEventListener("click", function () {
//   console.log("clicked -2");
// });

const parent = document.getElementById("parent");

const child = document.getElementById("child");

const body = document.body;

// body.addEventListener("click", function () {
//   console.log("body clicked");
// },false);

// parent.addEventListener("click", function () {
//   console.log("parent clicked");
// },true);

child.addEventListener("click", (event) => {
  console.log(event);
});

// body.addEventListener("click", function () {
//   console.log("body clicked");
// },false);

const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item.textContent);
  });
});
