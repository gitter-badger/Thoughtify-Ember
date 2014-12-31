import Ember from 'ember';

export default Ember.Controller.extend({
	ideaTitle: "",
	actions: {
		addIdea: function() {
			this.store.find('idea').then(function(ideas){
				this.store.push('idea', {
					id: ideas.get('length') + 1,
					title: this.get('ideaTitle'),
					body: "Content for " + this.get('ideaTitle'),
				});
				this.set('ideaTitle', '');
			}.bind(this));
		}
	}
});
