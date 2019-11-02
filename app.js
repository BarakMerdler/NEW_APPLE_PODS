const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const textSection = document.querySelector('.text');
const endText = textSection.querySelector('h1');


const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
	duration: 9000,
	triggerElemnt: intro,
	triggerHook: 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);

const textAnim = new TweenMax.fromTo(text, 3, {opacity:1}, {opacity:0});

let scence2= new ScrollMagic.Scene({
	duration: 3000,
	triggerElemnt: intro,
	triggerHook:0
})
.setTween(textAnim)
.addTo(controller);


let accelamount =0.1;
let scroolops =0;
let delay = 0;

scene.on('update' , e =>{
	scroolops = e.scrollPos / 1000;

})

setInterval(()=>{
	delay += ( scroolops - delay ) * accelamount;
	video.currentTime = delay;
}, 33.3)