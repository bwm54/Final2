$(document).ready(function(){ 
//hair length
$("button.short").click(function(){
	var hairLength = 0
	console.log("hair length short cost: " + hairLength)
	$("p.HL").html("Short + $0");
});
$("button.medium").click(function(){
	var hairLength = 5
	console.log("hair length medium cost: " + hairLength)
	$("p.HL").html("Medium + $5");
});
$("button.long").click(function(){
	var hairLength = 10
	console.log("hair length long cost: " + hairLength)
	$("p.HL").html("Long + $10");
}); 
//end of hair length

//hair color
$("div.blonde").click(function(){
	var hairBlonde = 100
	console.log("blonde clicked: " + hairBlonde)
	$("p.HC").html("Blonde = $100");
});
$("div.brunette").click(function(){
	 var hairBrunette = 75
	console.log("brunette clicked: " + hairBrunette)
	$("p.HC").html("Brunette = $75");
});
$("div.red").click(function(){
	 var hairRed = 80
	console.log("red clicked: " + hairRed)
	$("p.HC").html("Red = $80");
});
$("div.black").click(function(){
	 var hairBlack = 50
	console.log("black clicked: " + hairBlack)
	$("p.HC").html("Black = $50");
});
//end of hair color

//hairstyle
$("div.straight").click(function(){
	var hairStraight = 20
	console.log("straight clicked: " + hairStraight)
	$("p.HS").html("Straight = $20");
});
$("div.wavy").click(function(){
	 var hairWavy = 20
	console.log("wavy clicked: " + hairWavy)
	$("p.HS").html("Wavy = $20");
});
$("div.curly").click(function(){
	 var hairCurly = 30
	console.log("curly clicked: " + hairCurly)
	$("p.HS").html("Curly = $30");
});
$("div.crimped").click(function(){
	 var hairCrimped = 30
	console.log("crimped clicked: " + hairCrimped)
	$("p.HS").html("Crimped = $30");
});
$("div.blowdry").click(function(){
	 var hairBlowdry = 15
	console.log("blowdry clicked: " + hairBlowdry)
	$("p.HB").html("Blowdry + $15");
});
//end hairstyle

//mouseover color
$("div.blonde").mouseover(function(){
      	$("div.blonde").css("background-color", "#DCDCDC");
      });

$("div.blonde").mouseout(function(){
  $("div.blonde").css("background-color", "#F0F8FF");
});

$("div.brunette").mouseover(function(){
      	$("div.brunette").css("background-color", "#DCDCDC");
      });
$("div.brunette").mouseout(function(){
  $("div.brunette").css("background-color", "#F0F8FF");
});

$("div.red").mouseover(function(){
      	$("div.red").css("background-color", "#DCDCDC");
      });
$("div.red").mouseout(function(){
  $("div.red").css("background-color", "#F0F8FF");
});

$("div.black").mouseover(function(){
      	$("div.black").css("background-color", "#DCDCDC");
      });
$("div.black").mouseout(function(){
  $("div.black").css("background-color", "#F0F8FF");
});

//end mouseover


//hairstyle mouseover
$("div.straight").mouseover(function(){
      	$("div.straight").css("background-color", "#DCDCDC");
      });

$("div.straight").mouseout(function(){
  $("div.straight").css("background-color", "#F0F8FF");
});

$("div.wavy").mouseover(function(){
      	$("div.wavy").css("background-color", "#DCDCDC");
      });
$("div.wavy").mouseout(function(){
  $("div.wavy").css("background-color", "#F0F8FF");
});

$("div.curly").mouseover(function(){
      	$("div.curly").css("background-color", "#DCDCDC");
      });
$("div.curly").mouseout(function(){
  $("div.curly").css("background-color", "#F0F8FF");
});

$("div.crimped").mouseover(function(){
      	$("div.crimped").css("background-color", "#DCDCDC");
      });
$("div.crimped").mouseout(function(){
  $("div.crimped").css("background-color", "#F0F8FF");
});

$("div.blowdry").mouseover(function(){
      	$("div.blowdry").css("background-color", "#DCDCDC");
      });
$("div.blowdry").mouseout(function(){
  $("div.blowdry").css("background-color", "#F0F8FF");
});
//end hairstyle mouseover






//confirm
$("button.confirm").click(function(){
	alert("Confirmed!")
});
//end confirm

});