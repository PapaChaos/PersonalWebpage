var SPEED = 0.01;
var box;
var mainMesh;
var plane;
var renderer;
var scene;
var camera;
var moon;
var moonpos;

function init(){
	console.log(THREE);
	scene = new THREE.Scene();
	var stats = new Stats();
	
	document.body.appendChild(stats.dom);
	//var gui = new dat.GUI();
	
	//Perspective Camera
	
	camera = new THREE.PerspectiveCamera(
		45,
		window.innerWidth/window.innerHeight,
		1,
		1000
	);
	
	
	//Ortographic
	/*
	camera = new THREE.OrthographicCamera(
		-15,
		15,
		15,
		-15,
		1,
		1000
	);
	*/

	camera.position.z = 5;
	camera.position.x = 1;
	camera.position.y = 2;
	camera.lookAt(new THREE.Vector3(0, 0,0 ));

	var enableFog = false;

	if (enableFog){
		scene.fog = new THREE.FogExp2(0xffffff, 0.2);			
	} 

	
	var meshMaterial = getMaterial('standard', 'rgb(255,255,255)');
	var moonMaterial = getMaterial('standard', 'rgb(255,255,255)');
	mainMesh = getSphere(meshMaterial, 1, 24);
	
	moon = getSphere(moonMaterial, 0.2, 24);
	box = getBox(meshMaterial, 1, 1, 1);
	box.isVisible = false;
	var fbxloader = new THREE.FBXLoader();
	var loader = new THREE.TextureLoader();
	
	fbxloader.load('/public/inc/Meshes/Ice.fbx', function (object){
		var colorMap = loader.load('/public/inc/MeshTextures/Moon/moon.jpg');
		var NormalMap = loader.load('/public/inc/MeshTextures/Moon/moon-normal.jpg');
	
		object.traverse(function(child){
			if (child.name == 'Plane'){
				child.visible = false;
			}
			child.material = meshMaterial;
			meshMaterial.map = colorMap;
			meshMaterial.normalMap = NormalMap;	
			/*if(child.name == 'Infinite'){
			
			}*/
		});
		object.scale.x = 10;
		object.scale.y = 10;
		object.scale.z = 10;
		
		object.position.x = 2;
		object.position.y = 0;
		
		scene.add(object);
		});
	
	meshMaterial.map = loader.load('/public/inc/MeshTextures/Earth/earth.png');
	meshMaterial.normalMap = loader.load('/public/inc/MeshTextures/Earth/earth-normal.png');
	
	moonMaterial.map = loader.load('/public/inc/MeshTextures/Moon/moon.png');
	moonMaterial.normalMap = loader.load('/public/inc/MeshTextures/Moon/moon-normal.png');
	var texture = meshMaterial.map;
	// texture.wrapS = THREE.RepeatWrapping;
	// texture.wrapT = THREE.RepeatWrapping;
	// texture.repeat.set(2, 2);
	
	meshMaterial.roughness = 0.58;
	meshMaterial.metalness = 0.2;
	moonMaterial.roughness = 0.58;
	moonMaterial.metalness = 0.2;
	
	var particleGeo = new THREE.Geometry();
	var particleMat = new THREE.PointsMaterial ({
		color: 'rgb(255,255,255)',
		size: (0.1+(Math.random()*0.1)),
	});
	
	var particleCount = 1000;
	var particleDistance = 200;
	
	for (var i=0; i<particleCount; i++){
		var posX = (Math.random() -0.5)* particleDistance;
		var posY = (Math.random() -0.5)* particleDistance;
		var posZ = -50;//(Math.random() -0.5)* particleDistance;
		var particle = new THREE.Vector3(posX,posY,posZ);
		
		particleGeo.vertices.push(particle);
	}
	var particleSystem = new THREE.Points(
		particleGeo,
		particleMat
	);
	
	scene.add(particleSystem);
	
	/*gui.add(meshMaterial, 'roughness', 0, 1);
	gui.add(meshMaterial, 'metalness', 0, 1);*/
	
	var pointLight = getPointLight(1);
	//var pointLight = getRectAreaLight(1);
	var ambientLight = getAmbientLight(1);
	//var sphere = getSphere(1);
	pointLight.position.y = 4;
	pointLight.position.x = 1;
	pointLight.position.z = 5;

	pointLight.intensity = 1;
	pointLight.penumbra = 1;
	
	/*
	gui.add(meshMaterial, 'roughness', 0, 1);
	gui.add(meshMaterial, 'metalness', 0, 1);
	gui.add(pointLight, 'intensity', 0, 10);
	gui.add(pointLight.position, 'y', -5, 5);
	gui.add(pointLight.position, 'x', -5, 5);
	gui.add(pointLight.position, 'z', -5, 5);
	*/
	//gui.add(pointLight, 'penumbra', 0, 1); //for spotlight
	
	 //<- Floor/Wall ->
	/*
	plane = getPlane(500);
	plane.name = 'floor';

	plane.rotation.x = Math.PI/2; //rotation uses radians and not degrees
	plane.position.y -= 1;//mainMesh.geometry.parameters.height/2;
	plane.position.z -= 10;
	
	scene.add(plane);*/

	moon.position.x = 2;
	moon.position.y = 0.5;
	moon.position.z = 1;
	
	scene.add(box);
	scene.add(pointLight);
	scene.add(mainMesh);
	box.add(moon);
	scene.add(ambientLight)

	
		//var sphere = getSphere(0.05);
		//pointLight.add(sphere);
	

	//box.add(plane);	//<--- to make box parent of plane 
	//pointLight.add(sphere);


	renderer = new THREE.WebGLRenderer(); //WebGLRenderer, Canvas, SVGRenderer
	
	// Shadow activation
	renderer.shadowMap.enabled = true;
	//
	
	renderer.setClearColor(0x000000); //Sets background color.
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.getElementById('webgl').appendChild(renderer.domElement);

	//var controls = new THREE.OrbitControls(camera, renderer.domElement);

	update(renderer, scene, camera, stats);
	//render();
}

