var niveles=[];
//var Bosque;
var matrizDeBosque;
matrizBosque = new Matriz();
matrizDeBosque=matrizBosque.pintarBosque();
niveles.push(matrizDeBosque);
//var Castillo;
var matrizDeCastillo;
matrizCastillo = new Matriz();
matrizDeCastillo=matrizCastillo.pintarCastillo();
niveles.push(matrizDeCastillo);
//var Calabozo;
var matrizDeCalabozo;
matrizCalabozo = new Matriz();
matrizDeCalabozo=matrizCalabozo.pintarCalabozo();
niveles.push(matrizDeCalabozo);
//lava
var matrizLava;
matrizLava = new Matriz();
matrizLava=matrizLava.pintarLava();
niveles.push(matrizLava);


var pasoFlechaX;
var pasoFlechaY;
var flecha;
var animacionArco = [];
var contadorNivel=0
var arregloMalos=[];
var malo;
var vueltas=0;
var colum = 60;
var linea = 25;
var positionXEnemigo;
var positionYEnemigo;
var pasoEnemigo;
var direccionEnemigo;
var auxNivel;
var colum = 30;
var linea = 18;
var pox=0,poy=0;
var pasto;
var agua;
var block;
var piedra;
var piedra2;
var piedraMedio;
var alfombraD;
var alfombraC;
var alfombraI;
var alfombra;
var heart;
///mundos//
var lava;
var pared_4;
var puerta1;
var puerta2;
var fuegoImage=[];
var fuego;
var cartel;
var pastoa;
/////
let link;
let linkImageAttack = [];
let linkImage;
let coordx=1;
let coordy=180;
let positionMatrizx=0;
let positionMatrizy=9;
let contadorRetroceso=false;
let corguardar=0;
let auxcoordxizq=0;
let auxcoordxder=0;
let vidas=3;

let auxcoordy=0;

let positionSprite;
var pino;
var arr = new Array();
var vecesQueEntre = 0;
var face =0;
var espadaso=0;
const tamPasos = 20;
var lolo = [];
var animacionEspada = [];
var vista=0;
const linkSprites = [];
const linkSpritesAttack = [];

const bossSprites = [];
var bossX=601, bossY=300;
var vistaJefe;
var carasDelJefe = [];
var animacionJefe = [];
var caminado=0;

var vidasBoss=5;



var direccionFlecha=0;
	var arregloVidas=[];
//variables para pasar de nivel//
var siPaseNivelUno=false;
var bg;


