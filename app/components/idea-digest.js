import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		close: function(){
			this.sendAction('close', this.get('idea'));
		},
		clickTitle: function(){
			this.sendAction('clickTitle', this.get('idea'));
		}
	}
});
