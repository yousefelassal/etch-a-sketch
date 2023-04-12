const grid16 = document.getElementById('16x16');
const grid32 = document.getElementById('32x32');
const grid64 = document.getElementById('64x64');

const clear = document.getElementById('clear');
const eraser = document.getElementById('eraser');

const container = document.getElementById('grid-container');

const colorpicker = document.getElementById('colorpicker');

let isGrid16 = true;
let isGrid32 = false;
let isGrid64 = false;

let isMouseDown = false;
let isEreaser = false;
let isEreaserDown = false;

let gridSize = 0;

clear.disabled = true;

//on default grid is set to 16x16
for(let i = 0; i < 16; i++) {
    let row = document.createElement('div');
    row.classList.add('grid-row');
    container.appendChild(row);
    for(let j = 0; j < 16; j++) {
        let cell = document.createElement('div');
        cell.classList.add('grid-cell');
        row.appendChild(cell);

        //handle eraser button
        eraser.addEventListener('click', () => {
            isEreaser = true;
            eraser.classList.add('active');
            eraser.addEventListener('click', () => {
                isEreaser = false;
                eraser.classList.remove('active');
            })
        })

        //handle clicking on grid cell
        cell.addEventListener('mousedown', () => {
            if(isEreaser){
                cell.style.background = 'white';
                isEreaserDown = true;
            }
            else{
                cell.style.background = colorpicker.value;
                isMouseDown = true;
                clear.disabled = false;
            }
        })
        cell.addEventListener('mouseup', () => {
            isMouseDown = false;
            isEreaserDown = false;
        })
        cell.addEventListener('mouseover', () => {
            if(isMouseDown){
                cell.style.background = colorpicker.value;
            }
            if(isEreaserDown){
                cell.style.background = 'white';
            }
        })
        
        //handle clear button
        clear.addEventListener('click', () => {
            cell.style.background = 'white';
        })
    }
}

grid16.disabled = true;

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
            
            //handle eraser button
            eraser.addEventListener('click', () => {
                isEreaser = true;
                eraser.classList.add('active');
                eraser.addEventListener('click', () => {
                    isEreaser = false;
                    eraser.classList.remove('active');
                })
            })

            //handle clicking on grid cell
            cell.addEventListener('mousedown', () => {
                if(isEreaser){
                    cell.style.background = 'white';
                    isEreaserDown = true;
                }
                else{
                    cell.style.background = colorpicker.value;
                    isMouseDown = true;
                    clear.disabled = false;
                }
            })
            cell.addEventListener('mouseup', () => {
                isMouseDown = false;
                isEreaserDown = false;
            })
            cell.addEventListener('mouseover', () => {
                if(isMouseDown){
                    cell.style.background = colorpicker.value;
                }
                if(isEreaserDown){
                    cell.style.background = 'white';
                }
            })
            
            //handle clear button
            clear.addEventListener('click', () => {
                cell.style.background = 'white';
            })

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

            //handle eraser button
            eraser.addEventListener('click', () => {
                isEreaser = true;
                eraser.classList.add('active');
                eraser.addEventListener('click', () => {
                    isEreaser = false;
                    eraser.classList.remove('active');
                })
            })

            //handle clicking on grid cell
            cell.addEventListener('mousedown', () => {
                if(isEreaser){
                    cell.style.background = 'white';
                    isEreaserDown = true;
                }
                else{
                    cell.style.background = colorpicker.value;
                    isMouseDown = true;
                    clear.disabled = false;
                }
            })
            cell.addEventListener('mouseup', () => {
                isMouseDown = false;
                isEreaserDown = false;
            })
            cell.addEventListener('mouseover', () => {
                if(isMouseDown){
                    cell.style.background = colorpicker.value;
                }
                if(isEreaserDown){
                    cell.style.background = 'white';
                }
            })
            
            //handle clear button
            clear.addEventListener('click', () => {
                cell.style.background = 'white';
            })
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
            
            //handle eraser button
            eraser.addEventListener('click', () => {
                isEreaser = true;
                eraser.classList.add('active');
                eraser.addEventListener('click', () => {
                    isEreaser = false;
                    eraser.classList.remove('active');
                })
            })

            //handle clicking on grid cell
            cell.addEventListener('mousedown', () => {
                if(isEreaser){
                    cell.style.background = 'white';
                    isEreaserDown = true;
                }
                else{
                    cell.style.background = colorpicker.value;
                    isMouseDown = true;
                    clear.disabled = false;
                }
            })
            cell.addEventListener('mouseup', () => {
                isMouseDown = false;
                isEreaserDown = false;
            })
            cell.addEventListener('mouseover', () => {
                if(isMouseDown){
                    cell.style.background = colorpicker.value;
                }
                if(isEreaserDown){
                    cell.style.background = 'white';
                }
            })
            
            //handle clear button
            clear.addEventListener('click', () => {
                cell.style.background = 'white';
            })
        }
    }
    
    grid64.disabled = true;
})