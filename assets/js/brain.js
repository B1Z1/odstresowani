import { FBXLoader } from 'three/examples/js/loaders/FBXLoader';
 
class Brain{
    constructor(){
        this.counter = 0;
        //-----------------THREE JS GENERAL OPTIONS
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.loader = new THREE.FBXLoader();
        //-----------------------------------------

        //-------------------------Model File
        this.modelLink = 'https://odstresowani.pl/wp-content/uploads/brain.fbx';
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

        //------------Camera Position
        this.cameraPosition();
        //-------------------
        this.changePositionObject3D();
        window.addEventListener('resize', ()=>{
            this.updateResize();
        });
    }

    lightScene(){
        let keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 90%)'), 1);
        keyLight.position.set(-100,0,100);
        let fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), .75);
        fillLight.position.set(100,0,100);
        let backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        backLight.position.set(100,0,-100);

        this.scene.add(keyLight);
        this.scene.add(fillLight);
        this.scene.add(backLight);

        this.scene.background = new THREE.Color(0xf8f8f8);
    }

    cameraPosition(){
        this.camera.position.z = 8;
        this.camera.position.y = 1;
    }

    getModel(){
        this.loader.load(this.modelLink, (fbx) => {
            this.object3D = fbx;
            this.object3D.scale.x = .01;
            this.object3D.scale.y = .01;
            this.object3D.scale.z = .01;

            this.object3D.rotation.x = .2;
            this.object3D.rotation.y = -.8;
            this.object3D.rotation.z = .1;

            this.object3D.position.x = 5;
            this.object3D.position.y = -.5;
            this.object3D.position.z = 1;

            this.scene.add(this.object3D);

            //------------Update Function
            this.update();
            //-------------------
        }, undefined, (er) => { console.log(er); })
    }

    //-------------Updates size of canvas when window is resizes
    updateResize(){
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.container.width = this.container.element.offsetWidth;
        this.container.height = this.container.element.offsetHeight;
        this.renderer.setSize( this.container.width, this.container.height );
    }
    //----------------------------------------

    //-------------------Animation function
    update(){
        requestAnimationFrame(()=>{ this.update(); });
        this.counter++;
        this.renderer.render(this.scene, this.camera);
    }
    //-----------------------------------------

    //------------------Changed position of object3D
    changePositionObject3D(){
        window.addEventListener('mousemove', (ev) => {
            let clientX = ev.clientX / 5,
                clientY = ev.clientY / 5,
                positionX = clientX / window.innerWidth,
                positionY = clientY / window.innerHeight;
                
            this.object3D.rotation.y = positionX - .8;
            this.object3D.rotation.x = positionY + .2;
            this.object3D.rotation.z = positionY + .1;
        });
    }
    //-----------------------------------------
}


window.addEventListener('load', ()=>{
    new Brain();
});