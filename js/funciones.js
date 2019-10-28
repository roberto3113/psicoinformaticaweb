function limpiar_registro()
{
	document.form2.reset();
	document.form2.userName.focus();
}
		 

function contacto(){
	var form=document.form2;
	if (form.userName.value==0)
	{
		alert("Ingrese su Nombre");
		form.userName.value="";
		form.userName.focus();
		return false;
	}
	if (form.userEmail.value==0)
	{
		alert("Ingrese su Correo");
		form.userEmail.value="";
		form.userEmail.focus();
		return false;
	}
	if (valida_correo(form.userEmail.value)==false)
	{
		alert("Ingrese un Correo valido");
		form.userEmail.value="";
		form.userEmail.focus();
		return false;
	}
	if (form.userMsg.value==0)
	{
		alert("Ingrese su mensaje");
		form.userMsg.value="";
		form.userMsg.focus();
		return false;
	}
	form2.submit();
}


//***************************************************************
function valida_correo(cor) {
		  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(cor)){
			
		   return (true)
		  } else {
		   
		   return (false);
		  }
		 }
		 
function valida_numero(tel) {
		  if (!/^([0-9])*$/.test(tel)){
			
		   return false;
		  } else {
		   
		   return true;
		  }
		 }
//*************************************************************	