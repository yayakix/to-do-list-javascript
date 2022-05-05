$("button").click(function () {
  let text = $("input").val();
  let liEl = document.createElement("li");
  liEl.innerHTML = `<i class="fa-solid fa-x fa-xs"></i>${text}`;
  document.querySelector(".ulist").appendChild(liEl);
  $("input").val("");
});

const list = document.querySelectorAll("ul");
list.forEach((x) =>
  x.addEventListener("click", function (event) {
    const element = event.target;
    let iTag = element.tagName.toLowerCase();
    if (iTag == "i") {
      element.parentNode.remove();
    }
  })
);

// $("li").click(function () {

//     // $(this).remove()

//     // $(this).parent().remove()
//     // $("li").eq(index).remove()
//     alert("test")
// });
