class Tower
{
	constructor(range)
	{
		this.color = "green";
		this.cost = 100;
		this.radius = 13;
		this.x = 160;
		this.y = 580;
		this.range = range;
		this.enemyIndex = 0;
		this.bullet = [];
		this.bulletTimeToLive = 200;//I use it to prevent the bullet to stand on the road
		this.countEnemy = 0;//I use it ot count the enemy in the range of the tower
		this.isTowerReadyToShoot = false;
		this.isBulletCreated = false;
	}
}