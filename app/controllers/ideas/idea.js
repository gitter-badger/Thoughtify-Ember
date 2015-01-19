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
				self.store.createRecord('comment', {
					id: String(Math.random()).slice(2),
					author: users[0],
					body: self.get('commentBody'),
					idea: self.get('model'),
					upvotes: Number(String(Math.random()).slice(2,3)),
					downvotes: Number(String(Math.random()).slice(2,3))
				}).save().then(function(){
					// save the user after we've updated the comment
					// otherwise, the user.comments to this comment's 
					// relationship is lost
					users[0].save();
					self.get('model').save();

					self.set('commentAuthor', '');
					self.set('commentBody', '');
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
		},
		showUserProfile: function(user) {
			this.transitionToRoute('users.user', user);
		}
	}
});
