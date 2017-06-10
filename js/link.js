var Link = function(image, x, y){

	var image = image;
	var x = x;
	var y = y;
	var fall = 0;
	var count = 0;
	var step = 0;

	var draw = function(){

		return{
			x: x,
			y: y,
			image: image
		}
	}

		var drawAttack = function(){

		return{
			x: x,
			y: y,
			image: image[count]
		}
	}

	var update = function(){


	}

	return{

		draw : draw,
		update : update
	}

};
