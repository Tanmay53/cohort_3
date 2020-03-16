function Card() {}

Card.prototype.render = (item, deleteData) => {
  //  article
  const article = document.createElement("article");
  article.classList.add("article");
  const div1 = document.createElement("div");
  div1.classList.add("image-header");
  const img = document.createElement("img");
  img.src = "https://source.unsplash.com/random";
  img.alt = "article-image";
  const deleteDiv = document.createElement("div");
  deleteDiv.classList.add("delete");
  const button = document.createElement("button");
  button.id = "delete-btn";
  button.addEventListener("click", e => deleteData(e));
  button.appendChild(document.createTextNode("Delete Post"));

  deleteDiv.appendChild(button);
  div1.appendChild(img);
  div1.appendChild(deleteDiv);

  article.appendChild(div1);
  const secondDiv = document.createElement("div");
  const head = document.createElement("div");
  head.classList.add("head");
  const span1 = document.createElement("span");
  span1.appendChild(document.createTextNode("NEWS"));
  const span2 = document.createElement("span");
  span2.appendChild(document.createTextNode("by "));
  const span3 = document.createElement("span");
  span3.classList.add("author");
  span3.appendChild(document.createTextNode(item.by));
  span2.appendChild(span3);
  head.appendChild(span1);
  head.appendChild(span2);
  secondDiv.appendChild(head); // Add It to article
  const body = document.createElement("div");
  body.classList.add("body");
  const parabody = document.createElement("p");
  parabody.appendChild(document.createTextNode(item.body));
  body.appendChild(parabody);
  secondDiv.appendChild(body);

  const footer = document.createElement("div");
  footer.classList.add("footer");
  const span4 = document.createElement("span");
  span4.appendChild(document.createTextNode(item.date));
  const span5 = document.createElement("span");
  const i = document.createElement("i");
  i.classList.add("fas");
  i.classList.add("fa-comment-dots");
  span5.appendChild(i);
  span5.appendChild(document.createTextNode(item.comment));
  footer.appendChild(span4);
  footer.appendChild(span5);
  secondDiv.appendChild(footer);
  article.appendChild(secondDiv);

  return article;
};
