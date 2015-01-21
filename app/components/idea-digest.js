import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		clickTitle: function(){
			this.sendAction('clickTitle', this.get('idea'));
		}
	}
});
