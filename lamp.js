//TODO Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
//TODO Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato)
//* BONUS
//  Facciamo accendi e spegni:
//  Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
//  Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
//  E così via...

const lampEl = document.getElementById("lamp-off");
const buttonLampEl = document.getElementById("btn-lamp");
let isOnLamp = false;

console.log(lampEl);
console.log(buttonLampEl);

buttonLampEl.addEventListener("click", function () {
  isOnLamp = !isOnLamp;

  if (isOnLamp) {
    buttonLampEl.innerText = "Spegni";
    lampEl.src = "./img/yellow_lamp.png";
  } else {
    buttonLampEl.innerText = "Accendi";
    lampEl.src = "./img/white_lamp.png";
  }

  //*  Alternativa con operatore ternario
  //   buttonLampEl.innerText = isOnLamp ? "Spegni" : "Accendi";
  //   lampEl.src = isOnLamp ? "./img/yellow_lamp.png" : "./img/white_lamp.png";
});
