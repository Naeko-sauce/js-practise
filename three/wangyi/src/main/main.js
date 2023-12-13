import * as  THREE from "three"
// console.log(THREE)
//创建一个场景
const scene = new THREE.Scene()
//要看得到东西就得创建一个相机,透视相机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight,
    //近端
    0.1,
    // 远端
    1000
)
//相机对象的位置
camera.position.set(0, 0, 10)
//把相机添加到场景
scene.add(camera)
//添加物体
const geometry = new THREE.BoxGeometry(1, 1, 1)
const colora = new THREE.MeshBasicMaterial({
    color: 'red'
})
const cube = new THREE.Mesh(geometry, colora)
scene.add(cube)
//初始化渲染器
const renderer = new THREE.WebGLRenderer()
//设置渲染器的大小
renderer.setSize(window.innerWidth, window.innerHeight)
//把渲染器添加到页面中
document.body.appendChild(renderer.domElement)
// 开始渲染
renderer.render(scene, camera)
