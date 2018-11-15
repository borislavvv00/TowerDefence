var path = new Path();
var base;
var enemy = [];
var tower = [];
var player = new Player();

var power = 1;//is passed to bullet constructor
var speed = 5;//is passed to bullet constructor
var range = 35;//is passed to tower constructor
var speedCost = 200;
var powerCost = 200;
var rangeCost = 200;

var next = new Option("white", 500, 590, 100, 10, "Next >", "30px Arial");
var updates = new Option("white", 370, 590, 120, 10, "updates", "30px Arial");
var settings = new Option("white", 250, 590, 120, 10, "settings", "30px Arial");
var target = new Option("white", 350, 360, 120, 10, "first", "27px Arial");
var close = new Option("white", 270, 460, 70, 10, "close", "27px Arial");
var updateSpeed = new Option("white", 350, 320, 70, 10, speedCost, "27px Arial");
var updatePower = new Option("white", 350, 370, 70, 10, powerCost, "27px Arial");
var updateRange = new Option("white", 350, 420, 70, 10, rangeCost, "27px Arial");

var wave = 0;
var areGameObjectsCreated = false;
var isGamePaused = false;//is used in base.GameEnd() function
var isTargetFirstEnemySet = true;//is used in tower.CheckIfEnemyIsInTheRange() function
var isSettingsClicked = false;
var isUpdatesClicked = false;

function DrawRectangle(color, x, y, xSize, ySize)
{
	context.fillStyle = color;
	context.fillRect(x, y, xSize, ySize);
}

function DrawText(size, color, text, x, y)
{
	context.font = size;
	context.fillStyle = color;
	context.fillText(text, x, y);
}

function CreateBase()
{
	if(path.rotations[path.rotations.length - 1] == 1)
	{
		base = new Base(100, path.pathPiecePosition[path.pathPiecePosition.length - 1].x + path.widthSize * 2 + 30, path.pathPiecePosition[path.pathPiecePosition.length - 1].y - 10, 40);
	}
	else if(path.rotations[path.rotations.length - 1] == 3)
	{
		base = new Base(100, path.pathPiecePosition[path.pathPiecePosition.length - 1].x - 30, path.pathPiecePosition[path.pathPiecePosition.length - 1].y + path.heightSize, 40);
	}
	else if(path.rotations[path.rotations.length - 1] == 2)
	{
		base = new Base(100, path.pathPiecePosition[path.pathPiecePosition.length - 1].x - 30, path.pathPiecePosition[path.pathPiecePosition.length - 1].y + path.heightSize * 2 + 30, 40);
	}
}

function CreateEnemy()
{
	for(let i = 0; i < 10 + wave; i++)
	{
		if(path.rotations[0] == 1 || path.rotations[0] == 0)
		{
			enemy[i] = new Enemy(5, 1 + wave, 1/20 + wave / 600, "white", path.pathPiecePosition[0].x - 10, path.pathPiecePosition[0].y + 10, 1 + wave * 2);
		}
		else if(path.rotations[0] == 3)
		{
			enemy[i] = new Enemy(5, 1 + wave, 1/20 + wave / 600, "white", path.pathPiecePosition[0].x - 10, path.pathPiecePosition[0].y + 5, 1 + wave * 2);
		}
		else if(path.rotations[0] == 2)
		{
			enemy[i] = new Enemy(5, 1 + wave, 1/20 + wave / 600, "white", path.pathPiecePosition[0].x - 10, path.pathPiecePosition[0].y - 10, 1 + wave * 2);
		}
	}
}

function TowerLogic()
{
	for(let i = 0; i < tower.length; i++)
	{
		tower[i].Draw();
		if(isGamePaused == false)
		{
			if(i > 0)
			{
				if(enemy.length > 0)
				{
					tower[i - 1].Shoot();
				}
			}
		}
	}
}

function EnemyLogic()
{
	for(let i = 0; i < enemy.length; i++)
	{
		if(i != 0)
		{
			if(enemy[i - 1].stepCount > 200)
			{
				enemy[i].Draw();
				if(isGamePaused == false)
				{
					enemy[i].Movement(i);
				}
			}
		}
		else
		{
			enemy[i].Draw();
			if(isGamePaused == false)
			{
				enemy[i].Movement(i);
			}
		}
	}
}

function DrawGameObjects()
{
	DrawRectangle("black", 0, 0, map.width, map.height);
	DrawRectangle("white", 0, 50, map.width, 2);
	DrawRectangle("white", 0, map.height - 50, map.width, 2);
	
	path.Create();
	path.Draw();
	
	if(areGameObjectsCreated == false)
	{
		tower[0] = new Tower(range);
		CreateBase();
		areGameObjectsCreated = true;
	}
	base.Draw();
	DrawGameStats();
	TowerLogic();
	EnemyLogic();
	base.GameEnd();
	
	if(isSettingsClicked == true)
	{
		DrawSettings();
	}
	
	if(isUpdatesClicked == true)
	{
		DrawUpdates();
	}
}