const tl = gsap.timeline({defaults: {ease: 'power4.out', duration: .7}})

	gsap.set('g', {
		autoAlpha: 1
	})


	gsap.set('#Draws', {
		xPercent: -50
	})
// slowly grows the svg to 1.2
	gsap.to('svg', {
		scale: 1.2,
		duration: 4
	})

	tl
		.from('#Kriss .st0', {
		yPercent: -200,
		stagger: .03,
		skewY: 60,
		skewX: 30,
		scaleY: .9,
		opacity: 0
	})
	
		.from('#Draws .st0', {
		yPercent: 215,
		stagger: .03,
		skewY: 60,
		skewX: 30,
		scaleY: .5,
		opacity: 0
	})
