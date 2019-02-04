function disableButton(listener,btn){
	var isvalide = true;
	var elements = document.getElementsByClassName(listener);
	for (i=0;i<elements.length;i++) {
		if (elements[i].value=="" || elements[i].value==null) {
			isvalide = false;
		}
	}
	document.getElementById(btn).disabled= !isvalide;
}

Date.prototype.yyyymmdd = function() {
	var mm = this.getMonth() + 1;
	var dd = this.getDate();
	return [this.getFullYear(),
		(mm>9 ? '' : '0') + mm,(dd>9 ? '' : '0') + dd].join('-');
};
function getDateInYears(years){
	var date = new Date();
	var age = (12*years);
	date.setMonth(date.getMonth()+age);
	return date.yyyymmdd(0);	
}
function getTomorrowDate(){
	var date = new Date();
    date.setDate(date.getDate() + 1);
    return date.yyyymmdd();
}
function getDateInDays(days){
	var date = new Date();
    date.setDate(date.getDate() + days);
    return date.yyyymmdd();
}

$('.numbers').on('input propertychange', function() {
    var RegExPattern = /^\d+$/;
    $(this).val($(this).val().replace(/[[a-zA-Z\u00D1\u00F1\u00C1\u00E1\u00C9\u00E9\u00CD\u00ED\u00D3\u00F3\u00DA\u00FA\u00DC\u00FC@. ]/gi, ""));
});

$('.lettersAndNumbers').on('input propertychange', function() {
	var RegExPattern = /[a-zA-Z0-9]$/;
	if (!$(this).val().match(RegExPattern)) {
		$(this).val($(this).val().substring(0, $(this).val().length - 1));
	}
});

$('.phone').on('input propertychange', function() {
	var RegExPattern = /[0-9]$/;
	if (!$(this).val().match(RegExPattern)) {
		$(this).val($(this).val().substring(0, $(this).val().length - 1));
	}
});


$('.letters').on('input propertychange', function() {
	var RegExPattern = /[a-zA-Z',\u00B4\u00D1\u00F1\u00C1\u00E1\u00C9\u00E9\u00CD\u00ED\u00D3\u00F3\u00DA\u00FA\u00DC\u00FC@. ]$/;
	if (!$(this).val().match(RegExPattern)) {
		$(this).val($(this).val().substring(0, $(this).val().length - 1));
	}
});

$('.letterMoral').on('input propertychange', function() {
	var RegExPattern = /[a-zA-Z@'%#!.$"-\/+()0-9]/;
	if (!$(this).val().match(RegExPattern)) {
		$(this).val($(this).val().substring(0, $(this).val().length - 1));
	}
});


function limitar(e, contenido){
	var limit = e.target.getAttribute("limit");
	var unicode=e.keyCode? e.keyCode : e.charCode;
	if(unicode==8 || unicode==46 || unicode==13 || unicode==9 || unicode==37 || unicode==39 || unicode==38 || unicode==40)
        return true;
   if(contenido.length>=limit)
        return false;
	return true;
}