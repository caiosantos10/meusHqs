class HQ{

    constructor(titulo, numero, universo, estado, dataLancamento, genero, saga, foto, foiLido){
        this._titulo = titulo;
        this._numero = numero;
        this._universo = universo;
        this._estado = estado;
        this._dataLancamento = dataLancamento;
        this._genero = genero;
        this._saga = saga;
        this._foto = foto;
        this._foiLido = foiLido;
    }

    get titulo(){
        return this._titulo;
    }

    get numero(){
        return this._numero;
    }

    get universo(){
        return this._universo;
    }

    get estado(){
        return this._estado;
    }

    get dataLancamento(){
        return this._dataLancamento;
    }

    get genero(){
        return this._genero;
    }

    get saga(){
        return this._saga;
    }

    get foto(){
        return this._foto;
    }

    get foiLido(){
        return this._foiLido;
    }

    set foto(value){
        this._foto = value;
    }
}