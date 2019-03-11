function startTime(){
  let time = new Date();//assign the 'new Date()' object the variable time
  let h = time.getHours();//use the Dot Notation to access the getHours method
  let m = time.getMinutes();//use the Dot Notation to access the getMinutes method
  let s = time.getSeconds();//use the Dot Notation to access the getSeconds method
  //let t = " AM";

  h = cClock(h);
  m = addZero(m);
  s = addZero(s);
//  t = timeOfDay(t);

  let clock = document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;

}

//this fucntion is used to  add a '0' infront of minutes or seconds less than 10
//to give it an 00:00:00 appearance instaead of 00:0:0 .
function addZero(i){
  if( i < 10){

    i = "0" + i;
  }//end statement

  return i;

}

/*function timeOfDay(t){

  if(h < 13){

    let t = document.getElementById('clock').innerHTML = h + ":" + m + ":" + s +" AM";

  }
  else {

  let t = document.getElementById('clock').innerHTML = h + ":" + m + ":" + s +" PM";
  }

return t;

}*/


let liveClock = setInterval(startTime, 1000);//javascript will start the clock after
//1000 miliseconds

//this function is used to convert the military time into standard 12hr time
function cClock(h){
  while(h > 12){
    h -= 12;

    }
    return h;

  }


//These 3 functions change the image for the repective options listed on the page
function wakeFunction(){
      
        document.getElementById('catPics').src="images/Wake.jpg";

    }

function eatFunciton(){

          document.getElementById('catPics').src="images/eating.jpg";

    }

function sleepFunction(){

              document.getElementById('catPics').src="images/sleeping.jpg";

    }


//THe function below should change the main image to the party image, still working on this. May need jQuery
function click(){


        document.getElementById('catPics').src="images/cat_gang.png";



}
