function grade(){
    var _num1 = document.getElementById('num1').value;
    var _num2 = document.getElementById('num2').value;
    var _num3 = document.getElementById('num3').value;
    var _num4 = document.getElementById('num4').value;

    var num1 = switch_grader(_num1);
    var num2 = switch_grader(_num2);
    var num3 = switch_grader(_num3);
    var num4 = switch_grader(_num4);

    console.log(document.getElementById('num1s'))
    document.getElementById('num1s').innerText =num1;
    document.getElementById('num2s').innerHTML =num2;
    document.getElementById('num3s').innerHTML =num3;
    document.getElementById('num4s').innerHTML =num4;


}

function grader(score){
    var value = parseInt(score);
    var result = '';
    if(value >= 75){
        result= 'A1';
    }else if(value >=70 && value < 75){
        result= 'B2';
    }else if(value >=64 && value < 70){
        result= 'B3';
    }else if(value >=60 && value < 65){
        result= 'C4';
    }else if(value >=55 && value < 60){
        result= 'C5';
    }else if(value >=50 && value < 55){
        result= 'C6';
    }else if(value >=45 && value < 50){
        result= 'D7';
    }else if(value >=40 && value < 45){
        result= 'E8';
    }else{
        result = 'F9'
    }

    return result;
}

function switch_grader(score){
    var val = parseInt(score);
    console.log(val)
    switch (val) {
        case val >= 75:
            return 'A1';
            break;
        
        case (val >= 70 && val < 75):
        return 'B2';
        break;
        
        case (val >= 65 && val < 70):
        return 'B3';
        break;
        
        case (val >= 60 && val < 65):
        return 'C4';
        break;
        
        case (val >= 55 && val < 60):
        return 'C5';
        break;
        
        case (val >= 50 && val < 55):
        return 'C6';
        break;
        
        case (val >= 45 && val < 50):
        return 'D7';
        break;
        
        case (val >= 40 && val < 45):
        return 'E8';
        break;
        default:
            return 'F9';
            break;
    }
}