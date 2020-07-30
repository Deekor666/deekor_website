import Anime from 'animejs';

class Curtains {

    size: Record<string, number>;
    topSize: Record<string, number>;
    bottomX: number;
    count: number;
    sideCountElements: number;
    bufferCurtains: HTMLElement[] = [];
    preloader: HTMLElement | null;
    background: string;

    constructor(preloader: HTMLElement | null, size: Record<string, number>, count: number, background: string) {
        this.background = background;
        this.size = size;
        this.count = count;
        this.sideCountElements = count / 2;
        this.bottomX = size.height / 2;
        this.topSize = {
            width: size.width,
            height: size.height / 2
        };
        this.preloader = preloader;
        this.createCurtains();
    }

    private createCurtains(recCount: number = 1, divLeft: number = 0): void {

        const div: HTMLElement = document.createElement('rect');
        if (recCount <= this.count) {
            if (recCount % 2 === 0) {
                div.classList.add(`bottom-${recCount}`);
                const divStylize = this.stylizeCurtain(div, 'bottom', divLeft);
                this.bufferCurtains.push(divStylize.div);
                recCount++;
                this.createCurtains(recCount, divStylize.divLeft)
            } else {
                div.classList.add(`top-${recCount}`);
                const divStylize = this.stylizeCurtain(div, 'top', divLeft);
                this.bufferCurtains.push(divStylize.div);
                recCount++;
                this.createCurtains(recCount, divStylize.divLeft)
            }
        } else {
            this.pushCurtains(this.bufferCurtains, this.preloader);
        }
    }

    private stylizeCurtain(div: HTMLElement, place: string, divLeft: number) {
        div.style.width = (this.topSize.width / this.sideCountElements) + 'px';
        div.style.height = this.topSize.height + 'px';
        div.style.zIndex = '10';
        div.style.position = 'absolute';
        div.style.left = divLeft + 'px';
        div.style.background = this.background;
        if (place === 'bottom') {
            div.style.top = this.topSize.height + 'px';
            divLeft = divLeft + (this.topSize.width / this.sideCountElements);
        }
        return {
            divLeft: divLeft,
            div: div
        }
    }

    pushCurtains(bufferCurtains: HTMLElement[], preloader: HTMLElement | null): void {
        if (preloader !== null) {
            for (let i = 0; i < this.count; i++) {
                preloader.appendChild(bufferCurtains[i]);
            }
        }
        this.testAnimation(bufferCurtains);
    }

    // Animation

    testAnimation(bufferCurtains: HTMLElement[]): void {
        const classTop: Array<string> = [];
        const classBottom: Array<string> = [];

        for (let i = 0; i < bufferCurtains.length; i++) {
            if(i % 2 === 0) {
                classTop.push(`.${bufferCurtains[i].className}`);
            } else {
                classBottom.push(`.${bufferCurtains[i].className}`);
            }
        }
        const grid: Array<number> = [this.count / 2, 2]
        const staggersAnimation = Anime.timeline({
            targets: classTop,
            easing: 'steps(5)',
            delay: Anime.stagger(50),
            loop: false,
            autoplay: false
          })
        //   .add({
        //     translateX: [
        //       {value: Anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
        //       {value: Anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
        //     ],
        //     translateY: [
        //       {value: Anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'}) },
        //       {value: Anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
        //     ],
        //     duration: 10000,
        //     scale: .5,
        //     delay: Anime.stagger(100, {grid: grid, from: 'center'})
        //   })
          .add({
            // translateX: () => Anime.random(-100, 100),
            translateY: () => -(this.topSize.height),
            duration: 10000,
            delay: Anime.stagger(8, {from: 'last'})
          })
        //   .add({
        //     translateX: Anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
        //     translateY: Anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
        //     rotate: 0,
        //     scaleX: 2.5,
        //     scaleY: .25,
        //     delay: Anime.stagger(4, {from: 'center'})
        //   })
        //   .add({
        //     rotate: Anime.stagger([90, 0], {grid: grid, from: 'center'}),
        //     delay: Anime.stagger(50, {grid: grid, from: 'center'})
        //   })
        //   .add({
        //     translateX: 0,
        //     translateY: 0,
        //     scale: .5,
        //     scaleX: 1,
        //     rotate: 180,
        //     duration: 1000,
        //     delay: Anime.stagger(100, {grid: grid, from: 'center'})
        //   })
        //   .add({
        //     scaleY: 1,
        //     scale: 1,
        //     delay: Anime.stagger(20, {grid: grid, from: 'center'})
        //   })
          
          staggersAnimation.play();   
          
          
        // Anime({
        //     targets: classTop,
        //     rotate: '1turn',
        //     backgroundColor: '#1460ec',
        //     duration: 20000
        // });
        // Anime({
        //     targets: classBottom,
        //     rotate: '1turn',
        //     backgroundColor: '#000',
        //     duration: 20000
        // })

    }

}
export { Curtains };