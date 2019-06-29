import { FullPage } from './components/FullPage/index';

window.addEventListener('load', ()=>{
    /**
     *
     * Remove all empty containers from page
     *
     */
    (function () {
        let containers = [... document.querySelectorAll('.l-Container')],
            p_el = [... document.querySelectorAll('p')];
        containers.forEach(function (el) {
            if ( el.children.length == 0 ){
                el.remove();
            }
        });
        p_el.forEach(function (el) {
            if ( el.childNodes.length == 0 ){
                el.remove();
            }
        });
    })();

    /**
     * 
     * Module of classlist manipulations
     * @addClass -> adding class to element (class, el)
     * @removeClass -> removing class to element (class, el)
     * @toggleClass -> toggling class to element (class, el)
     * @containClass -> check element of contain class (class, el)
     * 
     */
    let Mclass = (function(){
        return{
            'addClass': function(elclass, el){
                el.classList.add(elclass);
            },
            'removeClass': function(elclass, el){
                el.classList.remove(elclass);
            },
            'toggleClass': function(elclass, el){
                el.classList.toggle(elclass);
            },
            'containClass': function(elclass, el){
                return el.classList.contains(elclass);
            }
        }
    }()); 
 
    let Mheader = (function(){
        let header = document.querySelector('.l-header'),
            header_mobilenav = document.querySelector('.c-navigation__mobile'),
            buttons = {
                'close': document.querySelector('.c-navigation__close'),
                'open': document.querySelector('.c-hamburger'),
            };
        return {
            'mobileList': function(){ 
                if ( header && header_mobilenav){
                    mobileList(header_mobilenav, buttons);
                }
            },
            'header_scroll': function(){
                if ( header ){
                    header_scroll_func(header);
                }
            },
        }
    
        /**
         * 
         * Header on scroll change color
         * 
         */
        function header_scroll_func(header){
            let triggers = [... document.querySelectorAll('.header__triger')],
                window_height = 0 - (window.innerHeight - header.offsetHeight - 50),
                options = {
                    threshold: [0],
                    rootMargin: `0px 0px ${window_height}px 0px`
                },
                io = new IntersectionObserver(header_entry, options);

            /**
             * 
             * Observe all elements
             * 
             */
            triggers.forEach(function(el){
                io.observe(el);
            });


            /**
             * 
             * IO callback
             * When IO observe activate header_active
             * 
             */
            function header_entry(el){
                el.forEach(entry => {
                    let is = entry.isIntersecting;
                    if ( is ){
                        Mclass.addClass('l-header--active',header);
                    }
                    else{
                        Mclass.removeClass('l-header--active',header);
                    }
                });
            }
        }

    
        /**
         * 
         * MobileList function
         * Gives active class if user click on open/close buttons
         * (navigation menu, buttons)
         * 
         */
        function mobileList(nav, buttons){
            let close = buttons.close,
                open = buttons.open;
        
            open.addEventListener('click', function(){
                Mclass.containClass('c-navigation--mobactive', nav) ? Mclass.removeClass('c-navigation--mobactive', nav) :
                                                                       Mclass.addClass('c-navigation--mobactive', nav); 
            });
            close.addEventListener('click', function(){
                Mclass.removeClass('c-navigation--mobactive', nav);
            });
        }

    }());

    let MExtentions = (function(){
        return {
            //Infinity Scroll for 
            'infinityScroll' : function(object){
                infinityScroll(object);
            }
        }  

        //Infinity scroll for posts
        function infinityScroll(object){
            const container = document.querySelector(object.container),
                  cards = container ? [... container.children]:null;
            let newCards = []; 
            
            if ( cards ){
                //Clear container
                container.innerHTML = '';
                manipulateContainer();
                window.addEventListener('scroll', function(ev){
                    //Get breakpoint for initialize function
                    let containerBreakPoint = 0 - (container.getBoundingClientRect().top - this.innerHeight);
                    if ( containerBreakPoint > container.offsetHeight && cards.length > 0)
                        manipulateContainer();
                });
            }
            function manipulateContainer(){
                //Take from array first 9 elements
                newCards = cards.slice(0,9);
                //Remove from main array first 9 elements
                cards.splice(0,9);
                //Append container
                newCards.forEach(card=>{ container.appendChild(card); });
            }
        }
    }());

    /**
     * Initialize button press for mobile menu
     */
    new Mheader.mobileList();

    /**
     * Initialize Relax function
     */
    new MExtentions.infinityScroll({
        container: '.infinity-scroll',
    });

    /**
     * Initialize header on scroll function
     */
    new Mheader.header_scroll();


    let fullPage = new FullPage('[data-fullpage]', {
        buttons: '[data-fullpage-to]'
    });
});

