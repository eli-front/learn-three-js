const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
camera.position.z = 50;

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

const geometry = new THREE.TorusKnotGeometry( 15, 5, 100, 25 );
const material = new THREE.MeshLambertMaterial( { color: 0xffffff, emissive: 0xff22, wireframe: true } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

const ptLight = new THREE.PointLight(0xFFFFFF, 1, 500);
ptLight.position.set(10, 0, 40);
scene.add(ptLight);

const ambientLight = new THREE.AmbientLight( 0x404040 );
scene.add( ambientLight );

function animate() {
	requestAnimationFrame( animate );
  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;
  torusKnot.rotation.z += 0.01;
	renderer.render( scene, camera );
}
animate();
