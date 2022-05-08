function signup(e) {
    event.preventDefault();
    
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    
    var user = {
        number: 1,
        email: email,
        username: username,
        password: pass
    };
    
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
}

function login(e) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    var result = document.getElementById("result");
    
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    
    if (user == null) {
        result.innerHTML = "Wrong Username";
    } else if (username == data.username && pass == data.password) {
        result.innerHTML = "Logged In";
        
        for (var i = 0; i < localStorage.length; i++) {
            var keys = Object.keys(localStorage);
            try {
            var datas = JSON.parse(localStorage.getItem(keys[i]));
            var datauser = datas.username;
            datas.number = 2;
            var jsonval = JSON.stringify(datas);
            localStorage.removeItem(keys[i]);
            localStorage.setItem(datauser, jsonval)
            } catch (error) {
                console.log("skipping entry",keys[i])
            }
        }
        
        
        localStorage.removeItem(username);
        data.number = 1;
        var json = JSON.stringify(data);
        localStorage.setItem(username, json);
    } else {
        result.innerHTML = "Wrong Password";
    }
}

function getaccount() {
    for (var i = 0; i < localStorage.length; i++) {
        var keys = Object.keys(localStorage);
        if (typeof localStorage.getItem(keys[i]) == "string") {
            console.log(localStorage.getItem(keys[i]));
            try {
                var data = JSON.parse(localStorage.getItem(keys[i]));
                if (data.number == 1) {
                    console.log(document.getElementById("accountnamep").innerHTML)
                    document.getElementById("accountnamep").innerHTML = data.username;
                    document.getElementById("name").innerHTML = data.username;
                }
            } catch (error) {
                console.log("skipping entry",keys[i])
            }
        }
    }
    if (localStorage.getItem("cart") === null) {
        console.log("good")
        var cart = {};
        
        var json = JSON.stringify(cart);
        localStorage.setItem("cart", json);
    }
}