/**
    Créez un nouvel élément de type paragraphe  p  ;

    Ajoutez votre nouvel élément dans l'élément ayant pour id  main  ;

    Ajoutez ce contenu HTML dans l'élément que vous avez créé lors de la première tâche :  Mon <strong>grand</strong> contenu  ;

    Ajoutez la classe important à l'élément que vous avez créé lors de la première tâche ;

     Votre élément est maintenant rouge, mais on voudrait qu'il soit vert. Modifiez les styles de votre élément (en JavaScript) pour qu'il soit vert.

    */


let para = document.createElement('p')

para.innerHTML = "Mon <strong>grand</strong> contenu"
para.style.backgroundColor = 'red'
para.classList.add('important')
para.style.backgroundColor = 'green'

let mainContent = document.querySelector('#main')

mainContent.appendChild(para)

console.log(mainContent)