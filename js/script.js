function makeId(){
  var inputs = document.getElementById('myForm').children;
  document.getElementById('fname-display').innerHTML = inputs.fname.value;
  document.getElementById('lname-display').innerHTML = inputs.lname.value;
  document.getElementById('orgname-display').innerHTML = inputs.orgname.value;
}
