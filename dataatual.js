	//Inicializa a variavel com os dados
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1;
	var yyyy = today.getFullYear();
	if(dd<10)
	dd="0"+dd;
	if(mm<10)
	mm="0"+mm;
	today = dd+"-"+mm+"-"+yyyy;
	/*A linha a seguir exibe os dados concatenados, sendo eles, duas tags de HTML e uma variável que foi modificada no passo anterior*/
	document.write("<b>"+today+"</b>");