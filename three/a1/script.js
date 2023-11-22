//获取他的元素
const canvas = document.querySelector('.webgk')
const scene = new THREE.Scene();
//创建一个红色立方
const geometry = new THREE.BoxGeometry(1, 1, 1)
//创建基本网状结构材料
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
//把创建好的东西添加到场景中
const maeh = new THREE.Mesh(geometry, material)
scene.add(maeh)
//创建一个相机
const size = {
    width: 800,
    height: 600
}
const camera = new THREE.PerspectiveCamera(75, size.width / size.height)
//把相机添加到场景中
//移动相机轴
camera.position.z = 3
camera.position.y = 1
scene.add(camera)
//创建渲染器
console.log(canvas);
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
//设置渲染器的尺寸
renderer.setSize(size.width, size.height)
//把场景添加到渲染器中
renderer.render(scene, camera)