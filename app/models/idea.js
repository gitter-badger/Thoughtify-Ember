import DS from 'ember-data';

var Idea = DS.Model.extend({
	title: DS.attr('string'),
	body: DS.attr('string'),
	upvotes: DS.attr('number'),
	downvotes: DS.attr('number'),
	author: DS.belongsTo('user', {async: true}),
	image: DS.attr('string', { defaultValue: "http://placehold.it/400x500"}),
	comments: DS.hasMany('comment', {async: true})
});

Idea.reopenClass({
	FIXTURES: [
		{
			id: "54af5ec88a84ccf47f986322",
			title: "Pay an additional $50, $100, or whatever on your mortgage payment. You will save tens of thousands of dollars.",
			body: "Example: if you pay an extra $150 to your 30 year 200k mortgage with a rats of 4.5%, you will shorten the loan by about 7 years and you will have saved over $43K in interest payments!\nPretty incredible!\nEdit: And the teacher humbly becomes the student. This is what I love about the Reddit world. Thank you for the great information and responses. I've learned something new today. :)",
			upvotes: 142,
			downvotes: 23,
			author: "54b1f1539727b4db8462aff1",
			comments: []
		},
		{
			id: "54af5ef0ebb3bd7ff7973b42",
			title: "Start 2013 off with an empty jar and fill it with notes of good things that happen. On new years eve, empty it and see what awesome stuff happened that year.",
			body: "So much sweg.",
			upvotes: 133,
			downvotes: 22,
			author: "54b1f1539727b4db8462aff1",
			comments: []
		},
		{
			id: "54af5ef0e24292e5769e9a55",
			title: "Cows Are awesome, you need to buy some",
			body: "An idea generation platform built to bring ideas to life",
			upvotes: 25,
			downvotes: 1,
			author: "54b1f1539727b4db8462aff1",
			comments: []
		},
		{
			id: "54af5ef0d464402a75af9cb5",
			title: "Long-ass content",
			body: "What the fuck did you just fucking say about me, you little shit? I’ll have you know I graduated top of Japan and I’m responsible for heart attacks of criminals world wide, and I have 124,925 confirmed kills. I trained myself to be the best in a battle of wits and I’m the god of this new world. You are nothing to me but just another name. I will wipe you the fuck out in a method that you can’t even comprehend, mark my fucking words. You think you can get away with saying that shit to me over the internet? Think again fucker. As we speak I am contacting all my followers and your personal file is being brought to my location right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime and kill you in over 2 million differant ways, and that’s just with my notebook. Not only am I extensively trained in finding out your name, but I have access to the entire arsenal of over 30 thousand world wild followers and I will use them to their full extent to wipe your miserable ass off the face of this continent, you little shit. If only you could have known what holy retribution your little “clever” statement was about to bring down upon you, maybe you would of held you fucking tounge. But you couldn’t, you didn’t, and now you’re paying the price, you god damn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.",
			upvotes: 111,
			downvotes: 23,
			author: "54b1f1539727b4db8462aff1",
			comments: ["54af5ec8f2dbfd53cb0dd87c", "54af5ec832fb423e8e3a2a87", "54af5ec8d1164b7d7533ff74", "54af5ec8bbb06efce473b63b", "54af5ec88a84ccf47f986322"]
		},
		{
			id: "54af5ef07e56fa83a6ef2c57",
			title: "When camping, strap a head lamp to a gallon jug of water to fill the entire tent with ambient light.",
			body: "Content for this LPT",
			upvotes: 23,
			downvotes: 12,
			author: "54b1f1539727b4db8462aff1",
			comments: []
		},
	]
});

export default Idea;