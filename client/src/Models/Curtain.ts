import * as THREE from 'three';
import { BoxBufferGeometry, MeshBasicMaterial, Mesh, PlaneGeometry, MeshPhysicalMaterial, SphereGeometry } from 'three';

class Curtain {
    mesh: Mesh;

    constructor() {
        const geometry: SphereGeometry = new THREE.SphereGeometry(300, 15, 15);
        const material: MeshBasicMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
        const mesh: Mesh = new THREE.Mesh(geometry, material);
        mesh.rotation.x = 0.3;
        mesh.rotation.y = 0.3;
        mesh.name = 'curtain';
        mesh.position.x = 1;
        mesh.position.y = 1;
        mesh.position.z = 1;

        this.mesh = mesh;
    }

}

export {Curtain};