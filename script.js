function tocloseheader() {
  if ((document.getElementById('active').checked = true)) {
    let hwrapper = document.getElementById('wrapperh');
    hwrapper.style.clipPath = 'circle(0%)';
    document.getElementById('active').checked = false;
  }
}

function totogglebar() {
  if ((document.getElementById('active').checked = true)) {
    let hwrapper = document.getElementById('wrapperh');
    hwrapper.style.clipPath = 'circle(75%)';
    document.getElementById('active').checked = false;
  } else {
    return true;
  }
}

function tobookingpage() {
  if (document.getElementById('passengername').value == '') {
    alert('Enter Correct Passenger Name');
  }
  if (document.getElementById('passengerphone').value.length < 10) {
    alert('Enter correct Passenger Phonenumber');
  }
  if (document.getElementById('passengerpickup').value == '') {
    alert('Enter Correct Pickup Place');
  }
  if (document.getElementById('passengerdrop').value == '') {
    alert('Enter Correct Pickup Place');
  }
  if (document.getElementById('pickupdate').value == '') {
    alert('Enter Correct Pickup Date');
  }
  if (document.getElementById('pickuptime').value == '') {
    alert('Enter Correct Pickup Time');
  }
  if (
    document.getElementById('passengername').value != '' &&
    document.getElementById('passengerphone').value != '' &&
    document.getElementById('passengerpickup').value != '' &&
    document.getElementById('passengerphone').value.length >= 10 &&
    document.getElementById('pickupdate').value != '' &&
    document.getElementById('pickuptime').value != ''
  ) {
    window.location.assign('bookingpage.html');
    alert('You are Being Redirected to Booking Page');
  }
}

function toconfirmpage() {
  window.location.assign('confirmpage.html');
}

// extract pickup drop date time name phone number

function infoextractor() {
  let passname = document.getElementById('passengername').value;
  let passphone = document.getElementById('passengerphone').value;
  let passpick = document.getElementById('passengerpickup').value;
  let passdrop = document.getElementById('passengerdrop').value;
  let passtrip = document.getElementById('onewaytwoway').value;
  let passdate = document.getElementById('pickupdate').value;
  let passtime = document.getElementById('pickuptime').value;

  localStorage.setItem('passname', passname);
  localStorage.setItem('passphone', passphone);
  localStorage.setItem('passpick', passpick);
  localStorage.setItem('passdrop', passdrop);
  localStorage.setItem('passtrip', passtrip);
  localStorage.setItem('passdate', passdate);
  localStorage.setItem('passtime', passtime);

  if (
    passname != '' &&
    passphone != '' &&
    passpick != '' &&
    passdrop != '' &&
    passtrip != '' &&
    passdate != '' &&
    passtime != ''
  ) {
    localStorage.setItem('passname', passname);
    localStorage.setItem('passphone', passphone);
    localStorage.setItem('passpick', passpick);
    localStorage.setItem('passdrop', passdrop);
    localStorage.setItem('passtrip', passtrip);
    localStorage.setItem('passdate', passdate);
    localStorage.setItem('passtime', passtime);
    console.group('Passenger Details');
    console.log(localStorage.getItem('passname'));
    console.groupEnd();
  }
  if (
    passname == '' ||
    passphone == '' ||
    passpick == '' ||
    passdrop == '' ||
    passtrip == '' ||
    passdate == '' ||
    passtime == ''
  ) {
    console.log('Enter Correct Details:- ');
  }
}

//from confirm page to after confirm page
function toafterconfirmpage() {
  window.location.assign('Afterconfirmpage.html');
}

//select cab button fnction

function selectcabinfo1() {
  let carimgsrc = 'sedanicon.jpg';
  let cardetails = document.getElementById('cardetails1').innerText;
  let carfare = document.getElementById('farespan1').innerText;
  let carmodel = document.getElementById('modeldetails1').innerText;
  let extracontent = document.getElementById('extratext1').innerText;
  localStorage.setItem('cardetails', cardetails);
  localStorage.setItem('carfare', carfare);
  localStorage.setItem('carmodel', carmodel);
  localStorage.setItem('extracontent', extracontent);
  localStorage.setItem('src', carimgsrc);
}

