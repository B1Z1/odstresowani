class VideoGallery{
    constructor(object){
        this.elements = document.querySelectorAll(`.${object.element.container}`) ? [... document.querySelectorAll(`.${object.element.container}`)]:null;
        this.activeElement = object.element.active;

        //Video
        this.video = object.video;
        this.controls = object.controls;

        //Start for video
        this.currentTime = 1;

        //Remember last element for remove active class
        this.last; //<- this variable changes from undefined to element <->

        if ( this.elements )
            this.init();

    }

    init(){
        this.elements.forEach((element, index)=>{
            const video = element.querySelector(`.${this.video} video`), //Take from video block -> video tag
                  controls = element.querySelector(`.${this.controls.container}`), //Control block
                  play = controls.querySelector(`.${this.controls.play}`), //Take from control block -> play button
                  stop = controls.querySelector(`.${this.controls.stop.el}`); //Take from control block -> stop button

            
            //Install current time for view
            this.installCurrentTime(video);

            //Init function for play button
            this.onPlay(play, video, stop, element);

            //Init function for stop button        
            this.onStop(video, stop, element);            

        });
    }

    onStop(video, stop, element){
        stop.addEventListener('click', (ev) => {
            this.last = undefined; //Reset last element
            element.classList.remove(this.activeElement);//Remove from element active class

            setTimeout(()=>{
                video.pause();//Pause the video
                stop.classList.remove(this.controls.stop.active);//Remove from stop button active class
                this.installCurrentTime(video);//Install current time for view
                element.querySelector('.filter-back').classList.remove('fade');//Remove "fade" class from filter 
            },500);

        });
    }

    onPlay(play, video, stop, element){
        play.addEventListener('click', (ev)=>{
            if ( this.last !== undefined ){
                this.last.querySelector('video').pause(); //Pause the video
                this.installCurrentTime(this.last.querySelector('video'));//Install current time for view
                this.last.classList.remove(this.activeElement); //Remove active class from Video Block
                this.last.querySelector(`.${this.controls.stop.el}`).classList.remove(this.controls.stop.active);//Remove from stop button active class
            }
            this.installCurrentTime(video);//Install current time for view
            element.classList.add(this.activeElement);//Add active class to element
            this.last = element;//Save last element to detach

            setTimeout(()=>{ 
                window.scrollTo(0, element.getBoundingClientRect().top + window.scrollY);//Scroll window to video position
                video.play();
                stop.classList.add(this.controls.stop.active);//Add to stop button active class
                element.querySelector('.filter-back').classList.add('fade');//Add "fade" class from filter 
            },500);
        });
    }

    //Install currentTime
    installCurrentTime(element){
        element.currentTime = this.currentTime;
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