var setup = function(){
	createCanvas(1300,800);

	fuego=0;
	//console.log("M[][x]==: "+positionMatrizx);
	//console.log("M[y][]==: "+positionMatrizy);
	//console.log("M[][]==: "+[positionMatrizy][positionMatrizx]);
	bg=loadImage('img/Escenario/bg.jpg');
	pino=loadImage('img/Escenario/pastito.png');
	block=loadImage('img/Escenario/block.png');
	agua=loadImage('img/Escenario/agua.png');
	pasto=loadImage('img/Escenario/pastop2.png');
	pastoa=loadImage('img/Escenario/pA3.png');
	piedra2=loadImage('img/Escenario/pared.jpg');///
	///lava
	///lava
		lava=loadImage('img/Escenario/lava.jpg');
		pared_4=loadImage('img/Escenario/pared_4.png');
		puerta1=loadImage('img/Escenario/puerta.png');
		puerta2=loadImage('img/Escenario/puerta2.png');
		cartel=loadImage('img/Escenario/cartel.png');
		for(var i = 1; i<6; i++){
			fuegoImage.push(loadImage('img/Escenario/fuegoa'+(i)+'.png'));
			// console.log(i);
		}
		///
	///
	piedra=loadImage('img/Escenario/floor.png');
	piedraMedio=loadImage('img/Escenario/pared2.png');
	alfombraD=loadImage('img/Escenario/al2.png');
	alfombraT=loadImage('img/Escenario/a2.png');
	alfombraD=loadImage('img/Escenario/a3.png');
	alfombraC=loadImage('img/Escenario/a1.png');
	alfombraI=loadImage('img/Escenario/a4.png');
	pisoAzul=loadImage('img/Escenario/pared.png');
	estatua=loadImage('img/Escenario/oing.png');
	pisoCalaca=loadImage('img/Escenario/calavera.png');
	centro=loadImage('img/Escenario/centro.png');
	alfombraAbajo=loadImage('img/Escenario/a5.png');
	heart=loadImage('img/Escenario/heart.png');
	positionSprite = 0;




	arregloVidas.push({heart:heart,x:950,y:10});
	arregloVidas.push({heart:heart,x:1000,y:10});
	arregloVidas.push({heart:heart,x:1050,y:10});





		//link camina a la derecha
		linkSprites.push(loadImage('img/m_a/m_a25.png'));
		linkSprites.push(loadImage('img/m_a/m_a26.png'));
		linkSprites.push(loadImage('img/m_a/m_a27.png'));
		linkSprites.push(loadImage('img/m_a/m_a28.png'));
		linkSprites.push(loadImage('img/m_a/m_a29.png'));
		linkSprites.push(loadImage('img/m_a/m_a30.png'));
		linkSprites.push(loadImage('img/m_a/m_a31.png'));
		linkSprites.push(loadImage('img/m_a/m_a32.png'));
		linkSprites.push(loadImage('img/m_a/m_a25.png'));
		linkSprites.push(loadImage('img/m_a/m_a26.png'));

		//izquierda
		linkSprites.push(loadImage('img/m_a/m_a17.png'));
		linkSprites.push(loadImage('img/m_a/m_a18.png'));
		linkSprites.push(loadImage('img/m_a/m_a19.png'));
		linkSprites.push(loadImage('img/m_a/m_a20.png'));
		linkSprites.push(loadImage('img/m_a/m_a21.png'));
		linkSprites.push(loadImage('img/m_a/m_a22.png'));
		linkSprites.push(loadImage('img/m_a/m_a23.png'));
		linkSprites.push(loadImage('img/m_a/m_a24.png'));
		linkSprites.push(loadImage('img/m_a/m_a17.png'));
		linkSprites.push(loadImage('img/m_a/m_a18.png'));

		//abajo
		linkSprites.push(loadImage('img/m_a/m_a9.png'));
		linkSprites.push(loadImage('img/m_a/m_a10.png'));
		linkSprites.push(loadImage('img/m_a/m_a11.png'));
		linkSprites.push(loadImage('img/m_a/m_a12.png'));
		linkSprites.push(loadImage('img/m_a/m_a13.png'));
		linkSprites.push(loadImage('img/m_a/m_a14.png'));
		linkSprites.push(loadImage('img/m_a/m_a15.png'));
		linkSprites.push(loadImage('img/m_a/m_a16.png'));
		linkSprites.push(loadImage('img/m_a/m_a9.png'));
		linkSprites.push(loadImage('img/m_a/m_a10.png'));

		//arriba
		linkSprites.push(loadImage('img/m_a/m_a1.png'));
		linkSprites.push(loadImage('img/m_a/m_a2.png'));
		linkSprites.push(loadImage('img/m_a/m_a3.png'));
		linkSprites.push(loadImage('img/m_a/m_a4.png'));
		linkSprites.push(loadImage('img/m_a/m_a5.png'));
		linkSprites.push(loadImage('img/m_a/m_a6.png'));
		linkSprites.push(loadImage('img/m_a/m_a7.png'));
		linkSprites.push(loadImage('img/m_a/m_a8.png'));
		linkSprites.push(loadImage('img/m_a/m_a1.png'));
		linkSprites.push(loadImage('img/m_a/m_a2.png'));

		//swordAbajo 										//comienza en el 40
		linkSprites.push(loadImage('img/m_a/spada4.png'));
		linkSprites.push(loadImage('img/m_a/spada4.png'));
		linkSprites.push(loadImage('img/m_a/spada4.png'));
		linkSprites.push(loadImage('img/m_a/spada4.png'));
		linkSprites.push(loadImage('img/m_a/spada4.png'));
		linkSprites.push(loadImage('img/m_a/spada4.png'));
		linkSprites.push(loadImage('img/m_a/spada4.png'));

		//SwordArriba 											//comienza en el 47
		linkSprites.push(loadImage('img/m_a/spada3.png'));
		linkSprites.push(loadImage('img/m_a/spada3.png'));
		linkSprites.push(loadImage('img/m_a/spada3.png'));
		linkSprites.push(loadImage('img/m_a/spada3.png'));
		linkSprites.push(loadImage('img/m_a/spada3.png'));
		linkSprites.push(loadImage('img/m_a/spada3.png'));
		linkSprites.push(loadImage('img/m_a/spada3.png'));


		//SwordDerecha 											//Comienza en el 53
		linkSprites.push(loadImage('img/m_a/spada.png'));
		linkSprites.push(loadImage('img/m_a/spada.png'));
		linkSprites.push(loadImage('img/m_a/spada.png'));
		linkSprites.push(loadImage('img/m_a/spada.png'));
		linkSprites.push(loadImage('img/m_a/spada.png'));
		linkSprites.push(loadImage('img/m_a/spada.png'));
		linkSprites.push(loadImage('img/m_a/spada.png'));

		//SwordIzquierda 										//Comienza en el 61
		linkSprites.push(loadImage('img/m_a/spada2.png'));
		linkSprites.push(loadImage('img/m_a/spada2.png'));
		linkSprites.push(loadImage('img/m_a/spada2.png'));
		linkSprites.push(loadImage('img/m_a/spada2.png'));
		linkSprites.push(loadImage('img/m_a/spada2.png'));
		linkSprites.push(loadImage('img/m_a/spada2.png'));
		linkSprites.push(loadImage('img/m_a/spada2.png'));

		//arcoDerecha 											//Comienza en el 68
		//arcoDerecha 											//Comienza en el 68
		linkSprites.push(loadImage('img/link/arcD1.png'));
		linkSprites.push(loadImage('img/link/arcD2.png'));
		linkSprites.push(loadImage('img/link/arcD3.png'));
		linkSprites.push(loadImage('img/link/arcD4.png'));
		linkSprites.push(loadImage('img/link/arcD5.png'));
		linkSprites.push(loadImage('img/link/arcD6.png'));
		linkSprites.push(loadImage('img/link/arcD7.png'));



		//arcoIzquierdo										//75
		linkSprites.push(loadImage('img/link/arcU1.png'));
		linkSprites.push(loadImage('img/link/arcU2.png'));
		linkSprites.push(loadImage('img/link/arcU3.png'));
		linkSprites.push(loadImage('img/link/arcU4.png'));
		linkSprites.push(loadImage('img/link/arcU5.png'));
		linkSprites.push(loadImage('img/link/arcU6.png'));
		linkSprites.push(loadImage('img/link/arcU7.png'));



		//arcoArriba									//82
		linkSprites.push(loadImage('img/link/arcR1.png'));
		linkSprites.push(loadImage('img/link/arcR2.png'));
		linkSprites.push(loadImage('img/link/arcR3.png'));
		linkSprites.push(loadImage('img/link/arcR4.png'));
		linkSprites.push(loadImage('img/link/arcR5.png'));
		linkSprites.push(loadImage('img/link/arcR6.png'));
		linkSprites.push(loadImage('img/link/arcR7.png'));


		//arcoAbajo									//89
		linkSprites.push(loadImage('img/link/arcL1.png'));
		linkSprites.push(loadImage('img/link/arcL2.png'));
		linkSprites.push(loadImage('img/link/arcL3.png'));
		linkSprites.push(loadImage('img/link/arcL4.png'));
		linkSprites.push(loadImage('img/link/arcL5.png'));
		linkSprites.push(loadImage('img/link/arcL6.png'));
		linkSprites.push(loadImage('img/link/arcL7.png'));

		//arcoflachas
		linkSprites.push(loadImage('img/link/arrowU.png'));
		linkSprites.push(loadImage('img/link/arrowD.png'));
		linkSprites.push(loadImage('img/link/arrowL.png'));
		linkSprites.push(loadImage('img/link/arrowR.png'));


		//frente
		bossSprites.push(loadImage('img/boss/boss1.png'));
		bossSprites.push(loadImage('img/boss/boss2.png'));
		bossSprites.push(loadImage('img/boss/boss3.png'));
		bossSprites.push(loadImage('img/boss/boss4.png'));
		//izquierda
		bossSprites.push(loadImage('img/boss/boss5.png'));
		bossSprites.push(loadImage('img/boss/boss6.png'));
		bossSprites.push(loadImage('img/boss/boss7.png'));
		bossSprites.push(loadImage('img/boss/boss8.png'));
		//derecha
		bossSprites.push(loadImage('img/boss/boss9.png'));
		bossSprites.push(loadImage('img/boss/boss10.png'));
		bossSprites.push(loadImage('img/boss/boss11.png'));
		bossSprites.push(loadImage('img/boss/boss12.png'));
		//espalda
		bossSprites.push(loadImage('img/boss/boss13.png'));
		bossSprites.push(loadImage('img/boss/boss14.png'));
		bossSprites.push(loadImage('img/boss/boss15.png'));
		bossSprites.push(loadImage('img/boss/boss16.png'));


	 link = new Link(linkImage, coordx, coordy);
	 auxNivel=niveles[contadorNivel];
	 frameRate(30);

}