function selectcabinfo2() {
  let carimgsrc = 'sedan.png';
  let cardetails = document.getElementById('cardetails2').innerHTML;
  let carfare = document.getElementById('farespan2').innerHTML;
  let carmodel = document.getElementById('modeldetails2').innerHTML;
  let extracontent = document.getElementById('extratext2').innerHTML;
  localStorage.setItem('cardetails', cardetails);
  localStorage.setItem('carfare', carfare);
  localStorage.setItem('carmodel', carmodel);
  localStorage.setItem('extracontent', extracontent);
  localStorage.setItem('src', carimgsrc);
}

function selectcabinfo3() {
  let carimgsrc = 'sedanicon.jpg';

  let cardetails = document.getElementById('cardetails3').innerText;
  let carfare = document.getElementById('farespan3').innerText;
  let carmodel = document.getElementById('modeldetails3').innerText;
  let extracontent = document.getElementById('extratext3').innerText;
  localStorage.setItem('cardetails', cardetails);
  localStorage.setItem('carfare', carfare);
  localStorage.setItem('carmodel', carmodel);
  localStorage.setItem('extracontent', extracontent);
  localStorage.setItem('src', carimgsrc);
}

function selectcabinfo4() {
  let carimgsrc = 'sedan.png';
  let cardetails = document.getElementById('cardetails4').innerText;
  let carfare = document.getElementById('farespan4').innerText;
  let carmodel = document.getElementById('modeldetails4').innerText;
  let extracontent = document.getElementById('extratext4').innerText;
  localStorage.setItem('cardetails', cardetails);
  localStorage.setItem('carfare', carfare);
  localStorage.setItem('carmodel', carmodel);
  localStorage.setItem('extracontent', extracontent);
  localStorage.setItem('src', carimgsrc);
}

/* Updation in the booking page*/
document.getElementById('pickinfobp').innerText =
  localStorage.getItem('passpick');
document.getElementById('dropinfobp').innerText =
  localStorage.getItem('passdrop');
document.getElementById('pickdatebp').innerText =
  localStorage.getItem('passdate');
document.getElementById('picktimebp').innerText =
  localStorage.getItem('passtime');
/*Updation in the booking page ends*/

/*Car confirm page updation*/

var pickfinal = (document.getElementById('pickinfobp').innerText =
  localStorage.getItem('passpick'));
var dropfinal = (document.getElementById('dropinfobp').innerText =
  localStorage.getItem('passdrop'));
var datefinal = (document.getElementById('pickdatebp').innerText =
  localStorage.getItem('passdate'));
var timefinal = (document.getElementById('picktimebp').innerText =
  localStorage.getItem('passtime'));
var farefinal = (document.getElementById('farespancnf').innerText =
  localStorage.getItem('carfare'));
var cardetailsfinal = (document.getElementById('cardetailscnf').innerText =
  localStorage.getItem('cardetails'));
var carmodelfinal = (document.getElementById('modeldetailscnf').innerText =
  localStorage.getItem('carmodel'));
var extratextfinal = (document.getElementById('extratextcnf').innerText =
  localStorage.getItem('extracontent'));

if (document.getElementById('cardetailscnf').innerText == 'Sedan - 4 Seater') {
  document.getElementById('carimgcnf').src = 'sedanicon.jpg';
} else {
  document.getElementById('carimgcnf').src = 'sedan.png';
}

/*Car confirm page updation ends*/

// button booking page updation

function tobuttonbookingpage() {
  if (document.getElementById('passengername').value == '') {
    alert('Enter Correct Passenger Name');
  }
  if (document.getElementById('passengerphone').value.length < 10) {
    alert('Enter correct Passenger Phonenumber');
  }
  if (document.getElementById('passengerpickup').value == '') {
    alert('Enter Correct Pickup Place');
  }
  if (document.getElementById('passengerdrop').value == '') {
    alert('Enter Correct Pickup Place');
  }
  if (document.getElementById('pickupdate').value == '') {
    alert('Enter Correct Pickup Date');
  }
  if (document.getElementById('pickuptime').value == '') {
    alert('Enter Correct Pickup Time');
  }
  if (
    document.getElementById('passengername').value != '' &&
    document.getElementById('passengerphone').value != '' &&
    document.getElementById('passengerpickup').value != '' &&
    document.getElementById('passengerphone').value.length >= 10 &&
    document.getElementById('pickupdate').value != '' &&
    document.getElementById('pickuptime').value != ''
  ) {
    window.location.assign('bookingpage.html');
    alert('You are Being Redirected to Booking Page');
  }
}

