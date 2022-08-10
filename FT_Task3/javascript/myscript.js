function validation()
{
    if(document.getElementById('fname').value == ""){
        document.getElementById("firstnameError").innerHTML="first name cannot be empty";
        return false;
    }
    else if(/^[a-zA-Z]+$/.test(document.getElementById('fname').value)==false)
    {
        document.getElementById("firstnameError").innerHTML="first name can only have letters";
        return false;
    }
    
    if(document.getElementById('lname').value == ""){
        document.getElementById("lastnameError").innerHTML="last name cannot be empty";
        return false;
    }
    else if(/^[a-zA-Z]+$/.test(document.getElementById('lname').value)==false)
    {
        document.getElementById("lastnameError").innerHTML="Last name can only have letters";
        return false;
    }
    

    if(/^\d+/.test(document.getElementById('age').value)==false)
    {
        document.getElementById("ageError").innerHTML="Age must be a number";
        return false;
    }
    

    if(document.getElementById('junior').checked == false && document.getElementById('senior').checked == false && document.getElementById('lead').checked == false){
        document.getElementById('designationError').innerHTML = "Please select your designation";
        return false;
    }
    

    if(document.getElementById('files').value == ""){
        document.getElementById('fileError').innerHTML = "Please select a file";
        return false;
    }
   

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value) )
    {
        document.getElementById("emailError").innerHTML="email ok";
        return false;
    }
   else
   {
        document.getElementById("emailError").innerHTML="Email must contain @ and .com";
   }

    /*if(/^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*().]).{8,}$/.test(document.getElementById('password').value)==false)
    {
        document.getElementById("passwordError").innerHTML="password must be atleast 8 charecters";
        return false;
    }*/
    

    var language = document.getElementById('lan');
    if (language.checked == false) {
        document.getElementById('languageError').innerHTML = "please select a language";
        return false;
    }
    

    
}


