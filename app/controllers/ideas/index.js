import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		destroyIdea: function(idea) {
			idea.destroyRecord();
		},
		visitIdea: function(idea) {
			this.transitionToRoute('ideas.idea', idea);
		}		
	}
});
