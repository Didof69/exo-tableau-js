let fruits = ["Papaye", "Banane", "Cerise", "Prune"];

console.log(fruits[0]);
console.log(fruits[3]);

fruits[1] = "Fraise";

console.log("liste de fruits" + fruits);

let bibliotheque = [
    ["Le Petit Prince", "Antoine de St Exupéry"],
    ["Le Cid", "Corneille"],
    ["La Gloire de mon Père", "Marcel Pagnol"],
    ["Les Confessions", "JJ Rousseau"],
]
console.log("ta biliotheque contient " + bibliotheque);

let snakeBoard = [
    ["🔴", "🟩", "🟩", "🟩"],
    [  "",   "",   "", "🟩"],
    [  "",   "",   "", "🟩"],
    [  "",   "",   "", "🟩"]
]

snakeBoard[2][1] = "🔴";

console.log(snakeBoard);

fruits.push("Mangue");
console.log(fruits);

let firstElement = fruits.unshift("Raisin");
// console.log(firstElement);
console.log(fruits);

let lastElement = fruits.pop();
console.log(lastElement);

firstElement = fruits.shift();
console.log(firstElement);

let index = fruits.indexOf("Prune");
console.log(index);

// ne fonctionne pas sur les doubles dimensions
let indexLivre = bibliotheque.indexOf("Corneille");
console.log(indexLivre);

// on retire un pan du tableau dans l'exemple : à partir de la position 1 je retire 2 éléments
let removedElements = fruits.splice(1, 2);
console.log(removedElements); 
console.log(fruits); 

// dans l'exemple : à partir de l'index 0, je supprime 0 élément et j'ajoute Framboise, Litchi et Abricot à mon tableau
removedElements = fruits.splice(0, 0, "Framboise", "Litchi", "Abricot" );
console.log(removedElements); 
console.log(fruits); 

//  copie d'élément sans le retirer : dans l'exemple depuis l'index 1 jusqu'à l'index 2 (copie sans l'index 2)
let copy = fruits.slice(1, 2); 
console.log(copy); 
console.log(fruits); 

//  copie d'élément sans le retirer : dans l'exemple depuis l'index 1 jusqu'à l'index 4 (copie sans l'index 4)
copy = fruits.slice(1, 4); 
console.log(copy); 
console.log(fruits); 

fruits = [
  "papaye",
  "framboise",
  "noix de coco",
  "banane",
  "raisin",
  "mangue",
  "cerise",
  "pomme",
];

// je recupère l'index de banane
index = fruits.indexOf("banane");
console.log(fruits);
console.log(index);

// je retire depuis l'index 1 élément
removedElements = fruits.splice(index,1);
console.log(removedElements); 
console.log(fruits); 