import Ember from 'ember';

export default Ember.Controller.extend({
	ideaTitle: "",
	ideaBody: "",
	actions: {
		addIdea: function() {
			this.store.find('idea').then(function(ideas){
				this.store.push('idea', {
					id: ideas.get('length') + 1,
					title: this.get('ideaTitle'),
					body: this.get('ideaBody'),
				});
				this.set('ideaTitle', '');
				this.set('ideaBody', '');
			}.bind(this));
		},
		delIdea: function(idea) {
			idea.destroyRecord();
		},
	}
});
