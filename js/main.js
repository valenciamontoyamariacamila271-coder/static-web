

function suma(numero){
    const elem = document.getElementById("resultado");

    var resultado_anterior = elem.textContent;
    if(resultado_anterior==="Resultado"){
        elem.textContent=parseInt(numero);
    }else{
        elem.textContent= parseInt(resultado_anterior) + parseInt(numero);
    }
}

document.querySelectorAll("button").forEach(
    (button)=> {
        button.addEventListener("click" , (event) => {
            suma(event.target.textContent);
        });
    }
)
