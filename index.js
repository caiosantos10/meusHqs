var fields = document.querySelectorAll("#form-hq-create [name]");
var user = {};


document.getElementById("form-hq-create").addEventListener("submit", function(event){
    event.preventDefault();
        
    fields.forEach(function(field, index){

        if(field.name == "estado" ){
            
            if(field.checked){
                user[field.name] = field.value;
            }
    
        } else {
            user[field.name] = field.value;
    
        }
    });
    
    console.log(user);

    
});