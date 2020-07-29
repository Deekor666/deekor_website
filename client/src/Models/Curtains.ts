class Curtains {

    size: Record<string, any>;
    count: number;
    bufferCurtains: HTMLDivElement[] = [];

    constructor(size: Record<string, any>, count: number) {
        this.size = size;
        this.count = count;
    }

    /*
    * приходит размер родителя и количество нужных элементов
    * нужно поделить их на верхние и нижние поровну
    * создавать сначала один верхний, потом по его координатам низа, создавать нижний, потом по правому краю следующий
    *
    * */

    printCurtains(side: string = 'top') {
        if (side === 'top') {
            this.initTopCurtains();
        }
    }
    initTopCurtains() {
    // stylizeCurtain()

    }

    // initBottomCurtains() {
    // stylizeCurtain()
    //
    // }

    // stylizeCurtain() {
    //
    // }

    // pushCurtains(bufferCurtains: HTMLDivElement[]) {
    //
    // }

}
export { Curtains };