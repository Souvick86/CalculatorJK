let a = document.querySelector(`.screen-p`);
let buttons = Array.from(document.querySelectorAll(`.button`));
buttons.forEach((button) => {
    button.addEventListener(`click`, (event) => {
        let buttonText = event.target.textContent;
        if (buttonText === 'AC') {
            a.textContent = '';
        } else if (buttonText === '=') { // evaluate
            let str = a.textContent;
            if(str.includes('%')){
            let percentage = (x, y) => {
                return (x*y)/100
            }
            let index = str.indexOf('%');
            let num1 = str.slice(0, index)
            let num2 = str.slice(index+1)
            a.textContent = percentage(num1, num2);
            }
            else{
                try {
                    let result = eval(a.textContent); // Evaluate the expression
                    a.textContent = result; // Update the screen with the result
                } catch (error) {
                    a.textContent = 'Error'; // Handle any errors
                }
            }
        } else if(buttonText === '←'){  //backspace
               let str = a.textContent;
               str = str.slice(0, (str.length - 1));
               a.textContent = str;
        }else {
            a.textContent += buttonText;
        }
    })
})
