function initComparisons(){
  var x, i;
  x = document.getElementsByClassName('img2');
  for (let i = 0; i < x.length; i++){
    compareImages(x[i]);
  }
}
function compareImages(img){
  var slider, img, clicked = 0, w, h;
  w = img.offsetWidth;
  h = img.offserHeight;

  img.style.width = ( w/2 ) + 'px';

  slider = document.createElement( 'div' );
  slider.setAttribute('class', 'imageBox-slider');

  img.parentElement.insertBefore( slider, img );

  slider.style.top  = ( h/2 ) - ( slider.offsetHeight/2 ) + 'px';
  slider.style.left = ( w/2 ) - ( slider.offsetWidth/2  ) + 'px';

}

initComparisons();
