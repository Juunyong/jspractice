// how to make method

// 생성자함수.prototype.메소드명 = funtion() {}

const starbucks = new Array('americano', 'caffelatte', 'cappuccino');

Array.prototype.menu = function () {
    console.log(this);
};

starbucks.menu();

const americano = {
    name: 'ame',
    price: 3500,
    ordering: function () {
        console.log(`${this.name} is ${this.price}won.`);
    },
};

const lattte = {
    name: 'latte',
    price: '4000',
};

americano.ordering();
americano.ordering.call(lattte);

function OrderMenu(name, price) {
    this.name = name;
    this.price = price;
}

OrderMenu.prototype.order = function () {
    console.log(`${this.name} is ${this.price}won.`);
};

const ame = new OrderMenu('americano', 3500);

ame.order();

const lat = new OrderMenu('latte', 4000);

lat.order();

//class 사용
class orderCoffee {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    printMenu() {
        console.log(`${this.name}is ${this.price}won.`);
    }
    printCancel() {
        console.log(`${this.name}is soldout.`);
    }
}
const americanoofmenu = new orderCoffee('아메리카노', 3500);
americanoofmenu.printCancel();
