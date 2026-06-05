const btn = document.getElementById("btn");

//override
// btn.onclick = function () {
//   console.log("hello world");
// };

// btn.onclick = function () {
//   console.log("hello world -2");
// };

//best approch - addEventlistener
btn.addEventListener("click", function () {
  console.log("clicked");
});

//cant be overide
btn.addEventListener("click", function () {
  console.log("clicked -1");
});

btn.addEventListener("click", function () {
  console.log("clicked -2");
});

