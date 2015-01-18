import DS from 'ember-data';

var Thought = DS.Model.extend({
	body: DS.attr('string'),
	upvotes: DS.attr('number'),
	downvotes: DS.attr('number'),
	author: DS.belongsTo('user', {async: true})
});

export default Thought;