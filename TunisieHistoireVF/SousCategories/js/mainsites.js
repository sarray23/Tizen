var current_item=0;
var total_item=4;
var total_item_coter=2;
var carousel = $(".carousel"), currdeg = 0;
var currentobject=0;
var i=0;
var j=0;

window.onload = function () {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
	/*To DO : Return button*/
	//back();
	document.addEventListener('tizenhwkey', function(e) {
       
    });
	
	/*To DO : Active Focus*/
	if (sessionStorage.getItem("key")==null){
		navigation("down");
		
	}
	else
	{
		current_item=sessionStorage.getItem("key")-1;
		navigation("down");
		
	}
	
	
		 /*To DO 4 : Default Focus*/


   
   document.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
    	case TvKeyCode.KEY_LEFT:navigationdire("left");	 
    		
    		break;
    	case TvKeyCode.KEY_UP: //UP arrow  
    		 navigation("up");
    	
    		
    	//TvKeyCode.
    		e+=1;    	
    		break;
    	case TvKeyCode.KEY_RIGHT : //RIGHT arrow 		
    		navigationdire("right");
    		break;
    	case TvKeyCode.KEY_DOWN:  navigation("down");
    		e-=1;
    		/*TO DO 3 : NAVIGATION */ 	
    	
    	
    		break;
    	case TvKeyCode.KEY_ENTER: redirection();
    		/*TO DO : Redirection */
    		
    		break;
    	case TvKeyCode.KEY_BACK: 
    		document.location.href="../Categories/cat.html";
    		break;
    	default:
    		console.log("Key code : " + e.keyCode);
    		break;
    		
    	}
    });
        
};

function navigation(dir){
	$("#btn_"+current_item).removeClass("selected_btn");
	if(dir=="up"){
		if(current_item==1){current_item=total_item;}
		else{current_item--;}	
	}
	else
	{
		if(dir=="down"){
			if (current_item==total_item) {
				current_item=1;
			}
			else {
				current_item++;
			}		
		}
		
		
		
	
		
		
	}
	$("#btn_"+current_item).addClass("selected_btn");
}







function navigationdire(dir){
	
		if(dir=="left"){
			

	
					currdeg = currdeg + 40;
					currentobject--;
					console.log("current object= "+currentobject);
				
				carousel.css({
					"-webkit-transform" : "rotateY(" + currdeg + "deg)",
					"-moz-transform" : "rotateY(" + currdeg + "deg)",
					"-o-transform" : "rotateY(" + currdeg + "deg)",
					"transform" : "rotateY(" + currdeg + "deg)"
				});
				afficher(currentobject);
				console.log("afficher appel");
			}
		
		
		if(dir=="right"){
			
				
				currentobject++;
				console.log("current object= "+currentobject);

					currdeg = currdeg - 40;
				
				carousel.css({
					"-webkit-transform" : "rotateY(" + currdeg + "deg)",
					"-moz-transform" : "rotateY(" + currdeg + "deg)",
					"-o-transform" : "rotateY(" + currdeg + "deg)",
					"transform" : "rotateY(" + currdeg + "deg)"
				});
				afficher(currentobject);

			}
		
		
	}
	

	function afficher(currentobje){
		var mBaseRef = firebase.database().ref().child("site");
		
		mBaseRef.on('value', function(datasnapshot){
			datasnapshot.forEach(function(childSnapshot) {
			
				j++;
			if(currentobje==j){
				if(currentobje>=1){
					$("#description").remove("div");
					$("#titre").remove("div");
					$("#img").remove("div");
					var childData= childSnapshot.val();
					$("#descriptions").append("<div class='titre' id='titre'></div>" +
							"<div class='description' id='description'></div>" +
							"<div class='img' id='img'></div>")
							$("#titre").append("<h3 >"+childSnapshot.val().nom+"</h3>");
					$("#description").append("<h3 style='margin-right:100px;'>"+childSnapshot.val().description+"</h3>");
					
					$("#img").append("<img src='"+childSnapshot.val().img+"' width='700px;' height ='600px;' style='margin-top:-200px; margin-left:50%;'/>")
				}
				else{
				
				var childData= childSnapshot.val();
			$("#description").append("<h3>"+childSnapshot.val().description+"</h3>");
			$("#titre").append("<h3>"+childSnapshot.val().nom+"</h3>");}
			
			} 
				
				
			}
			
			)
			j=0;
		});

	}
	
function redirection(){
	sessionStorage.setItem("key", current_item);
	switch(current_item)
	{
	case 1:
		document.location.href="Musees.html";
		break;
	case 2:
		document.location.href="index.html";
		break;
	case 3:
		document.location.href="Personnages.html";
		break;
	case 4:
		document.location.href="sites.html";
		break;
		default: break;
}
	

	}

