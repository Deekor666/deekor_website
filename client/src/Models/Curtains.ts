class Curtains {

    size: Record<string, any>;
    count: number;
    bufferCurtains: HTMLDivElement[] = [];

    constructor(size: Record<string, any>, count: number) {
        this.size = size;
        this.count = count;
    }

    /*
    * �������� ������ �������� � ���������� ������ ���������
    * ����� �������� �� �� ������� � ������ �������
    * ��������� ������� ���� �������, ����� �� ��� ����������� ����, ��������� ������, ����� �� ������� ���� ���������
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