var pn1 = 0 ;
var SERVICE_1 = 'SERVICE_1';

document.addEventListener("DOMContentLoaded", function(){ // htmlを読み込み後以下を実行せよ
// localStrage から　前回の電話番号1を読み込む
    try {
        pn1 = (localStorage[SERVICE_1] || '');
    } catch(e) {
        pn1 = '';
    }
//　テキストボックスに番号を表示する
	document.forms.id_form1.id_telnumber1.value = pn1;
	console.log("pn1. =", pn1, typeof(pn1));
//　htmlの電話をかける部分に番号を組み入れる
        var mydiv = document.getElementById("idName");
 	mydiv.innerHTML = '<a href="tel:' + pn1 + '"><img src="./girl.gif" width="25%" alt="girl"></a>';
	console.log('<a href="tel:' + pn1 + '">電話をかける</a>');
})

function onButtonClick1(){//保存ボタンをクリックした場合
//テキストボックスの番号を読み取りlocalStrage に保存する
	pn1 = document.forms.id_form1.id_telnumber1.value;
	console.log("phone no1. =", pn1, typeof(pn1));
	localStorage[SERVICE_1] = pn1;
//　htmlの電話をかける部分に番号を組み入れる
        var mydiv = document.getElementById("idName");
 	mydiv.innerHTML = '<a href="tel:' + pn1 + '"><img src="./girl.gif" width="25%" alt="girl"></a>';
	console.log('<a href="tel:' + pn1 + '">電話をかける</a>');
}
