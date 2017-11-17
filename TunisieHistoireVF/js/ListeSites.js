$(document).ready(function(){
	var tab =["a","b","c","d","e","f","g","h","i","j"];
	var i = 0;
	var txt1="";
	var txt2="";
	var txt3="";
	var mBaseRef = firebase.database().ref().child("site");
	
	mBaseRef.on('value', function(datasnapshot){
		datasnapshot.forEach(function(childSnapshot) {
			i++;
			var childData= childSnapshot.val();
//			$("#item").prepend('<li class="item"><img src="'+ childData.img +'" /> </li>');
//   var txt2 = $("<p></p>").text("Create text with jQuery."); 
			
		var item="<div class='item "+tab[i]+"' id='item'>";
		item=item+"<img src='"+ childData.img +"' width='150px'; height ='150px'; /></div>";
		$("#carousel").append(item+"");
			  
			
			
		})

	
		
		
	});
	
});



