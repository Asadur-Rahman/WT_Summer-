
function myAjax()
{
    var myxxhttp=new XMLHttpRequest();
    document.getElementById("inputtext").value;
/* reponse function */
    myxxhttp.onreadystatechange = function()
    {
        if(this.readyState==4 & this.status==200)
        {
            document.getElementById("unameError").innerHTML=this.responseText;
        }
    }
/* request function */
    myxhttp.open("POST", "checknamecontrol.php", true);
    myxxhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    myxxhttp.send("uname=" +name);


}