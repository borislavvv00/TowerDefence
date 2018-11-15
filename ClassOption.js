class Option
{
	constructor(color, x, y, sizeX, sizeY, text, textSize)
	{
		this.color = color;
		this.x = x;
		this.y = y;
		this.sizeX = sizeX;
		this.sizeY = sizeY;
		this.text = text;
		this.textSize = textSize;
	}
}

Option.prototype.Draw = function()
{
	DrawText(this.textSize, this.color, this.text, this.x, this.y);
}