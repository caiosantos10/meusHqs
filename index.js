var titulo = document.querySelector("#exampleInputTitulo");
var numero = document.querySelector("#exampleInputNumero");
var estado = document.querySelectorAll("#form-hq-create [name=estado]:checked");
var lancamento = document.querySelector("#exampleInputLancamento");
var genero = document.querySelector("#eexampleInputGenero");
var saga = document.querySelector("#exampleInputSaga");
var photo = document.querySelector("#exampleInputFile");
var foiLido = document.querySelector("#exampleInputLido");


var fields = document.querySelectorAll("#form-hq-create [name]");
fields.forEach(function(field, index){

    if(field.name == "estado" ){
        
        if(field.checked){

            console.log("SIM", field);
        }

    } else {
        console.log("NÂO");

    }
    

});