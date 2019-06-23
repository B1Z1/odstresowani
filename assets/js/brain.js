import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { AxesHelper } from 'three/src/helpers/AxesHelper';
import { FBXLoader } from 'three/examples/js/loaders/FBXLoader';
 
class Brain{
    constructor(){
        //-----------------THREE JS GENERAL OPTIONS
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.loader = new THREE.FBXLoader();
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.axesHelper = new THREE.AxesHelper(5);
        //-----------------------------------------

        //-------------------------Model File
        this.modelLink = 'http://odstresowani.portal.local.pl/wp-content/themes/odstresowani/assets/models/Mozgani/brain.fbx';
        this.object3D = [];
        //-----------------------------------

        //------------------------Container of Scene
        this.container = {
            element: document.querySelector('[data-dna-three]'),
        }
        this.container.width = this.container.element.offsetWidth;
        this.container.height = this.container.element.offsetHeight;
        //-------------------------------------------

        this.init();
    }

    init(){
        this.renderer.setSize( this.container.width, this.container.height );
        this.container.element.appendChild(this.renderer.domElement);
        this.scene.add(this.axesHelper);
        //------------Get Model By Link
        this.getModel();
        //-------------------

        //------------Light Around Scene
        this.lightScene();
        //-------------------

        this.camera.position.z = 1000;
    }

    lightScene(){
        let keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        keyLight.position.set(-100,0,100);
        let fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), .75);
        fillLight.position.set(100,0,100);
        let backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        backLight.position.set(100,0,-100);

        this.scene.add(keyLight);
        this.scene.add(fillLight);
        this.scene.add(backLight);
    }

    getModel(){
        this.loader.load(this.modelLink, (fbx) => {
            this.object3D = fbx;
            this.scene.add(fbx);

            //------------Update Function
            this.update();
            //-------------------
        }, undefined, (er) => { console.log(er); })
    }

    update(){
        requestAnimationFrame(()=>{ this.update(); });
        this.renderer.render(this.scene, this.camera);
    }

}


window.addEventListener('load', ()=>{
    new Brain();
});