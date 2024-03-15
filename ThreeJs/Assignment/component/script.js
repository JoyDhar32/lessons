/*
  mmp 310 threejs demo part 3
  adding first person controls
  https://threejs.org/examples/?q=pointerlock#misc_controls_pointerlock
*/

// global variables
let scene, camera, renderer, controls; // initialization, declaration
let sky, sun;
let duck;

let raycaster;
const objects = [];

// player movement variables
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let isJumping = false;
let canJump = false;

let prevTime = performance.now();
const velocity = new THREE.Vector3(); // movement of camera/player
const direction = new THREE.Vector3(); // direction of camera/player
const speed = 10;
const moveSpeed = 400;
const mass = 100;
const gravity = 9.8;
const jumpSpeed = 350;

const ambientColor = 0x394040;

// invoking, calling a function
init();
load(); // onLoad calls init etc.

function load() {
  // loading manager
  const manager = new THREE.LoadingManager();
  manager.onLoad = function () {
    onLoad();
  };

  // load gltf
  const gltfLoader = new THREE.GLTFLoader( manager );
  const gltfURL =
    "https://cdn.glitch.global/3bbd10eb-4c8c-4be9-b625-ecd05c7361c5/rubber_duck.glb?v=1664492164732";
  gltfLoader.load(gltfURL, function ( glb ) {
    duck = glb.scene;
    duck.position.set(20, 5, -4);
    // duck.scale.set(10, 10, 10);
    scene.add(duck);
  });

  const loader = new THREE.ObjectLoader( manager );
  loader.load("data/bench.json", function ( bench ) {
    // callback function
    // onLoad();
    bench.position.set(20, 0.5, -5);
    bench.scale.set(25, 25, 25);
    scene.add(bench);
    console.log(bench);
    bench.traverse(function(child) {
      if (child.name === "BenchSeat") {
        objects.push(child);        
      }
    });
    
  });
}

function onLoad() {
  lighting();
  scenery();
  animate(); // start the scene
}

// init, initialize, set up the three js scene
function init() {
  const bgColor = new THREE.Color(1, 1, 1); // 0-255, 0-1
  scene = new THREE.Scene(); // assignment
  // scene.background = bgColor; // scene bg color

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 100;
  camera.position.y = 10;
  // camera.zoom = 3;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;

  // from sky example
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.5;
  document.body.appendChild(renderer.domElement);

  controls = new THREE.PointerLockControls( camera, renderer.domElement );
  scene.add( controls.getObject() );
  
  // add keyboard events
  document.addEventListener( 'keydown', onKeyDown );
	document.addEventListener( 'keyup', onKeyUp );
  
  renderer.domElement.addEventListener( 'click', function () {
    controls.lock();
  } );
  
  // direction is -1 on y
  raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, - 1, 0 ), 0, 10 );
  
}

// events
function onKeyDown( event ) {
  const code = event.code;
  if (code === 'KeyA' || code === 'ArrowLeft') {
    moveLeft = true;
  }
  if (code === 'KeyD' || code === 'ArrowRight') {
    moveRight = true;
  }
  if (code === 'KeyW' || code === 'ArrowUp') {
    moveForward = true;
  }
  if (code === 'KeyS' || code === 'ArrowDown') {
    moveBackward = true;
  }
  if (code === 'Space') {
    isJumping = true;
  }
}

function onKeyUp( event ) {
  const code = event.code;
  if (code === 'KeyA' || code === 'ArrowLeft') {
    moveLeft = false;
  }
  if (code === 'KeyD' || code === 'ArrowRight') {
    moveRight = false;
  }
  if (code === 'KeyW' || code === 'ArrowUp') {
    moveForward = false;
  }
  if (code === 'KeyS' || code === 'ArrowDown') {
    moveBackward = false;
  }
  if (code === 'Space') {
    isJumping = false;
  }
}

function lighting() {
  const ambient = new THREE.AmbientLight(ambientColor); // soft white light // 0x404040 default
  scene.add(ambient);

  const hemi = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
  scene.add(hemi);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(50, 50, -50);
  scene.add(directionalLight);

  // sky
  sky = new THREE.Sky();
  sky.scale.setScalar(450000);
  scene.add(sky);

  sky.material.uniforms.mieCoefficient.value = 0.005;
  sky.material.uniforms.mieDirectionalG.value = 0.7;

  sun = new THREE.Vector3();

  let elevation = 2;
  let azimuth = 180;

  // Math.PI to 360
  const phi = THREE.MathUtils.degToRad(90 - elevation);
  const theta = THREE.MathUtils.degToRad(azimuth);

  sun.setFromSphericalCoords(1, phi, theta);

  sky.material.uniforms.sunPosition.value.copy(sun);
}

