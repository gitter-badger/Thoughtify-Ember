import DS from 'ember-data';

var User = DS.Model.extend({
	email: DS.attr('string'),
	username: DS.attr('string'),
	avatar: DS.attr('string', {defaultValue: "http://placehold.it/100x100"}),
	comments: DS.hasMany('comment', {async: true}),
	ideas: DS.hasMany('idea', {async: true})
});

User.reopenClass({
	FIXTURES: [
		{
			"id": "54b1f1539727b4db8462aff1",
			"username": "Suzette Goodwin",
			"email": "suzettegoodwin@entality.com",
			"about": "Laboris tempor cillum nulla ea nostrud dolore exercitation mollit amet et dolore. Non dolor irure nisi veniam pariatur consectetur anim aliquip excepteur velit consectetur. Do non incididunt proident dolore reprehenderit amet aliquip cillum labore voluptate consectetur commodo excepteur.\r\n",
			"comments": [],
			"ideas": ["54af5ec88a84ccf47f986322", "54af5ef0ebb3bd7ff7973b42", "54af5ef0e24292e5769e9a55", "54af5ef0d464402a75af9cb5", "54af5ef07e56fa83a6ef2c57"]
		},
		{
			"id": "54b1f153967843d0e59c9723",
			"username": "Medina Barber",
			"email": "medinabarber@entality.com",
			"about": "Qui labore voluptate esse sunt adipisicing occaecat. Aliqua aliqua sint ad pariatur dolore eiusmod adipisicing ut. Qui pariatur ut laboris ipsum ut. Reprehenderit nulla aliquip mollit nisi laboris ex laboris eiusmod enim non. Dolore enim aliqua elit non.\r\n",
			"comments": ["54af5ec8f2dbfd53cb0dd87c", "54af5ec832fb423e8e3a2a87", "54af5ec8d1164b7d7533ff74", "54af5ec8bbb06efce473b63b", "54af5ec88a84ccf47f986322"],
			"ideas": []
		},
		{
			"id": "54b1f15343281c65714c674e",
			"username": "Stein Neal",
			"email": "steinneal@entality.com",
			"about": "Consectetur ut ex laboris occaecat cupidatat minim. Ad commodo ex id enim aliquip elit sunt duis amet culpa ex. Elit id ad ut et ut excepteur laboris veniam consequat nulla non et dolor enim. Magna cupidatat occaecat officia reprehenderit proident ea duis.\r\n",
			"comments": [],
			"ideas": []
		},
		{
			"id": "54b1f1533cf8ebe029ad41f3",
			"username": "Georgia Flynn",
			"email": "georgiaflynn@entality.com",
			"about": "Labore incididunt adipisicing officia tempor non. Ea laboris aute consectetur eu dolor Lorem non elit esse deserunt aute ea do ullamco. Minim ad sint aute pariatur incididunt esse exercitation minim ex ea adipisicing consequat non ea. Mollit incididunt officia irure aliquip. Ut officia in duis laborum. Aliqua sint id cillum deserunt proident eiusmod sint qui Lorem officia nostrud proident irure magna.\r\n",
			"comments": [],
			"ideas": []
		},
		{
			"id": "54b1f15349554bdd02ffe9a9",
			"username": "Maribel Baker",
			"email": "maribelbaker@entality.com",
			"about": "Reprehenderit exercitation pariatur incididunt nulla velit velit laborum labore dolor culpa cupidatat tempor consequat. Officia dolore dolore cillum occaecat laboris labore dolor qui commodo. Consequat irure reprehenderit officia dolor nostrud quis.\r\n",
			"comments": [],
			"ideas": []
		},
		{
			"id": "54b1f153db0279fb9135c82c",
			"username": "Foreman Contreras",
			"email": "foremancontreras@entality.com",
			"about": "Ut elit enim aute excepteur. Ipsum consequat excepteur ex tempor qui ullamco ea cupidatat ea veniam. Nisi officia dolore excepteur ullamco laboris quis ipsum eiusmod. Et quis magna dolore tempor labore exercitation sunt nulla commodo esse enim id eiusmod. Incididunt aute laboris incididunt adipisicing consectetur aliquip. Ut deserunt laborum ea ex pariatur. Cillum consectetur ad magna qui tempor commodo ut magna minim adipisicing.\r\n",
			"comments": [],
			"ideas": []
		},
		{
			"id": "54b1f1531ceb953046c7c15f",
			"username": "Rosa Watkins",
			"email": "rosawatkins@entality.com",
			"about": "Ipsum proident et tempor excepteur nulla id sunt. Aliquip nisi amet non veniam ea. Cillum duis ex id ut. Sit quis in magna pariatur pariatur cillum dolore sint adipisicing proident. Nostrud veniam dolore ad laborum cupidatat incididunt cillum reprehenderit adipisicing. Adipisicing eiusmod tempor laboris elit proident proident elit officia nulla do in.\r\n",
			"comments": [],
			"ideas": []
		}
	]
});

export default User;
