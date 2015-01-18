import Ember from 'ember';

export default Ember.Controller.extend({
	columns: 4,
	bootstrapXSClass: Ember.computed('columns', function(){
		// check if the column number is a divisor of 12
		if (~[5,7,8,9,10,11].indexOf(this.get('columns'))) {
			throw new Error('Invalid column number "' + this.get('columns') +'" for grid component.');
		}
		return "col-xs-" + (12 / this.get('columns'));
	}),
	grid: Ember.computed('model.length', function(){
		var data = this.get('model');
		var result = [];
		for (var i = 0; i < data.get('length'); i+=this.get('columns')) {
			result.push(data.slice(i, i + this.get('columns')));
		}
		return result;
	})
});