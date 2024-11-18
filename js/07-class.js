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
class OrderCoffee {
    constructor(name, price) {
        //생성자함수 - > 객체를 생성한다
        this.name = name;
        this.price = price;
    }
    printMenu() {
        console.log(`${this.name}is ${this.price}won.`);
    }
    printCancel() {
        console.log(`${this.name}is soldout.`);
    }
    make() {
        console.log(`we make ${this.name} now.`);
    }
}

const lattemenu = new OrderCoffee('카페라떼', 4000);
const americanoofmenu = new OrderCoffee('아메리카노', 3500);
americanoofmenu.printCancel();
americanoofmenu.make();
lattemenu.printMenu();
lattemenu.make();

//extends로 클래스 상속하기
class SpecialCoffee extends OrderCoffee {
    constructor(name, price, character) {
        super(name, price); //OrderCoffee에 있는 name과 price를 상속받는다.
        this.character = character;
    }
    order() {
        console.log(`${this.character} ${this.name} is ${this.price + 1500}won.`);
    }
}

const americanoSpecial = new SpecialCoffee('아메리카노', 3500, 'minions');
americanoSpecial.order();
