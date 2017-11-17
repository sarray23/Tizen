var current_item=0;
var total_item=4;
var total_item_coter=2;


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
    	case TvKeyCode.KEY_LEFT:navigation("left");	 
    		
    		break;
    	case TvKeyCode.KEY_UP: //UP arrow  
    		 navigation("up");
    	
    		
    	//TvKeyCode.
    		e+=1;    	
    		break;
    	case TvKeyCode.KEY_RIGHT : //RIGHT arrow 		
navigation("right");
    		break;
    	case TvKeyCode.KEY_DOWN:  navigation("down");
    		e-=1;
    		/*TO DO 3 : NAVIGATION */ 	
    	
    	
    		break;
    	case TvKeyCode.KEY_ENTER: redirection();
    		/*TO DO : Redirection */
    		
    		break;
    		
    	case TvKeyCode.KEY_BACK:
    		document.location.href="../accueil.html";
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
		
		
		if(dir=="left"){
			if (current_item==total_item_coter) {
				current_item=1;
			}
			else {
				current_item++;
			}		
		}
		
		if(dir=="right"){
			if (current_item==total_item_coter) {
				current_item=1;
			}
			else {
				current_item++;
			}		
		}
				
		
	}
	$("#btn_"+current_item).addClass("selected_btn");
}
	
	
function redirection(){
	sessionStorage.setItem("key", current_item);
	switch(current_item)
	{
	case 1:
		document.location.href="../SousCategories/Musees.html";
		break;
	case 2:
		document.location.href="../SousCategories/Monuments.html";
		break;
	case 3:
		document.location.href="../SousCategories/Personnages.html";
		break;
	case 4:
		document.location.href="../SousCategories/sites.html";
		break;
	
		default: break;
}
	}

