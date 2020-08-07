<template lang="pug">
#preload.preload
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { TimelineMax, Expo } from "gsap";
// import { Curtain } from '../Models/Curtain';
// import { Preloader } from '../Models/Preloader';
// import { Mesh, Scene, PerspectiveCamera, Renderer, WebGLRenderer } from "three";
import * as THREE from "three";
// import { Path } from  '../Models/Path';

@Component
export default class Preload extends Vue {
  mounted(): void {
    const scene = new THREE.Scene(); // create the scene

    const camera = new THREE.PerspectiveCamera( // create the camera
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer(); // create renderer

    renderer.setSize(window.innerWidth, window.innerHeight); // set size

    const app = document.getElementById("preload"); // add canvas to dom

    if (app !== null) {
      app.appendChild(renderer.domElement);
    }

    window.addEventListener("resize", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;

      camera.updateProjectionMatrix();
    });

    const axis = new THREE.AxesHelper(10); // add axis to the scene

    scene.add(axis);

    const light = new THREE.PointLight(0xffffff, 1.0, 500); // add lights

    light.position.set(10, 0, 25);

    scene.add(light);

    const light2 = new THREE.DirectionalLight(0xffffff, 1.0);

    light2.position.set(-100, 100, -100);

    scene.add(light2);

    const material = new THREE.MeshLambertMaterial({
      color: 0x5e5e5e,
      wireframe: false,
    });

    const box = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1, 10, 10),
      material
    ); // create a box and add it to the scene
    scene.add(box);
    box.position.x = 0.5;
    box.rotation.y = 0.5;
    camera.position.set(3, 3, 10);

    const sphere = new THREE.Mesh(
      new THREE.SphereGeometry(1, 200, 200),
      material
    );
    scene.add(sphere);
    sphere.position.x = 3;
    sphere.position.y = 3;

    // camera.lookAt(scene.position);
    const t1 = new TimelineMax().delay(0.3);

    function render(): void {
      const timer = 0.002 * Date.now();
      const timer2 = 0.001 * Date.now();

      box.position.y = 0.5 + 0.5 * Math.sin(timer);
      box.rotation.x += 0.1;

    //   sphere.rotation.x += 0.1;
    //   sphere.rotation.y += 0.1;
      sphere.rotateZ(0.1);

      t1.to(box.scale, 1, { x: 2, ease: Expo.easeOut });
      t1.to(box.scale, 0.5, { x: 0.5, ease: Expo.easeOut });
      t1.to(box.position, 0.5, { x: 2, ease: Expo.easeOut });
      t1.to(box.position, 0.5, { x: 1, ease: Expo.easeOut });

      t1.to(box.rotation, 0.5, { x: Math.PI * 5, ease: Expo.easeOut });

      renderer.render(scene, camera);
    }

    function animate(): void {
      requestAnimationFrame(animate);
      render();
    }

    animate();
    // renderer.render(scene, camera);
  }
}
</script>

<style lang="scss">
// .lalala {
//     color: #595a7e;
// }
canvas {
  display: block;
  position: absolute;
}
</style>