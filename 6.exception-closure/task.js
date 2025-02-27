function parseCount(value) {
    let result = Number.parseInt(value);
    if(isNaN(result)) {
        throw new Error('Невалидное значение');
    } 
    return result;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}


class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if(a + b < c || b + c < a || a + c < b) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let p = (this.a + this.b + this.c) / 2;
        let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(S.toFixed(3));
    }
}
 function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return{
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
 }
