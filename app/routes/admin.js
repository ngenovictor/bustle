import Ember from 'ember';

var users = [
	{"name":"Victor","role":"admin"},
	{"name":"Ngeno","role":"admin"}
]


export default Ember.Route.extend({
	model(){
		return users;
	},
	actions:{
		createNewPost(params){
			var newPost = this.store.createRecord('post',params);
			newPost.save();
			this.transitionTo('admin');
		}
	}
});
