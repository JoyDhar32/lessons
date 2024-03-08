import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';



const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-10, 30, 30); // x, y, z


const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper);





// adding box
const boxGeometry = new THREE.BoxGeometry(); // default 1, 1, 1
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // green color for the box material
const box = new THREE.Mesh(boxGeometry, boxMaterial); // create the box with geometry and material
scene.add(box); // add the box to the scene

// create a plane
const planeGeometry = new THREE.PlaneGeometry(30, 30); // width, height
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff }); // blue color for the plane material
const plane = new THREE.Mesh(planeGeometry, planeMaterial); // create the plane with geometry and material
scene.add(plane); // add the plane to the scene
plane.rotation.x = -0.5 * Math.PI // rotate the plane 90 degrees around the x-axis
// adding a helper
const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);

// Renderer

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();


// Animation

const animate = (time) => {
    box.rotation.x = time / 1000;
    box.rotation.y = time / 1000;
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);


