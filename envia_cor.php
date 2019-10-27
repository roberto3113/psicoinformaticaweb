<?php
//ahora envío el mail de notificación a mi cuenta
$remitente="<".$_POST['userEmail'].">";
$asunto="Mensaje desde mi Sitio Web";
$cuerpo=
"
<html>
<head>
<body>
Te ha escrito desde tú página ".$_POST['userName']." &nbsp; el siguiente mensaje:
<hr/>
".$_POST['userMsg']."
<hr/>
".$_POST['userEmail']."

</body>
</head>
<html>
";

$sheader="From:".$remitente."\nReply-To:".$remitente."\n"; 
$sheader=$sheader."X-Mailer:PHP/".phpversion()."\n"; 
$sheader=$sheader."Mime-Version: 1.0\n"; 
$sheader=$sheader."Content-Type: text/html"; 

mail("menteinformatica17@gmail.com",$asunto,$cuerpo,$sheader);

echo "<script type='text/javascript'>
	alert('Gracias por contactarnos..Pronto nos pondremos en contacto con usted');
	window.location='http://psicologiasoftware.net';
</script>";

?>
