import { Application, Container, Loader, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});


// adaptar tamaño lienzo a ventana
window.addEventListener("resize", ()=>{
	
	const scaleX = window.innerWidth / app.screen.width; //ancho navegador dividido x ancho lienzo
	const scaleY = window.innerHeight / app.screen.height;
	const scale = Math.min(scaleX,scaleY);

	const gameWidth = Math.round(app.screen.width * scale);
	const gameHeight = Math.round(app.screen.height * scale);
	
	const marginHorizontal = Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical = Math.floor((window.innerHeight - gameHeight) / 2);
	
	// const view = app.view as HTMLCanvasElement;

	app.view.style.width = gameWidth + "px";
	app.view.style.height = gameHeight + "px";

	app.view.style.marginLeft = marginHorizontal + "px"; //marginHorizontal.toString()  para convertir a string
	// app.view.style.marginRight = marginHorizontal + "px";
	app.view.style.marginTop = marginVertical + "px";
	// app.view.style.marginBottom = marginVertical + "px";
});
window.dispatchEvent(new Event("resize"));


Loader.shared.add({url: "./clampy.png", name: "Clampy"});
Loader.shared.add({url: "./shin-chan.png", name: "Shinchan"});
Loader.shared.add({url: "./hat.png", name: "Hat"});

Loader.shared.onComplete.add(()=>{  //al completar la carga d lo anterior (loader), ejecutar la siguiente función
const shin: Sprite = Sprite.from("Shinchan");
const hat: Sprite = Sprite.from("Hat");

shin.anchor.set(0.5);
hat.anchor.set(0.5);
hat.scale.set(0.2);
hat.position.set(70,-210);

const shinWithHat: Container = new Container();

shinWithHat.addChild(shin);  // agregar una instancia al stage
shinWithHat.addChild(hat);

shinWithHat.scale.set(0.5);
shinWithHat.position.set(320,240);

app.stage.addChild(shinWithHat);

console.log(hat.parent.toGlobal(hat.position));
});

Loader.shared.load(); // ?