var draw = function(){



	vueltas++;
	if (vueltas>10) {
		escaneoEnemigo(auxNivel);
		moverEnemigo(auxNivel,arregloMalos);
		vueltas=0;
	}
	pox=0;
	poy=0;

if(auxNivel==niveles[0]){
	for(var i =0; i<linea; i++){
		for(var j=0; j<colum; j++){

			switch(auxNivel[i][j]){
				case 0:
					image(pino,pox,poy,40,40);
				break;
				case 1:
					image(pasto,pox,poy,40,40);
				break;
				case 2:
					image(agua,pox,poy,40,40);
				break;
				case 3:
					image(pastoa,pox,poy,40,40);
				break;
				case 5:
					image(pastoa,pox,poy,40,40);
				break;
				case 7:
					image(pisoCalaca,pox,poy,40,40);
				break;

				case 8:
					image(cartel,pox,poy,40,40);
				break;
				case 9:
					image(puerta2,pox,poy,40,40);
				break;
			}
			pox+=40;
		}
		poy+=40;
		pox=0;
	}
///////////////////////////////////////////
}else if(auxNivel==niveles[1])
		{
	for(var i =0; i<linea; i++){
			for(var j=0; j<colum; j++){

				switch(auxNivel[i][j]){
				case 0:
					image(pisoAzul,pox,poy,40,40);
				break;
				case 1:
					image(piedra2,pox,poy,40,40);
				break;
				case 2:
					image(pino,pox,poy,40,40);
				break;
				case 3:
					image(agua,pox,poy,40,40);
				break;
				case 4:
					image(alfombraC,pox,poy,40,40);
				break;
				case 5:
					image(alfombraI,pox,poy,40,40);
				break;
				case 6:
					image(estatua,pox,poy,40,40);
				break;
				case 7:
					image(pisoCalaca,pox,poy,40,40);
				break;
				case 8:
					image(cartel,pox,poy,40,40);
				break;
				case 9:
					image(puerta2,pox,poy,40,40);
				break;
				case 10:
					image(lava,pox,poy,40,40);
				break;
				case 11:
					image(alfombraAbajo,pox,poy,40,40);
				break;
				case 12:
					image(piedra2,pox,poy,40,40);
				break;
				}
				pox+=40;
			}
			poy+=40;
			pox=0;
		}

	}else  if(auxNivel==niveles[2])
			{
				for(var i =0; i<linea; i++){
					for(var j=0; j<colum; j++){

						switch(auxNivel[i][j]){
				case 0:
					image(pisoAzul,pox,poy,40,40);
				break;
				case 1:
					image(piedra2,pox,poy,40,40);
				break;
				case 7:
					image(pisoCalaca,pox,poy,40,40);
				break;
				case 8:
					image(cartel,pox,poy,40,40);
				break;
				case 9:
					image(puerta2,pox,poy,40,40);
				break;
				case 10:
					image(lava,pox,poy,40,40);
				break;
				case 11:
					image(pared_4,pox,poy,40,40);
				break;
				case 12:
					image(pared,pox,poy,40,40);
				break;
				case 13:
					image(piedra,pox,poy,40,40);
				break;
				case 19:
					fuego++;
					image(fuegoImage[fuego],pox,poy,40,40);

				if (fuego==4) {
					fuego=1;
				};
				break;
						}
						pox+=40;
					}
					poy+=40;
					pox=0;
				}

			}else if(auxNivel==niveles[3])
					{
				for(var i =0; i<linea; i++){
						for(var j=0; j<colum; j++){

							switch(auxNivel[i][j]){
							case 0:
								image(pisoAzul,pox,poy,40,40);
							break;
							case 1:
								image(piedra2,pox,poy,40,40);
							break;
							case 2:
								image(pino,pox,poy,40,40);
							break;
							case 3:
								image(agua,pox,poy,40,40);
							break;
							case 4:
								image(alfombraC,pox,poy,40,40);
							break;
							case 5:
								image(alfombraI,pox,poy,40,40);
							break;
							case 6:
								image(estatua,pox,poy,40,40);
							break;
							case 7:
								image(pisoCalaca,pox,poy,40,40);
							break;
							case 8:
								image(cartel,pox,poy,40,40);
							break;
							case 9:
								image(puerta2,pox,poy,40,40);
							break;
							case 10:
								image(lava,pox,poy,40,40);
							break;
							case 11:
								image(alfombraAbajo,pox,poy,40,40);
							break;
							case 12:
								image(piedra2,pox,poy,40,40);
							break;
							}
							pox+=40;
						}
						poy+=40;
						pox=0;
					}

				}



	escaneoEnemigo(auxNivel);
	moveLink();

	sword(auxNivel,arregloMalos);
	image(linkSprites[positionSprite], link.draw().x+coordx, link.draw().y+coordy);
if (contadorNivel==3) {
	image(bossSprites[positionBoss],bossX-20,bossY+150);
	tocaBoss();
}
mostrarVidas(arregloVidas);





}

