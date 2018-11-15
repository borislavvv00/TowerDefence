Player.prototype.ChangeOptionColor = function(event, Option)
{
	if(event.clientX >= Option.x && event.clientX <= Option.x + Option.sizeX && event.clientY >= Option.y - 20 && event.clientY <= Option.y + Option.sizeY)
	{
		Option.color = "yellow";
	}
	else
	{
		Option.color = "white";
	}
}

Player.prototype.MouseOverOption = function(event)
{
	this.ChangeOptionColor(event, next);
	this.ChangeOptionColor(event, updates);
	this.ChangeOptionColor(event, settings);
	this.ChangeOptionColor(event, target);
	this.ChangeOptionColor(event, close);
	this.ChangeOptionColor(event, updateSpeed);
	this.ChangeOptionColor(event, updatePower);
	this.ChangeOptionColor(event, updateRange);
}

Player.prototype.ClickOnOption = function()
{
	if(isGamePaused == false)
	{
		if(next.color == "yellow" && enemy.length == 0)
		{
			CreateEnemy();
			wave++;
		}
		
		if(settings.color == "yellow")
		{
			isSettingsClicked = true;
		}
		
		if(target.color == "yellow")
		{
			if(target.text == "first")
			{
				target.text = "last";
				isTargetFirstEnemySet = false;
			}
			else
			{
				target.text = "first";
				isTargetFirstEnemySet = true;
			}
		}
		
		if(updates.color == "yellow")
		{
			isUpdatesClicked = true;
		}
		
		if(updatePower.color == "yellow" && player.gold >= powerCost)
		{
			player.gold -= powerCost;
			power++;
			powerCost += 200;
			updatePower.text = powerCost;
		}
		
		if(updateSpeed.color == "yellow" && player.gold >= speedCost && speed > 1.60)
		{
			player.gold -= speedCost;
			speed -= 0.05;
			speedCost += 200;
			updateSpeed.text = speedCost;
		}
		
		if(updateRange.color == "yellow" && player.gold >= rangeCost)
		{
			player.gold -= rangeCost;
			range++;
			rangeCost += 200;
			updateRange.text = rangeCost;
		}
		
		if(close.color == "yellow")
		{
			isSettingsClicked = false;
			isUpdatesClicked = false;
			context.clearRect(150, 280, 300, 200);
		}
	}
}