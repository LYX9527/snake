class Snake {
    head: HTMLElement;
    bodys: HTMLCollection;
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('snake')!
        this.head = document.querySelector('#snake>div')!;
        this.bodys = this.element.getElementsByTagName('div')
    }
    //获取蛇头的坐标
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    set X(value) {
        if (this.X === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error('撞墙了')
        }
        if (this.bodys[1] && (<HTMLElement>this.bodys[1]).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }
    set Y(value) {
        if (this.Y === value) {
            return;
        }
        if (value < 0 || value > 290) {
            throw new Error('撞墙了')
        }
        if (this.bodys[1] && (<HTMLElement>this.bodys[1]).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }
    //蛇增加身体
    addBody() {
        this.element.insertAdjacentElement('beforeend', document.createElement('div'));
        this.moveBody();
    }

    moveBody() {
        for (let i = this.bodys.length - 1; i > 0; i--) {
            let x = (<HTMLElement>this.bodys[i - 1]).offsetLeft;
            let y = (<HTMLElement>this.bodys[i - 1]).offsetTop;
            (<HTMLElement>this.bodys[i]).style.left = x + 'px';
            (<HTMLElement>this.bodys[i]).style.top = y + 'px';
        }
    }
    checkHeadBody() {
        for (let j = 1; j < this.bodys.length; j++) {
            if (this.X === (<HTMLElement>this.bodys[j]).offsetLeft && this.Y === (<HTMLElement>this.bodys[j]).offsetTop) {
                throw new Error('撞自己了')
            }
        }
    }
}

export default Snake