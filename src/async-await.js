/**
 *     Dans un premier temps nous allons créer une fonction asynchrone (avec async) qui s'appelle compute et qui va récupérer les résultats des 2 fonctions asynchrones getNumber1() et getNumber2() (avec await) et renvoyer la somme des 2 valeurs récupérées.

    Maintenant nous allons appeler notre fonction compute() et utiliser sa valeur de retour comme une Promise pour finalement afficher le résultat de la promesse dans le contenu HTML de l'élément ayant pour ID result.
 */
async function getNumber1() {
    return 10;
}

async function getNumber2() {
    return 4;
}

async function compute() {
    let x = await getNumber1()
    let y = await getNumber2()
    return x + y
}

let divResult = document.querySelector('#result')
const a = compute().then((data) => {
    divResult.textContent = data
}).catch((error) => {
    divResult.textContent = error
})
