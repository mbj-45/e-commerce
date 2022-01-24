// Création d'une fonction permettant de générer un code html avec le bon nombre d'étoiles
  let getStar = (vote) => {
    vote = parseInt(vote)
    let starVote = vote / 2
    let starFill = ''
    for (i = 0; i < 5; i++) {
      if (i < starVote) {
        starFill += `<i class="fas fa-star"></i>`
      } else {
        starFill += `<i class="far fa-star"></i>`
      }
    }
    return starFill;
  };

  // Récupération du fichier en local (attention, il faut un vhost / un live server)
  fetch('assets/data/movies.json')
    .then(response => response.json())
    .then((jsonMovies) => {
      jsonMovies.results.map((movie) => {

        let title = movie.original_title;
        let prix = movie.prix;
        let overview = movie.overview;
        let poster = movie.poster_path;
        let vote = movie.vote_average;
        let star = getStar(vote); // On fait appel à une fonction qui va retourner un contenu html avec les étoiles
        
        let movieElToInject = `
        <div class="row">
          <div class="col-lg-4 col-md-6 text-center">
            <div class="single-product-item">
            <div class='col-md-5'>
            <img class='img-fluid' src='${poster}' />
          </div>
            <h3>${title}</h3>
            <p class="product-price"> ${prix} </p>
            www<a href="cart.html" class="cart-btn"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
			  </div>`;
        document.getElementById('filmTable').innerHTML += movieElToInject;
          
      });
    });


    function Produit(id, designation, prix) {
      this.id= id;
      this.prix= prix;
      this.designation= designation;
      this.toString= function() {
      return this.designation + " "+ prix;
      }
    };
  
    var catalogue= new Array();
    catalogue.push(new Produit(1, "Iphone 13", 1000));
    catalogue.push(new Produit(2, "Iphone X", 500));
    catalogue.push(new Produit(3, "Iphone 7", 700));
    catalogue.push(new Produit(4, "MacBook Pro", 2000));
    catalogue.push(new Produit(5, "MacBook Air", 1800));
    catalogue.push(new Produit(6, "Imac", 5000));
    catalogue.push(new Produit(7, "Ipad Air", 800));
    catalogue.push(new Produit(8, "Ipad Mini", 300));
    catalogue.push(new Produit(9, "Ipad Pro", 1500));
    catalogue.push(new Produit(10, "Apple Watch Nike", 200));
    catalogue.push(new Produit(11, "Apple Watch SE", 300));
    catalogue.push(new Produit(12, "Apple Watch Series", 400));
    var panier= new Array();
    
  
    function remplirCatalogue() {
          var cat= document.getElementById('cat');
      for (var i in catalogue) {
          var e= document.createElement("option");
          e.value=i;
              var txt= document.createTextNode(catalogue[i].designation);
              e.appendChild(txt);
          cat.appendChild(e);
      }
    };
  
  function ajouterCase(parent, txt) {
    var e= document.createElement("td");
    e.appendChild(document.createTextNode(txt));
    parent.appendChild(e);
  };
  
  function calculerTotal() {
    var tot= 0;
    for (var p in panier) {
      tot+= panier[p].prix;
    }
    return tot;
  };
  
  function ajouter() {
        var cat= document.getElementById('cat');
      var sel= cat.options[cat.selectedIndex].value;
      var prod= catalogue[sel];
      panier.push(prod);
      var ligne= document.createElement("tr");
          ajouterCase(ligne,prod.designation);
          ajouterCase(ligne,prod.prix);
      document.getElementById("pan").appendChild(ligne);
      document.getElementById("tot").innerHTML= calculerTotal();
  };

  remplirCatalogue();


let btnPopup = document.getElementsByClassName('fas fa-shopping-cart');
let overlay = document.getElementById('overlay');
let btnClose = document.getElementById('btnClose');

btnpanier.addEventlistener('click', openModal);
btnClose.addEventlistener('click', closePopup);

function openModal(){
  overlay.style.display ='block';
}

function closePopup(){
  overlay.style.display = 'none';
}
