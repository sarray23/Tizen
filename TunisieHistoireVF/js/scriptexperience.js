var imgadr= [];
var headArray= [];
var headArraydesc= [];
var cnt= 0;
var timer;


$(document).ready(function(){
	
	var mBaseRef = firebase.database().ref().child("experiences");
	firebase.database().ref().child("experiences").once('value').then(function(datasnapshot){
		
		
		
		datasnapshot.forEach(function(childSnapshot) {
		     
			var childData= childSnapshot.val();
		      imgadr.push(childData.image);
			  headArray.push(childData.name);
			  headArraydesc.push(childData.description);

				
		})

});
	});


function sliderTimer()
{
	
  timer= setInterval(slider, 5500);
}

function slider()
{
  cnt++;
  if(cnt == imgadr.length)
    cnt= 0;

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];  
  document.getElementById('sliderdesc').innerHTML= headArraydesc[cnt];  //or append?

  
}

function next()
{
  clearInterval(timer);
  
  cnt++; 
  if(cnt == imgadr.length)
    cnt= 0;
    
  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];
  
  sliderTimer();
}

function prev()
{
console.log('prev');
  clearInterval(timer);
  
  cnt--;
  if(cnt == -1)
    cnt= imgadr.length-1;

  var slider= document.getElementById('slider');
  slider.style.backgroundImage= "url(\'"+imgadr[cnt]+"\')";
  document.getElementById('sliderHeader').innerHTML= headArray[cnt];
    
  sliderTimer();
}


