document.getElementById("footerplace").innerHTML = '<div id="footerback"><div id="footerlogo"><div>FILNESTA</div><div><button type="button" id="about" class="footerbutton" onclick="about()">About Us</button><button type="button" id="review" class="footerbutton" onclick="review()">Contact Us</button><button type="button" id="follow" class="footerbutton" onclick="follow()">Follow Us</button></div></div><div id="footercontent"></div><div id="footerbaseline">Copyright &copy; 2022 FILNESTA Inc. All Rights Reserved</div></div>';

function about() {
    document.getElementById("footercontent").innerHTML = "<div style='animation-name: goUp; animation-duration: 1.5s;'><p>About Our Company:</p><p>FILNESTA is a place where you can see the different festivals in the Filipino culture. You can see how the people live and see the information in each festival. You can also buy stuff from that certain festival to keep as an artifact or souvenir. And lastly, You can also be entertained by some videos that will creatively show the Queens of the festivals.</p><p><a href='privacypolicy.html'>Privacy Policy</a> <a href='termsandconditions.html'>Terms and Conditions</a></p></div>";
}
function review() {
    document.getElementById("footercontent").innerHTML = "<div style='animation-name: goUp; animation-duration: 1.5s;'><p>Company Contact: 2053 3584</p></div>";
}
function follow() {
    document.getElementById("footercontent").innerHTML = '<div style="animation-name: goUp; animation-duration: 1.5s;"><a href="https://www.facebook.com/profile.php?id=100080344176670" class="fa fa-facebook"></a><a href="https://twitter.com/DesignAted123" class="fa fa-twitter"></a><a href="mailto:designatedofficial123@gmail.com?subject=Mail to the Site" class="fa fa-google"></a>'
}