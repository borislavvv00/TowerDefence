Player.prototype.TakeTower = function(event)
{
	if(isGamePaused == false)
	{
		if(event.clientX >= 130 && event.clientX <= 190 && event.clientY >= 560 && event.clientY <= 620 && this.gold >= tower[this.towerIndex ].cost)
		{
			this.gold -= tower[this.towerIndex ].cost;
			tower[this.towerIndex ].x = event.clientX;
			tower[this.towerIndex ].y = event.clientY;
			tower.push(new Tower(range));
			this.isTowerTaken = true;
		}
	}
}

Player.prototype.DragTower = function(event)
{
	if(this.isTowerTaken == true)
	{
		tower[this.towerIndex ].x = event.clientX; 
		tower[this.towerIndex ].y = event.clientY;
	}
}

Player.prototype.CheckForPossiblePosition = function(event)
{
	if(this.isTowerTaken == true)
	{
		//Access path peaces  
		if(event.clientX < path.pathPiecePosition[this.pathPieceIndex ].x + path.pathPiecePosition[this.pathPieceIndex ].width && this.pathPieceIndex != path.pathPiecePosition.length - 1)
		{
			this.pathPieceIndex++;
		}
		else if(event.clientX > path.pathPiecePosition[this.pathPieceIndex ].x && this.pathPieceIndex != 0)
		{
			this.pathPieceIndex--;
		}
		
		//Check if the tower is over path
		if(event.clientX <= path.pathPiecePosition[this.pathPieceIndex ].x + tower[0].radius && event.clientX >= path.pathPiecePosition[this.pathPieceIndex ].x + path.pathPiecePosition[this.pathPieceIndex ].width - tower[0].radius)
		{
			if(event.clientY >= path.pathPiecePosition[this.pathPieceIndex ].y - tower[0].radius && event.clientY <= path.pathPiecePosition[this.pathPieceIndex ].y + path.pathPiecePosition[this.pathPieceIndex ].height + tower[0].radius)
			{
				tower[this.towerIndex ].color = "red";
			}
			else
			{
				tower[this.towerIndex ].color = "green";
			}
		}
		
		//Check if the tower is over base
		if(event.clientX >= base.x - tower[0].radius && event.clientX <= base.x + base.size + tower[0].radius)
		{
			if(event.clientY >= base.y - tower[0].radius && event.clientY <= base.y + base.size + tower[0].radius)
			{
				tower[this.towerIndex ].color = "red";
			}
			else
			{
				tower[this.towerIndex ].color = "green";
			}
		}
		
		//Check if the tower is over other tower
		if(this.towerIndex > 0)
		{
			for(let i = 1; i < tower.length - 1; i++)
			{
				if(event.clientX <= tower[i - 1].x + tower[0].radius * 2 && event.clientX >= tower[i - 1].x - tower[0].radius * 2)
				{
					if(event.clientY <= tower[i - 1].y + tower[0].radius * 2 && event.clientY >= tower[i - 1].y - tower[0].radius * 2)
					{
						tower[this.towerIndex ].color = "red";
					}
					else
					{
						tower[this.towerIndex ].color = "green";
					}
				}
			}
		}
	}
}

Player.prototype.PlaceTower = function(event)
{
	if(this.isTowerTaken == true)
	{
		if(event.clientY >= 80 && event.clientY <= 520)
		{
			if(tower[this.towerIndex ].color == "green")
			{
				tower[this.towerIndex ].isTowerReadyToShoot = true;
				this.isTowerTaken = false;
				this.towerIndex++;
			}
		}
	}
}