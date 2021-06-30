let wordslist = [
  "fleurs",
  "truc",
  "martien",
  "bruyant",
  "millionnaire",
  "comique",
  "fantaisie",
  "message",
  "entasser",
  "titre",
  "europe",
  "hiberner",
  "vacances",
  "frustration",
  "boutton",
  "pendu",
  "silicone",
  "code",
  "domaine",
  "internet",
  "chance",
  "woods",
  "becode",
  "javascript",
  "mois",
  "radio",
  "parcourir",
  "care",
  "point",
  "seconde",
  "jouer",
  "chaud",
  "demain",
  "profiter",
  "boulot",
  "vocalise",
  "democratie",
  "heure",
  "debutant",
  "melon",
  "malin",
  "pourcent",
  
];

let Rand = Math.floor(Math.random() * wordslist.length); // prend un mot random.

let Result = wordslist[Rand]; //variable  qui contient le mot selectionner .

let SplitWord = Result.split(""); // Mot séparé en lettre.

let Goodword = []; // copie du tableau avec _ qui sera remplacer par les bonne lettre par la suite.

let MaxTry = 6;

let loose= false

function remplace(){

  if (MaxTry==5){

    document.getElementById("pendu1").src="/assets/image/pendu2.png"
  }

  else if (MaxTry==4){

    document.getElementById("pendu1").src="/assets/image/pendu3.png"
  }
   else if (MaxTry==3){

    document.getElementById("pendu1").src="/assets/image/pendu4.png"
   }
   else if (MaxTry==2){

    document.getElementById("pendu1").src="/assets/image/pendu5.png"
   }
   else if (MaxTry==1){

    document.getElementById("pendu1").src="/assets/image/pendu6.png"
   }
   else if (MaxTry==0){

    document.getElementById("pendu1").src="/assets/image/pendu7.png"
   }
  }
function message(message, color){

  document.getElementById("message").innerHTML=message

  document.getElementById("message").style.color=color 
}

function letterButton(){
  let boutton = 'abcdefghijklmnopqrstuvwxyz'.split('').map(lettre =>
      `<button class ="lettre" id ="` + lettre + `" onClick="verif('`+ lettre +`')">` + lettre + `</button>`
  ).join("");
      document.getElementById('buttonLetter').innerHTML = boutton;
};

function remplaceLetter(letter){

  for (let i = 0; i < SplitWord.length; i++) {
    if (SplitWord[i] == letter){

  Goodword[i]=letter
    
    }
  }

  document.getElementById("word").innerHTML = Goodword.reduce(
    (previous, current) => previous + current,
    " "
  );
}

function verif(lettre){
if (loose || JSON.stringify(SplitWord) == JSON.stringify(Goodword)) {
  return
  
}

  document.getElementById(lettre).setAttribute("disabled",true)
  document.getElementById(lettre).style.color="grey"
  document.getElementById(lettre).style.borderColor="grey"
  
  
  if (SplitWord.includes(lettre)) {
    remplaceLetter(lettre)
    message("Good" , "green") 
    if (JSON.stringify(SplitWord) == JSON.stringify(Goodword)) {
      alert("win");
    }
   }else{
     message("Try again" , "red")
     MaxTry--
     remplace()
     document.getElementById("numberFail").innerHTML=MaxTry
     if(MaxTry<=0){
       alert("Game Over");
       loose =true
     }
 
   }



}

document.getElementById("reset").addEventListener("click",()=> {
window.location.reload()

})

for (let i = 0; i < SplitWord.length; i++) {
 
  
  Goodword[i] = " _ ";
}
document.getElementById("word").innerHTML = Goodword.reduce(
  (previous, current) => previous + current,
  " "
);

document.getElementById("numberFail").innerHTML=MaxTry

letterButton()