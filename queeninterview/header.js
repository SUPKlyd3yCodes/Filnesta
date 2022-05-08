document.getElementById("headerplace").innerHTML = `<div class="header"> 
<div class="headerright"> 
    <button id="homebutton" onclick="window.location.href = '../loading.html'; localStorage.setItem('page','home.html');">HOME</button> <button id="productbutton" onclick="window.location.href = '../loading.html'; localStorage.setItem('page','products.html');">PRODUCTS</button> <button id="loginbutton" onclick="window.location.href = '../loading.html'; localStorage.setItem('page','interviews.html');">INTERVIEWS</button> <button id="createbutton" onclick="window.location.href = '../loading.html'; localStorage.setItem('page','account.html');">ACCOUNT</button> 
    
    <input type="text" id="myInput" onkeyup="myFunction()" placeholder="&#128270" title="Type in an item" style="margin-top: 60px; margin-left: -750px; position: absolute; border: 0px;" onmouseover="inputClicked()"></div> 
    
    <div style="text-align: center;">
        <img src="../logo.jpg" alt="Dummy Image" style="width: 80px; height: 80px; border-radius: 100px;"> <br> 
        
        <div id="accountname" style="margin-top: -15px">
            <p id="accountnamep">Guest</p> 
        </div> 
    </div> 
    <div style="font-size: 40px;">
        FILNESTA
    </div> 
    <div> 
        <button id="cartbutton" onclick="window.location.href = '../loading.html'; localStorage.setItem('page','cart.html');"></button>
    </div> <br>
</div>
</div>`;