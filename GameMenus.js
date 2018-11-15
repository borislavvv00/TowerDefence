function DrawGameStats()
{
	let costColor;
	if(player.gold < tower[tower.length - 1].cost)
	{
		costColor = "red";
	}
	else
	{
		costColor = "yellow";
	}
	
	DrawText("30px Arial", "white", "wave = " + wave, 200, 30);
	DrawText("30px Arial", "white", "gold = " + player.gold, 380, 30);
	DrawText("30px Arial", "white", "Towers :  ", 30, 590);
	DrawText("30px Arial", costColor, tower[0].cost, 180, 590);
	DrawText("30px Arial", "white", "live = " + base.lifePoints, 30, 30);
	settings.Draw();
	next.Draw();
	updates.Draw();	
}

function DrawSettings()
{
	DrawRectangle("gray", 150, 320, 300, 150);
	DrawText("25px Arial", "white", "tower target: ", 200, 360);
	target.Draw();
	close.Draw();
}

function DrawUpdates()
{
	DrawRectangle("gray", 150, 280, 300, 200);
	DrawText("25px Arial", "white", "bullet speed: ", 200, 320);
	DrawText("25px Arial", "white", "bullet power: ", 200, 370);
	DrawText("25px Arial", "white", "tower range: ", 200, 420);
	updateSpeed.Draw();
	updatePower.Draw();
	updateRange.Draw();
	close.Draw();
}