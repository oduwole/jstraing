function myfactorial(value){
    var res = parseInt(value);
    var result = 1;
    if(res == 0){
        result = 0;
    }else{
    for(var i=1; i <= res; i++){ 
        result *= i;
    }
}
    return result;
}

function factorial(){
    var val = document.getElementById('num1').value;
    var result = myfactorial(val);
    document.getElementById('num1s').innerText = result;
}

