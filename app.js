const btn = document.querySelector('.btn')
const color_text = document.querySelector('#color-text')

const hexaCode = [0,1,2,3,4,56,"A","B","C","D","E","F"]

function getRandomNumber(){
    return Math.floor(Math.random() * hexaCode.length) 
}

btn.addEventListener('click',()=>{
    let hexacolor = "#";
    for(let i=0; i<=6; i++){
        hexacolor += hexaCode[getRandomNumber()]
    }
    document.body.style.backgroundColor = hexacolor;
    color_text.textContent = hexacolor;
})