(function(window)
	{
		canvas = document.getElementById("map");
		context = canvas.getContext("2d");
		setInterval(DrawGameObjects, 1);
	}
)(window);