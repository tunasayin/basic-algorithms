console.log('\x1b[43m[Ready]\x1b[0m:', 'Script has been initialized.');

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const isPrime = (number) => {

    const checkArray = new Array();
    for (var i = 0; i <= number; i++) {
        const check = number / i;

        if (Number.isInteger(check)) checkArray.push(i);
    }
    if (checkArray.length == 2) return true;
    else return false;
}

const program = () => {

    rl.question("\x1b[42m[Input]\x1b[0m: Please specify a number to find its prime numbers: ", async (input) => {

        if (input === 'exit') return process.exit(0)
    
        if (isNaN(input)) {  
            console.log('\x1b[41m[Error]\x1b[0m:', 'Please specify a valid integer: ');
            return program();
        }
        
        const nums = new Array();
        let currentValue = input;

        if (isPrime(input)) nums.push(input);
        else {

            for (var i = 1; i < input; i++) {

                const test = currentValue / i;
    
                if (Number.isInteger(test) && isPrime(i)) {
                    nums.push(i);
                    currentValue = currentValue / i;
                }
            }
        }

        const result = nums.join(', ');
        console.log('\x1b[44m[Result]\x1b[0m:', result);
        return program();
    });
}

program();