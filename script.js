/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, sizeWidth, sizeHeight){
  this.image = image;
  this.top = top;
  this.left = left;
  this.sizeWidth = sizeWidth;
  this.sizeHeight = sizeHeight;

  this.getHeroElement = function(){
    return '<img width="'+ this.sizeWidth + '"' +
      ' height="'+ this.sizeHeight + '"' +
      ' src="' + this.image +'"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += 20;
    console.log('ok: ' + this.y);
  }

}

var hero = new Hero('doremon1.png', 20, 30, 300, 300);

function start(){
  if(hero.left < window.innerWidth - hero.sizeWidth){
    hero.moveRight();


  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 500)
}

start();