function getBox(material, w,h,d){
	var geometry = new THREE.BoxGeometry(w,h,d);
	var material2 = material;
	
	var mesh = new THREE.Mesh(
	geometry,
	material2
	);
	mesh.castShadow = true;
	
	return mesh;
}

function getPlane(size){
	var geometry = new THREE.PlaneGeometry(size, size);
	var material = new THREE.MeshPhongMaterial({
		color: 'rgb(120,120,120)',
		side: THREE.DoubleSide
	});
	
	var mesh = new THREE.Mesh(
	geometry,
	material
	);
	mesh.receiveShadow = true;
	return mesh;
}

function getSphere(material, size, segments){
	var geometry = new THREE.SphereGeometry(size, segments, segments);
	var obj = new THREE.Mesh(geometry, material);

	obj.castShadow = true;

	return obj;
}

function rotateMainMesh() {
    //mainMesh.rotation.x -= SPEED * 2;
    mainMesh.rotation.y -= SPEED/4;
    //mainMesh.rotation.z -= SPEED * 3;
}

function rotateBoxMesh() {
    //mainMesh.rotation.x -= SPEED * 1.8;
    box.rotation.y -= SPEED/5;
    //mainMesh.rotation.z -= SPEED * 2;
}
function rotateMoonMesh() {
    //mainMesh.rotation.x -= SPEED * 2;
    moon.rotation.y = 90 +(SPEED/5);
	moon.position.x = 2;
	moonpos += 1;
    //mainMesh.rotation.z -= SPEED * 3;
}


init();

function update(renderer, scene, camera, stats)
{
		renderer.render( scene, camera );
		stats.update();
		rotateMainMesh();
		rotateMoonMesh();
		rotateBoxMesh();
		requestAnimationFrame(function (){
			update(renderer, scene, camera, stats);
		});
}

function getPointLight(intensity){
	var light = new THREE.PointLight(0xffffff, intensity);
	light.castShadow = true;
	
	return light;
}

function getSpotLight(intensity){
	var light = new THREE.SpotLight(0xffffff, intensity);
	light.castShadow = true;
	
	return light;
}

function getDirectionalLight(intensity){
	var light = new THREE.DirectionalLight(0xffffff, intensity);
	light.castShadow = true;
	light.shadow.camera.left = -5;
	light.shadow.camera.bottom = -5
	light.shadow.camera.right = 5;
	light.shadow.camera.top = 5;
	
	return light;
}

function getAmbientLight(intensity){
	var light = new THREE.AmbientLight('rgb(10,30,50)', intensity);
	
	return light;
}
function getRectAreaLight(intensity){
	var light = new THREE.RectAreaLight('rgb(10,30,50)', intensity);
	
	return light;
}

function getMaterial(type, color){
	var selectedMaterial;
	var materialOptions = {
		color: color === undefined ? 'rgb(255,255,255)' : color,
		
	};
	switch (type){
		case 'basic':
			selectedMaterial = new THREE.MeshBasicMaterial(materialOptions);
			break;
		
		case 'lambert':
			selectedMaterial = new THREE.MeshLambertMaterial(materialOptions);
			break;
			
		case 'phong':
			selectedMaterial = new THREE.MeshPhongMaterial(materialOptions);
			break;
			
		case 'standard':
			selectedMaterial = new THREE.MeshStandardMaterial(materialOptions);
			break;
		
		default:
			selectedMaterial = new THREE.MeshBasicMaterial(materialOptions);
			break;
	}
	return selectedMaterial;
	
	
}