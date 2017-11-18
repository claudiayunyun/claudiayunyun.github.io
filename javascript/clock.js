const monthArray = ['Jan', 'Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const dayArray = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const hourArray = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
const minuteArray = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20',
					 '21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40',
					 '41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59'];
const offsetLA = -8;
const offsetNJ = 8;
var myTimer =  setInterval(getTime,500);

function getTime() {
	var date = new Date();
	var localTime = date.getTime();
	var offsetLocal = date.getTimezoneOffset() / 60;
	var localUTC = localTime + 3600000 * offsetLocal;
	var timeLA = new Date(localUTC + 3600000 * offsetLA); 
	var timeNJ = new Date(localUTC + 3600000 * offsetNJ);
	document.getElementById("day").innerHTML = dayArray[date.getDay()] + ", " + monthArray[date.getMonth()] + " " +
												date.getDate() + ", " + date.getFullYear();
	document.getElementById("hour").innerHTML = hourArray[date.getHours()];
	document.getElementById("minute").innerHTML = minuteArray[date.getMinutes()];
	document.getElementById("second").innerHTML = minuteArray[date.getSeconds()];

	document.getElementById("dayLA").innerHTML = dayArray[timeLA.getDay()] + ", " + monthArray[timeLA.getMonth()] + " " +
												timeLA.getDate() + ", " + timeLA.getFullYear();
	document.getElementById("hourLA").innerHTML = hourArray[timeLA.getHours()];
	document.getElementById("minuteLA").innerHTML = minuteArray[timeLA.getMinutes()];
	document.getElementById("secondLA").innerHTML = minuteArray[timeLA.getSeconds()];

	document.getElementById("dayNJ").innerHTML = dayArray[timeNJ.getDay()] + ", " + monthArray[timeNJ.getMonth()] + " " +
												timeNJ.getDate() + ", " + timeNJ.getFullYear();
	document.getElementById("hourNJ").innerHTML = hourArray[timeNJ.getHours()];
	document.getElementById("minuteNJ").innerHTML = minuteArray[timeNJ.getMinutes()];
	document.getElementById("secondNJ").innerHTML = minuteArray[timeNJ.getSeconds()];
}

