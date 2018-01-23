<?
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$email=$_POST['email'];
$conociste=$_POST['conociste'];
$asunto=$_POST['asunto'];
$mensaje=$_POST['mensaje'];
	
if (!$nombre or !$apellido or !$email or !$conociste or !$asunto or !$mensaje){
?>

ERROR: complete todos los campos del formulario

<?
}else{

	$contenido="<b>Nombre:</b> $nombre<br>";
	$contenido="<b>Apellido:</b> $apellido<br>";
	$contenido.="<b>E-Mail:</b> $email<br>";
	$contenido.="<hr>";
	$contenido.="<b>Como nos conocio?:</b> $conociste<br>";
	$contenido.="<hr>";
	$contenido.="<b>Asunto:</b> $asunto<br>";
	$contenido.="<b>Mensaje:</b><br>$mensaje<br>";
	
	
			$header = "From: $nombre <$email>\n";
			$header .= "X-Mailer:PHP/".phpversion()."\n";
			$header .= "Mime-Version: 1.0\n";
			$header .= &quot;Content-Type: text/html&quot;;
mail(&quot;fmelite@hotmail.com&quot;,$asunto,$contenido,$header);

}

?>

Su mensaje fue correctamente enviado.