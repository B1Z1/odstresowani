export default class{
    constructor(){
        //-----------------THREE JS GENERAL OPTIONS
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        //-----------------------------------------

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
    }

}