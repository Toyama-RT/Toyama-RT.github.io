var pn1 = 0 ;
var pn2 = 0 ;
var SERVICE_1 = 'SERVICE_1';
var SERVICE_2 = 'SERVICE_2';

document.addEventListener("DOMContentLoaded", function(){ // htmlを読み込み後以下を実行せよ
// localStrage から　前回の電話番号1を読み込む
    try {
        pn1 = (localStorage[SERVICE_1] || '');
    } catch(e) {
        pn1 = '';
    }
    try {
        pn2 = (localStorage[SERVICE_2] || '');
    } catch(e) {
        pn2 = '';
    }
//　テキストボックスに番号を表示する
	document.forms.id_form1.id_telnumber1.value = pn1;
	document.forms.id_form2.id_telnumber2.value = pn2;
	console.log("pn1. =", pn1, typeof(pn1));
//　htmlの電話をかける部分に番号を組み入れる
        var mydiv1 = document.getElementById("idName");
 	mydiv1.innerHTML = '<a href="tel:' + pn1 + '"><img src="./man.png" width="25%" alt="man"></a>';
        var mydiv2 = document.getElementById("idName2");
 	mydiv2.innerHTML = '<a href="tel:' + pn2 + '"><img src="./woman.png" width="25%" alt="woman"></a>';
	console.log('<a href="tel:' + pn1 + '">電話をかける</a>');
})

function onButtonClick1(){//保存ボタンをクリックした場合
//テキストボックスの番号を読み取りlocalStrage に保存する
	pn1 = document.forms.id_form1.id_telnumber1.value;
	console.log("phone no1. =", pn1, typeof(pn1));
	localStorage[SERVICE_1] = pn1;
//　htmlの電話をかける部分に番号を組み入れる
        var mydiv = document.getElementById("idName");
 	mydiv.innerHTML = '<a href="tel:' + pn1 + '"><img src="./man.png" width="25%" alt="man"></a>';
	console.log('<a href="tel:' + pn1 + '">電話をかける</a>');
}
function onButtonClick2(){//保存ボタンをクリックした場合
//テキストボックスの番号を読み取りlocalStrage に保存する
	pn2 = document.forms.id_form2.id_telnumber2.value;
	console.log("phone no2. =", pn2, typeof(pn2));
	localStorage[SERVICE_2] = pn2;
//　htmlの電話をかける部分に番号を組み入れる
        var mydiv = document.getElementById("idName2");
 	mydiv.innerHTML = '<a href="tel:' + pn2 + '"><img src="./woman.png" width="25%" alt="woman"></a>';
	console.log('<a href="tel:' + pn2 + '">電話をかける</a>');
}
