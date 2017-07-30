function changetext1() {
    document.getElementById("from").innerHTML = "From:";
   document.getElementById("check-in").innerHTML = "Check In:";
   document.getElementById("check-out").innerHTML = "Check Out:";
   document.getElementById("class").innerHTML = "Class:";
   document.getElementById("search").innerHTML = "Search Flight";
}
function changetext2() {
    document.getElementById("from").innerHTML = "City:";
   document.getElementById("check-in").innerHTML = "Return:";
   document.getElementById("class").innerHTML = "Rooms:";
   document.getElementById("search").innerHTML = "Search Hotel";
}
function changetext3() {
    document.getElementById("from").innerHTML = "City:";
   document.getElementById("check-in").innerHTML = "Departs:";
   document.getElementById("check-out").innerHTML = "Return:";
   document.getElementById("class").innerHTML = "Rooms:";
   document.getElementById("search").innerHTML = "Search Packages";
}

/*/$(document).ready(function(){
	 $("#btn2").click(function(){
	 			$("#check-in, #check-out").removeClass("col-sm-6");
            $("#check-in").addClass("col-sm-12")
	 });
});/*/
