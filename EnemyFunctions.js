Enemy.prototype.ReachBase = function(i)
{
	base.lifePoints -= this.lifePoints;
	let percent = base.starterLifePoints * this.lifePoints / 100;
	base.lifeBarSize -= (base.size - 4) * percent / 100;
	enemy.splice(i,1);
}

Enemy.prototype.Movement = function(i)
{
	if(this.index == path.pathPiecePosition.length)
	{
		this.ReachBase(i);
		return;
	}
	
	this.stepCount++;
	
	switch(path.pathPiecePosition[this.index ].rotation)
	{
		case 0:
		 	break;
		case 1:
			if(this.x <= path.pathPiecePosition[this.index ].x && this.x + 10 >= path.pathPiecePosition[this.index ].x + path.pathPiecePosition[this.index ].width)
			{
				this.x -= this.speed;
			}
			else if(this.x + 10 <= path.pathPiecePosition[this.index ].x + path.pathPiecePosition[this.index ].width)
			{
				this.index++;
				this.Movement(i);
			}
			break;
		case 2:
			if(this.y <= path.pathPiecePosition[this.index ].y + 10 && this.y - 10 >= path.pathPiecePosition[this.index ].y + path.pathPiecePosition[this.index ].height)
			{
				this.y -= this.speed;
			}
			else if(this.y - 10 <= path.pathPiecePosition[this.index ].y + path.pathPiecePosition[this.index ].height)
			{
				this.index++;
				this.Movement(i);
			}
			break;
		case 3:
			if(this.y >= path.pathPiecePosition[this.index ].y && this.y - 5 <= path.pathPiecePosition[this.index ].y + path.pathPiecePosition[this.index ].height)
			{
				this.y += this.speed;
			}
			else if(this.y - 5 >= path.pathPiecePosition[this.index ].y + path.pathPiecePosition[this.index ].height)
			{
				this.index++;
				this.Movement(i);
			}
			break;
	}
}

Enemy.prototype.Draw = function()
{
	DrawRectangle(this.color, this.x, this.y, this.size, this.size);
}