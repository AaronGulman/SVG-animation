const tl = gsap.timeline({defaults: {ease: 'power4.out', duration: .7}})

	gsap.set('g', {
		autoAlpha: 1
	})


	gsap.set('#Kriss', {
		xPercent: -150
	})
	gsap.set('#Draws', {
		xPercent: -20
	})
// slowly grows the svg to 1.2
	gsap.to('svg', {
		scale: 2,
		duration: 4
	})

	tl
		.from('#Draws .st0', {
		yPercent: -300,
		stagger: .03,
		skewY: 60,
		skewX: 30,
		scaleY: .9,
		opacity: 0
	})
	
		.from('#Kriss .st0', {
		yPercent: 215,
		stagger: .03,
		skewY: 60,
		skewX: 30,
		scaleY: .5,
		opacity: 0
	} , '-=.7')

	.to('#Kriss', {
		xPercent: 0,
		ease: 'elastic.out(1,.5' //elastic.inOut is also an option
	})
	

	.from('#Paintbrush', {
		xPercent: -607,
		opacity: 0,
		ease: 'elastic.out(1,0.5'
	}, "-=.8")

	.from('#Palette', {
		xPercent: 400,
		opacity: 0,
		stagger: 0.3,
		ease: 'elastic.out(1,0.5'
	}, "-=.7")


	.to('#Kriss .st0', {
		skewX: 30,
		x: 40,
		scaleX:0,
		stagger: .03,
		opacity: 0,
		duration: .2
	}, 	'+=1') 

	.to('#Draws', {
		skewX: 30,
		x: 60,
		scaleX:0,
		stagger: .03,
		opacity: 0,
		duration: .2
	}, 	'<') 

	.to('#Paintbrush', {
		xPercent:200,
		duration: 1.3,
		ease: 'elastic.out(1, .3)'
		
	}, 	'<') 

	.to('#Palette', {
		xPercent: 200,
		stagger: .03,
		opacity: 0,
		duration: .2,
	}, 	'<') 

	.to('#Paintbrush', {
		transformOrigin: 'center',
		scaleX:3,
		scaleY:3,
		}, '-=.1')

		.to('#Paintbrush', {
			yPercent: 500,
			duration: 3
			}, '<')
			
			.to('#Paintbrush', {
				yPercent: -2000,
				xPercent: -100,
				duration: 3
				}, '-=1')	

				.to('.reveal', {
					scaleY:0,
					transformOrigin: 'top',
					duration: 0.8,
					ease: 'power4.inOut'
				}, '<')

// 	document.addEventListener("DOMContentLoaded", function() {
// setTimeout(function(){
// 	document.querySelector("#header").style.display="block";

// } , 2000)})

// this script runs only after the its predecessor 

setTimeout(function() {

	// header part with buttons
let header = document.createElement('div');
document.body.appendChild(header);
header.setAttribute("class", "header");

let homeBtn = document.createElement('button');
header.appendChild(homeBtn);
homeBtn.textContent ='home';
let productsBtn = document.createElement('button');
header.appendChild(productsBtn);
productsBtn.textContent ='Products';
let aboutusBtn = document.createElement('button');
header.appendChild(aboutusBtn);
aboutusBtn.textContent ='About Us';

// name of the webpage + caption;

let titleName = document.createElement('div')
document.body.appendChild(titleName);

let headerOne = document.createElement('h1');
titleName.appendChild(headerOne);
headerOne.textContent = 'Kris Draws'

let caption = document.createElement('caption')
titleName.appendChild(caption);
caption.textContent = 'Turning imagination into reality';

titleName.setAttribute('class', 'titleName')

// info box that contains a question and provides content made by the artist

let info = document.createElement('div')
document.body.appendChild(info);

let headerTwo = document.createElement('h2');
info.appendChild(headerTwo);
headerTwo.textContent = 'Are you interested?';

let para = document.createElement('p');
info.appendChild(para);
para.textContent = 'Here are some of my works⬇';

// animation of the header


gsap.to(header, {
	 opacity: 1, 
	 duration: 0.2,
	 ease: 'power4.out' 
	}, '<');

}, 6400)

