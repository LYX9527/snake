class Food {
    //定义一个属性来指向食物对应元素
    element: HTMLElement;
    constructor() {
        this.element = document.querySelector('#food')!;
    }
    //定义一个获取食物x轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }
    //定义一个获取食物y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }
    //修改食物位置方法
    change() {
        //生成一个随机的位置0-290
        let left = Math.round(Math.random() * 29) * 10
        let top = Math.round(Math.random() * 29) * 10
        this.element.style.left = left + 'px'
        this.element.style.top = top + 'px'
    }
}

export default Food;