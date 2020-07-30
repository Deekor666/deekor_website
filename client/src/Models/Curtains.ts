import Anime from 'animejs';


class Curtains {

    size: Record<string, number>;
    topSize: Record<string, number>;
    bottomX: number;
    count: number;
    sideCountElements: number;
    bufferCurtains: HTMLDivElement[] = [];
    preloader: HTMLElement | null;

    constructor(preloader: HTMLElement | null, size: Record<string, number>, count: number) {
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
        const div: HTMLDivElement = document.createElement('div');
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

    private stylizeCurtain(div: HTMLDivElement, place: string, divLeft: number): Record<string, any> {
        div.style.width = (this.topSize.width / this.sideCountElements) + 'px';
        div.style.height = this.topSize.height + 'px';
        div.style.zIndex = '10';
        div.style.position = 'absolute';
        div.style.left = divLeft + 'px';

        if (place === 'bottom') {
            div.style.top = this.topSize.height + 'px';
            divLeft = divLeft + (this.topSize.width / this.sideCountElements);
        }
        div.style.backgroundColor = 'black';
        div.style.border = '1px solid white';
        return {
            divLeft: divLeft,
            div: div
        }
    }

    pushCurtains(bufferCurtains: HTMLDivElement[], preloader: HTMLElement | null): void {
        if (preloader !== null) {
            for (let i = 0; i < this.count; i++) {
                preloader.appendChild(bufferCurtains[i]);
            }
        }
        this.testAnimation(bufferCurtains);
    }

    // Animation

    testAnimation(bufferCurtains: HTMLDivElement[]):void {
        const classList: Array<string> = [];
        for (let i = 0; i < bufferCurtains.length; i++) {
            classList.push(`.${bufferCurtains[i].className}`);
        }
        console.log(classList);
        Anime({
            targets: classList,
            translateX: 250,
            rotate: '1turn',
            backgroundColor: '#FFF',
            duration: 20000
        })
    }

}
export { Curtains };