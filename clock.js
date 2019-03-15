function getDateString(){

	var oDate = new Date();
	var sDay = oDate.getDate();
	var iMonth = oDate.getMonth();
	var sYear = oDate.getFullYear();
	var sFulldate;
	
	var convert = function(input) {
		sInput = input.toString();
		if (sInput.length === 1) {
			return "0"+sInput;
		} 
		else {
			return sInput;
		}	
    }
    
	sfullDay = convert(sDay);
	aMonth = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
	
	sFulldate = sfullDay+" "+aMonth[iMonth]+" "+sYear;
	return sFulldate;
}
function getTimeString(){

	var oDate = new Date();
	var sHours = oDate.getHours();
	var sMinutes = oDate.getMinutes();
	var sSeconds = oDate.getSeconds();
	var sFullTime;
	
	var convert = function(input) {
		sInput = input.toString();
		if (sInput.length === 1) {
			return "0"+sInput;
		} 
		else {
			return sInput;
		}	
	}
	sFullHours = convert(sHours);
	sFullMins = convert(sMinutes);
	sFullSecs = convert(sSeconds);
	
	sFullTime = sFullHours+":"+sFullMins+":"+sFullSecs;
	return sFullTime;
}

function startClock(){
    window.setInterval(()=>{
        var elemClock = document.getElementById("clock");
        var elemDate = document.getElementById("date");
        elemClock.innerHTML = getTimeString()
        elemDate.innerHTML = getDateString();
        //updateClock()
    },100);
}
//window.onload = getDateString();setInterval(getTimeString(), 1000 );


