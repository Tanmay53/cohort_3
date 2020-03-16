const defaultData = [
  {
    by: "Albert",
    body:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium deleniti vero aperiam",
    date: "25:09:2019",
    comment: 3
  },
  {
    by: "Amit Kumar",
    body:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium deleniti vero aperiam",
    date: "28:08:2019",
    comment: 3
  },
  {
    by: "Nrupul",
    body:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium deleniti vero aperiam",
    date: "10:11:2010",
    comment: 3
  }
];

// Global Variable
const card = new Card();
const button = document.getElementById("submit");

// Event Listener Called On DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  initDom();
  initListener();
});

function initDom() {
  let blogs = document.getElementById("blogs");

  defaultData.forEach(item => {
    let cardItem = card.render(item, deleteData);
    blogs.appendChild(cardItem);
  });
}

function initListener() {
  button.addEventListener("click", e => addData(e));
}

function addData(e) {
  e.preventDefault();
  let by = document.getElementById("blog-author").value;
  let body = document.getElementById("blog-body").value;
  let date = document.getElementById("blog-date").value;
  let comment = document.getElementById("blog-count").value;
  let blogs = document.getElementById("blogs");
  let blog = card.render({ by, date, comment, body }, deleteData);
  blogs.appendChild(blog);
}

function deleteData(e) {
  let element = e.target;
  let elementToRemove = element.parentElement.parentElement.parentElement;
  elementToRemove.remove();
}
