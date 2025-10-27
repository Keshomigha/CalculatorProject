
    // Select the display input
    const display = document.querySelector('input[name="display"]');
    // Select all the buttons
    const buttons = document.querySelectorAll('input[type="button"]');

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const value = e.target.value;

            if (value === 'AC') {
                // Clear display
                display.value = '';
            } 
            else if (value === '=') {
                // Evaluate expression safely
                try {
                    // Replace 'x' with '*' for multiplication
                    display.value = eval(display.value.replace(/x/g, '*'));
                } catch {
                    display.value = 'Error';
                }
            } 
            else {
                // Append value to display
                display.value += value;
            }
        });
    });
