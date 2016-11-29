import { Collectable } from "./collectable.model";
export class CollectableService{
	private collectables: Collectable[]=[
		{description:'Enders Game',type:'book'},
		{description:'Cat.jpg',type:'photo'},
		{description:'Batman:The Killing Joke',type:'movie'},
		{description:'Knock knock',type:'Joke'},
		{description:'Water',type:'liquid'},
		{description:'Walter',type:'dog'}
	];
	
	private collection: Collectable[]=[];	

	getCollectables(){
		return this.collectables;
	}

	getCollection(){
		return this.collection;
	}	

   addToCollection(item: Collectable) {
	    if (this.collection.indexOf(item) !== -1) {
	        return;
	    }
	    this.collection.push(item);
	}

  	removeFromCollection(item: Collectable) {
    	this.collection.splice(this.collection.indexOf(item), 1)
  	}
}	