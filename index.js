

const seedColor= document.getElementById('seedColor')
const colorBtn = document.getElementById('colorButton')
const modes = document.getElementById('modes')
const count = 6
const colorPallet = document.getElementById('pallets')

const container = document.getElementById('container')
const loader = document.getElementById('loading')

function changeBorderColor() {
  var myContainer = container;
  var color ='rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) +  ',0.1)';
  myContainer.style.borderColor = color;
}
setInterval(changeBorderColor, 600);

function showLoader(){
    loader.style.display = 'block'

}

function hideLoader(){
    loader.style.display = 'none'
}

function generateColors(){
    showLoader()
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor.value.slice(1)}&mode=${modes.value}&count=${count}`)
        .then(res=> res.json())
        .then(data=> {
            hideLoader()
           
        for(let i = 0;i<data.colors.length;i++){
            let color = (data.colors[i].hex.value)
            let html = ''

            html = `
                <div class='newColor' style="background-color:${color} ;">
                    <div class='color-hex'>
                        <p id='hex'>${color}</p>
                    </div>
                        
       
       
                </div>
       `

       colorPallet.innerHTML += html

    }
    
})
}


function clear(){
    colorPallet.innerHTML =''
}




generateColors()

colorBtn.addEventListener('click' , (e)=> {
clear()
generateColors()
e.preventDefault()


})


