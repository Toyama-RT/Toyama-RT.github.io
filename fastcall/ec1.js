var pn1 = 0 ;

function onButtonClick1(){
   // alert('Click');

	pn1 = document.forms.id_form1.id_telnumber1.value;
	console.log("phone no1. =", pn1, typeof(pn1));

        var mydiv = document.getElementById("idName");
// 	mydiv.innerHTML = '<a href="tel:' + pn1 + '">電話をかける</a>';
 	mydiv.innerHTML = '<a href="tel:' + pn1 + '"><img src="./denwa.jpg" width="25%" alt="電話をかける"></a>';
	console.log('<a href="tel:' + pn1 + '">電話をかける</a>');
}
