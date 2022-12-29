function populateBoard(size) {
    const container = document.querySelector(".container");
    container.style.cssText = `display: grid; grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr); gap: 2px;`;
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const box = document.createElement('div');
            box.classList.add("box");
            box.style.cssText = "background: white;";
            container.appendChild(box);
        }
    }
}

function get_size() {
    let user_size;
    do {
        user_size = prompt("Please enter size 2-100 inclusive: ", 16);
        if (user_size < 2 || user_size > 100) alert('invalid size');
    } while (user_size < 2 || user_size > 100);

    populateBoard(user_size);
}

function change_color(color) {
    let click = false;
    const boxes = document.querySelectorAll('.box');
    const container = document.querySelector('.container');

    boxes.forEach((box) => {
        box.addEventListener('mouseenter', function() {
            if (box.classList.contains("changed")) return;
            box.classList.add("hover");
            box.style.cssText = 'background: #44444';
        });
        box.addEventListener('mouseleave', () => {
            if (box.classList.contains("hover") && !box.classList.contains("changed")) {
                box.style.cssText = 'background: white';
                box.classList.remove("hover");
            };
        });
        box.addEventListener('mousedown', () => {
            click = true
            box.style.cssText = `background: ${color}`;
            box.classList.add("changed");
        });
       
        box.addEventListener('mouseover', () => {
            if (click) {
                box.style.cssText = `background: ${color}`;
                box.classList.add("changed");
            } 
        })
        box.addEventListener('dragstart', e => e.preventDefault());
    });
    
    container.addEventListener('mouseup', () => {
            click = false
        }, {capture: true});

    container.addEventListener('mouseleave', () => {
        click = false
    });
}

function reset_color() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
        box.style.cssText = 'background: white';
        box.classList.remove("changed");
    });
}

get_size();
change_color(color = 'blue');
