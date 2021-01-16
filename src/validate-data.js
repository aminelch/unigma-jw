/**
 * Nous souhaitons dans un premier temps valider le champ Code du formulaire. A chaque lettre saisie dans le champ ayant pour ID code nous voulons vérifier que la valeur du champ commence bien par CODE- grâce à une Regex que voici : /^CODE-/. Si la valeur commence bien par CODE- alors nous affichons dans l'élément ayant pour ID code-validation : Code valide, sinon nous affichons dans cet élément Code invalide.

Maintenant que nous savons si notre code est valide ou non, nous voudrions griser (grâce à l'attribut disabled) le bouton de soumission (L'input de type submit ayant pour ID submit-btn) quand le code est invalide, et le dégriser quand le code est valide.

Cela signifie que nous allons devoir ajouter un attribut disabled="true" au bouton de soumission quand le code est invalide. Et supprimer cet attribut disabled quand le code est valide (Rappelez-vous du cours sur la modification du DOM pour définir et supprimer des attributs).

Finalement, nous avons un champ Email et nous voudrions le rendre obligatoire et obliger l'utilisateur à entrer une adresse email valide. Il faudra aussi empêcher le formulaire de se soumettre s'il n'est pas valide.

Mais nous voudrions faire tout ça uniquement avec le HTML5, sans utiliser de code JavaScript.

Vous pouvez changer le type du champ email plutôt que d'utiliser une Regex via pattern
*/

let codeField = document.querySelector('#code')
let emailField = document.querySelector('input[name="email"]')
document.querySelector('input[type="submit"]').setAttribute('disabled',true)
//verification du champs email
codeField.addEventListener('input', (e)=>{
  let tapedValue = e.target.value
  
  //Teste si la valeur commence par CODE-
  if(/^CODE-/.test(tapedValue)){
    document.querySelector('input[type="submit"]').removeAttribute('disabled')
    document.querySelector('#code-validation').textContent="Code validé"
  }else{
    document.querySelector('input[type="submit"]').setAttribute('disabled',true)
    document.querySelector('#code-validation').textContent="Code non validé"
  }
  })

/** CODE HTML
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="base.css">
  </head>
  <body>  
    <form id="form-to-check">
      <p>
        <label>Code : <input type="text" name="code" id="code" /></label><br />
        <div class="result" id="code-validation"></div>
      </p>
      <p>
        <label>Email : <input type="email" name="email" /></label>
      </p>
      <p>
         <input type="submit" value="Vérifier" id="submit-btn" />
      </p>
    </form>
    
    <script type="text/javascript" src="index.js"></script>
  </body>
</html>
*/
