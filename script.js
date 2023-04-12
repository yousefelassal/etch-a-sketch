const grid16 = document.getElementById('16x16');
const grid32 = document.getElementById('32x32');
const grid64 = document.getElementById('64x64');

const clear = document.getElementById('clear');

const container = document.getElementById('grid-container');

let isGrid16 = true;
let isGrid32 = false;
let isGrid64 = false;

let gridSize = 0;

//on default grid is set to 16x16
for(let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.classList.add('grid-row');
    container.appendChild(row);
    for(let j = 0; j < 16; j++) {
        let cell = document.createElement('div');
        cell.classList.add('grid-cell');
        row.appendChild(cell);
    }
}

grid16.disabled = true;
clear.disabled = true;

//handle grid size buttons
grid16.addEventListener('click', () => {
    isGrid16 = true;
    gridSize = 16;
    if(isGrid32 || isGrid64 ){
        grid32.disabled = false;
        grid64.disabled = false;
        container.innerHTML = '';
    }

    for(let i = 0; i < 16; i++) {
        let row = document.createElement('div');
        row.classList.add('grid-row');
        container.appendChild(row);
        for(let j = 0; j < 16; j++) {
            let cell = document.createElement('div');
            cell.classList.add('grid-cell');
            row.appendChild(cell);
        }
    }

    grid16.disabled = true;
})

grid32.addEventListener('click', () => {
    isGrid32 = true;
    gridSize = 32;

    if(isGrid16 || isGrid64){
        grid16.disabled = false;
        grid64.disabled = false;
        container.innerHTML = '';
    }
    for(let i = 0; i < 32; i++) {
        let row = document.createElement('div');
        row.classList.add('grid-row');
        container.appendChild(row);
        for(let j = 0; j < 32; j++) {
            let cell = document.createElement('div');
            cell.classList.add('grid-cell');
            row.appendChild(cell);
        }
    }
    
    grid32.disabled = true;
})

grid64.addEventListener('click', () => {
    isGrid64 = true;
    gridSize = 64;
    
    if(isGrid16 || isGrid32){
        grid16.disabled = false;
        grid32.disabled = false;
        container.innerHTML = '';
    }

    for(let i = 0; i < 64; i++) {
        let row = document.createElement('div');
        row.classList.add('grid-row');
        container.appendChild(row);
        for(let j = 0; j < 64; j++) {
            let cell = document.createElement('div');
            cell.classList.add('grid-cell');
            row.appendChild(cell);
        }
    }
    
    grid64.disabled = true;
})

//handle clear button
clear.addEventListener('click', () => {
    container.innerHTML = '';
    for(let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('grid-row');
        container.appendChild(row);
        for(let j = 0; j < gridSize; j++) {
            let cell = document.createElement('div');
            cell.classList.add('grid-cell');
            row.appendChild(cell);
        }
    }
    clear.disabled = true;
})