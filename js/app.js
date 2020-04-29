var one = document.getElementById("one");
var plus = document.getElementById("plus");
var two = document.getElementById("two");
var screen = document.getElementById("screen");
var equal = document.getElementById("equal")

one.addEventListener('click',function(){
    screen.innerHTML = "1";
})

plus.addEventListener('click',function(){
    plus.classList.add("bg-color-red");
    screen.innerHTML += "+";

})

two.addEventListener('click',function(){
    plus.classList.remove("bg-color-red");
    screen.innerHTML += "2";
})

equal.addEventListener('click',function(){
    var result = 1 + 2;
    screen.innerHTML = result;
});