//index page functions

function redirecttobuttonbook1() {
  let pick = document.getElementById('pickbuttonbook1').innerHTML;
  let drop = document.getElementById('dropbookbutton1').innerText;
  console.log(localStorage.getItem('dropbutton'));
  localStorage.setItem('pickbutton', pick);
  localStorage.setItem('dropbutton', drop);
  window.location.assign('buttonbookingpage.html');
}
function redirecttobuttonbook2() {
  let pick = document.getElementById('pickbuttonbook2').innerHTML;
  let drop = document.getElementById('dropbookbutton2').innerText;
  console.log(localStorage.getItem('dropbutton'));
  localStorage.setItem('pickbutton', pick);
  localStorage.setItem('dropbutton', drop);
  window.location.assign('buttonbookingpage.html');
}
function redirecttobuttonbook3() {
  let pick = document.getElementById('pickbuttonbook3').innerHTML;
  let drop = document.getElementById('dropbookbutton3').innerText;
  console.log(localStorage.getItem('dropbutton'));
  localStorage.setItem('pickbutton', pick);
  localStorage.setItem('dropbutton', drop);
  window.location.assign('buttonbookingpage.html');
}
function redirecttobuttonbook6() {
  let pick = document.getElementById('pickbuttonbook6').innerHTML;
  let drop = document.getElementById('dropbookbutton6').innerText;
  console.log(localStorage.getItem('dropbutton'));
  localStorage.setItem('pickbutton', pick);
  localStorage.setItem('dropbutton', drop);
  window.location.assign('buttonbookingpage.html');
}
function redirecttobuttonbook4() {
  let pick = document.getElementById('pickbuttonbook4').innerHTML;
  let drop = document.getElementById('dropbookbutton4').innerText;
  console.log(localStorage.getItem('dropbutton'));
  localStorage.setItem('pickbutton', pick);
  localStorage.setItem('dropbutton', drop);
  window.location.assign('buttonbookingpage.html');
}
function redirecttobuttonbook5() {
  let pick = document.getElementById('pickbuttonbook5').innerHTML;
  let drop = document.getElementById('dropbookbutton5').innerText;
  console.log(localStorage.getItem('dropbutton'));
  localStorage.setItem('pickbutton', pick);
  localStorage.setItem('dropbutton', drop);
  window.location.assign('buttonbookingpage.html');
}

//index page functions end

// updation from the accordion to the booking page

