// Construir el algoritmo para un programa que ingrese tres
// notas de un alumno, si el promedio es menor o igual a 3.9
// mostrar un mensaje "Estudie“, de lo contrario un mensaje que
// diga "becado"

let myFormulario = document.querySelector("#myFormularioEjer2");
let myHeaders = new Headers({"Content-Type": "application/json"});
let config = {
    headers: myHeaders, 
};
let myEjer2 = document.querySelector("#myFormularioEjer2");

myEjer2.addEventListener("submit", async(e)=>{
    e.preventDefault();
    try{
        let data = Object.fromEntries(new FormData(e.target));
        config.method ="POST";
        config.body = JSON.stringify(data);
        let result = await (await fetch("api.php", config)).text();
        result=JSON.parse(result);
        let plantilla = 
        `<div class="par-impar">
            <p>${result.resultado}</p>
        </div>`;
        document.querySelector("#resultEjer2").innerHTML = plantilla;
       
    }catch(e){
        console.log(e)
        
    }
    
})