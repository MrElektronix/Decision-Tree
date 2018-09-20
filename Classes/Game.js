class Game {
	constructor(sceneWidth, sceneHeight){
		this.sceneWidth = sceneWidth;
		this.sceneHeight = sceneHeight;
		this.canvas = document.getElementById("canvas");
		this.context = this.canvas.getContext("2d");
		
		this.start();
		
		
	}
	
	start(){
		this.canvas.width = this.sceneWidth;
		this.canvas.height = this.sceneHeight;
	}
}