Tower.prototype.Draw = function()
{
	context.beginPath();
	context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
	context.fillStyle = this.color;
	context.fill();
	context.closePath();
}

Tower.prototype.CheckIfEnemyIsInTheRange = function()
{
	if(isTargetFirstEnemySet == false)
	{
		for(let i = 0; i < enemy.length; i++)
		{
			if(enemy[i].x > this.x - this.range && enemy[i].x < this.x + this.range 
			&& enemy[i].y > this.y - this.range && enemy[i].y < this.y + this.range)
			{
				this.countEnemy++;
				this.enemyIndex = i;
			}
		}
	}
	
	if(isTargetFirstEnemySet == true)
	{
		for(let i = enemy.length - 1; i > -1; i--)
		{
			if(enemy[i].x > this.x - this.range && enemy[i].x < this.x + this.range 
			&& enemy[i].y > this.y - this.range && enemy[i].y < this.y + this.range)
			{
				this.countEnemy++;
				this.enemyIndex = i;
			}
		}
	}
}

Tower.prototype.Shoot = function()
{
	if(this.isTowerReadyToShoot == true)
	{
		if(this.isBulletCreated == false)
		{
			this.CheckIfEnemyIsInTheRange();
			if(this.countEnemy > 0)
			{
				this.bullet.push(new Bullet(this.x, this.y, enemy[this.enemyIndex ].x, enemy[this.enemyIndex ].y, power, speed));
			}
		}
		this.isBulletCreated = true;
		
		//To be able to shoot when enemy was out of the range but now is in the range.
		if(this.countEnemy == 0)
		{
			this.isBulletCreated = false;
		}
		this.bulletTimeToLive--;
		
		for(let i = 0; i < this.bullet.length; i++)
		{
			this.bullet[i].Draw();
			this.bullet[i].Movement();
			this.bullet[i].HitEnemy();
			
			if(this.bullet[i].x < this.x - this.range || this.bullet[i].x > this.x + this.range 
			|| this.bullet[i].y < this.y - this.range || this.bullet[i].y > this.y + this.range 
			|| this.bulletTimeToLive <= 0
			|| this.bullet[i].isEnemyHit == true)
			{
				this.countEnemy = 0;
				this.bulletTimeToLive = 200;
				this.bullet.splice(i, 1);
				this.isBulletCreated = false;
			}
		}
	}
}