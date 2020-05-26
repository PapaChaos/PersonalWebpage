//getElementById returns a single item.
const myHeading = document.getElementById('myHeading');
const someButton = document.getElementById('someButton');
const myTextInput = document.getElementById('myTextInput');
//to get a mouse click response on the text.
/*
myHeading.addEventListener('click', () => {
	myHeading.style.color = 'red';
}); */
someButton.addEventListener('click', () => {
	myHeading.style.color = myTextInput.value;
});
//es5 version
/*
myButton.addEventListener('click', function () {
  myHeading.style.color = myTextInput.value ;
});*/

/*------------------------------------------------------------------*/
//getElementsByTagName returns an array of items.
const myParagraphs = document.getElementsByTagName('p');

//for choosing a single item.
//myParagraphs[0].style.color = 'blue';
/*
for(let x = 0; x < myParagraphs.length; x++){
	myParagraphs[x].style.color = 'blue';
}

const myTextClass = document.getElementsByClassName('redinstead');
for(let x = 0; x < myTextClass.length; x++){
	myTextClass[x].style.color = 'red';}
*/
/*
let navigationLinks = document.querySelectorAll('nav ul li a');
let galleryLinks = document.querySelectorAll('#gallery a');
let footerImages = document.getElementsByClassName('social-icon');
*/
/*
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Nick Pettit | Designer</title>
    <link rel="stylesheet" href="css/normalize.css">
    <link href='http://fonts.googleapis.com/css?family=Changa+One|Open+Sans:400italic,700italic,400,700,800' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/responsive.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <header>
      <a href="index.html" id="logo">
        <h1>Nick Pettit</h1>
        <h2>Designer</h2>
      </a>
      <nav>
        <ul>
          <li><a href="index.html" class="selected">Portfolio</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </header>
    <div id="wrapper">
      <section>
        <ul id="gallery">
          <li>
            <a href="img/numbers-01.jpg">
              <img src="img/numbers-01.jpg" alt="">
              <p>Experimentation with color and texture.</p>
            </a>
          </li>
          <li>
            <a href="img/numbers-02.jpg">
              <img src="img/numbers-02.jpg" alt="">
              <p>Playing with blending modes in Photoshop.</p>
            </a>
          </li>
        </ul>
      </section>
      <footer>
        <a href="http://twitter.com/nickrp"><img src="img/twitter-wrap.png" alt="Twitter Logo" class="social-icon"></a>
        <a href="http://facebook.com/nickpettit"><img src="img/facebook-wrap.png" alt="Facebook Logo" class="social-icon"></a>
        <p>&copy; 2016 Nick Pettit.</p>
      </footer>
    </div>
  <script src="js/app.js"></script>
  </body>
</html>
*/