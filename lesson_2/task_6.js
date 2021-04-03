// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function summ(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}
function divide(a, b) {
    return a / b;
}
function multiply(a, b) {
    return a * b;
}
function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case '+':
            return summ(arg1, arg2);
        case '-':
            return substract(arg1, arg2);
        case '*':
            return multiply(arg1, arg2);
        case '/':
            return divide(arg1, arg2);
        default:
            return 'Введите знак математической операции (+, -, *, /)'
    }
}