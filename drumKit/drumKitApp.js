
window.addEventListener('keydown', function playing(e){

	var keyCode=e.keyCode;
	if(keyCode==65||keyCode==83||keyCode==68||keyCode==81||keyCode==87||keyCode==74||keyCode==75||keyCode==76||keyCode==73){


	var playAudio = document.querySelectorAll(`[data-key=${CSS.escape(keyCode)}]`);
	var sound = playAudio[1];
	var animation = playAudio[0];
	animation.classList.add("play");
	sound.currentTime=0;
	sound.play();
	animation.addEventListener("transitionend", function(){
		animation.classList.remove("play");
	})
}
else{
	console.log(keyCode);
}})
;
