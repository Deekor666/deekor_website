class Curtain {

    size: Record<string, number>;
    topSize: Record<string, number>;
    bottomX: number;
    count: number;
    sideCountElements: number;
    bufferCurtains: SVGRectElement[] = [];
    preloader: SVGSVGElement | null;
    background: string;

    constructor(preloader: SVGSVGElement | null, size: Record<string, number>, count: number, background: string) {
        this.background = background;
        this.size = size;
        this.count = count;
        this.sideCountElements = count / 2;
        this.bottomX = size.height / 2;
        this.topSize = {
            width: size.width,
            height: Math.ceil(size.height / 2)
        };
        this.preloader = preloader;
        this.createCurtains();
    }

    private createCurtains(recCount: number = 1, divLeft: number = 0): void {

        const div: SVGRectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
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

    private stylizeCurtain(div: SVGRectElement, place: string, divLeft: number) {
        div.setAttribute('width', Math.ceil(this.topSize.width / this.sideCountElements) + '');
        div.setAttribute('height',this.topSize.height + '');
        div.setAttribute('x',divLeft + '');
        div.setAttribute('fill', this.background);
        if (place === 'bottom') {
            div.setAttribute('y', this.topSize.height + 'px');
            divLeft = divLeft + (this.topSize.width / this.sideCountElements);
        }
        // div.style.zIndex = '30';
        // div.style.position = 'absolute';

        return {
            divLeft: divLeft,
            div: div
        }
    }

    pushCurtains(bufferCurtains: SVGRectElement[], preloader: SVGSVGElement | null): void {
        if (preloader !== null) {
            for (let i = 0; i < this.count; i++) {
                preloader.appendChild(bufferCurtains[i]);
            }
        }
        this.testAnimation(bufferCurtains);
    }

    // Animation

    testAnimation(bufferCurtains: SVGRectElement[]): void {
        const classTop: Array<string> = [];
        const classBottom: Array<string> = [];
        // const classAllCurtains: Array<string> = [];

        for (let i = 0; i < bufferCurtains.length; i++) {
            if (i % 2 === 0) {
                classTop.push(`.${bufferCurtains[i].className}`);
            } else {
                classBottom.push(`.${bufferCurtains[i].className}`);
            }
            // classAllCurtains.push(`.${bufferCurtains[i].className}`);
        }

        // const grid: Array<number> = [(this.count / 2), 2];

    }

}

export {Curtain};