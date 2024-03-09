import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';

const scene = new THREE.Scene(); // create a scene

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000); // create a camera
camera.position.set(-10, 30, 30); // x, y, z


const axesHelper = new THREE.AxesHelper(5); // create an axes helper
scene.add(axesHelper); // add the axes helper to the scene

// adding grid a helper
const gridHelper = new THREE.GridHelper(30); // size, divisions
scene.add(gridHelper); // add the grid helper to the scene


// adding box
const boxGeometry = new THREE.BoxGeometry(3,3,3); // default 1, 1, 1
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // green color for the box material
const box = new THREE.Mesh(boxGeometry, boxMaterial); // create the box with geometry and material
scene.add(box); // add the box to the scene

// create a plane
const planeGeometry = new THREE.PlaneGeometry(30, 30); // width, height
const planeMaterial = new THREE.MeshBasicMaterial({ color: 'orange', side: THREE.DoubleSide }); // blue color for the plane material
const plane = new THREE.Mesh(planeGeometry, planeMaterial); // create the plane with geometry and material
scene.add(plane); // add the plane to the scene
plane.rotation.x = -0.5 * Math.PI // rotate the plane 90 degrees around the x-axis

//create a sphere
const sphereGeometry = new THREE.SphereGeometry(4, 50, 50); // radius 4, widthSegments 10, heightSegments 10
const sphereMaterial = new THREE.MeshBasicMaterial({ color: 'purple', wireframe: false }); // purple color for the sphere material
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial); // create the sphere with geometry and material
sphere.position.set(-10, 10, 0);    // x, y, z
scene.add(sphere); // add the sphere to the scene

// Renderer

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

// GUI
const gui = new dat.GUI();

const options={
    sphereColor:'#ffea00', // yellow
    planeColor:'#ff0000', // red
    boxColor:'#00ff00',
    wireframe:false,
    speed:0.01
};
// add color to the spare
gui.addColor(options,'sphereColor').onChange(function(e){
    sphere.material.color.set(e);
});

// add color to the plane
gui.addColor(options,'planeColor').onChange(function(e){
    plane.material.color.set(e);
});

// box color
gui.addColor(options,'boxColor').onChange(function(e){
    box.material.color.set(e);
});

// wireframe
gui.add(options,'wireframe').onChange((e)=>{
    sphere.material.wireframe = e;
    plane.material.wireframe = e;
    box.material.wireframe = e;
});

// step
gui.add(options,'speed',0,0.1);


// Animation

let step =0;
const animate = (time) => {
    box.rotation.x = time / 1000;
    box.rotation.y = time / 1000;
    step +=options.speed; // increment the step
    sphere.position.y=10*Math.abs(Math.sin(step));  // y = 10 * |sin(step)|
    renderer.render(scene, camera);

}

renderer.setAnimationLoop(animate);


