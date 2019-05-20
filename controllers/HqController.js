class HqController{

    constructor(formId, tableId){

        this.formEl = document.getElementById(formId);
        this.tableEl = document.getElementById(tableId);

        this.onSubmit();

    }

    onSubmit(){

       this.formEl.addEventListener("submit", (event)=>{
            
            event.preventDefault();

            let values = this.getValues();

            console.log(values);

            this.getPhoto().then(
                (content)=>{
                    
                    values.foto = content;

                    this.addLine(values);

                    console.log(values);

                }, 
                (e)=>{
                    console.error(e);
                }
            );     
            
        });
    }

    getPhoto(){

        return new Promise((resolve, reject)=>{

            let fileReader = new FileReader();

            let elements = [...this.formEl.elements].filter(item=>{
    
                if(item.name === 'foto'){
                    return item;
                }
    
            });
    
            let file = elements[0].files[0];
    
            fileReader.onload = ()=>{
    
                resolve(fileReader.result)
            };

            fileReader.onerror = (e)=>{

                reject(e);

            };
    
            if (file){
                fileReader.readAsDataURL(file);
            } else {
                resolve("dist/img/boxed-bg.jpg")
            }
        });
    }

    getValues(){

        let hq = {};

        [...this.formEl.elements].forEach(function(field, index){

            if(field.name == "estado" ){
                
                if(field.checked){
                    hq[field.name] = field.value;
                }
        
            } else if (field.name === "lido"){

                hq[field.name] = field.checked;

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
        let tr = document.createElement("tr");

        tr.innerHTML =  `<tr>
                        <td><img src="${dataHq.foto}" alt="User Image" class="img-circle img-sm"></td>
                        <td>${dataHq.titulo}</td>
                        <td>${dataHq.universo}</td>
                        <td>${(dataHq.foiLido)? 'Sim' : 'Não'}</td>
                        <td>${dataHq.dataLancamento}</td>
                        <td>
                          <button type="button" class="btn btn-primary btn-xs btn-flat">Editar</button>
                          <button type="button" class="btn btn-danger btn-xs btn-flat">Excluir</button>
                        </td>
                      </tr>
                         `
    
        this.tableEl.appendChild(tr);
    }

}