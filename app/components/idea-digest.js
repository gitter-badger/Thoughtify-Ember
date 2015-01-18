import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		close: function(){
			this.sendAction('close', this.get('idea'));
		},
		rightArr: function(){
			this.sendAction('rightArr', this.get('idea'));
		}
	}
});
