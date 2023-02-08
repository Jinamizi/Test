$(document).ready(function(){
	  		$("#spanElement").text("New Text")
	  	
        	$("#selectList").change(function() {
          		var selectedOption = $(this).val();
          		$("#spanElement").text(selectedOption);
        	});

        	$("#hideButton").click(function(){
				$("#test").hide();
				$("button").text("SHOW")
			});

			$("#submitButton").click(function() {
    			var inputValue = $("#inputField").val();
    			if (inputValue.length > 0) {
      				$("#outputSpan").text(inputValue);
    			} else {
      				$("#outputSpan").text("None");
    			}
  			});

      $("#see-more").click(function(){
        $("#rest-of-story").slideDown();
      });
	  
	  #("#p1").mouseenter(function(){
		  alert("You entered p1!");
	  });
      
      });