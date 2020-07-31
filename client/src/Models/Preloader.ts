import snap from 'snapsvg';

class Preloader {
    width: number;
    height: number;
    background: string;
    svg: SVGSVGElement;

    constructor(width: number, height: number, background: string) {
        this.width = width;
        this.height = height;
        this.background = background;

        this.svg = this.createElement();
    }

    createElement() {
        const svg: SVGSVGElement = snap('#preloader');
        svg.setAttribute('width', this.width + 'px');
        svg.setAttribute('height', this.height + 'px');
        svg.style.position = 'absolute';
        svg.setAttribute('height', this.height + 'px');
        svg.setAttribute('x','0');
        svg.setAttribute('y','0');
        svg.style.background = this.background;
        svg.style.opacity = '1';

        // svg.setAttribute('fill', 'black');

        return svg;
    }

    addElement(svg: HTMLElement, id: string): void {
        const preload: HTMLElement | null = document.getElementById('preload');
        if(preload !== null) {
            preload.appendChild(svg);
        }
    }


}

export { Preloader };