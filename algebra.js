function almighty_formula(a,b,c){
    var result1 = ((0-b) + Math.sqrt(((b*b) -(4*a*c))))/ (2 * a)
    var result2 = ((0-b) - Math.sqrt(((b*b) -(4*a*c))))/ (2 * a)
    return [result1, result2];
}

var item3 = document.getElementById('num3');
function alge(){
    var results = almighty_formula(item1.value, item2.value, item3.value);

    document.getElementById('res').value =results[0] + ' ' + results[1] ;
}