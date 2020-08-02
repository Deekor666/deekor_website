<<<<<<< HEAD
import * as THREE from 'three';
import { Camera, Scene, WebGLRenderer, Mesh } from 'three';

class Preloader {
    public scene: Scene; // 3д пространство, в котором располагаются источники света и элементы - мэши.
    protected camera: Camera; // Точка обзора сцены с определёнными хар-ками.
    protected renderer: WebGLRenderer;

    constructor() {
        this.scene = this.createScene();
        this.camera = this.createCamera();
        this.createLight();
        this.renderer = this.createRenderer();
        this.animate();
    }
=======
import snap from 'snapsvg';

class Preloader {
    width: number;
    height: number;
    background: string;
    svg: SVGSVGElement;
>>>>>>> 5e71d10b3210d94f6a740b0618f15b220a83bb86

    protected createScene() {
        const scene: Scene = new THREE.Scene();
        const axis = new THREE.AxesHelper(1000);
        scene.add(axis);
        return scene;
    }

    protected createCamera() {
        const camera: Camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000);
        camera.position.set(200, 200, 2000);
        return camera;
    }

<<<<<<< HEAD
    protected createLight() {
        const ambient = new THREE.AmbientLight(0xffffff);

        this.scene.add(ambient);
    }

    protected createRenderer() {
=======
    createElement() {
        const svg: SVGSVGElement = snap('#preloader');
        svg.setAttribute('width', this.width + 'px');
        svg.setAttribute('height', this.height + 'px');
        svg.style.position = 'absolute';
        svg.setAttribute('height', this.height + 'px');
        svg.setAttribute('x','0');
        svg.setAttribute('y','0');
        svg.style.background = this.background;
        svg.style.opacity = '1';

        // svg.setAttribute('fill', 'black');

        return svg;
    }

    addElement(svg: HTMLElement, id: string): void {
>>>>>>> 5e71d10b3210d94f6a740b0618f15b220a83bb86
        const preload: HTMLElement | null = document.getElementById('preload');
        this.renderer = new THREE.WebGLRenderer();
        this.updateRendererSize();
        if(preload !== null) {
            preload.appendChild(this.renderer.domElement);
        }
        return this.renderer;
    }

    protected updateRendererSize() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    protected animate() {
        window.requestAnimationFrame(() => this.animate());

        this.renderer.render(this.scene, this.camera);
    }

    public addMesh(mesh: Mesh) {
        this.scene.add(mesh);
    }

    public cameraPositionSet(x: number, y: number, z: number) {
        this.camera.position.set(x, y, z);
    }
}

export { Preloader };