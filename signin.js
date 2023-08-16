

function signin() {
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var cred = {
        "username": username,
        "password": password,
        "grant_type": "password",
        client_id: 'coorpAppCoreAuth',
        client_secret: 'secretkey_secretkey123!',
        scope: 'coorpAppCoreAuthApi openid offline_access'
      }
    var xhttp = new XMLHttpRequest();
    //xhttp.
    var url = 'https://localhost:6001/connect/token';
    //var url = 'https://localhost:6001/api/Account/LogAuth';
    //var url = 'https://auth.yocasconsulting.com/api/Account/LogAuth';
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            console.log(xhttp.responseText);
        }
    };

    xhttp.onprogress =function(){
        console.log(this);
    }
    xhttp.open("POST", url, true);
    
    xhttp.setRequestHeader('Content-type', 'application/json'); // application/x-www-form-urlencoded/
    xhttp.send(JSON.stringify(cred));
}

function login(){
    var username = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var usernames = ['dabira@gmail', 'chidi@gmail.com', 'segun@gmail.com'];
    var passwords = ['123456', 'abcdefgh', '54ae2f'];

    var index = usernames.indexOf(username);
    //console.log(index);
    //document.getElementById('ind').innerText = index;
    if(index >= 0){
        var tempPass =  passwords[index];

    if(password === tempPass){
        //redirect to another page
        document.getElementById('ind').innerText = 'valid credentials';
        window.location.href = 'factorial.html';
    }else{
        alert('invalid credentials');
        document.getElementById('ind').innerText = 'invalid credentials';
    }
    }else{
        alert('username not found')
        document.getElementById('ind').innerText = 'username not found';
    }
    
}

$(function(){
    var btn =$('#loginBtn');
    console.log(btn);
    btn.click(function(e){
        console.log(e);
        console.log($(this))
        $(this).addClass('red')
    })
})

