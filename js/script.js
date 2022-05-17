// for (var i = 0; i < localStorage.length; i++) {
//   $("ul").append(localStorage.getItem(localStorage.key(i)));
// }
let arr = []


$("button").click(function () {
  let ulEl = $("ul");
  let text = $("input").val();

  let liEl = document.createElement("li");
  liEl.innerHTML = `<i class="fa-solid fa-x fa-xs"></i>${text}`;
  arr.push(liEl.textContent)
  localStorage.setItem("listitems", arr);
  // liEl.innerHTML = localStorage.getItem("text")
  // localStorage.setItem(liEl, JSON.stringify(liEl));
  // localStorage.getItem(liEl); 
  // // ? JSON.parse(localStorage.getItem(liEl)) : "";
  // console.log(localStorage);

  document.querySelector(".ulist").appendChild(liEl);

  $("input").val("");
  console.log(localStorage.getItem("listitems"));
});

const list = document.querySelectorAll("ul");
$("ul").on("click", function (event) {
  // console.log(this)
  if (event.target.tagName === "I") {
    event.target.parentNode.remove();
  }
});
