/* Task 1 */

function parseCount(count) {
    const checkCount = Number.parseFloat(count);
    if(isNaN(checkCount)) {
        throw new Error("Невалидное значение")
    };
    
    return checkCount;
};

function validateCount(validCount) {
    try {
       return parseCount(validCount);  
    } catch(error) {
        return error;
    };
};

/* Task 2*/

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует")  
        };
        this.a = a;
        this.b = b;
        this.c = c;  
    };    

    get perimeter () {
        return this.a + this.b + this.c;
    };

    get area () {
        return Number((Math.sqrt((this.a ** 2 + this.b ** 2 + this.c ** 2) ** 2 - 2 * (this.a ** 4 + this.b ** 4 + this.c ** 4)) / 4).toFixed(3));
    };
};

function getTriangle (sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC)
    } catch (error) {
        return {
            get area () {
                return "Ошибка! Треугольник не существует";
            },

            get perimeter () {
                return "Ошибка! Треугольник не существует"
            },
        };
    };    
};