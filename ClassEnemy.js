class Enemy
{
	constructor(size, lifePoints, speed, color, x, y, gold)
	{
		this.size = size;
		this.lifePoints = lifePoints;
		this.speed = speed;
		this.color = color;
		this.x = x;
		this.y = y;
		this.gold = gold;
		this.index = 0;// path piece index
		this.stepCount = 0;// count enemy steps
	}
}