class Player extends Person{
	constructor(x, y, width, height){
		super(x, y, width, height);
		this.state;
		
		this.states = [];
		
		this.start();
	}
	
	start(){
		this.states = ["Attack", "Block", "Heal"];
		
		this.checkState();
	}
}