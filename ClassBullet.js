class Bullet
{
	constructor(x, y, targetX, targetY, power, speed)
	{
		this.power = power;
		this.speed = 1 / speed;
		this.color = "red";
		this.size = 2;
		this.x = x;
		this.y = y;
		this.targetX = targetX;
		this.targetY = targetY;
		this.isEnemyHit = false;
	}
}