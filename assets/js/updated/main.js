"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

window.onload = function () {
  /**
   *
   * Remove all empty containers from page
   *
   */
  (function () {
    var containers = _toConsumableArray(document.querySelectorAll('.container'));

    containers.forEach(function (el) {
      if (el.children.length == 0) {
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


  var Mclass = function () {
    return {
      'addClass': function addClass(elclass, el) {
        el.classList.add(elclass);
      },
      'removeClass': function removeClass(elclass, el) {
        el.classList.remove(elclass);
      },
      'toggleClass': function toggleClass(elclass, el) {
        el.classList.toggle(elclass);
      },
      'containClass': function containClass(elclass, el) {
        return el.classList.contains(elclass);
      }
    };
  }();

  var Mheader = function () {
    var header = document.querySelector('.header'),
        header_list = document.querySelector('.header_list'),
        header_mobilenav = document.querySelector('.header_mobilenav'),
        buttons = {
      'close': document.querySelector('.header_mobilenav__close'),
      'open': document.querySelector('.header_hamburger')
    };
    return {
      'mobileList': function mobileList() {
        if (header) {
          _mobileList(header_mobilenav, buttons);
        }
      },
      'header_scroll': function header_scroll() {
        if (header) {
          header_scroll_func(header);
        }
      }
      /**
       * 
       * Header on scroll change color
       * 
       */

    };

    function header_scroll_func(header) {
      var triggers = _toConsumableArray(document.querySelectorAll('.header__triger')),
          window_height = 0 - (window.innerHeight - header.offsetHeight - 50),
          options = {
        threshold: [0],
        rootMargin: "0px 0px ".concat(window_height, "px 0px")
      },
          io = new IntersectionObserver(header_entry, options);
      /**
       * 
       * Observe all elements
       * 
       */


      triggers.forEach(function (el) {
        io.observe(el);
      });
      /**
       * 
       * IO callback
       * When IO observe activate header_active
       * 
       */

      function header_entry(el) {
        el.forEach(function (entry) {
          var is = entry.isIntersecting;

          if (is) {
            Mclass.addClass('header__active', header);
          } else {
            Mclass.removeClass('header__active', header);
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


    function _mobileList(nav, buttons) {
      var close = buttons.close,
          open = buttons.open;
      open.addEventListener('click', function () {
        Mclass.containClass('header_mobilenav__active', nav) ? Mclass.removeClass('header_mobilenav__active', nav) : Mclass.addClass('header_mobilenav__active', nav);
      });
      close.addEventListener('click', function () {
        Mclass.removeClass('header_mobilenav__active', nav);
      });
    }
  }();

  var Mslider = function () {
    return {
      'init': function init(object) {
        _init(object);
      }
      /**
       * 
       * Initialize function
       * @Cards
       * @Pagination_block
       * 
       */

    };

    function _init(object) {
      var slider = document.querySelector(".".concat(object.slider_block)),
          slider_cards = _toConsumableArray(document.querySelectorAll(".".concat(object.slider_cards))),
          slider_pagination = document.querySelector(".".concat(object.slider_pagination)),
          classes = {
        pag_active: object.classes.pag_active,
        card_active: object.classes.card_active,
        pagination_el: object.classes.pagination_el,
        extra: object.classes.extra
      },
          has_back = object.slider_has_back == '' ? false : true;

      if (slider) {
        /**
         *
         * Loop for generate pagination list
         * IF there is index = 0 -> give for card active class
         *                       -> give for block background image
         *
         */
        slider_cards.forEach(function (el, index) {
          var card = el,
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

          if (has_back) {
            card_back = card.querySelector(".".concat(object.slider_has_back)).dataset.back;
            has_back = true;
          }

          if (index == 0) {
            Mclass.addClass(classes.card_active, card);

            if (has_back) {
              slider.style.backgroundImage = "url(".concat(card_back, ")");
            }
          }

          generatePaginationEl(slider_pagination, card_name, card_title, index, classes, object.pagination_wrap);
        });
        /**
         *
         * Getting all pagination elements
         *
         */

        var slider_pagination_elements = _toConsumableArray(slider_pagination.children);
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


        slider_pagination_elements.forEach(function (el) {
          var button = el,
              button_name = button.dataset.name,
              card = slider_cards.find(function (el) {
            if (el.dataset.name == button_name) return el;
          }),
              card_back = '';

          if (has_back) {
            card_back = card.querySelector(".".concat(object.slider_has_back)).dataset.back;
          }

          button.addEventListener('click', function () {
            slider_cards.map(function (el) {
              Mclass.removeClass(classes.card_active, el);
            });
            slider_pagination_elements.map(function (el) {
              Mclass.removeClass(classes.pag_active, el);
            });
            Mclass.addClass(classes.card_active, card);
            Mclass.addClass(classes.pag_active, button);

            if (has_back) {
              slider.style.backgroundImage = "url(".concat(card_back, ")");
            }
          });
        });
      }
    }
    /** End of Init function */

    /**
     * 
     * Generate element for pagination block
     * @Pagination_block
     * @Name
     * @Text
     * If position of element is "0" add active class for pagination element
     * 
     */


    function generatePaginationEl(pagination_block, name, text, pos, classes, wrapper) {
      var template = document.createElement('li'),
          wrapper_el = '';
      Mclass.addClass(classes.pagination_el, template);
      template.className += " ".concat(classes.extra);
      pos == 0 ? Mclass.addClass(classes.pag_active, template) : null;
      template.dataset.name = name;

      if (wrapper != '') {
        wrapper_el = document.createElement(wrapper.wrapper);

        if (wrapper.classes != '') {
          wrapper_el.className += wrapper.classes;
        }

        wrapper_el.textContent = text;
        template.appendChild(wrapper_el);
      } else {
        template.textContent = text;
      }

      pagination_block.appendChild(template);
    }
  }();

  var MExtentions = function () {
    return {
      'operation': function operation(object) {
        _operation(object);
      }
    };

    function _operation(object) {
      var button = document.querySelector(".".concat(object.button)),
          wrapper = document.querySelector(".".concat(object.wrapper)),
          form_inputs = _toConsumableArray(document.querySelectorAll(".".concat(object.form_inputs))),
          classes = object.classes;

      if (button && wrapper && form_inputs) {
        var wrapper_height = "".concat(wrapper.offsetHeight, "px");
        Mclass.addClass(classes.wrapper__disable, wrapper);
        button.addEventListener('click', function () {
          wrapper.style.maxHeight = wrapper_height; //Manipulations with classes

          Mclass.addClass(classes.button__disable, this);
          Mclass.removeClass(classes.wrapper__disable, wrapper); //Remove max-height from wrapper

          setTimeout(function () {
            wrapper.style.maxHeight = 'none';
          }, 800); //Remove button

          this.remove(); //Fade for inputs

          form_inputs.forEach(function (el, index) {
            var input = el;
            setTimeout(function () {
              Mclass.removeClass(classes.input__disable, input);
            }, index * 400);
          });
        });
      }
    }
  }();
  /**
   * 
   * Initialize slider proposition posts
   * 
   */


  var propSlider = new Mslider.init({
    slider_block: 'prop-slider',
    slider_cards: 'prop-slider_card',
    slider_pagination: 'prop-slider_pagination',
    slider_has_back: 'prop-slider_card__back',
    slider_title: 'prop-slider_card__title',
    pagination_wrap: {
      wrapper: 'span',
      classes: ''
    },
    classes: {
      pag_active: 'prop-slider_pagination__active',
      card_active: 'prop-slider_card__active',
      pagination_el: 'prop-slider_pagination__el',
      extra: 'ml16 mr16'
    }
  });
  /**
   * 
   * Initialize slider Recent posts
   * 
   */

  var recentSlider = new Mslider.init({
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
      extra: 'ml16 mr16'
    }
  });
  /**
   * 
   * Initialize button press for mobile menu
   * 
   */

  new Mheader.mobileList();
  /**
   * 
   * Initialize operation block
   * 
   */

  new MExtentions.operation({
    button: 'block-operation__button',
    wrapper: 'block-operation__wrapper',
    form_inputs: 'form-operation__visibility',
    classes: {
      button__disable: 'block-operation__button--disabled',
      wrapper__disable: 'block-operation__wrapper--disabled',
      input__disable: 'form-operation__visibility--disabled'
    }
  });
  /**
   * 
   * Initialize header on scroll function
   * 
   */

  new Mheader.header_scroll();
};