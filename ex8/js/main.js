function changetext1() {
	 document.getElementById("from").innerHTML = "From:";
   document.getElementById("check-in").innerHTML = "Check In:";
   document.getElementById("class").innerHTML = "Class:";
   document.getElementById("search").innerHTML = "Search Flight";
}
function changetext2() {
	 document.getElementById("from").innerHTML = "City:";
	 document.getElementById("from").removeAttr('to');
   document.getElementById("check-in").innerHTML = "Return:";
   document.getElementById("class").innerHTML = "Rooms:";
   document.getElementById("search").innerHTML = "Search Hotel";
}
