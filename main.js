let addButton = document.getElementById("btn1");
let removeButton = document.getElementById("btn2");
let counter = 0;

addButton.addEventListener("click", function(){
  counter += 1;
  document.getElementById("counter").innerHTML = counter;
});

removeButton.addEventListener("click", function(){
  counter -= 1;
  document.getElementById("counter").innerHTML = counter;
});

