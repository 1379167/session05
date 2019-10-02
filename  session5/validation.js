function validate() {
  if( document.myform.Name.value == "")
  {
    alert( "Please provide your name!" );
    document.myform.Name.focus() ;
    return false;
  }

  if(document.myform.EMAIL.value == "")
{
  alert( "Please provide your Email!" );
  document.myform.Email.focus();
  return false;
}

var emailid = document.myform.Email.value;
atpos = emailid.indexof("@");
dotpos = emailid.lastindexof(".");

if (atpos < 1 || (dotpos - atpos <2 )) {
  alert("Please enter correct email ID")
  document.myform.Email.focus() ;
  return false;
}

if( document.myform.Postcode.value == "")
{
  alert( "Please provide a postcde in the format #### ###.");
  document.myform.Postcode.focus() ;
  return false;
}

if( document.myform.choice.value == "-1" )
{
  alert( "Please select your choice!" );
  return false;
}
return( true )
}
