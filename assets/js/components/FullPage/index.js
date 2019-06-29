export class FullPage{
    constructor(attr, object){
        //Global variables
        this.global = {
            behavior: 'smooth',
            timeout: 300,
            breakPoint: 1320,
            classes: {
                active: 'fullpage--active'
            },
            mouseEvent: (/Firefox/i.test(navigator.userAgent))? "DOMMouseScroll" : "mousewheel"
        }
        this.scrollBlock = false;
        
        //Variable with children and parent container
        this.buttons = [... document.querySelectorAll(object.buttons)];

        //Variable with children and parent container
        this.fullpage = {
            container: document.querySelector(attr),
            current: 0
        };
        if ( this.fullpage.container ){
            this.fullpage.children = this.fullpage.container.children;
            this.init();
        }
    }

    init(){
        if ( window.outerWidth > this.global.breakPoint )
            this.start();
        
        window.addEventListener('resize', ev => {
            if ( window.outerWidth < this.global.breakPoint ){
                this.toggleScroll(false);
                window.removeEventListener(this.global.mouseEvent, ev => {
                    this.onMouseWheelEvent(ev)
                }, {passive: false});
            }
            else
                this.start();
        });
    }

    start(){
        this.toggleScroll(true);

        if ( this.buttons.length > 0 )
            this.buttonClick();

        this.addActiveClass();
        this.scrollToActive();
        
        window.addEventListener(this.global.mouseEvent, ev => {
            this.onMouseWheelEvent(ev)
        }, {passive: false});
    }
    
    onMouseWheelEvent(ev){
        ev.preventDefault();

        if ( !this.scrollBlock ){
            this.blockFakeScroll();
            let nev = window.event || ev,
                deltaY = nev.detail ? nev.detail * 120 : nev.deltaY;

            this.removeActiveClass();

            if ( deltaY > 0 && this.fullpage.current < this.fullpage.children.length - 1 )
                this.fullpage.current++;
            else if ( deltaY < 0 && this.fullpage.current > 0 )
                this.fullpage.current--;

            this.addActiveClass();
            this.scrollToActive();
        }
    }

    //--------Block event after mouse wheel
    blockFakeScroll(){
        this.scrollBlock = true;
        setTimeout(()=>{
            this.scrollBlock = false;
        }, this.global.timeout);
    }
    //-----------

    //--------On click button, scroll to need position
    buttonClick(){
        this.buttons.forEach(el => {
            let button = el,
                to = Number(button.dataset.fullpageTo);
            button.addEventListener('click', ev => {
                this.fullpage.current = to;
                this.addActiveClass();
                this.scrollToActive();
            });
        });
    }
    //-----------

    //--------Add Active Class To Element
    addActiveClass(){
        this.fullpage.children[this.fullpage.current].classList.add(this.global.classes.active);
    }
    //-----------

    //--------Remove Active Class to Element
    removeActiveClass(){
        this.fullpage.children[this.fullpage.current].classList.remove(this.global.classes.active);
    }
    //-----------

    //--------Scroll To Active Element
    scrollToActive(){
        window.scrollTo(0, this.fullpage.children[this.fullpage.current].offsetTop);
    }
    //-----------

    //--------Toggle overflow by parameter
    toggleScroll(switcher){
        document.body.style.overflow = switcher ? 'hidden':'visible';
        document.documentElement.style.overflow = switcher ? 'hidden':'visible';
    }
    //-----------

}