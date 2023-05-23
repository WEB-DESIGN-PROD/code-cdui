// Les variables

// Une valeur peut être attribuée à une variable.
// Une variable doit être nommée.
// Ainsi, le fait d'utiliser le nom de la variable équivaut à utiliser sa valeur.

// les mots var, let et const permettent de déclarer des variables. 

// let indique une variable de type muable
//( la valeur attribuée à ce type de variable peut changer )


/*
DECLARATION DE VARIABLES
*/ 
let a, b, c
// les variables a, b et c sont crées. Aucune valeur ne leur est attribuée pour l'instant.


a = "Hello World!"
// maintenant la variable la chaine de caractères Hello World! est assignée à la variable a
// si on affiche en console la valeur de a, hello world sera affiché
console.log(a)

// on peut assigner une valeur à une variable directement en la déclarant.
let d = "Bye"

console.log(d)
// Résultat affiché en console :  Bye

// LES DIFFERENTS TYPES DE VALEURS POSSIBLE
/*

string
une chaine de caractères entre guillemet, ex: "Hello Wolrd". La chaine de caractère, peut être vide.

number
un nombre, ex: 23

boolean
effectuer des vérifications, ex: true ou false

tableau
plusieurs éléments représenté entre crochets [], ex: ["lundi", "mardi", "mercredi", 12, false]    Un tableau peut contenir tous types de variables, également un tableau dans un tableau, alors il s'agit de tableau bidimensionnel.
*/

const jours = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"]

console.log(jours[3])
// affiche en console, jeudi,
// le premier élément du tableau a l'index 0, le deuxième l'index 1, etc...


/*
objet
plusieurs informations sur un élément, représenté entre accolade {}, ex: 
{
  marque: 'Ford',
  modele: 'Mustang',
  annee: 1969
}

function
une fonction.
Cf les fonctions


*/




// const indique une variable de type immuable
//( la valeur attribuée à ce type de variable ne changera pas )
