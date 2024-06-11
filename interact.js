//  Saba Kochadze
//  May 28, 2023
//  Lab 1 GUI Website

//Range Slider Update 6/11/2024


//  Range Values

function range_disp1(){

    window.range1 = document.getElementById("slider1").value; // value scan works

    window.paragrapgh = document.getElementById("range_value1");
    paragrapgh.textContent = "Value: " + range1;

}
function range_disp2(){

    window.range2 = document.getElementById("slider2").value; // value scan works

    window.paragrapgh = document.getElementById("range_value2");
    paragrapgh.textContent = "Value: " + range2;

}



function add ()
{

    document.getElementById("rad2").checked = false
    document.getElementById("rad3").checked = false
    document.getElementById("rad4").checked = false
    var input1 = parseInt(document.getElementById("input_1").value, 10);
    var input2 = parseInt(document.getElementById("input_2").value, 10);
    window.sum = input1 + input2;
//sliders
    var slider1 = parseInt(document.getElementById("slider1").value, 10);
    var slider2 = parseInt(document.getElementById("slider2").value, 10);
    window.slidersum = slider1 + slider2;


}
function sub ()
{
    document.getElementById("rad1").checked = false
    document.getElementById("rad3").checked = false
    document.getElementById("rad4").checked = false
    var input1 = parseInt(document.getElementById("input_1").value, 10);
    var input2 = parseInt(document.getElementById("input_2").value, 10);
    window.sum = input1 - input2;
//slider
    var slider1 = parseInt(document.getElementById("slider1").value, 10);
    var slider2 = parseInt(document.getElementById("slider2").value, 10);
    window.slidersum = slider1 - slider2;

}
function mult ()
{
    document.getElementById("rad1").checked = false
    document.getElementById("rad2").checked = false
    document.getElementById("rad4").checked = false
    var input1 = parseInt(document.getElementById("input_1").value, 10);
    var input2 = parseInt(document.getElementById("input_2").value, 10);
    window.sum = input1 * input2;
//slider
    var slider1 = parseInt(document.getElementById("slider1").value, 10);
    var slider2 = parseInt(document.getElementById("slider2").value, 10);
    window.slidersum = slider1 * slider2;    

}
function div ()
{
    document.getElementById("rad1").checked = false
    document.getElementById("rad2").checked = false
    document.getElementById("rad3").checked = false
    var input1 = parseInt(document.getElementById("input_1").value, 10);
    var input2 = parseInt(document.getElementById("input_2").value, 10);
    window.sum = input1 / input2;
//slider
    var slider1 = parseInt(document.getElementById("slider1").value, 10);
    var slider2 = parseInt(document.getElementById("slider2").value, 10);
    window.slidersum = slider1 / slider2;
}


function oporation ()
{


    var unt = document.getElementById("unit_input").value

    window.paragrapgh = document.getElementById("Calc-integer");
    paragrapgh.textContent = "Result is: " + window.sum + " " + unt;

    window.paragrapgh = document.getElementById("Calc-slider");
    paragrapgh.textContent = "Slider Result is: " + window.slidersum + " " + unt;


}




// TO BE ADDED
function   clear() 
{
    document.getElementById("rad1").checked = false
    document.getElementById("rad2").checked = false
    document.getElementById("rad3").checked = false
    document.getElementById("rad4").checked = false
    
    document.getElementById('Calc-integer').innerHTML = '';

    window.sum = 0;
}
