var deckToAdd = $("#deckSelect").val;
$('input[type = "text"]').keypress(function(event){
	if(event.which === 13){
		var addCard = $(this).val();
		$(this).val("");
		if($("#deckOptions").val() == "Deck 1"){
			$("#deck1").append("<li><span><i class='fa fa-times'></i></span>" + addCard + "</li>")
			
		}
		else{
			$("#deck2").append("<li><span><i class='fa fa-times'></i></span>" + addCard + "</li>")
		}
	}

});

$("ul").on("click", "span", function(event){
	$(this).parent().remove();
});

$("button").click(function(){
	alert("Button clicked!");
});