var tocaBoss=function () {

	if(coordx==bossX && coordy==bossY){

		arregloVidas.pop();
		bossX=601;
		bossY=300;

	}

}

var mostrarVidas=function(arregloVidas)
{
		for (var i = 0; i < arregloVidas.length; i++) {
				image(arregloVidas[i].heart,arregloVidas[i].x,arregloVidas[i].y,50,50);
		}



}

var quitarVida=function(positionMatrizx,positionMatrizy,arregloMalos){

			for (var i = 0; i < arregloMalos.length; i++) {
				if (positionMatrizx==arregloMalos[i].i && positionMatrizy==arregloMalos[i].j) {

					auxNivel[arregloMalos[i].j][arregloMalos[i].i]=0;
					delete arregloMalos[i];
					arregloVidas.pop();

					console.log("arregloVidas: "+arregloVidas[0].x);
					if (arregloVidas==null) {

						textSize(32);
						text("GAME OVER", 10, 30);
						fill(0, 102, 153);
						noLoop();


					}

				}

			}

}



var moveLink = function(){

	if(keyIsDown(UP_ARROW)){

		if(auxNivel[positionMatrizy-1][positionMatrizx]==0 || auxNivel[positionMatrizy-1][positionMatrizx]==7)
		{


				coordy -=10;
				auxcoordy -=10

																				;
				console.log("positionMatrizy: "+positionMatrizy);
				if(auxcoordy<=-38){

						auxcoordy=0;
						positionMatrizy-=1;

			 }
		}
		else{
			if(auxNivel==niveles[contadorNivel] && auxNivel[positionMatrizy-1][positionMatrizx]==9 && arregloMalos[0]==null){

				console.log("pase de nivel");
				contadorNivel++;
				auxNivel=niveles[contadorNivel];

				//reiniciar variables
			}

		}

		pintarSprints(30);
		vista=0;


	}
	if(keyIsDown(DOWN_ARROW)){



		if(auxNivel[positionMatrizy+1][positionMatrizx]==0 || auxNivel[positionMatrizy+1][positionMatrizx]==7 )
		{

					coordy +=10;
					auxcoordy +=10;

					console.log("positionMatrizy: "+positionMatrizy);
		 	 if(auxcoordy>=38){
			  	auxcoordy=0;
			 		positionMatrizy+=1;

		  	}


		}
		else{
			if(auxNivel==niveles[contadorNivel] && auxNivel[positionMatrizy+1][positionMatrizx]==9 && arregloMalos[0]==null){

				console.log("pase de nivel");
						contadorNivel++;
				auxNivel=niveles[contadorNivel];
				//reiniciar variables
			}

		}

		pintarSprints(20);
		vista=1;

	}

	if(keyIsDown(LEFT_ARROW)){

		if(auxNivel[positionMatrizy][positionMatrizx-1]==0 || auxNivel[positionMatrizy][positionMatrizx-1]==7)
		{

			 coordx -=10;
			 auxcoordxizq -=10;


				 if(auxcoordxizq%-40==0){

					positionMatrizx-=1;

					auxcoordxizq=0;

					}


			}
			else{
			if(auxNivel==niveles[contadorNivel] && auxNivel[positionMatrizy][positionMatrizx-1]==9 && arregloMalos[0]==null){

				console.log("pase de nivel");
						contadorNivel++;
				auxNivel=niveles[contadorNivel];
				//reiniciar variables
			}

		}
			pintarSprints(10);
			vista=2;


		}




	if(keyIsDown(RIGHT_ARROW)){

		if(auxNivel[positionMatrizy][positionMatrizx+1]==0 || auxNivel[positionMatrizy][positionMatrizx+1]==7)
		{



				coordx +=10;
				auxcoordxder +=10;

				if(auxcoordxder%40==0 ){

						positionMatrizx++;
						auxcoordxder=0;

				}

		}
		else{
			if(auxNivel==niveles[contadorNivel] && auxNivel[positionMatrizy][positionMatrizx+1]==9 && arregloMalos[0]==null){

				console.log("pase de nivel");
						contadorNivel++;
				auxNivel=niveles[contadorNivel];
				//reiniciar variables
			}

		}
		pintarSprints(0);
		vista=3;

	}

	console.log("coordy: "+coordy);
	console.log("coordyboss: "+bossY);
	console.log("coordx: "+coordx);
	console.log("coordxboss: "+bossX);

if (contadorNivel==3) {

	if(coordx<bossX){

			bossX=bossX-5;
			bossFace(4);
		}
		else {
			if(coordx>bossX){
				bossX=bossX+5;
				bossFace(12);
		}
		}if(coordy<bossY){

			bossY=bossY-5;
			bossFace(8);
		}else {
			if(coordy>bossY){
				bossY=bossY+5;
				bossFace(0);
			}

		}


				tocaBoss();

}


}


