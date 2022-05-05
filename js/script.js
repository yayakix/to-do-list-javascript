$("button").click(function () {
  let text = $("input").val();
  let liEl = document.createElement("li");
  liEl.innerHTML = `<i class="fa-solid fa-x fa-xs"></i>${text}`;
  document.querySelector(".ulist").appendChild(liEl);
  $("input").val("");
});

const list = document.querySelectorAll("ul");
$("ul").on("click", function (event) {
  // console.log(this)
  if (event.target.tagName === "I") {
    event.target.parentNode.remove();
  }
});
