const tl = gsap.timeline({defaults: {ease: 'power4.out', duration: .7}})

	gsap.set('g', {
		autoAlpha: 1
	})


	gsap.set('#Kriss', {
		xPercent: -50
	})
// slowly grows the svg to 1.2
	gsap.to('svg', {
		scale: 1.2,
		duration: 4
	})

	tl
		.from('#Draws .st0', {
		yPercent: -200,
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

	.from('#Paintbrush .st1', {
		xPercent: -107,
		opacity: 0,
		ease: 'elastic.out(1,0.5'
	}, "-=.7")

	.from('#Palette', {
		xPercent: 90,
		opacity: 0,
		stagger: 0.3,
		ease: 'elastic.out(1,0.5'
	}, "-=.7")


	.to('#Kriss .st0', {
		skewX: 30,
		x: 30,
		scaleX:0,
		stagger: .03,
		opacity: 0,
		duration: .2
	}, 	'+=1') 

	.to('#Draws', {
		skewX: 30,
		x: 30,
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
			}, '-=.4')
			
			.to('#Paintbrush', {
				yPercent: -2000,
				xPercent: -100,
				duration: 3
				}, '-=.2')	

				.to('.reveal', {
					scaleY:0,
					transformOrigin: 'top',
					duration: 0.8,
					ease: 'power4.inOut'
				}, '<')