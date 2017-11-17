    window.onload = function () {
       
       document.addEventListener('keydown', function(e) {
        	switch(e.keyCode){
        	      	
        		
        	case TvKeyCode.KEY_BACK: 
        		document.location.href="../accueil.html";
        		break;
        	default:
        		console.log("Key code : " + e.keyCode);
        		break;
        		
        	}
        });
            
    };