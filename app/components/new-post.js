import Ember from 'ember';

export default Ember.Component.extend({
	isPostFormVisible:false,
	isUserFormVisible:false,
	actions:{
		createUser(){
			if(this.isUserFormVisible===false){
				this.set('isUserFormVisible',true);
				this.set('isPostFormVisible', false);
			}else{
				this.set('isUserFormVisible',false);
			}			
		},
		createPost(){
			if(this.isPostFormVisible===false){
				this.set('isPostFormVisible', true);
				this.set('isUserFormVisible',false);
			}else{
				this.set('isPostFormVisible', false);
			}
		},
		cancel(){
			this.set('isPostFormVisible', false);
			this.set('isUserFormVisible',false);
		},
		submitPost(){
			var params = {
				title: this.get('title'),
				author: this.get('author'),
				post: this.get('post'),
				image: this.get('image')
			};
			this.set('isPostFormVisible', false);
			this.sendAction('submitNewPost', params);
			this.set('title','');
			this.set('author','');
			this.set('post','');
			this.set('image','');
		}
	}
});
