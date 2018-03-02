var elementXML;
var numberofelements=0;
var sym;
var num;
var wgt;
var matchToFind;


function getXML(document) {
    elementXML = document;
    getelements();


}

function getelements(){
	var select = "<select name='element'>";
	var elementname;
    select += "<option selected disabled>Element</option>";

    $(elementXML).find("ATOM").each(function(){
	elementname = $(this).find("NAME").text();
	
	select += "<option value=" + elementname + ">"+ elementname + "</option>";
	numberofelements++;
    });
    
    select += "</select>";
    console.log(select);
	$("#selectelement").html(select);
	
	
	$("select[name='element']").change(function(){
	console.log("pick!"+$("select[name='element'] option:selected").text());
	$("#selecteditem").html("Element Name: " + $("select[name='element'] option:selected").text());
	$(this).find('#selectelement').text($(this).text());
	lookUp($(this).text());
	
	//reset
	$("#element").val('');
	//change color back to black
	$("#element").css('color','black');
	$("#id").val('');
	$("#id").css('color','black');
	$("#number").val('');
	$("#number").css('color','black');
	$("#weight").val('');
	$("#weight").css('color','black');

    });

}


//create function that gets called when you click the randomize button, calls random function, gets a number back, then causes the menu to be selected to something

function lookUp(){
	    console.log("called");
	    $("#content").empty();
	    matchToFind = $("select[name='element'] option:selected").val();
    	console.log(matchToFind);
		$(elementXML).find("ATOM").each(function(){
			if ($(this).find('NAME').text()==matchToFind) {
				sym=$(this).find("SYMBOL").text();
				num=$(this).find("ATOMIC_NUMBER").text();
				wgt=$(this).find("ATOMIC_WEIGHT").text();
				
			}
		});

}

function showSolution(){
	console.log(sym);
	console.log(num);
	console.log(wgt);
	$(nameAnswer).html("Element Name: " + matchToFind + "<br/>");
	$(idAnswer).html("Element ID: " + sym + "<br/>");
	$(numberAnswer).html("Element Atomic Number: " + num + "<br/>");
	$(weightAnswer).html("Element Atomic Weight: " + wgt + "<br/>");
	
	//checking matches
	if ($("#element").val()==matchToFind){
		$("#element").css('color','green');
	}
	else{
		$("#element").css('color','red');

	}
	
	//checking matches
	if ($("#id").val()==sym){
		$("#id").css('color','green');
	}
	else{
		$("#id").css('color','red');

	}
	
	//checking matches
	if ($("#number").val()==num){
		$("#number").css('color','green');
	}
	else{
		$("#number").css('color','red');

	}
	
	//checking matches
	if ($("#weight").val()==wgt){
		$("#weight").css('color','green');
	}
	else{
		$("#weight").css('color','red');

	}
}




$(document).ready(function(){
    $.ajax({
	url: 'allelements.xml', // name of file you want to parse
	dataType: "xml",
	success: getXML,
	error: function(){alert("Error: Something went wrong");}

    });
    });