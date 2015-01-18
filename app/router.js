import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.resource('ideas', function() {
		this.route('idea', {path:'/:idea_id'});
	});
  	this.resource('users', function(){
  		this.route('user', {path:'/:user_id'});
  	});
});

export default Router;
