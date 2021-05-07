var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function setProgress(elem, percent,n) {
	  var
		degrees = percent * 3.6,
		transform = /MSIE 9/.test(navigator.userAgent) ? 'msTransform' : 'transform';
	  elem.querySelector('.counter').setAttribute('data-percent', Math.round(percent));
	  elem.querySelector('.progressEnd').style[transform] = 'rotate(' + degrees + 'deg)';
	  elem.querySelector('.progress').style[transform] = 'rotate(' + degrees + 'deg)';
	  console.log(elem.className);
		if(n==1){
	 if(percent >= 50 && !/(^|\s)fiftyPlus(\s|$)/.test(elem.className))
		elem.className = 'circlePercent fiftyPlus';
		}else{
		 if(percent < 50 && !/(^|\s)fiftyMoins(\s|$)/.test(elem.className))
			elem.className = 'circlePercent';

		}
	}



function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  // $(x[currentTab].id).slideDown("slow");
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  	  var initial;
	  var pas;
	  
  if(n==1){

	  pas = Math.round(100/x.length);

	  if(currentTab==1){
		  initial = 0;
	  }else{
		   initial = Math.round((currentTab-1)*100/x.length); 
	  }
	  // if(currentTab==1){
		(function() {
		  var
			elem = document.querySelector('.circlePercent'),
			percent = initial+1;
		  (function animate() {
			setProgress(elem, (percent += .25),n);
			if(percent < initial+pas)
			  setTimeout(animate, 15);
		  })();
		})();
  }else{
	   pas = Math.round(100/x.length);
	  console.log(pas);
		if(currentTab==0){
		  initial = pas;
	  }else{
		   initial = Math.round((currentTab+1)*100/x.length)+1; 
	  }
	  console.log(initial);
	  console.log(currentTab);
	  // if(currentTab==1){
		(function() {
		  var
			elem = document.querySelector('.circlePercent'),
			percent = initial+1;
		  (function animate() {
			setProgress(elem, (percent -= .25),n);
			if(percent > initial-pas)
			  setTimeout(animate, 15);
		  })();
	  })(); 
  }
	// }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}




// --------------------------------progress bar functions-----------------------
window.randomize = function() {
	$('.ko-progress-circle').attr('data-progress', Math.floor(Math.random() * 100));
}
setTimeout(window.randomize, 200);
$('.ko-progress-circle').click(window.randomize);
// -----------------------progress bar functions end-----------------------
$( ".card-1" ).click(function() {
	document.getElementById("how").value = "Renewal";
	console.log(this);
    $( this ).addClass( "bordered" );
	$( ".card-2" ).removeClass( "bordered" );
	$( ".card-3" ).removeClass( "bordered" );
  });
  
  $( ".card-2" ).click(function() {
	  document.getElementById("how").value = "Purchase";
    $( this ).addClass( "bordered" );
	$( ".card-1" ).removeClass( "bordered" );
	$( ".card-3" ).removeClass( "bordered" );
  });
  
  $( ".card-3" ).click(function() {
	  document.getElementById("how").value = "Refinance";
    $( this ).addClass( "bordered" );
	$( ".card-1" ).removeClass( "bordered" );
	$( ".card-2" ).removeClass( "bordered" );
  });

// --------------------------------------------
$( ".card-4" ).click(function() {
	document.getElementById("type").value = "Condo";
	console.log(this);
    $( this ).addClass( "bordered" );
	$( ".card-5" ).removeClass( "bordered" );
	$( ".card-6" ).removeClass( "bordered" );
	$( ".card-7" ).removeClass( "bordered" );
  });
  
  $( ".card-5" ).click(function() {
	  document.getElementById("type").value = "Townhouse";
    $( this ).addClass( "bordered" );
	$( ".card-4" ).removeClass( "bordered" );
	$( ".card-6" ).removeClass( "bordered" );
	$( ".card-7" ).removeClass( "bordered" );
  });
  
  $( ".card-6" ).click(function() {
	  document.getElementById("type").value = "Single Family House";
    $( this ).addClass( "bordered" );
	$( ".card-5" ).removeClass( "bordered" );
	$( ".card-4" ).removeClass( "bordered" );
	$( ".card-7" ).removeClass( "bordered" );
  });
  $( ".card-7" ).click(function() {
	  document.getElementById("type").value = "Investment Property";
    $( this ).addClass( "bordered" );
	$( ".card-5" ).removeClass( "bordered" );
	$( ".card-6" ).removeClass( "bordered" );
	$( ".card-4" ).removeClass( "bordered" );
  });
  // --------------------------------------------
$( ".card-8" ).click(function() {
	document.getElementById("plan").value = "3 months";
	console.log(this);
    $( this ).addClass( "bordered" );
	$( ".card-9" ).removeClass( "bordered" );
	$( ".card-10" ).removeClass( "bordered" );
	$( ".card-11" ).removeClass( "bordered" );
  });
  
  $( ".card-9" ).click(function() {
	  document.getElementById("plan").value = "3 to 6 months";
    $( this ).addClass( "bordered" );
	$( ".card-8" ).removeClass( "bordered" );
	$( ".card-10" ).removeClass( "bordered" );
	$( ".card-11" ).removeClass( "bordered" );
  });
  
  $( ".card-10" ).click(function() {
	  document.getElementById("plan").value = "6-12 months";
    $( this ).addClass( "bordered" );
	$( ".card-9" ).removeClass( "bordered" );
	$( ".card-8" ).removeClass( "bordered" );
	$( ".card-11" ).removeClass( "bordered" );
  });
  $( ".card-11" ).click(function() {
	  document.getElementById("plan").value = "12+ months";
    $( this ).addClass( "bordered" );
	$( ".card-9" ).removeClass( "bordered" );
	$( ".card-10" ).removeClass( "bordered" );
	$( ".card-8" ).removeClass( "bordered" );
  });