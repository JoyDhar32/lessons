import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import './style.css';
// creating scene
const scene = new THREE.Scene();

// creating a spare gemetry
const geometry = new THREE.SphereGeometry(2,64,64); // radius, widthSegments, heightSegments
const material= new THREE.MeshStandardMaterial({
    color:'#00ff83',
    
})

// creating a mesh
const mesh = new THREE.Mesh(geometry, material); // geometry and material are required
scene.add(mesh);

// creating a light
const pointLight = new THREE.PointLight(0xffffff, 1, 100); // color (hex), intensity, distance
pointLight.position.set(0,4,3); // x, y, z
scene.add(pointLight);
// creating a camera

const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 100); // field of view, aspect ratio, near, far
camera.position.set(0, 0, 10); // Move the camera back along the z-axis
scene.add(camera);


// creating a renderer

const canvas = document.getElementById('webThree'); // getting the canvas element
const renderer = new THREE.WebGLRenderer({canvas}); // canvas is the dom element
renderer.setSize(window.innerWidth, window.innerHeight); // setting the size of the renderer
const controls = new OrbitControls(camera,canvas);

renderer.render(scene, camera,controls); // rendering the scene
