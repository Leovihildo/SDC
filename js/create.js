var clear_spinner_1 = ()=>{
    document.querySelector(".spinner").classList.add("hidden");
    document.getElementById("second-page").classList.remove("hidden");
}
// Move to shoe editor
document.querySelector(".yes-btn").addEventListener('click', ()=>{
    document.querySelector(".intro").classList.add("hidden");
    document.querySelector(".spinner").classList.remove("hidden");
    const my_spinner_1 = setTimeout(clear_spinner_1, 8000);      
});

// Import Three.js and any other necessary libraries
// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.130.0/build/three.module.js';
// import { GLTFLoader } from 'https://cdn.rawgit.com/mrdoob/three.js/master/examples/jsm/loaders/GLTFLoader.js';
import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

// Set up the Three.js scene
// create a scene
const scene = new THREE.Scene();

// create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// create a camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// create an orbit controls object to move the camera around the scene
const controls = new OrbitControls( camera, renderer.domElement );

// add a light to the scene
const light = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 0, 0, 10 );
scene.add( light );

// load the shoe model
const loader = new GLTFLoader().setPath( 'images/gltf/' );;
loader.load( 'converse_max.gltf', function ( gltf ) {
    // add the loaded mesh to the scene
    const mesh = gltf.scene.children[ 0 ];
    mesh.scale.set( 0.5, 0.5, 0.5 ); // scale down the mesh
    scene.add( mesh );
});

// render the scene
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();

// Handle user input
// let isDragging = false;
// let previousMousePosition = {
//   x: 0,
//   y: 0
// };

// function handleInput(event) {
//   const deltaMove = {
//     x: event.offsetX - previousMousePosition.x,
//     y: event.offsetY - previousMousePosition.y
//   };

//   if (isDragging) {
//     const deltaRotationQuaternion = new THREE.Quaternion()
//       .setFromEuler(new THREE.Euler(
//         toRadians(deltaMove.y * 1),
//         toRadians(deltaMove.x * 1),
//         0,
//         'XYZ'
//       ));

//     shoe.quaternion.multiplyQuaternions(deltaRotationQuaternion, shoe.quaternion);
//   }

//   previousMousePosition = {
//     x: event.offsetX,
//     y: event.offsetY
//   };
// }

function toRadians(angle) {
  return angle * (Math.PI / 180);
}

document.addEventListener('mousedown', () => {
  isDragging = true;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', handleInput);
