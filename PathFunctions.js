Path.prototype.PreventPathPiecesToBeOneOverAnother = function(previousRotation, rotation)
{
	/* 
		Prevent to not happen this: 
		first path piece rotation = left and second path piece rotation = right
		or  first path piece rotation = up and second path piece rotation = down 
	*/
	if(this.rotations[this.rotations.length - 1] == previousRotation && this.rotation == rotation)
	{
		while(this.rotation == rotation)
		{
			this.rotation = Math.floor(Math.random() * 4);
		}
	}
}

Path.prototype.CompareRotations = function(multiplierHeight, multiplierWidth)
{
	/*																	   #									#
		This function make the path like this: ####### and # not like this: ###    or #
																			#				 		  ###	    #
	*/
	if(this.rotation != this.rotations[this.rotations.length - 2])
	{
		this.multiplierHeight = 1;
		this.multiplierWidth = 1;
	}
	else
	{
		this.multiplierHeight = multiplierHeight;
		this.multiplierWidth = multiplierWidth;
	}
}

Path.prototype.CheckRotation = function()
{
	this.previousWidthSize = this.widthSize;
	this.previousHeightSize = this.heightSize;
	
	switch(this.rotation)
	{
		case 0://rigth
			this.widthSize = 50;
			this.heightSize = 20;
			this.rectifyWidthPosition = 0;
			this.rectifyHeightPosition = 0;
			this.CompareRotations(0, 1);
			break;
		case 1://left
			this.widthSize = -50; 
			this.heightSize = 20;
			this.rectifyWidthPosition = 20;
			this.rectifyHeightPosition = 0;
			this.CompareRotations(0, 1);
			break;
		case 2://up
			this.widthSize = -20; 
			this.heightSize = -50;
			this.rectifyWidthPosition = 0;
			this.rectifyHeightPosition = 0;
			this.CompareRotations(1, 0);
			break;
		case 3://down
			this.widthSize = -20; 
			this.heightSize = 50;
			this.rectifyWidthPosition = 0;
			this.rectifyHeightPosition = -20;
			this.CompareRotations(1, 0);
			break;
	}
}

Path.prototype.CreatePiece = function()
{
	this.rotation = Math.floor(Math.random() * 4);
	this.PreventPathPiecesToBeOneOverAnother(0, 1);
	this.PreventPathPiecesToBeOneOverAnother(1, 0);
	this.PreventPathPiecesToBeOneOverAnother(2, 3);
	this.PreventPathPiecesToBeOneOverAnother(3, 2);
	this.rotations.push(this.rotation);
}

Path.prototype.Create = function()
{
	if(this.isPathCreated == false)
	{
		for(let i = 0; i < this.numberOfPieces; i++)
		{	
			this.CreatePiece();
			this.CheckRotation();
			if(i != 0)
			{
				this.pathPiecePosition.push(
				{ 
					x : this.pathPiecePosition[this.pathPiecePosition.length - 1].x + this.previousWidthSize * this.multiplierWidth + this.rectifyWidthPosition, 
					y : this.pathPiecePosition[this.pathPiecePosition.length - 1].y + this.previousHeightSize * this.multiplierHeight +  this.rectifyHeightPosition,
					width : this.widthSize,
					height :  this.heightSize,
					rotation : this.rotation 
				});
			}
			else
			{
				this.pathPiecePosition.push({ x : 300, y : 300, width : this.widthSize, height :  this.heightSize, rotation : this.rotation  });
			}
			
			//When path is out of the map area
			if(this.pathPiecePosition[i].x + this.widthSize >= map.width - 20 || this.pathPiecePosition[i].x + this.widthSize <= 0 
			|| this.pathPiecePosition[i].y + this.heightSize >= map.height - 50 || this.pathPiecePosition[i].y + this.heightSize <= 50)
			{
					this.ReCreatePath();
					break;
			}
		}
		
		//When path is interlaced
		if(this.pathPiecePosition[0].x + this.pathPiecePosition[this.pathPiecePosition.length - 1].x + this.widthSize > 350)
		{
			this.ReCreatePath();
		}
		
		this.isPathCreated = true;
	}
}

Path.prototype.ReCreatePath = function()
{
	this.pathPiecePosition.splice(0, this.pathPiecePosition.length);
	this.rotations.splice(0, this.rotations.length);
	this.Create();
}

Path.prototype.Draw = function()
{
	for(let i = 0; i < this.numberOfPieces; i++)
	{
		this.rotation = this.rotations[i];
		this.CheckRotation();
		DrawRectangle(this.color, this.pathPiecePosition[i].x, this.pathPiecePosition[i].y, this.widthSize, this.heightSize);
	}
}