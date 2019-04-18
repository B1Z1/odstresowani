class VideoGallery{
    constructor(object){
        this.elements = document.querySelectorAll(`.${object.element.container}`) ? [... document.querySelectorAll(`.${object.element.container}`)]:null;
        this.active = object.element.active;

        //Video
        this.video = object.video;
        this.controls = object.controls;

        //Remember last element for remove active class
        this.last;

        if ( this.elements )
            this.init();

    }

    init(){
        this.elements.forEach((element, index)=>{
            let video = element.querySelector(`.${this.video} video`),
                controls = element.querySelector(`.${this.controls.container}`),
                play = controls.querySelector(`.${this.controls.play}`),
                stop = controls.querySelector(`.${this.controls.stop.el}`);
            video.currentTime = 1;
            this.onPlay(play, video, stop, element);            
            this.onStop(play, video, stop, element);            

        });
    }

    onStop(play, video, stop, element){
        stop.addEventListener('click', (ev) => {
            this.last = undefined;

            element.classList.remove(this.active);
            setTimeout(()=>{
                video.pause(); 
                stop.classList.remove(this.controls.stop.active);
                video.currentTime = 1;
                element.querySelector('.filter-back').style.visibility = 'visible';
                element.querySelector('.filter-back').style.opacity = .7;
            },500);
        });
    }

    onPlay(play, video, stop, element){
        play.addEventListener('click', (ev)=>{
            if ( this.last !== undefined ){
                this.last.classList.remove(this.active);
                this.last.querySelector('video').pause();
                this.last.querySelector('video').currentTime = 1;
                this.last.querySelector(`.${this.controls.stop.el}`).classList.remove(this.controls.stop.active);
            }
            video.currentTime = 1;
            element.classList.add(this.active);
            this.last = element;
            setTimeout(()=>{ 
                window.scrollTo(0, element.getBoundingClientRect().top + window.scrollY);
                video.play(); 
                stop.classList.add(this.controls.stop.active);
                element.querySelector('.filter-back').style.visibility = 'hidden';
                element.querySelector('.filter-back').style.opacity = 0;
            },500);
        });
    }

}

window.addEventListener('load', ()=>{
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
        },
    });
});