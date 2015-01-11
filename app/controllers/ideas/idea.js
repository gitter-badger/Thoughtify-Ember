import Ember from 'ember';

export default Ember.Controller.extend({
	commentAuthor: '',
	commentBody: '',
	actions: {
		postComment: function(model) {
			this.store.push('comment', {
				id: String(Math.random()).slice(2),
				author: this.get('commentAuthor'),
				body: this.get('commentBody'),
				idea: model.get('id'),
				score: Number(String(Math.random()).slice(2,3))
			});

			this.set('commentAuthor', '');
			this.set('commentBody', '');
		}
	}
});
