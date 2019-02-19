class _Operacion
{
    constructor(_numero1,_numero2)
    {
        this.numero1=parseInt(_numero1);
        this.numero2=parseInt(_numero2);
    }
    
    sumar()
    {
       console.log(this);
        return this.numero1+this.numero2;
    }
      
    restar()
    {
        return this.numero1-this.numero2;
    }
      
    multiplicar()
    {
        return this.numero1*this.numero2;
    }
      
    dividir()
    {
        return this.numero1/this.numero2;
    }
      
  }

exports.sumar=function(req,res)//envia los valores a la clase
{
    console.log(req.body.Numero1);
    let claseinstanciada=new _Operacion(req.body.Numero1,req.body.Numero2);
    res.json(claseinstanciada.sumar());
}

exports.restar=function(req,res)
{
    let claseinstanciada=new _Operacion(req.body.Numero1,req.body.Numero2);
    res.json(claseinstanciada.restar());
}

exports.multiplicar=function(req,res)
{
    let claseinstanciada=new _Operacion(req.body.Numero1,req.body.Numero2);
    res.json(claseinstanciada.multiplicar());
}

exports.dividir=function(req,res)
{
    let claseinstanciada=new _Operacion(req.body.Numero1,req.body.Numero2);
    res.json(claseinstanciada.dividir());
}