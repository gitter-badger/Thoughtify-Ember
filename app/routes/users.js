import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.store.find('user');
	},
	actions: {
		showUserProfile: function(user) {
			this.transitionTo('users.user', user);
		}
	}
});
