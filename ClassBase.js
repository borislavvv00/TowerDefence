class Base
{
	constructor(lifePoints, x, y, size)
	{
		this.lifePoints = lifePoints;
		this.starterLifePoints = lifePoints;
		this.x = x;
		this.y = y;
		this.size = size;
		this.color = "red";
		this.lifeBarSize = size;
	}
}

Base.prototype.Draw = function()
{
	DrawRectangle(this.color, this.x, this.y, this.size, this.size);
	DrawRectangle("green", this.x + 2, this.y + this.size / 2, this.lifeBarSize - 4, 5);
}

Base.prototype.GameEnd = function()
{
	if(this.lifePoints <= 0)
	{
		DrawText("60px Arial", "white", "GAME OVER", 100, 300);
		isGamePaused = true;
	}
}