function scenery() {
  // ground
  const noiseTextureURL =
    "https://cdn.glitch.global/28e73932-4e53-4402-8dd9-973314542393/256x256_Dissolve_Noise_Texture.png?v=1663195178908";

  const grassTextureURL =
    "https://cdn.glitch.global/28e73932-4e53-4402-8dd9-973314542393/_grass_4__grass_textures_seamless_turf_lawn_green_ground_field_texture_5.jpg?v=1663195183829";

  const texture = new THREE.TextureLoader().load(grassTextureURL);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(16, 16);

  const geometry = new THREE.PlaneGeometry(1000, 1000);
  const material = new THREE.MeshStandardMaterial({
    color: 0x98fb98,
    side: THREE.DoubleSide,
    map: texture,
  });

  const ground = new THREE.Mesh(geometry, material);
  ground.rotation.x = Math.PI / 2; // rotate 180 degrees
  scene.add(ground);
  // objects.push(ground);
  // console.log(objects);
  

  const noiseTexture = new THREE.TextureLoader().load(noiseTextureURL);
  noiseTexture.wrapS = THREE.RepeatWrapping;
  noiseTexture.wrapT = THREE.RepeatWrapping;
  noiseTexture.repeat.set(1, 4);

  // trees
  const treeHeight = 30;
  const trunkGeo = new THREE.CylinderGeometry(3, 5, treeHeight, 8, 1, true);
  const trunkMat = new THREE.MeshStandardMaterial({
    color: 0x695436,
    side: THREE.DoubleSide,
    map: noiseTexture,
  });
  const trunk = new THREE.Mesh(trunkGeo, trunkMat);
  trunk.position.set(0, treeHeight / 2, 0);
  scene.add(trunk);

  const leafGeo = new THREE.BoxGeometry(12, 12, 12);
  const leafMat = new THREE.MeshStandardMaterial({
    color: 0x68cc7a,
    map: noiseTexture,
  });
  const leaf1 = new THREE.Mesh(leafGeo, leafMat);
  leaf1.position.set(0, treeHeight, 0);
  leaf1.rotation.x = Math.random() * Math.PI;
  leaf1.rotation.z = Math.random() * Math.PI;
  scene.add(leaf1);
  
  

  const leaf2 = new THREE.Mesh(leafGeo, leafMat);
  leaf2.position.set(3, treeHeight, 1);
  leaf2.rotation.x = Math.random() * Math.PI;
  leaf2.rotation.z = Math.random() * Math.PI;
  scene.add(leaf2);

  const leaf3 = new THREE.Mesh(leafGeo, leafMat);
  leaf3.position.set(-3, treeHeight, 1);
  leaf3.rotation.x = Math.random() * Math.PI;
  leaf3.rotation.z = Math.random() * Math.PI;
  scene.add(leaf3);
  
  objects.push(leaf1);
  objects.push(leaf2);
  objects.push(leaf3);
  

  function cloudLayer(layerHeight, layerDistribution) {
    for (let i = 0; i < 1000; i++) {
      const radius = Math.random() * 10;
      const cloudGeo = new THREE.IcosahedronGeometry(radius, 1);
      const cloudMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const cloud = new THREE.Mesh(cloudGeo, cloudMat);
      const x = Math.random() * 1000 - 500;
      const y = Math.random() * layerDistribution + layerHeight;
      const z = Math.random() * 1000 - 500;
      cloud.position.set(x, y, z);
      scene.add(cloud);
    }
  }

  cloudLayer(50, 5);
  cloudLayer(100, 100);
}

function movementUpdate() {
  const time = performance.now(); // current time
  const delta = ( time - prevTime ) / 1000; // different in time
  // calculate amount of time since last render , in seconds
  
  // detect objects below the player
  raycaster.ray.origin.copy( controls.getObject().position ); // get the player position
	raycaster.ray.origin.y -= 10; // move down 10 units
  
  const intersections = raycaster.intersectObjects( objects, false );
  const onObject = intersections.length > 0;
  
  
  velocity.x -= velocity.x * speed * delta;
	velocity.z -= velocity.z * speed * delta;
  
  velocity.y -= mass * gravity * delta; // gravity
  
  direction.z = Number( moveForward ) - Number( moveBackward );
	direction.x = Number( moveRight ) - Number( moveLeft );
  direction.normalize();
  
  if ( moveForward || moveBackward ) velocity.z -= direction.z * moveSpeed * delta;
	if ( moveLeft || moveRight ) velocity.x -= direction.x * moveSpeed * delta;
  if ( isJumping ) {
    if ( canJump === true ) velocity.y += jumpSpeed;
		canJump = false;
    isJumping = false;
  }
  
  if (onObject) {
    velocity.y = Math.max( 0, velocity.y );
		canJump = true;
  }
  
  controls.getObject().position.y += ( velocity.y * delta ); // new behavior
  
  controls.moveRight( - velocity.x * delta );
	controls.moveForward( - velocity.z * delta );
  
  if ( controls.getObject().position.y < 10 ) {
    velocity.y = 0;
    controls.getObject().position.y = 10;
    canJump = true;
  }
  
  // console.log(velocity);
  
  prevTime = time;
  
}

function animate() {
  requestAnimationFrame(animate);
  
  if ( controls.isLocked === true ) {
   movementUpdate(); 
  }
  
  // duck.rotation.y += 0.01;
  
  renderer.render(scene, camera);
}
