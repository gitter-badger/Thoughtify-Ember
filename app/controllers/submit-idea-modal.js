import Ember from 'ember';

export default Ember.Controller.extend({
	ideaTitle: "",
	ideaBody: "",
	actions: {
		addIdea: function() {
			this.store.push('idea', {
				id: String(Math.random()).slice(2),
				title: this.get('ideaTitle'),
				body: this.get('ideaBody'),
			});
			this.set('ideaTitle', '');
			this.set('ideaBody', '');
		}
	}
});
