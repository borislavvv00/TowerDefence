Bullet.prototype.Draw = function()
{
	DrawRectangle(this.color, this.x, this.y, this.size, this.size);
}

Bullet.prototype.Movement = function()
{
	if(this.x < this.targetX)
	{
		this.x += this.speed;
	}
	else
	{
		this.x -= this.speed;
	}
	
	if(this.y < this.targetY)
	{
		this.y += this.speed;
	}
	else
	{
		this.y -= this.speed;
	}
}

Bullet.prototype.HitEnemy = function()
{
	for(let i = 0; i < enemy.length; i++)
	{
		if(this.x >= enemy[i].x && this.x <= enemy[i].x + enemy[i].size)
		{
			if(this.y >= enemy[i].y && this.y <= enemy[i].y + enemy[i].size)
			{
				this.isEnemyHit = true;
				enemy[i].lifePoints -= this.power;
				
				if(enemy[i].lifePoints <= 0)
				{
					player.gold += enemy[i].gold;
					enemy.splice(i, 1);
				}
			}
		}
	}
}