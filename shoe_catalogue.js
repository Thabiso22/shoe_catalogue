var size=document.getElementById("sizedrop");
var color=document.getElementById('colordrop');
var searchBtn=document.getElementById('button');
var display=document.getElementById('display');


// var test1 = size.childNodes[3];
// var test2 = size.childNodes[5];
// var test3 = size.childNodes[7];
var Template1= document.getElementById("handlebarsTemp1");
var Instance1 = Handlebars.compile(Template1.innerHTML);


var shoes = [
        {
            brand: 'Adidas',
            color:"Black",
            price : "R350",
            in_stock : 5
        },
        {
             brand: 'Supremebeing',
            color:"White",
            price : "R150",
            in_stock : 3
        },

        {
             brand: 'DKNY',
            color:"Brown",
            price : "R280",
            in_stock : 11
        },

        {
             brand: 'Fila',
            color:"Red",
            price : "R750",
            in_stock : "no Stock",
        },
         {
             brand: 'Sebago',
            color:"Red",
            price : "R550",
            in_stock : "23",
        },
];

searchBtn.addEventListener("click",function(){

var result = Instance1({stock:shoes});
display.innerHTML= result;

});

var Template2= document.getElementById("handlebarsTemp2");
var Instance2 = Handlebars.compile(Template2.innerHTML);
var filter = document.getElementById('filter');
var viewColor= document.getElementById('viewColor');

var colours = [
    {  "Name1": "Red" },
    {  "Name2": "Yellow" },
    {  "Name3": "Blue"}
  ];

filter.addEventListener("click",function () {
var colorDrop= Instance2({colors:colours});
viewColor.innerHTML=colorDrop;

})