function a1i1l12() {
  let pickacc = document.getElementById('a1i1l1').innerText;
  let dropacc = document.getElementById('a1i1l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a1i2l12() {
  let pickacc = document.getElementById('a1i2l1').innerText;
  let dropacc = document.getElementById('a1i2l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a1i3l12() {
  let pickacc = document.getElementById('a1i3l1').innerText;
  let dropacc = document.getElementById('a1i3l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a1i4l12() {
  let pickacc = document.getElementById('a1i4l1').innerText;
  let dropacc = document.getElementById('a1i4l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}

function a1i5l12() {
  let pickacc = document.getElementById('a1i5l1').innerText;
  let dropacc = document.getElementById('a1i5l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a1i6l12() {
  let pickacc = document.getElementById('a1i6l1').innerText;
  let dropacc = document.getElementById('a1i6l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a1i7l12() {
  let pickacc = document.getElementById('a1i7l1').innerText;
  let dropacc = document.getElementById('a1i7l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a1i8l12() {
  let pickacc = document.getElementById('a1i8l1').innerText;
  let dropacc = document.getElementById('a1i8l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a1i9l12() {
  let pickacc = document.getElementById('a1i9l1').innerText;
  let dropacc = document.getElementById('a1i9l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a1i10l12() {
  let pickacc = document.getElementById('a1i10l1').innerText;
  let dropacc = document.getElementById('a1i10l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a1i11l12() {
  let pickacc = document.getElementById('a1i11l1').innerText;
  let dropacc = document.getElementById('a1i11l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a1i12l12() {
  let pickacc = document.getElementById('a1i12l1').innerText;
  let dropacc = document.getElementById('a1i12l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a1i13l12() {
  let pickacc = document.getElementById('a1i13l1').innerText;
  let dropacc = document.getElementById('a1i14l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}

//vellore accordion completed

//chennai accordion starts

function a2i1l12() {
  let pickacc = document.getElementById('a2i1l1').innerText;
  let dropacc = document.getElementById('a2i1l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a2i2l12() {
  let pickacc = document.getElementById('a2i2l1').innerText;
  let dropacc = document.getElementById('a2i2l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a2i3l12() {
  let pickacc = document.getElementById('a2i3l1').innerText;
  let dropacc = document.getElementById('a2i3l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a2i4l12() {
  let pickacc = document.getElementById('a2i4l1').innerText;
  let dropacc = document.getElementById('a2i4l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a2i5l12() {
  let pickacc = document.getElementById('a2i5l1').innerText;
  let dropacc = document.getElementById('a2i5l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a2i6l12() {
  let pickacc = document.getElementById('a2i6l1').innerText;
  let dropacc = document.getElementById('a2i6l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a2i7l12() {
  let pickacc = document.getElementById('a2i7l1').innerText;
  let dropacc = document.getElementById('a2i7l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a2i8l12() {
  let pickacc = document.getElementById('a2i8l1').innerText;
  let dropacc = document.getElementById('a2i8l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a2i9l12() {
  let pickacc = document.getElementById('a2i9l1').innerText;
  let dropacc = document.getElementById('a2i9l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a2i10l12() {
  let pickacc = document.getElementById('a2i10l1').innerText;
  let dropacc = document.getElementById('a2i10l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a2i11l12() {
  let pickacc = document.getElementById('a2i11l1').innerText;
  let dropacc = document.getElementById('a2i11l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a2i12l12() {
  let pickacc = document.getElementById('a2i12l1').innerText;
  let dropacc = document.getElementById('a2i12l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a2i13l12() {
  let pickacc = document.getElementById('a2i13l1').innerText;
  let dropacc = document.getElementById('a2i13l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}

//chennai accordion ends
// bangalore accordion starts

function a3i1l12() {
  let pickacc = document.getElementById('a3i1l1').innerText;
  let dropacc = document.getElementById('a3i1l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a3i2l12() {
  let pickacc = document.getElementById('a3i2l1').innerText;
  let dropacc = document.getElementById('a3i2l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a3i3l12() {
  let pickacc = document.getElementById('a3i3l1').innerText;
  let dropacc = document.getElementById('a3i3l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a3i4l12() {
  let pickacc = document.getElementById('a3i4l1').innerText;
  let dropacc = document.getElementById('a3i4l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a3i5l12() {
  let pickacc = document.getElementById('a3i5l1').innerText;
  let dropacc = document.getElementById('a3i5l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a3i6l12() {
  let pickacc = document.getElementById('a3i6l1').innerText;
  let dropacc = document.getElementById('a3i6l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a3i7l12() {
  let pickacc = document.getElementById('a3i7l1').innerText;
  let dropacc = document.getElementById('a3i7l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a3i8l12() {
  let pickacc = document.getElementById('a3i8l1').innerText;
  let dropacc = document.getElementById('a3i8l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a3i9l12() {
  let pickacc = document.getElementById('a3i9l1').innerText;
  let dropacc = document.getElementById('a3i9l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a3i10l12() {
  let pickacc = document.getElementById('a3i10l1').innerText;
  let dropacc = document.getElementById('a3i10l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a3i11l12() {
  let pickacc = document.getElementById('a3i11l1').innerText;
  let dropacc = document.getElementById('a3i11l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a3i12l12() {
  let pickacc = document.getElementById('a3i12l1').innerText;
  let dropacc = document.getElementById('a3i12l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a3i13l12() {
  let pickacc = document.getElementById('a3i13l1').innerText;
  let dropacc = document.getElementById('a3i13l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}

//bangalore accoridion completed
//trichy accordion start

function a4i1l12() {
  let pickacc = document.getElementById('a4i1l1').innerText;
  let dropacc = document.getElementById('a4i1l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a4i2l12() {
  let pickacc = document.getElementById('a4i2l1').innerText;
  let dropacc = document.getElementById('a4i2l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a4i3l12() {
  let pickacc = document.getElementById('a4i3l1').innerText;
  let dropacc = document.getElementById('a4i3l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a4i4l12() {
  let pickacc = document.getElementById('a4i4l1').innerText;
  let dropacc = document.getElementById('a4i4l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}

function a4i5l12() {
  let pickacc = document.getElementById('a4i5l1').innerText;
  let dropacc = document.getElementById('a4i5l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a4i6l12() {
  let pickacc = document.getElementById('a4i6l1').innerText;
  let dropacc = document.getElementById('a4i6l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a4i7l12() {
  let pickacc = document.getElementById('a4i7l1').innerText;
  let dropacc = document.getElementById('a4i7l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a4i8l12() {
  let pickacc = document.getElementById('a4i8l1').innerText;
  let dropacc = document.getElementById('a4i8l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a4i9l12() {
  let pickacc = document.getElementById('a4i9l1').innerText;
  let dropacc = document.getElementById('a4i9l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a4i10l12() {
  let pickacc = document.getElementById('a4i10l1').innerText;
  let dropacc = document.getElementById('a4i10l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a4i11l12() {
  let pickacc = document.getElementById('a4i11l1').innerText;
  let dropacc = document.getElementById('a4i11l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a4i12l12() {
  let pickacc = document.getElementById('a4i12l1').innerText;
  let dropacc = document.getElementById('a4i12l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a4i13l12() {
  let pickacc = document.getElementById('a4i13l1').innerText;
  let dropacc = document.getElementById('a4i13l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}

//Trichy ended
//Cuddalore started

function a5i1l12() {
  let pickacc = document.getElementById('a5i1l1').innerText;
  let dropacc = document.getElementById('a5i1l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a5i2l12() {
  let pickacc = document.getElementById('a5i2l1').innerText;
  let dropacc = document.getElementById('a5i2l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a5i3l12() {
  let pickacc = document.getElementById('a5i3l1').innerText;
  let dropacc = document.getElementById('a5i3l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a5i4l12() {
  let pickacc = document.getElementById('a5i4l1').innerText;
  let dropacc = document.getElementById('a5i4l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a5i5l12() {
  let pickacc = document.getElementById('a5i5l1').innerText;
  let dropacc = document.getElementById('a5i5l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a5i6l12() {
  let pickacc = document.getElementById('a5i6l1').innerText;
  let dropacc = document.getElementById('a5i6l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a5i7l12() {
  let pickacc = document.getElementById('a5i7l1').innerText;
  let dropacc = document.getElementById('a5i7l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a5i8l12() {
  let pickacc = document.getElementById('a5i8l1').innerText;
  let dropacc = document.getElementById('a5i8l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a5i9l12() {
  let pickacc = document.getElementById('a5i9l1').innerText;
  let dropacc = document.getElementById('a5i9l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a5i10l12() {
  let pickacc = document.getElementById('a5i10l1').innerText;
  let dropacc = document.getElementById('a5i10l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a5i11l12() {
  let pickacc = document.getElementById('a5i11l1').innerText;
  let dropacc = document.getElementById('a5i11l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a5i12l12() {
  let pickacc = document.getElementById('a5i12l1').innerText;
  let dropacc = document.getElementById('a5i12l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a5i13l12() {
  let pickacc = document.getElementById('a5i13l1').innerText;
  let dropacc = document.getElementById('a5i13l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}

//Cuddalore ends
//Pondicherry started

function a6i1l12() {
  let pickacc = document.getElementById('a6i1l1').innerText;
  let dropacc = document.getElementById('a6i1l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a6i2l12() {
  let pickacc = document.getElementById('a6i2l1').innerText;
  let dropacc = document.getElementById('a6i2l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a6i3l12() {
  let pickacc = document.getElementById('a6i3l1').innerText;
  let dropacc = document.getElementById('a6i3l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a6i4l12() {
  let pickacc = document.getElementById('a6i4l1').innerText;
  let dropacc = document.getElementById('a6i4l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a6i5l12() {
  let pickacc = document.getElementById('a6i5l1').innerText;
  let dropacc = document.getElementById('a6i5l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a6i6l12() {
  let pickacc = document.getElementById('a6i6l1').innerText;
  let dropacc = document.getElementById('a6i6l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a6i7l12() {
  let pickacc = document.getElementById('a6i7l1').innerText;
  let dropacc = document.getElementById('a6i7l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a6i8l12() {
  let pickacc = document.getElementById('a6i8l1').innerText;
  let dropacc = document.getElementById('a6i8l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a6i9l12() {
  let pickacc = document.getElementById('a6i9l1').innerText;
  let dropacc = document.getElementById('a6i9l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a6i10l12() {
  let pickacc = document.getElementById('a6i10l1').innerText;
  let dropacc = document.getElementById('a6i10l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a6i11l12() {
  let pickacc = document.getElementById('a6i11l1').innerText;
  let dropacc = document.getElementById('a6i11l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a6i12l12() {
  let pickacc = document.getElementById('a6i12l1').innerText;
  let dropacc = document.getElementById('a6i12l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a6i13l12() {
  let pickacc = document.getElementById('a6i13l1').innerText;
  let dropacc = document.getElementById('a6i13l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}

//pondicherry ended
//madurai started

function a7i1l12() {
  let pickacc = document.getElementById('a7i1l1').innerText;
  let dropacc = document.getElementById('a7i1l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a7i2l12() {
  let pickacc = document.getElementById('a7i2l1').innerText;
  let dropacc = document.getElementById('a7i2l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a7i3l12() {
  let pickacc = document.getElementById('a7i3l1').innerText;
  let dropacc = document.getElementById('a7i3l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a7i4l12() {
  let pickacc = document.getElementById('a7i4l1').innerText;
  let dropacc = document.getElementById('a7i4l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a7i5l12() {
  let pickacc = document.getElementById('a7i5l1').innerText;
  let dropacc = document.getElementById('a7i5l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a7i6l12() {
  let pickacc = document.getElementById('a7i6l1').innerText;
  let dropacc = document.getElementById('a7i6l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a7i7l12() {
  let pickacc = document.getElementById('a7i7l1').innerText;
  let dropacc = document.getElementById('a7i7l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a7i8l12() {
  let pickacc = document.getElementById('a7i8l1').innerText;
  let dropacc = document.getElementById('a7i8l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a7i9l12() {
  let pickacc = document.getElementById('a7i9l1').innerText;
  let dropacc = document.getElementById('a7i9l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a7i10l12() {
  let pickacc = document.getElementById('a7i10l1').innerText;
  let dropacc = document.getElementById('a7i10l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a7i11l12() {
  let pickacc = document.getElementById('a7i11l1').innerText;
  let dropacc = document.getElementById('a7i11l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a7i12l12() {
  let pickacc = document.getElementById('a7i12l1').innerText;
  let dropacc = document.getElementById('a7i12l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a7i13l12() {
  let pickacc = document.getElementById('a7i13l1').innerText;
  let dropacc = document.getElementById('a7i13l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}

//Madurai ended
//Coimbatore started

function a8i1l12() {
  let pickacc = document.getElementById('a8i1l1').innerText;
  let dropacc = document.getElementById('a8i1l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a8i2l12() {
  let pickacc = document.getElementById('a8i2l1').innerText;
  let dropacc = document.getElementById('a8i2l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a8i3l12() {
  let pickacc = document.getElementById('a8i3l1').innerText;
  let dropacc = document.getElementById('a8i3l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a8i4l12() {
  let pickacc = document.getElementById('a8i4l1').innerText;
  let dropacc = document.getElementById('a8i4l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a8i5l12() {
  let pickacc = document.getElementById('a8i5l1').innerText;
  let dropacc = document.getElementById('a8i5l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a8i6l12() {
  let pickacc = document.getElementById('a8i6l1').innerText;
  let dropacc = document.getElementById('a8i6l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a8i7l12() {
  let pickacc = document.getElementById('a8i7l1').innerText;
  let dropacc = document.getElementById('a8i7l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a8i8l12() {
  let pickacc = document.getElementById('a8i8l1').innerText;
  let dropacc = document.getElementById('a8i8l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a8i9l12() {
  let pickacc = document.getElementById('a8i9l1').innerText;
  let dropacc = document.getElementById('a8i9l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a8i10l12() {
  let pickacc = document.getElementById('a8i10l1').innerText;
  let dropacc = document.getElementById('a8i10l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a8i11l12() {
  let pickacc = document.getElementById('a8i11l1').innerText;
  let dropacc = document.getElementById('a8i11l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a8i12l12() {
  let pickacc = document.getElementById('a8i12l1').innerText;
  let dropacc = document.getElementById('a8i12l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}
function a8i13l12() {
  let pickacc = document.getElementById('a8i13l1').innerText;
  let dropacc = document.getElementById('a8i13l2').innerText;
  localStorage.setItem('pickbutton', pickacc);
  localStorage.setItem('dropbutton', dropacc);
  window.location.assign('buttonbookingpage.html');
}

//telegram

function pickdropdatefinal() {
  localStorage.setItem('pickfinal', pickfinal);
  localStorage.setItem('dropfinal', dropfinal);
  localStorage.setItem('datefinal', datefinal);
  localStorage.setItem('timefinal', timefinal);
  localStorage.setItem('farefinal', farefinal);
  localStorage.setItem('cardetailsfinal', cardetailsfinal);
  localStorage.setItem('carmodelfinal', carmodelfinal);
}

function indexpageinfoextractor() {
  let name = document.getElementById('passengername').value;
  let phone = document.getElementById('passengerphone').value;
  let pickuptele = document.getElementById('passengerpickup').value;
  let droptele = document.getElementById('passengerdrop').value;
  let waytele = document.getElementById('onewaytwoway').value;
  let pickupdatetele = document.getElementById('pickupdate').value;
  let picktimetele = document.getElementById('pickuptime').value;
  localStorage.setItem('passnametele', name);
  localStorage.setItem('passphonetele', phone);
  localStorage.setItem('passpickuptele', pickuptele);
  localStorage.setItem('passdroptele', droptele);
  localStorage.setItem('passwaytele', waytele);
  localStorage.setItem('passdatetele', pickupdatetele);
  localStorage.setItem('passtimetele', picktimetele);
}

//bot token
var telegram_bot_id = '6409287992:AAEEq76bRFC3KFRsgfMLJ5TlwfnbYE6wosE';
//chat id
var chat_id = 6045807073;
var u_name, email, message;
var ready = function () {
  passname = localStorage.getItem('passnametele');
  passphone = localStorage.getItem('passphonetele');
  passpick = localStorage.getItem('pickfinal');
  passdrop = localStorage.getItem('dropfinal');
  passway = localStorage.getItem('passwaytele');
  passdate = localStorage.getItem('datefinal');
  passtime = localStorage.getItem('timefinal');
  passvehicle = localStorage.getItem('cardetailsfinal');
  passvehiclemodel = localStorage.getItem('carmodelfinal');
  passvehiclefare = localStorage.getItem('carfare');
  message =
    'i5 Call Taxi - Best Taxi Services in Vellore' +
    '\nPassenger Name :- ' +
    passname +
    '\nPassenger Phone :-' +
    passphone +
    '\nPickup Location :-' +
    passpick +
    '\nDrop Location :-' +
    passdrop +
    '\nType of trip :-' +
    passway +
    '\nPickup Date :- ' +
    passdate +
    '\nPickup Time :-' +
    passtime +
    '\nCab Type :-' +
    passvehicle +
    '\nVehicle Model' +
    passvehiclemodel +
    '\nFare :-' +
    passvehiclefare;
};
var sender = function () {
  ready();
  var settings = {
    async: true,
    crossDomain: true,
    url: 'https://api.telegram.org/bot' + telegram_bot_id + '/sendMessage',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'cache-control': 'no-cache',
    },
    data: JSON.stringify({
      chat_id: chat_id,
      text: message,
    }),
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

  return false;
};
