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

body.addEventListener("click", function () {
  console.log("body clicked");
},true);

parent.addEventListener("click", function () {
  console.log("parent clicked");
},true);

child.addEventListener("click", function () {
  console.log("child clicked");
},true);
