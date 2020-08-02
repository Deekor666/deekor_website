class Path {
<<<<<<< HEAD
    stroke: string;
    fill: string;
    d: string;
=======
    stroke: string; //color line
    fill: string;   // Заливка
    d: string;      // Путь
>>>>>>> 5e71d10b3210d94f6a740b0618f15b220a83bb86
    position: string = 'absolute';
    strokeWidth: string = '4';

    constructor(stroke: string, fill: string, d: string) {
        this.stroke = stroke;
        this.fill = fill;
        this.d = d;
    }
<<<<<<< HEAD
=======

    addElement(id: string) {

        const path: SVGPathElement = document.createElementNS("http://www.w3.org/2000/svg", "path") as SVGPathElement;
        path.style.position = this.position;
        path.setAttribute('d', this.d);
        path.setAttribute('stroke', this.stroke);
        path.setAttribute('fill', this.fill);
        path.setAttribute('id', id);
        path.setAttribute('stroke-width', this.strokeWidth);
        return path;
    }
>>>>>>> 5e71d10b3210d94f6a740b0618f15b220a83bb86
}

export { Path };