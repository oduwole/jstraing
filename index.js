function addnumbers(number1, number2){
var result = parseInt(number1) + parseInt(number2);
return result;
}

var item1 = document.getElementById('num1');
var item2 = document.getElementById('num2');

function add(){
    var summation = addnumbers(item1.value, item2.value);
    console.log(summation);
    document.getElementById('res').value =summation ;
}


function minusnumbers(number1, number2){
    var result = parseInt(number1) - parseInt(number2);
    return result;
}

function minus(){
    var summation = minusnumbers(item1.value, item2.value);
    console.log(summation);
    document.getElementById('res').value = summation;
}


// function multiplynumbers(number1, number2){
//     var result = parseInt(number1) * parseInt(number2);
//     return result;
// }

// var item1 = document.getElementById('num1');
// var item2 = document.getElementById('num2');

// function multiply(){
//     var summation = multiplynumbers(item1.value, item2.value);
//     console.log(multiplication);
//     document.getElementById('res').value = multiplication;
// }


// function dividenumbers(number1, number2){
//     var result = parseInt(number1) / parseInt(number2);
//     return result;
// }

// var item1 = document.getElementById('num1');
// var item2 = document.getElementById('num2');

// function divide(){
//     var summation = multiplynumbers(item1.value, item2.value);
//     console.log(division);
//     document.getElementById('res').value = division;
// }