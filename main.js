var participants = [];

const showparticipants = () => {
	
	let arrayAuxiliar = [];
	data.forEach(element => {
		
		arrayAuxiliar.push(element.name);
	});
	
	$("#users").html("<string>Participants: </string>" + arrayAuxiliar);
}
	
const getWinner = (data) => {

	const rand = Math.floor(Math.random() * data.length);
	
	$("#selected").html("<strong>Selected: </strong>" + data[rand].name);

}	
}
$(document).ready(function (){

	$.ajax({
		
		type:"GET",
		url:"jsonplaceholder.typicode.com/users",
		contentType: "application/json",
		success: function (response){
			participants = response;
			
			showparticipants(participants);
			
		},
		error: function(error){
			console.log(error);
			alert(error);	
		}
		
	});
	
	$(".btn").click(function (){
		getWinner(participants);
	});	

});