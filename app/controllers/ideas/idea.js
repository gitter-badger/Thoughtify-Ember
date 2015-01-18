import Ember from 'ember';

export default Ember.Controller.extend({
	commentAuthor: '',
	commentBody: '',
	actions: {
		postComment: function() {

			var $ = Ember.$;
			var self = this;

			this.store.find('user').then(function(users){
				users = users.filterBy('username', self.get('commentAuthor').trim());
				if (users.length === 0) {
					throw new Error('No user with username "' + self.get('commentAuthor') + '" found.');
				}

				// take the first user and 
				self.store.push('comment', {
					id: String(Math.random()).slice(2),
					author: users[0],
					body: self.get('commentBody'),
					idea: self.get('model.id'),
					score: Number(String(Math.random()).slice(2,3))
				});

			}).catch(function(reason){
				$.growl({
					message: reason.message,
					title: "<b>Error: </b>"
				}, {
					type: "danger",
					placement: {
						"from": "bottom",
						"align": "right"
					},
					offset: 20,
					delay: 3000,
					animate: {
						enter: 'animated fadeInUp',
						exit: 'animated fadeOutDown'
					},

				});
			});
		}
	}
});
