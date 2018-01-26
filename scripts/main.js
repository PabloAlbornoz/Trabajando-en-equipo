
/* cada vez que javascript detecte un click en el elemento ul , es decir sus li que contienen opciones, va a mandar un alert un mensaje q
diga lo que esta entre parentesis*/

$(document).ready(main);
 
var contador = 1;
 
function main(){
$('.menu_bar').click(function(){
// $('nav').toggle();
 
if(contador == 1){
$('nav').animate({
left: '0'
});
contador = 0;
} else {
contador = 1;
$('nav').animate({
left: '-100%'
});
}
 
});
 
};