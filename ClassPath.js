class Path
{
	constructor()
	{
		this.numberOfPieces = 10;
		this.widthSize = 50;//piece widthSize
		this.heightSize = 20;//piece heightSize
		this.previousWidthSize = this.widthSize;
		this.previousHeightSize = this.heightSize;
		
		//I use multipliers to connect properly two consistent pieces in the same rotation 
		this.multiplierWidth = 1;// 0 - when two consistent pieces are in the same rotation
		this.multiplierHeight = 1;// 1 - when two consistent pieces AREN'T in the same rotation
		
		this.rectifyWidthPosition = 0;
		this.rectifyHeightPosition = 0;
		this.pathPiecePosition = [];
		this.color = "blue";
		this.isPathCreated = false;
		this.rotation;//rotation for the current peace of the path
		this.rotations = [];//stores rotation for each piece of the path
	}
}