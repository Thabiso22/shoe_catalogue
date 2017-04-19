var size = document.getElementById("sizedrop");
var color = document.getElementById('colordrop');
var searchBtn = document.getElementById('button');
var display = document.getElementById('display');


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
        colour: shoes
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



var Template4 = document.getElementById('handlebarsTemp4');
var Instance4 = Handlebars.compile(Template4.innerHTML);
var filter4 = document.getElementById("filter4");
var brandOut = document.querySelector(".brandOut");

(function() {
    var brandDrop = Instance4({
        Brand: shoes
    });
    brandOut.innerHTML = brandDrop;
})()


var addButt = document.getElementById("addButt");
addButt.addEventListener("click", function() {
    var boxColour = document.getElementById("boxColour");
    var boxSize = document.getElementById('boxSize');
    var boxBrand = document.getElementById("boxBrand");


    var colourValue = boxColour.value;
    var sizeValue = boxSize.value;
    var brandValue=boxBrand.value;


    var stockAdded = {

        colour: boxColour.value,

        size: boxSize.value,

        brand:boxBrand.value

    };
    shoes.push(stockAdded);

    var result = Instance1({
        stock: shoes
    });
    display.innerHTML = result;


    (function() {
        var colorDrop = Instance2({
            colour: shoes
        });
        colourOut.innerHTML = colorDrop;

    })(),


    (function() {
        var sizedrop = Instance3({
            sizes: shoes
        });
        sizeOut.innerHTML = sizedrop;
    })(),


    (function() {
        var brandDrop = Instance4({
            Brand: shoes
        });
        brandOut.innerHTML = brandDrop;
    })()

    document.getElementById("boxColour").value=""
    document.getElementById('boxSize').value=""
   document.getElementById("boxBrand").value=""


});
