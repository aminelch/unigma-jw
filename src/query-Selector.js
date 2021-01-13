/**
 *  Récupérez l'élément ayant pour ID main-content grâce à son ID ;

    Récupérez les éléments ayant pour classe  important  ;

    Récupérez les éléments de type  article  ;

    Récupérez les éléments de type  li qui sont dans une liste ul ayant la classe  important . Cette liste doit elle-même être dans un article (article ) ;

    En reprenant le résultat de la tâche précédente, récupérez l'élément li suivant de la liste ul .
 */
let listeEl = document.querySelector("article > ul.important > li")

let mainContent= document.querySelector("#main-content")

let importantElem = document.querySelector(".important")

let articles = document.querySelectorAll("article")

let listItems = document.querySelector("article > ul.important > li")





console.log(listItems.nextElementSibling);