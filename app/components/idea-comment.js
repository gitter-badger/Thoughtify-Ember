import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		avatarClick: function(){
			this.sendAction('avatarClick', this.get('comment.author'));
		}
	}
});
