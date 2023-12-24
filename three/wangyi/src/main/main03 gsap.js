import * as  THREE from "three"
// console.log(THREE)
//导入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import gsap from 'gsap';
//控制物体移动

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
//

scene.add(cube)

//初始化渲染器
const renderer = new THREE.WebGLRenderer()
//设置渲染器的大小
renderer.setSize(window.innerWidth, window.innerHeight)
//把渲染器添加到页面中
document.body.appendChild(renderer.domElement)
// 开始渲染

//创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement)
//设置一个渲染函数
//添加坐标轴辅助器
const axes = new THREE.AxesHelper(5)
//设置控制器阻尼效果
controls.enableDamping = true
//添加到场景当中
scene.add(axes)
//物体缩放
cube.scale.x = 2
cube.scale.y = 2
//物体的旋转
cube.rotation.x = Math.PI / 4

const move = gsap.to(cube.position, {
    //设置循环次数-1就是无限循环
    repeat: -1,
    yoyo: true,
    delay: 2,
    x: 5, duration: 5, onStart: () => {
        console.log('开始')
    },
    onComplete: () => {
        console.log('结束')
    }
})
document.addEventListener('click', () => {
    console.log(move);
    if (move.isActive()) {
        move.pause()
    } else {
        move.resume()
    }


})

//旋转
gsap.to(cube.rotation, { y: Math.PI / 2, duration: 5, repeat: -1 })
function rendera() {
    controls.update()
    renderer.render(scene, camera)
    //渲染下一帧的时候就会调用render函数
    requestAnimationFrame(rendera)
}
rendera()
//监听画面变化，更新渲染画面
window.addEventListener('resize', () => {
    //更新摄像头
    camera.aspect = window.innerWidth / window.innerHeight;
    //更新摄像机的投影矩阵
    camera.updateProjectionMatrix();
    //更新渲染器
    renderer.setSize(window.innerWidth, window.innerHeight)
    //设置渲染器的像素比
    renderer.setPixelRatio(window.devicePixelRatio)
})