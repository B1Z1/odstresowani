//Import Map Component
import OdstresowaniMap from './components/map-relax';
//Import VideoGallery Component
import VideoGallery from './components/videogallery';


window.addEventListener('load', ()=>{
    /**
     *
     * Remove all empty containers from page
     *
     */
    (function () {
        let containers = [... document.querySelectorAll('.c-container')],
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

    let Mslider = (function(){        
        return {
            'init': function(object){
                init(object);
            },
        }

        /**
         * 
         * Initialize function
         * @Cards
         * @Pagination_block
         * 
         */
        function init(object){
            let slider = document.querySelector(`.${object.slider_block}`),
                slider_cards = [... document.querySelectorAll(`.${object.slider_cards}`)],
                slider_pagination = document.querySelector(`.${object.slider_pagination}`),
                classes = {
                    pag_active: object.classes.pag_active,
                    card_active:  object.classes.card_active,
                    pagination_el:  object.classes.pagination_el,
                    extra: object.classes.extra,
                },
                has_back = object.slider_has_back == '' ? false:true;
            if ( slider ){
                /**
                 *
                 * Loop for generate pagination list
                 * IF there is index = 0 -> give for card active class
                 *                       -> give for block background image
                 *
                 */
                slider_cards.forEach(function(el, index){
                    let card = el,
                        card_title = card.dataset.title,
                        card_name = card.dataset.name,
                        card_back = '';

                    /**
                     *
                     * Trick for initialize "Swiper.js", because
                     * If element is hidden, that library isn't see
                     * the block
                     *
                     */
                    Mclass.removeClass(classes.card_active, card);

                    if ( has_back ){
                        card_back = card.querySelector(`.${object.slider_has_back}`).dataset.back;
                        has_back = true;
                    }

                    if ( index == 0 ){
                        Mclass.addClass(classes.card_active, card);
                        if ( has_back ){
                            slider.style.backgroundImage = `url(${card_back})`;
                        }
                    }

                    generatePaginationEl(slider_pagination, card_name, card_title, index, classes, object.pagination_wrap);
                });

                /**
                 *
                 * Getting all pagination elements
                 *
                 */
                let slider_pagination_elements =  [... slider_pagination.children];

                /**
                 *
                 * Loop for pagination elements
                 * On start find card by data-name
                 * Take background url from data-back
                 *
                 * By click on pagination-button
                 * Change slide
                 *
                 */
                slider_pagination_elements.forEach(function(el){
                    let button = el,
                        button_name = button.dataset.name,
                        card = slider_cards.find((el)=>{
                            if ( el.dataset.name == button_name )
                                return el;
                        }),
                        card_back = '';

                    if ( has_back ){
                        card_back = card.querySelector(`.${object.slider_has_back}`).dataset.back;
                    }

                    button.addEventListener('click', function(){
                        slider_cards.map((el)=>{
                            Mclass.removeClass(classes.card_active, el);
                        });
                        slider_pagination_elements.map((el)=>{
                            Mclass.removeClass(classes.pag_active, el);
                        });

                        Mclass.addClass(classes.card_active, card);
                        Mclass.addClass(classes.pag_active, button);

                        if ( has_back ){
                            slider.style.backgroundImage = `url(${card_back})`;
                        }

                    });
                });
            }
        } /** End of Init function */

        /**
         * 
         * Generate element for pagination block
         * @Pagination_block
         * @Name
         * @Text
         * If position of element is "0" add active class for pagination element
         * 
         */
        function generatePaginationEl(pagination_block, name, text, pos, classes, wrapper){
            let template = document.createElement('li'),
                wrapper_el = '';

            Mclass.addClass(classes.pagination_el, template);
            template.className +=  ` ${classes.extra}`;
            pos == 0 ? Mclass.addClass(classes.pag_active, template):null;

            template.dataset.name = name;

            if ( wrapper != '' ){
                wrapper_el = document.createElement(wrapper.wrapper);
                if ( wrapper.classes != ''){
                    wrapper_el.className += wrapper.classes;
                }
                wrapper_el.textContent = text;
                template.appendChild(wrapper_el);
            }
            else{
                template.textContent = text;
            }
            
            pagination_block.appendChild(template);
        }

    }());

    let MExtentions = (function(){
        return {
            //Function for relax page
            'relax' : function(object){
                relax(object);
            },
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

        //Function for generate image to synget
        function relax(object){
            let svgs = [... document.querySelectorAll(object.svg)],
                slides = [... document.querySelectorAll(object.slide)];

            slides.forEach(function(slide, index){
                let src = slide.dataset.image;
                svgs[index].contentDocument.querySelector('image').setAttribute('xlink:href', src);
            });
        }
    }());

    /**
     * 
     * Initialize slider proposition posts
     * 
     */
    let propSlider = new Mslider.init({
        slider_block: 'prop-slider',
        slider_cards: 'prop-slider_card',
        slider_pagination: 'prop-slider_pagination',
        slider_has_back: 'prop-slider_card__back',
        slider_title: 'prop-slider_card__title',
        pagination_wrap: {
            wrapper: 'span',
            classes: '',
        },
        classes: {
            pag_active: 'prop-slider_pagination__active',
            card_active: 'prop-slider_card__active',
            pagination_el: 'prop-slider_pagination__el',
            extra: 'ml16 mr16',
        }
    });

    /**
     * 
     * Initialize slider Recent posts
     * 
     */
    setTimeout(()=>{
        let recentSlider = new Mslider.init({
            slider_block: 'swiper-recent_posts',
            slider_cards: 'recent-posts_vh',
            slider_pagination: 'recent-posts_vh_pagination',
            slider_has_back: '',
            slider_title: 'recent-posts_vh',
            pagination_wrap: {
                wrapper: 'h3',
                classes: 'reset'
            },
            classes: {
                pag_active: 'recent-posts_nav__active',
                card_active: 'recent-posts_vh__active',
                pagination_el: 'recent-posts_nav__el',
                extra: 'ml16 mr16',
            }
        });
    }, 500);

    /**
     * 
     * Initialize button press for mobile menu
     * 
     */
    new Mheader.mobileList();

    /**
     * 
     * Initialize Relax function
     * 
     */
    new MExtentions.relax({
        slide: '.block-relax__slide',
        svg: '.block-relax__logo',
    });

    /**
     * 
     * Initialize Relax function
     * 
     */
    new MExtentions.infinityScroll({
        container: '.infinity-scroll',
    });

    /**
     * 
     * Initialize header on scroll function
     * 
     */
    new Mheader.header_scroll();

    /**
     * 
     * Map include
     * 
     */
    let relaxMap = new OdstresowaniMap({
        mapboxGl: {
            accessToken: 'pk.eyJ1IjoiaWx5YW1pc2hraW4iLCJhIjoiY2p1aWU0YnFtMGRqMjRlbmJzazljZWp0cCJ9.zrZV2rr_u2BwoHK7f7lZtg',
            mapStyle: 'mapbox://styles/ilyamishkin/cjuifjhya0m221fqkauhk7fyv',
            center: [-74.50, 40],
            zoom: 9
        },
        link: {
            element: '[data-rest-link]',
            data: 'restLink'
        },
        element: '[data-map-init]',
        data: ['title', 'content', 'image', '_adress', '_full_adress', '_phone']
    });

    /**
     * 
     * VideoGallery Init
     * 
     */
    let videogallery = new VideoGallery({
        element: {
            container: 'block-videogallery__element',
            active: 'block-videogallery__element--active'
        },
        video: 'block-videogallery__video',
        controls: {
            container: 'block-videogallery__controls',
            play: 'video-controls__play',
            stop: {
                el: 'video-controls__stop',
                active: 'video-controls__stop--active'
            },
        }
    });
});

