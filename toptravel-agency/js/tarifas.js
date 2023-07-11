    
let premium = document.getElementById('tarifa_vip');
let basic = document.getElementById('tarifa_basic');  
let precio = document.getElementById('precio_pago');

let btn_basic = document.getElementById('btn_basic');
let btn_premium = document.getElementById('btn_premium');

function precio_pago (){
    if(premium.checked) {
        precio.innerHTML = document.getElementById('price_premium').textContent;
    }else if (basic.checked){
        precio.innerHTML = document.getElementById('price_basic').textContent;
    }
}

precio_pago();

btn_basic.addEventListener("click",() =>{
    basic.checked = true;
    precio_pago();
})

btn_premium.addEventListener("click",() =>{
    premium.checked = true;
    precio_pago();
})

//Aviso de no registro a usuario
let registro = document.getElementById('btn_registro');
registro.addEventListener("click", () => {
    console.log("sds")
    alert("No se ha registrado ningún dato. Se trata de una web demo")
})