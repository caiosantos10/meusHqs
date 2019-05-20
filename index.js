var fields = document.querySelectorAll("#form-hq-create [name]");
var hq = {};

function addLine(dataHq){
    var tr = document.createElement("tr");
    tr.innerHTML = `<tr>
                    <td><img src="dist/img/user1-128x128.jpg" alt="User Image" class="img-circle img-sm"></td>
                    <td>${dataHq.titulo}</td>
                    <td>${dataHq.universo}</td>
                    <td>${dataHq.lido}</td>
                    <td>${dataHq.lancamento}</td>
                    <td>
                      <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                      <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                    </td>
                  </tr>
                     `

    document.getElementById("table-hqs").appendChild(tr);
}

document.getElementById("form-hq-create").addEventListener("submit", function(event){
    event.preventDefault();
        
    fields.forEach(function(field, index){

        if(field.name == "estado" ){
            
            if(field.checked){
                hq[field.name] = field.value;
            }
    
        } else {
            hq[field.name] = field.value;
    
        }
    });
    //console.log(hq);

    addLine(hq);

    
});