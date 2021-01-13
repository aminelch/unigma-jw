/**
 * Nous avons ici un formulaire et nous aimerions restituer les réponses de notre formulaire dans l'élément du dessous. De plus, nous voudrions afficher la position de la souris quand elle se trouve dans cet élément.

    Ecoutez les événements input sur l'élément #name afin de savoir quand le contenu du champ texte est changé. Affichez le contenu actuel dans l'élément #res-name

    Maintenant nous voulons écouter l'événement du changement de choix du genre (#gender), et afficher le résultat dans l'élément #res-gender.

     Nous souhaitons maintenant afficher les coordonnées de la souris à l'intérieur de l'élément #result dès que celle-ci passe par dessus. Ce que nous voulons, c'est avoir les coordonnées relatives au coin en haut à gauche de l'élément #result.
 */


let nameField = document.querySelector('input[id="name"]')
let spanName=document.querySelector('#res-name')

let genderChk = document.querySelector('#gender')
let spanGender=document.querySelector('#res-gender')

//ecoute l'event input d'input qui a l'id name
nameField.addEventListener('input', (e) => {
  spanName.textContent= e.target.value //e.target = l'element qui à l'ecouteur dans mon cas c'est l'input #name
})


//ecoute l'event change de checkbox #gender
genderChk.addEventListener('change', (e) => {
  spanGender.textContent= e.target.value
})

let divResult = document.querySelector('#result')
let mouseX = document.querySelector('#mouse-x')
let mouseY = document.querySelector('#mouse-y')

divResult.addEventListener('mousemove', (e) => {
  mouseX.textContent = e.offsetX
  mouseY.textContent = e.offsetY
})


/**
 *Le code HTML d'exemple
 *
 * <html>
  <head>
    <link rel="stylesheet" type="text/css" href="base.css">
  </head>
  <body>
    <form>
      <div><input type="text" id="name" placeholder="Nom" /></div>
      <div>
        <select id="gender">
          <option>Choisissez une valeur</option>
          <option value="male">Homme</option>
          <option value="female">Femme</option>
          <option value="other">Autre</option>
        </select>
      </div>
    </form>

    <div id="result">
      Nom : <span id="res-name"></span><br />
      Genre : <span id="res-gender"></span><br />
      Souris : (<span id="mouse-x"></span>, <span id="mouse-y"></span>)
    </div>

    <script type="text/javascript" src="index.js"></script>
  </body>
</html>


 */