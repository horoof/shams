/*jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", function(){

  document.getElementById('enter').addEventListener("click",function(){
    document.getElementById('welcome').classList.add("hidden");
    document.getElementById('welcome').classList.remove("visible");
    document.getElementById('home').classList.add("visible");
    document.getElementById('home').classList.remove("hidden");
    document.getElementById('body').classList.remove('home-bg');
    document.getElementById('body').classList.add('general-bg');
  });

    document.getElementById('close-credit').addEventListener('click', function(){
      document.getElementById('credit').classList.add('hidden');
    });
    document.getElementById('credit-trig').addEventListener('click', function(){
      document.getElementById('credit').classList.remove('hidden');
      document.getElementById('credit').classList.add('visible');
    });
    var homeTrig = document.getElementById("home-trig");
    var horoTrig = document.getElementById("horoof-trig");
    var ghoroTrig = document.getElementById("game-horoof-trig");
    homeTrig.classList.add("hidden");
    horoTrig.classList.add("hidden");
    ghoroTrig.classList.add("hidden");

    var triggers = document.querySelectorAll(".trigger");
    Array.from(triggers).forEach(function(element) {
      element.addEventListener('click', function(){
        var main = document.getElementById("main-wrapper");
        for (var i=0;i<main.children.length;i++){
          main.children[i].classList.add("hidden");
          main.children[i].classList.remove("visible");
        }
        var visible = document.getElementById(this.dataset.trig);
        visible.classList.remove("hidden");
        visible.classList.add("visible");
        if(this.dataset.trig == 'home') {
          homeTrig.classList.add("hidden");
          horoTrig.classList.add("hidden");
          document.getElementById('body').classList.remove('home-bg');
          document.getElementById('body').classList.remove('game-bg');
          document.getElementById('body').classList.add('general-bg');
        }
        if(this.dataset.trig == 'horoof') {
          horoTrig.classList.add("hidden");
          homeTrig.classList.remove("hidden");
          document.getElementById('body').classList.remove('home-bg');
          document.getElementById('body').classList.remove('game-bg');
          document.getElementById('body').classList.add('general-bg');
        }
        if(this.dataset.trig == 'game-horoof') {
          document.getElementById('body').classList.remove('home-bg');
          document.getElementById('body').classList.remove('game-bg');
          document.getElementById('body').classList.add('general-bg');
          ghoroTrig.classList.add("hidden");homeTrig.classList.remove("hidden");
          document.getElementById('game-message').classList.add('hidden');
          document.getElementById('game-message').classList.remove('visible');
        }
        // if(this.dataset.trig == 'credit') {horoTrig.classList.add("hidden");homeTrig.classList.remove("hidden");}
      });
    });

  var getIndex = function(el){
    for (var i = 0; el = el.previousElementSibling; i++);
    return i;
  };
  var x = document.getElementsByClassName("harf");
  for (var i = 0; i<x.length; i++) {
    x[i].addEventListener("click", function(){
      var index = getIndex(this)+1;
      horoTrig.classList.remove("hidden");
      homeTrig.classList.remove("hidden");

      var currentHarf = horoof[index];
      var shakl = currentHarf.shakl; //basic
      var fatha = currentHarf.harakh[1][0];
      var kasra = currentHarf.harakh[2][0];
      var dama = currentHarf.harakh[3][0];
      var skoon = currentHarf.harakh[4][0];
      var alef = currentHarf.harakh[1][1];
      var ya = currentHarf.harakh[2][1];
      var wow = currentHarf.harakh[3][1];
      var saken = currentHarf.harakh[4][1];
      var rBefore = currentHarf.rasm[1][0];
      var rMiddle = currentHarf.rasm[2][0];
      var rAfter = currentHarf.rasm[3][0];
      var rLast = currentHarf.rasm[4][0];
      var rwBefore = currentHarf.rasm[1][1];
      var rwMiddle = currentHarf.rasm[2][1];
      var rwAfter = currentHarf.rasm[3][1];
      var rwLast = currentHarf.rasm[4][1];

      var basic = document.getElementById("basic");
      basic.innerHTML = shakl;

      var fathaEl = document.getElementById("fatha");
      fathaEl.innerHTML = fatha;
      fathaEl.setAttribute("onclick", `playSound('1/`+index+`');`);

      var kasraEl = document.getElementById("kasra");
      kasraEl.innerHTML = kasra;
      kasraEl.setAttribute("onclick", `playSound('2/`+index+`');`);

      var damaEl = document.getElementById("dama");
      damaEl.innerHTML = dama;
      damaEl.setAttribute("onclick", `playSound('3/`+index+`');`);

      var skoonEl = document.getElementById("skoon");
      skoonEl.innerHTML = skoon;
      skoonEl.setAttribute("onclick", `playSound('4/`+index+`');`);

      var alefEl = document.getElementById("alef");
      alefEl.innerHTML = alef;
      alefEl.setAttribute("onclick", `playSound('5/`+index+`');`);

      var yaEl = document.getElementById("ya");
      yaEl.innerHTML = ya;
      yaEl.setAttribute("onclick", `playSound('6/`+index+`');`);

      var wowEl = document.getElementById("wow");
      wowEl.innerHTML = wow;
      wowEl.setAttribute("onclick", `playSound('7/`+index+`');`);

      var sakenEl = document.getElementById("saken");
      sakenEl.innerHTML = saken;
      sakenEl.setAttribute("onclick", `playSound('8/`+index+`');`);

      var rbeforeEl = document.getElementById("r-before");
      rbeforeEl.innerHTML = rBefore;

      var rmiddleEl = document.getElementById("r-middle");
      rmiddleEl.innerHTML = rMiddle;

      var rafterEl = document.getElementById("r-after");
      rafterEl.innerHTML = rAfter;

      var rlastEl = document.getElementById("r-last");
      rlastEl.innerHTML = rLast;

      var rwbeforeEl = document.getElementById("rw-before");
      rwbeforeEl.innerHTML = rwBefore;

      var rwbmiddleEl = document.getElementById("rw-middle");
      rwbmiddleEl.innerHTML = rwMiddle;

      var rwafterEl = document.getElementById("rw-after");
      rwafterEl.innerHTML = rwAfter;

      var rwlastEl = document.getElementById("rw-last");
      rwlastEl.innerHTML = rwLast;


      var horoofWrapper = document.getElementById("horoof");
      horoofWrapper.classList.toggle("visible");
      horoofWrapper.classList.toggle("hidden");

      var harf = document.getElementById("harf");
      harf.classList.toggle("visible");
      harf.classList.toggle("hidden");

    });

  }
});


  function show(id) {
    var harakh = document.getElementById('harakh');
    var rasm = document.getElementById('rasm');
    var h = document.getElementById('h');
    var r = document.getElementById('r');

    if (id == 'harakh') {
      if (harakh.style.height != "400px") {
        harakh.style.height = "400px";
        rasm.style.height = "0";
        h.style.backgroundColor = "rgba(255,255,255,1)";
        r.style.backgroundColor = "rgba(255,255,255,0.8)";
      } else {
        harakh.style.height = "0";
        h.style.backgroundColor = "rgba(255,255,255,0.8)";
      }
    } else {
      if (rasm.style.height != "400px") {
        rasm.style.height = "400px";
        harakh.style.height = "0";
        h.style.backgroundColor = "rgba(255,255,255,0.8)";
        r.style.backgroundColor = "rgba(255,255,255,1)";
      } else {
        rasm.style.height = "0";
        r.style.backgroundColor = "rgba(255,255,255,1)";
      }
    }
  }
