import DS from 'ember-data';

var Comment = DS.Model.extend({
	body: DS.attr('string'),
	author: DS.belongsTo('user', {async: true}),
	score: DS.attr('number'),
	idea: DS.belongsTo('idea', {async: true})
});

Comment.reopenClass({
	FIXTURES: [
		{
			"id": "54af5ec8f2dbfd53cb0dd87c",
			"author": "54b1f153967843d0e59c9723",
			"body": "Commodo magna est est exercitation exercitation officia sunt consequat aliquip nisi velit. Consequat id deserunt occaecat ea. Duis velit ipsum tempor ea duis aliquip quis velit labore amet dolore. Dolor duis anim qui non. Enim duis eiusmod dolore non exercitation nostrud non non officia esse nulla magna.\r\n",
			"score": -2,
			"idea": "54af5ef0d464402a75af9cb5"
		},
		{
			"id": "54af5ec832fb423e8e3a2a87",
			"author": "54b1f153967843d0e59c9723",
			"body": "Consectetur amet sunt mollit pariatur id aliqua eiusmod quis magna voluptate labore consectetur veniam. Laboris velit duis occaecat pariatur officia proident non proident officia proident. Sint do nulla ut duis laboris ea magna nulla fugiat occaecat irure. Dolor aliquip aliquip culpa reprehenderit tempor pariatur incididunt ex id qui magna ea.\r\n",
			"score": -4,
			"idea": "54af5ef0d464402a75af9cb5"
		},
		{
			"id": "54af5ec8d1164b7d7533ff74",
			"author": "54b1f153967843d0e59c9723",
			"body": "Exercitation laboris occaecat enim incididunt sunt et culpa excepteur. Eiusmod excepteur aute id mollit excepteur non ad sunt sint proident quis ex ullamco consequat. Officia qui magna proident aliquip ex consectetur labore occaecat cillum irure dolore esse deserunt. Dolor in elit enim excepteur amet laboris irure amet. Duis anim anim ex qui cillum reprehenderit id reprehenderit magna.\r\n",
			"score": -10,
			"idea": "54af5ef0d464402a75af9cb5"
		},
		{
			"id": "54af5ec8bbb06efce473b63b",
			"author": "54b1f153967843d0e59c9723",
			"body": "In irure culpa aute nostrud occaecat in elit pariatur. Et cillum voluptate excepteur cillum Lorem qui deserunt eiusmod mollit ex consequat proident irure eu. Culpa enim esse laboris mollit exercitation fugiat magna laboris adipisicing ut eu voluptate consectetur. Cupidatat fugiat ad fugiat Lorem ad qui anim est sint veniam elit. Quis occaecat veniam magna reprehenderit non aliquip consectetur velit. Voluptate cillum ad elit minim. Amet non nulla quis in sit quis irure irure.\r\n",
			"score": 4,
			"idea": "54af5ef0d464402a75af9cb5"
		},
		{
			"id": "54af5ec88a84ccf47f986322",
			"author": "54b1f153967843d0e59c9723",
			"body": "Ut officia duis magna quis excepteur elit enim quis quis. Commodo velit et sint do. In qui quis irure dolor.\r\n",
			"score": -6,
			"idea": "54af5ef0d464402a75af9cb5"
		}
	]
});

export default Comment;