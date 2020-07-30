class Preloader {
    id: string = 'preloader';
    private width: number;
    private height: number;
    private background: string;
    public svg: HTMLElement;

    constructor(width: number, height: number, background: string) {
        this.width = width;
        this.height = height;
        this.background = background;

        this.svg = this.createElement();
    }

    private createElement() {
        const svg: HTMLElement = document.createElement('svg');
        svg.style.width = this.width + 'px';
        svg.style.height = this.width + 'px';
        svg.style.position = 'absolute';
        svg.style.background = 'gray';
        svg.id = this.id;
        return svg;
    }

    addElement(svg: HTMLElement): void {
        const preload: HTMLElement | null = document.getElementById('preload');
        if(preload !== null) {
            preload.appendChild(svg);
        }
    }


}

export { Preloader };