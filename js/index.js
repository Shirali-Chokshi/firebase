$(function(){
var ageCheckBox1, ageCheckBox2, ageCheckBox3, ageCheckBox4;

$('.volunteerInterest8').click(function(){
  $('.otherInterestWrapper').show();
})

  var config = {
      apiKey: "AIzaSyA5irLO0o5-ZPuj-UyddXYsjaTW5wlyWaU",
      authDomain: "vrajcanadavolunteers.firebaseapp.com",
      databaseURL: "https://vrajcanadavolunteers.firebaseio.com",
      projectId: "vrajcanadavolunteers",
      storageBucket: "",
      messagingSenderId: "473411404022"
    };
    firebase.initializeApp(config);

  //just make a variable to keep track of the data coming from Firebase
  var data =[];
  
  //create a new connection to firebase
  var ref = new Firebase('https://vrajcanadavolunteers.firebaseio.com');
  
  //listen to data updates from firebase
  ref.on("value", function(snapshot){
    // console.log(snapshot.val() );
    //when data updates at Firebase, put it in the data variable
    data = snapshot.val();
  })

  $('#volunteersForm').submit(function(event){
    event.preventDefault();
    var $form = $(this);
    console.log("submit to Firebase");
    
    // store reference to /volunteers collection
    var volunteersCollection = ref.child('volunteers');
    
    // keep a reference to push method so there is a unique id generated every time theres a push from here
    var newVolunteerRef = volunteersCollection.push();

    //make the submit disabled
    $form.find("#saveForm").prop('disabled', true);

   // Setting CheckBox Value for Age Group
    if($('.ageCheckBox1').prop("checked") == true){
      ageCheckBox1 = true;
    }else if($('.ageCheckBox1').prop("checked") == false){
      ageCheckBox1 = false;
    }
    if($('.ageCheckBox2').prop("checked") == true){
      ageCheckBox2 = true;
    }else if($('.ageCheckBox2').prop("checked") == false){
      ageCheckBox2 = false;
    }
    if($('.ageCheckBox3').prop("checked") == true){
      ageCheckBox3 = true;
    }else if($('.ageCheckBox3').prop("checked") == false){
      ageCheckBox3 = false;
    }
    if($('.ageCheckBox4').prop("checked") == true){
      ageCheckBox4 = true;
    }else if($('.ageCheckBox4').prop("checked") == false){
      ageCheckBox4 = false;
    }

    // Setting CheckBox Value for Volunteer Interest
    if($('.volunteerInterest1').prop("checked") == true){
      volunteerInterest1 = true;
    }else if($('.volunteerInterest1').prop("checked") == false){
      volunteerInterest1 = false;
    }
    if($('.volunteerInterest2').prop("checked") == true){
      volunteerInterest2 = true;
    }else if($('.volunteerInterest2').prop("checked") == false){
      volunteerInterest2 = false;
    }
    if($('.volunteerInterest3').prop("checked") == true){
      volunteerInterest3 = true;
    }else if($('.volunteerInterest3').prop("checked") == false){
      volunteerInterest3 = false;
    }
    if($('.volunteerInterest4').prop("checked") == true){
      volunteerInterest4 = true;
    }else if($('.volunteerInterest4').prop("checked") == false){
      volunteerInterest4 = false;
    }
    if($('.volunteerInterest5').prop("checked") == true){
      volunteerInterest5 = true;
    }else if($('.volunteerInterest5').prop("checked") == false){
      volunteerInterest5 = false;
    }
    if($('.volunteerInterest6').prop("checked") == true){
      volunteerInterest6 = true;
    }else if($('.volunteerInterest6').prop("checked") == false){
      volunteerInterest6 = false;
    }
    if($('.volunteerInterest7').prop("checked") == true){
      volunteerInterest7 = true;
    }else if($('.volunteerInterest7').prop("checked") == false){
      volunteerInterest7 = false;
    }
    if($('.volunteerInterest8').prop("checked") == true){
      volunteerInterest8 = true;
    }else if($('.volunteerInterest8').prop("checked") == false){
      volunteerInterest8 = false;
    }


    
    //send the new data to Firebase
    newVolunteerRef.set({
      "firstname":$('.fName').val(),
      "lastname":$('.lName').val(),
      "address":$('.addressWrapper').val(),
      "email":$('.emailWrapper').val(),
      "phonenumber":$('.phoneWrapper').val(),
      "availability":$('.availabilityWrapper').val(),
      "emergencycontact":$('.emergencyContactWrapper').val(),
      "emergencyphonenumber":$('.emergencyPhoneWrapper').val(),
      "under20":ageCheckBox1,
      "between21and40":ageCheckBox2,
      "between41and60":ageCheckBox3,
      "above60":ageCheckBox4,
      "IT":volunteerInterest1,
      "housekeeping":volunteerInterest2,
      "gardening":volunteerInterest3,
      "administration":volunteerInterest4,
      "accounting":volunteerInterest5,
      "kitchen":volunteerInterest6,
      "phool":volunteerInterest7,
      "other":volunteerInterest8,
      "otherInterests":$('.otherInterests').val()
    });
    // $('#volunteersForm').reset();
    $('#volunteersForm').find('input:text, input:email, textarea').val('');
        $('#volunteersForm').find('input:checkbox').prop('checked', false);

    return false;
  })
})