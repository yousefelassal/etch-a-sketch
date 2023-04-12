const grid16 = document.getElementById('16x16');
const grid32 = document.getElementById('32x32');
const grid64 = document.getElementById('64x64');

const container = document.getElementById('grid-container');

let isGrid16 = false;
let isGrid32 = false;
let isGrid64 = false;

grid16.addEventListener('click', () => {
    isGrid16 = true;

    if(isGrid32 || isGrid64){
        document.getElementById("32x32").disabled = false;
        document.getElementById("64x64").disabled = false;
        container.innerHTML = '';
    }

    for(let i = 0; i < 16; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid-square');
        document.getElementById("grid-container").appendChild(grid);
    }

    document.getElementById("16x16").disabled = true;
})

grid32.addEventListener('click', () => {
    isGrid32 = true;

    if(isGrid16 || isGrid64){
        document.getElementById("16x16").disabled = false;
        document.getElementById("64x64").disabled = false;
        container.innerHTML = '';
    }
    for(let i = 0; i < 32; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid-square');
        document.getElementById("grid-container").appendChild(grid);
    }
    
    document.getElementById("32x32").disabled = true;
})

grid64.addEventListener('click', () => {
    isGrid64 = true;
    
    if(isGrid16 || isGrid32){
        document.getElementById("16x16").disabled = false;
        document.getElementById("32x32").disabled = false;
        container.innerHTML = '';
    }

    for(let i = 0; i < 64; i++) {
        let grid = document.createElement('div');
        grid.classList.add('grid-square');
        document.getElementById("grid-container").appendChild(grid);
    }
    
    document.getElementById("64x64").disabled = true;
})