var bossFace = function(faceBoss){
	console.log(faceBoss);
	var cara=0;
	for (var i=faceBoss; i<=faceBoss+3;i++){
		animacionJefe[cara]=i;
		cara++;
	}

	switch(caminado){
		case 0:
			positionBoss=animacionJefe[0];
			caminado=1;
		break;
		case 1:
			positionBoss=animacionJefe[1];
			caminado=2;
		break;
		case 2:
			positionBoss=animacionJefe[2];
			caminado=3;
		break;
		case 3:
			positionBoss=animacionJefe[3];
			caminado=0;
		break;

	}



}

var escaneoEnemigo=function(auxNivel){
	arregloMalos=[];
	for (var i = 0; i <30 ; i++){

			for (var j = 0; j <18 ; j++) {


				if (auxNivel[j][i]==7)
					{

						//console.log("si detecto un malo en pos: ["+j+"]["+i+"]");
						arregloMalos.push({j:j,i:i});

					}

			}
	}

}




var MovimientoSword = function(anim){//animacion de la espada
	var sword=0;
	for (var i=anim; i<=anim+6;i++){
		animacionEspada[sword]=i;
		sword++;
	}

	switch(espadaso){
		case 0:
			positionSprite=animacionEspada[0];
			espadaso=1;
		break;
		case 1:
			positionSprite=animacionEspada[1];
			espadaso=2;
		break;
		case 2:
			positionSprite=animacionEspada[2];
			espadaso=3;
		break;
		case 3:
			positionSprite=animacionEspada[3];
			espadaso=4;
		break;
		case 4:
			positionSprite=animacionEspada[4];
			espadaso=5;
		break;
		case 5:
			positionSprite=animacionEspada[5];
			espadaso=6;
		break;
		case 6:
			positionSprite=animacionEspada[6];
			espadaso=0;
		break;
	}
}






