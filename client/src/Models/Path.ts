class Path {
    stroke: string;
    fill: string;
    d: string;
    position: string = 'absolute';
    strokeWidth: string = '4';

    constructor(stroke: string, fill: string, d: string) {
        this.stroke = stroke;
        this.fill = fill;
        this.d = d;
    }
}

export { Path };