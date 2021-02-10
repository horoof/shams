/*jshint esversion: 6 */
let marks=0;
document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('correct-me').addEventListener('click', function(){
    this.style.pointerEvents = 'none';
    finish();
  });

  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
    }
  return array;
  }

  function finish() {
    marks=0;
    document.getElementById('correct-me').style.pointerEvents = 'none';
    var answers = document.getElementsByClassName("answer");
    var controls = document.getElementById('controls');
    controls.classList.add("no-pointer-events");
    for(var c=0;c<answers.length;c++)
      setTimeout(mark, 1000*c, answers[c]);
    setTimeout(function(){
      var result = document.getElementById('result');
      var message = '';
      switch (marks) {
        case 0: message = 'ألم تذاكرِ؟ ' ;
          break;
        case 1: message = 'محاولة لا بأس بها. ' ;
          break;
        case 2: message = 'أحسنت، ' ;
          break;
        case 3: message = 'ممتاز!! ' ;
          break;
        default: message = ' ';
      }
      document.getElementById('message').innerHTML = message;
      result.innerHTML = "وجدت " + marks + " من أصل 3 كلمات";
      document.getElementById("game-message").classList.add('visible');
      document.getElementById("game-message").classList.remove('hidden');
    }, c*1000);
  }

  function mark(el) {
    if (el.dataset.mark == 'correct')
    marks++;
    el.classList.add(el.dataset.mark);
  }

  var getIndex = function(el) {
    for (var i = 0; el = el.previousElementSibling; i++);
    return i;
  };

  var x = document.getElementsByClassName("g-harf");
  for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function() {
      var ghoroTrig = document.getElementById("game-horoof-trig");
      ghoroTrig.classList.remove("hidden");
      document.getElementById('body').classList.remove('home-bg');
      document.getElementById('body').classList.remove('general-bg');
      document.getElementById('body').classList.add('game-bg');
      document.getElementById('correct-me').style.pointerEvents = 'auto';
      document.getElementById("game-message").classList.add('hidden');
      document.getElementById("game-message").classList.remove('visible');
      var controls = document.getElementById('controls');
      controls.classList.remove("no-pointer-events");
      let trials = 0;
      var index = getIndex(this) + 1;
      var board = document.getElementById('board');
      board.innerHTML = '';
      var controls = document.getElementById('controls');
      controls.innerHTML = '';

      var letter = document.getElementById('letter');
      letter.innerHTML = 'ال' + gameData[index][0];

      var randoms = [];
      var random;
      for (var j = 0; j < 5; j++) {
        random = Math.floor(Math.random() * 28 + 1);
        while (random == index || randoms.includes(random)) {
          random = Math.floor(Math.random() * 28 + 1);
        }
        randoms[j] = random;
      }

      var images = [];

      for (var y = 0; y < 8; y++) {
        var img = document.createElement("img");
        var div = document.createElement("div");
        div.classList.add("image");
        if (y < 3) {
          img.setAttribute("src", gameData[index][y + 1].image);
          img.setAttribute("data-word", gameData[index][y + 1].word);
          img.setAttribute("data-mark", "correct");
        } else {
          img.setAttribute("src",gameData[randoms[y-3]][2].image);
          img.setAttribute("data-word",gameData[randoms[y-3]][2].word);
          img.setAttribute("data-mark", "wrong");
        }
        div.addEventListener("click",function(){


          var board = document.getElementById('board');
          var ans = document.createElement('div'); ans.classList.add('answer'); ans.dataset.mark = this.children[0].dataset.mark;
          var word = document.createElement('div'); word.classList.add('word'); word.innerHTML = this.children[0].dataset.word;
          var ansImageDiv = document.createElement('div'); ansImageDiv.classList.add('image');
          var ansImage = document.createElement('img'); ansImage.setAttribute("src", this.children[0].getAttribute("src"));
          ansImageDiv.appendChild(ansImage);
          ans.appendChild(ansImageDiv);
          ans.appendChild(word);
          board.appendChild(ans);
          this.remove();
          trials++;
          if(trials == 4)
          finish();
        });
        div.appendChild(img);
        images.push(div);
      }

      images = shuffle(images);

      var controls = document.getElementById('controls');

      for (var z=0;z<images.length;z++)
      controls.appendChild(images[z]);


      var ghoroofWrapper = document.getElementById("game-horoof");
      ghoroofWrapper.classList.toggle("visible");
      ghoroofWrapper.classList.toggle("hidden");

      var game = document.getElementById("game");
      game.classList.toggle("visible");
      game.classList.toggle("hidden");


    });
  }
});
