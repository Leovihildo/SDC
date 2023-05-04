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
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.130.0/build/three.module.js';

// Set up the Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });

// Add some lighting to the scene
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 10);
scene.add(light);

// Define the shoe model
const shoeGeometry = new THREE.BoxGeometry(1, 1, 1);
const shoeMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
const shoe = new THREE.Mesh(shoeGeometry, shoeMaterial);
shoe.position.set(0, 0, -5);
scene.add(shoe);

// Load shoe model
import { GLTFLoader } from 'js/GLTFLoader.js';
const loader = new THREE.GLTFLoader();
loader.load('models/shoe.glb', (gltf) => {
  const shoeModel = gltf.scene;
  scene.add(shoeModel);

  // Add heels
  const heelGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 32);
  const heelMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const leftHeel = new THREE.Mesh(heelGeometry, heelMaterial);
  leftHeel.position.set(-2, 0.5, 0);
  shoeModel.add(leftHeel);
  const rightHeel = new THREE.Mesh(heelGeometry, heelMaterial);
  rightHeel.position.set(2, 0.5, 0);
  shoeModel.add(rightHeel);

  // Add laces
  const laceGeometry = new THREE.BoxGeometry(0.1, 0.5, 0.1);
  const laceMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const leftLace = new THREE.Mesh(laceGeometry, laceMaterial);
  leftLace.position.set(-0.5, 1, 1);
  shoeModel.add(leftLace);
  const rightLace = new THREE.Mesh(laceGeometry, laceMaterial);
  rightLace.position.set(0.5, 1, 1);
  shoeModel.add(rightLace);

  // Add brand logo
  const logoGeometry = new THREE.BoxGeometry(1, 1, 1);
  const logoTexture = new THREE.TextureLoader().load('textures/logo.png');
  const logoMaterial = new THREE.MeshBasicMaterial({ map: logoTexture });
  const logo = new THREE.Mesh(logoGeometry, logoMaterial);
  logo.position.set(0, 2, -2);
  shoeModel.add(logo);
});

// Set up the camera
camera.position.z = 5;

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

// Handle user input
let isDragging = false;
let previousMousePosition = {
  x: 0,
  y: 0
};

function handleInput(event) {
  const deltaMove = {
    x: event.offsetX - previousMousePosition.x,
    y: event.offsetY - previousMousePosition.y
  };

  if (isDragging) {
    const deltaRotationQuaternion = new THREE.Quaternion()
      .setFromEuler(new THREE.Euler(
        toRadians(deltaMove.y * 1),
        toRadians(deltaMove.x * 1),
        0,
        'XYZ'
      ));

    shoe.quaternion.multiplyQuaternions(deltaRotationQuaternion, shoe.quaternion);
  }

  previousMousePosition = {
    x: event.offsetX,
    y: event.offsetY
  };
}

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
