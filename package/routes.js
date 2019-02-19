var controllercalculadora=require('./calculadoracontroller.js');
module.exports=function(app)
{
	app.post('/Asumar',controllercalculadora.sumar);//crea un url

	app.post('/Arestar',controllercalculadora.restar);//crea un url

	app.post('/Amultiplicar',controllercalculadora.multiplicar);//crea un url

	app.post('/Adividir',controllercalculadora.dividir);//crea un url



	app.get('*',function(req,res)
	{
		res.sendfile('./login.html');
	});
};//se pone ; al terminar un module