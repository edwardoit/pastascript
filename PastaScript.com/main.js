


/*----------NAVBAR 600 HANDLE-------------------*/



var x = document.getElementsByClassName(`nav-div-2`);
var y = document.getElementsByClassName(`navbar`);
var z = document.getElementsByClassName(`nav-div-1`);
var t = document.getElementById(`buttonmenu`);
var v = document.getElementById(`buttonmenuclose`);
var intViewportWidth = window.innerWidth;
var out=x.length;

document.getElementById('buttonmenu').onclick = function menuopen() {
  if (intViewportWidth < 601) {
    for (let i = 0; i < x.length; i++) {
      x[i].style.cssText =
                            `
                            display:flex;
                            margin-top:50%;
                            `;
      y[i].style.cssText =
                            `
                            z-index:1;
                            animation-name : smscreenopen;
                            animation-duration : 1s;
                            animation-iteration-count : 1;
                            animation-timing-function : ease;
                            animation-fill-mode : forwards;
                            `;
      z[i].style.cssText=
                          `
                          height:auto;
                          position:fixed;

                          `;
      t.style.cssText=` animation-name : rotatIconBurger;
                        animation-duration : 1s;
                        animation-timing-function : ease;
                        animation-fill-mode : forwards;
                        `;
      v.style.cssText=  `
                        animation-name : rotatIconX;
                        animation-delay : 0.8s;
                        animation-duration : 0.8s;
                        animation-timing-function : ease;
                        animation-fill-mode : forwards;
                        `;

    }
  }
}

document.getElementById('buttonmenuclose').onclick = function menuclose() {
  if (intViewportWidth < 601) {
    for (let i = 0; i < x.length; i++) {
      x[i].style.cssText =
                            `
                            display:none;
                            margin-top:0%;
                            `;
      y[i].style.cssText =
                            `
                            animation-name : smscreenclose;
                            animation-duration : 0.33s;
                            animation-iteration-count : 1;
                            animation-timing-function : ease;
                            animation-fill-mode : backwards;
                            `;
      z[i].style.cssText=   `
                            height:inherit;

                            `;
                            /* inserisco animation-fill-mode backwards poichè setta la larghezza ll'ultimo keyframe nel quale
                            il BurgerMenu ha width : 0; */
      t.style.cssText=      `
                            animation-name : rotatIconBurgerClose;
                            animation-delay : 0.8s;
                            animation-duration : 0.8s;
                            animation-timing-function : ease;
                            animation-fill-mode : backwards;
                            `;
      v.style.cssText =     `
                            animation-name : rotatIconXClose;
                            animation-duration : 1s;
                            animation-timing-function : ease;
                            `;

    }
  }
}






/*----------NAVBAR 600 HANDLE-------------------*/

console.log("verifica collegamento javascript");
console.log(out);
console.log(intViewportWidth);
console.log(t.length);


function loadZoneInfo(){
  if( document.location.href == document.getElementById('homeLink').href ){
    document.getElementById('homeLiNav').style.cssText = "background-color:black;";
  document.getElementById('progettiLiNav').style.cssText = "background-color:var(--bluetto);";
  document.getElementById('contattiLiNav').style.cssText = "background-color:var(--bluetto);";
  }
  if( document.location.href == document.getElementById('projectLink')) {
    document.getElementById('homeLiNav').style.cssText = "background-color:var(--bluetto);";
    document.getElementById('progettiLiNav').style.cssText = "background-color:black;";
    document.getElementById('contattiLiNav').style.cssText = "background-color:var(--bluetto);";
  }
  if( document.location.href == document.getElementById('contactLink').href ) {
    document.getElementById('homeLiNav').style.cssText = "background-color:var(--bluetto);";
    document.getElementById('progettiLiNav').style.cssText = "background-color:var(--bluetto);";
    document.getElementById('contattiLiNav').style.cssText = "background-color:black;";
  }

}