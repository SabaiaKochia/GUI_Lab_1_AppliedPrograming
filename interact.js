//  Saba Kochadze
//  May 28, 2023
//  Lab 1 GUI Website


function add ()
{

    document.getElementById("rad2").checked = false
    document.getElementById("rad3").checked = false
    document.getElementById("rad4").checked = false
    var input1 = parseInt(document.getElementById("input_1").value, 10);
    var input2 = parseInt(document.getElementById("input_2").value, 10);
    window.sum = input1 + input2;



}
function sub ()
{
    document.getElementById("rad1").checked = false
    document.getElementById("rad3").checked = false
    document.getElementById("rad4").checked = false
    var input1 = parseInt(document.getElementById("input_1").value, 10);
    var input2 = parseInt(document.getElementById("input_2").value, 10);
    window.sum = input1 - input2;

}
function mult ()
{
    document.getElementById("rad1").checked = false
    document.getElementById("rad2").checked = false
    document.getElementById("rad4").checked = false
    var input1 = parseInt(document.getElementById("input_1").value, 10);
    var input2 = parseInt(document.getElementById("input_2").value, 10);
    window.sum = input1 * input2;

}
function div ()
{
    document.getElementById("rad1").checked = false
    document.getElementById("rad2").checked = false
    document.getElementById("rad3").checked = false
    var input1 = parseInt(document.getElementById("input_1").value, 10);
    var input2 = parseInt(document.getElementById("input_2").value, 10);
    window.sum = input1 / input2;

}


function oporation ()
{
    document.getElementById("rad1").checked = false;
    var unt = document.getElementById("unit_input").value
    window.alert("Result is: " + window.sum + " " + unt);
}

