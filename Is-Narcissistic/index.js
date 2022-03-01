console.log("\x1b[43m[Ready]\x1b[0m:", "Script has been initialized.");

const readline = require("readline"); // Built in module

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const program = () => {
  rl.question(
    "\x1b[42m[Input]\x1b[0m: Please specify a number to find if its narcissistic or not: ",
    async (input) => {
      if (input === "exit") return process.exit(0);

      if (isNaN(input)) {
        console.log(
          "\x1b[41m[Error]\x1b[0m:",
          "Please specify a valid integer: "
        );
        return program();
      }

      const getPower = (int, power) => {
        // Math.pow()

        let returnValue = int;
        for (var i = 0; i < power - 1; i++) {
          returnValue = returnValue * int;
        }

        return returnValue;
      };

      const numbers = new Array();

      for (var i = 0; i < input.length; i++) {
        const number = parseInt(input.charAt(i));

        numbers.push(getPower(number, input.length));
      }

      let result = 0;

      numbers.forEach((x) => {
        result = result + x;
      });

      if (result == input) {
        console.log(
          "\x1b[44m[Result]\x1b[0m:",
          "This \x1b[1mis\x1b[0m a narcist number"
        );
        return program();
      } else {
        console.log(
          "\x1b[44m[Result]\x1b[0m:",
          "This \x1b[1misn't\x1b[0m narcist nubmer."
        );
        return program();
      }
    }
  );
};

program();