var MovimientoArco = function(anim){
	var arco=0;
	for (var i=anim; i<=anim+6;i++){
		animacionArco[arco]=i;
		arco++;
	}

	switch(disparo){
		case 0:
			positionSprite=animacionArco[0];
			disparo=1;
		break;
		case 1:
			positionSprite=animacionArco[1];
			disparo=2;
		break;
		case 2:
			positionSprite=animacionArco[2];
			disparo=3;
		break;
		case 3:
			positionSprite=animacionArco[3];
			disparo=4;
		break;
		case 4:
			positionSprite=animacionArco[4];
			disparo=5;
		break;
		case 5:
			positionSprite=animacionArco[5];
			disparo=6;
		break;
		case 6:
			positionSprite=animacionArco[6];
			disparo=0;
		break;
	}






}



/*var crearFlecha=function(vista,coordy,coordx)
{

	console.log("vista: "+vista)
	switch (vista) {


		case 0:
					flecha={imgFlecha:linkSprites[96],ubicacionFlechaX:coordx,ubicacionFlechaY:coordy,flechaMatrizj:positionMatrizy,flechaMatrizX:positionMatrizx,paso:10}


			break;
			case 1:
			flecha={imgFlecha:linkSprites[97],ubicacionFlechaX:coordx,ubicacionFlechaY:coordy,flechaMatrizj:positionMatrizy,flechaMatrizX:positionMatrizx,paso:10}


				break;
				case 2:
				flecha={imgFlecha:linkSprites[98],ubicacionFlechaX:coordx,ubicacionFlechaY:coordy,flechaMatrizj:positionMatrizy,flechaMatrizX:positionMatrizx,paso:10}

					break;
					case 3:
					flecha={imgFlecha:linkSprites[99],ubicacionFlechaX:coordx,ubicacionFlechaY:coordy,flechaMatrizj:positionMatrizy,flechaMatrizX:positionMatrizx,paso:10}

						break;
		default:

	}



}
*/

