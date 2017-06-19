createCatUl = function() {
  var catUl = document.createElement('ul');
  catUl.classList.add('cat');
  return catUl;
}

createName = function(name) {
  var nameLi = document.createElement('li');
  nameLi.innerText = name;
  return nameLi;
}

createFood = function(food) {
  var foodLi = document.createElement('li');
  foodLi.innerText = food;
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
  addCat("Name: Lola", "Favourite food: Salmon", "http://londonbeep.com/wp-content/uploads/2015/04/lazy-cat-tries-to-help-9.jpg")
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










// 2. Refactor the code to make it easy to add a new cat, just like we did with the quotes.
// 3. EXTENSION: Remove the cat data in the HTML and add them via your javascript. If you want to be fancy, put the cat data into an array.
// 4. EXTENSION: Style the site!