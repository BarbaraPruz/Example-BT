// navHTML just because no SSI or PHP
const navHTML= '<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-black"> \
  <a class="navbar-brand" href="#"><img src="images\\earth.jpg"></a> \
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation"> \
    <span class="navbar-toggler-icon"></span> \
  </button> \
  <div class="collapse navbar-collapse justify-content-end" id="navbarsExampleDefault"> \
  <ul class="navbar-nav"> \
  <li class="nav-item"> \
    <a id="home" class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a> \
  </li> \
  <li class="nav-item dropdown"> \
          <a class="nav-link dropdown-toggle" href="continents.html" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Continents</a> \
          <div class="dropdown-menu" aria-labelledby="dropdown01"> \
            <a class="dropdown-item" href="continents.html?africa">Africa</a> \
            <a class="dropdown-item" href="continents.html?antartica">Antartica</a> \
            <a class="dropdown-item" href="continents.html?asia">Asia</a> \
            <a class="dropdown-item" href="continents.html?australia">Australia</a> \
            <a class="dropdown-item" href="continents.html?europe">Europe</a> \
            <a class="dropdown-item" href="continents.html?northAmerica">North America</a> \
            <a class="dropdown-item" href="continents.html?southAmerica">South America</a>  \
          </div> \
      </li> \
      <li class="nav-item dropdown"> \
          <a class="nav-link dropdown-toggle" href="oceans.html" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Oceans</a> \
          <div class="dropdown-menu" aria-labelledby="dropdown02"> \
            <a class="dropdown-item" href="oceans.html#atlantic">Atlantic</a> \
            <a class="dropdown-item" href="oceans.html#artic">Artic</a> \
            <a class="dropdown-item" href="oceans.html#indian">Indian</a> \
            <a class="dropdown-item" href="oceans.html#pacific">Pacific</a> \
            <a class="dropdown-item" href="oceans.html#southern">Southern</a> \
          </div> \
      </li>  \
      <li class="nav-item"> \
        <a class="nav-link" href="#">Wonders</a> \
      </li> \
      <li class="nav-item"> \
        <a class="nav-link" href="about.html">About</a> \
      </li> \
      <li class="nav-item"> \
        <a class="nav-link" href="#">Contact</a> \
      </li> \
          </ul> \
        </div> \
</nav>';
      

$(document).ready(function() {

        var url = window.location.pathname;
        var fn = url.slice(url.lastIndexOf("/")+1);
        console.log("nav js fn "+fn);
        $('#topNav').html(navHTML); // only because no SSI or PHP
        $('ul.navbar-nav a[href="'+ fn +'"]').parent().addClass('active');        
      

});