var golpearJefe=function (vista) {

	console.log("coordx: "+coordx+20);
	console.log("coordy: "+coordy);
	console.log("bossx: "+bossX);
	console.log("bossY: "+bossY);

	switch (vista) {
		case 1:
						if (coordx==bossX && coordy+20==bossY )
						{
								vidasBoss--;
								bossY+=120;

						}
			break;
			case 0:
					if (coordx==bossX && coordy-20==bossY )
					{
							vidasBoss--;
							bossY-=120;
					}

				break;
				case 3:
				if (coordx+20==bossX && coordy==bossY )
				{
						vidasBoss--;
						bossX+=120

				}

					break;
					case 2:


					if (coordx-20==bossX && coordy==bossY )
					{
							vidasBoss--;
							bossX-=120

					}

						break;
		default:

	}
	if (vidasBoss<=0) {
		background(bg);
		noLoop();


	}



}
var sword = function(auxNivel,arregloMalos){ //angulo de vision
	if (keyIsDown('69')) {


		golpearJefe(vista);


			if(vista==1){//abajo
				MovimientoSword(40);

				for (var i = 0; i < arregloMalos.length; i++) {

					if(positionMatrizy+1==arregloMalos[i].j  && positionMatrizx==arregloMalos[i].i){

							auxNivel[arregloMalos[i].j][arregloMalos[i].i]=0;
							delete arregloMalos[i];

							if(arregloMalos[i]==null){
								console.log("si borraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

							}

					}

				}


			}
			else

			if(vista==0){//arriba
				MovimientoSword(47);
				for (var i = 0; i < arregloMalos.length; i++) {

					if(positionMatrizy-1==arregloMalos[i].j  && positionMatrizx==arregloMalos[i].i){

							auxNivel[arregloMalos[i].j][arregloMalos[i].i]=0;
							delete arregloMalos[i];

							if(arregloMalos[i]==null){
								console.log("si borraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

							}

					}

				}


			}
			else if(vista==3){//derecha
				MovimientoSword(53);

				for (var i = 0; i < arregloMalos.length; i++) {


						if(positionMatrizy==arregloMalos[i].j  && positionMatrizx+1==arregloMalos[i].i){

								auxNivel[arregloMalos[i].j][arregloMalos[i].i]=0;
								delete arregloMalos[i];

								if(arregloMalos[i]==null){
									console.log("si borraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

								}

						}

				}


			}else if(vista==2){
				MovimientoSword(61);

			  for (var i = 0; i < arregloMalos.length; i++) {

					if(positionMatrizy==arregloMalos[i].j  && positionMatrizx-1==arregloMalos[i].i){

							auxNivel[arregloMalos[i].j][arregloMalos[i].i]=0;
							delete arregloMalos[i];

							if(arregloMalos[i]==null){
								console.log("si borraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");

							}

					}

				}
			}



	}else{
		espadaso=0;
	}

	if (keyIsDown('81')) {

		if(vista==1){

			MovimientoArco(68);
		}else if(vista==0){
			MovimientoArco(75);
		}else if(vista==3){
			MovimientoArco(82);
		}else if(vista==2){
			MovimientoArco(89);
		}
		/*if (flecha==null) {


			console.log(coordy+"cordyx"+coordx);
				crearFlecha(vista,coordy,coordx);

		}*/
	}else{
		disparo=0;
	}



}


var pintarSprints = function(tam){

	var caseOfNumber=0;
	for(var i=tam ;  i<=tam+9;i++){
		lolo[caseOfNumber]=i;
		caseOfNumber++;
	}

	switch(face){
			case 0:
				positionSprite = lolo[0];
				face=1;
			break;
			case 1:
				positionSprite = lolo[1];
				face=2;
			break;
			case 2:
				positionSprite = lolo[2];
				face=3;
			break;
			case 3:
				positionSprite = lolo[3];
				face=4;
			break;
			case 4:
				positionSprite = lolo[4];
				face=5;
			break;
			case 5:
				positionSprite = lolo[5];
				face=6;
			break;
			case 6:
				positionSprite = lolo[6];
				face=7;
			break;
			case 7:
				positionSprite = lolo[7];
				face=8;
			break;
			case 8:
				positionSprite = lolo[8];
				face=9;
			break;
			case 9:
				positionSprite = lolo[9];
				face=0;
			break;
		}
}




var moverEnemigo=function(auxNivel,arregloMalos){
	for (var i = 0; i < arregloMalos.length; i++) {
		direccionEnemigo=Math.floor((Math.random() * 4) +0);
		switch (direccionEnemigo)
		{
			case 0://arriba
				if(auxNivel[arregloMalos[i].j+1][arregloMalos[i].i]==0){
					auxNivel[arregloMalos[i].j+1][arregloMalos[i].i]=7;
					auxNivel[arregloMalos[i].j][arregloMalos[i].i]=0;
					image(linkSprites[2], auxNivel[arregloMalos[i].j],[arregloMalos[i].i]);
					arregloMalos[i].j++;
				}
			break;
			case 1://abajo
				if (auxNivel[arregloMalos[i].j-1][arregloMalos[i].i]==0) {
					auxNivel[arregloMalos[i].j][arregloMalos[i].i]=0;
					auxNivel[arregloMalos[i].j-1][arregloMalos[i].i]=7;
					arregloMalos[i].j--;
				}
			break;

			case 2://izquierda
				if (auxNivel[arregloMalos[i].j][arregloMalos[i].i-1]==0) {
					auxNivel[arregloMalos[i].j][arregloMalos[i].i-1]=7;
					auxNivel[arregloMalos[i].j][arregloMalos[i].i]=0;
					arregloMalos[i].i--;
				}
			break;

			case 3://derecha
				if (auxNivel[arregloMalos[i].j][arregloMalos[i].i+1]==0) {
					auxNivel[arregloMalos[i].j][arregloMalos[i].i+1]=7;
					auxNivel[arregloMalos[i].j][arregloMalos[i].i]=0;
					arregloMalos[i].i++;
				}
			break;
			default:
		}
	}
	quitarVida(positionMatrizx,positionMatrizy,arregloMalos);
}
