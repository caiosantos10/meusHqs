class HqController{

    constructor(formId, tableId){

        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();

    }

    onSubmit(){

       this.formEl.addEventListener("submit", (event)=>{
            
            event.preventDefault();
            
            this.addLine(this.getValues());
        
            
        });
    }

    getValues(){

        let hq = {};

        [...this.formEl.elements].forEach(function(field, index){

            if(field.name == "estado" ){
                
                if(field.checked){
                    hq[field.name] = field.value;
                }
        
            } else {
                hq[field.name] = field.value;
        
            }
        });
        
        return new HQ(
            hq.titulo, 
            hq.numero, 
            hq.universo, 
            hq.estado, 
            hq.lancamento, 
            hq.genero,
            hq.saga, 
            hq.foto, 
            hq.lido
        );

    }

    addLine(dataHq){

        //console.log(dataHq);
    
        this.tableEl.innerHTML = `<tr>
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
    }

}