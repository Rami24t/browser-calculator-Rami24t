const addition = (document.querySelectorAll("input[name = 'addition']"));
const subtraction = (document.querySelectorAll(".subtraction .in"));
const multiplication = (document.querySelectorAll(".multiplication .in"));
const division = (document.querySelectorAll(".division .in"));
const modulo = (document.querySelectorAll(".modulo .in"));

function calculate(op, num1, num2) {
    num1 = +num1;
    num2 = +num2;
    switch (op) {
        case 'addition':
            return num1 + num2
        case 'subtraction':
            return num1 - num2
        case 'multiplication':
            return num1 * num2
        case 'division':
            return num1 / num2;
        case 'modulo':
            return num1 % num2;
        default:
            return -Infinity;
    }
}

// const out = document.querySelectorAll('.out');

document.querySelectorAll('.in').forEach(element => element.addEventListener('input', (e) => updateOut(e)));

function updateOut(e) {
    e.target.parentElement.lastElementChild.value = calculate(e.target.parentElement.className, e.target.parentElement.firstElementChild.value, e.target.parentElement.firstElementChild.nextElementSibling.value);
}

// updateOut(document.querySelector('.subtraction .in').parentElement.lastElementChild.value = calculate(parentElement.className,));