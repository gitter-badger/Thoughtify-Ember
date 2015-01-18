import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		show: function(){
			this.sendAction('show', this.get('user'));
		}
	}
});
