
var currformatter = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    currencySign: "accounting",
});

function calcRate(){
    var rate = document.getElementById('rate').value;
    var amount = document.getElementById('curr').value;

    var excR = parseFloat(amount) * parseFloat(rate);
    
    var result = excR.toFixed(2);

    document.getElementById('ind').innerText = 'New Value is ' + currformatter.format(result);

}