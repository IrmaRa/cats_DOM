createCatUl = function() {
  var catUl = document.createElement('ul');
  catUl.classList.add('cat');
  return catUl;
}

createName = function(name) {
  var nameLi = document.createElement('li');
  nameLi.innerText = "Name: " + name;
  return nameLi;
}

createFood = function(food) {
  var foodLi = document.createElement('li');
  foodLi.innerText = "Favourite food: " + food;
  return foodLi;
}

createImg = function(imgUrl) {
  var img = document.createElement('li');
  img.innerHTML = "<img width='500' src=" + imgUrl + ">";
  return img;
}

appendElements = function(catList, catUl, name, food, img) {
  catUl.appendChild(name);
  catUl.appendChild(food);
  catUl.appendChild(img);
  catList.appendChild(catUl);
}

var addCat = function(name, food, imgUrl) {
  var catList = document.querySelector('#cats')
  var catUl = createCatUl();
  var name = createName(name);
  var food = createFood(food);
  var img = createImg(imgUrl);

  appendElements(catList, catUl, name, food, img);
}

var app = function() {
  addCat("Lola", "Salmon", "http://londonbeep.com/wp-content/uploads/2015/04/lazy-cat-tries-to-help-9.jpg");
  addCat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
  addCat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");
  addCat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");
}

// var app = function() {

//   var catUl = document.createElement('ul');
//   catUl.classList.add('cat');

  // var nameLi = document.createElement('li');
  // nameLi.innerText = "Name: Boba";

//   catUl.appendChild(nameLi);

//   var foodLi = document.createElement('li');
//   foodLi.innerText = "Favourite food: Sock fluff";

//   catUl.appendChild(foodLi);

//   var img = document.createElement('li');
//   img.innerHTML = "<img width='500' src='http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'>";

//   catUl.appendChild(img);

//   var catList = document.querySelector('#cats');

//   catList.appendChild(catUl);
// }

window.onload = app;
