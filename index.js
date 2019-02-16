const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 750, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
renderer.setClearColor("#00244e")
document.body.appendChild( renderer.domElement )
camera.position.z = 5

window.addEventListener( 'resize', () => {
	let width = window.innerWidth
	let height = window.innerHeight
	renderer.setSize( width, height )
	camera.aspect = width / height
	camera.updateProjectionMatrix()
})

var geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5)
var material = new THREE.MeshStandardMaterial( { color: 0x9d25f5, flatShading: false, metalness: 0, roughness: 1, wireframe: true })
var cube = new THREE.Mesh ( geometry, material )
scene.add( cube )

// estructura
var geometry = new THREE.BoxGeometry( 2, 2, 1)
var material = new THREE.MeshBasicMaterial( {
	color: "#0a832b", wireframe: true, transparent: true
})
var wireframeCube = new THREE.Mesh ( geometry, material )
scene.add( wireframeCube )

var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
scene.add( ambientLight )
    
var pointLight = new THREE.PointLight( 0x952ce2, 3 );
pointLight.position.set( 30, 50, 60 );
scene.add( pointLight );


function animate() {
	requestAnimationFrame( animate )
	cube.rotation.x += 0.08;
	cube.rotation.y += 0.08;
    // gira la estructura del cubo
	wireframeCube.rotation.x -= 0.02;
	wireframeCube.rotation.y -= 0.02;
	renderer.render( scene, camera )
}
animate()