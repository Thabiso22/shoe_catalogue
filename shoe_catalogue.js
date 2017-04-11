var size = document.getElementById("sizedrop");
var color = document.getElementById('colordrop');
var searchBtn = document.getElementById('button');
var display = document.getElementById('display');


// var test1 = size.childNodes[3];
// var test2 = size.childNodes[5];
// var test3 = size.childNodes[7];
var Template1 = document.getElementById("handlebarsTemp1");
var Instance1 = Handlebars.compile(Template1.innerHTML);


var shoes = [{
        brand: 'Adidas',
        colour: "Black",
        price: "R350",
        size: "6",
        in_stock: 5
    },
    {
        brand: 'Supremebeing',
        colour: "White",
        price: "R150",
        size: "8",
        in_stock: 3
    },

    {
        brand: 'DKNY',
        colour: "Brown",
        price: "R280",
        size: 10,
        in_stock: 11
    },

    {
        brand: 'Fila',
        colour: "Pink",
        price: "R750",
        size: "7",
        in_stock: "no Stock"
    },
    {
        brand: 'Sebago',
        colour: "Red",
        price: "R550",
        size: "3",
        in_stock: "23"
    },
];

searchBtn.addEventListener("click", function() {

    var result = Instance1({
        stock: shoes
    });
    display.innerHTML = result;

});

var Template2 = document.getElementById("handlebarsTemp2");
var Instance2 = Handlebars.compile(Template2.innerHTML);
var filter1 = document.getElementById('filter1');
//var viewColor= document.getElementById('viewColor');
var colourOut = document.querySelector(".colourOut");


(function() {
    var colorDrop = Instance2({
        colors: shoes
    });
    colourOut.innerHTML = colorDrop;

})()
var Template3 = document.getElementById('handlebarsTemp3');
var Instance3 = Handlebars.compile(Template3.innerHTML);
var filter2 = document.getElementById("filter2");
var sizeOut = document.querySelector(".sizeOut");

(function() {
    var sizedrop = Instance3({
        sizes: shoes
    });
    sizeOut.innerHTML = sizedrop;
})()
