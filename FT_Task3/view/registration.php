<?php
    include("../control/registrationprocess.php");
?>

<html>
    <head>
    <script type="text/javascript" src="../javascript/myscript.js"></script>
        <title>
            Form
        </title>

       
    </head>
    <body>
        <h1 >Registration Form</h1>
        
        <form action="" method="POST" enctype="multipart/form-data" onsubmit="return validation()">
            <table>
                <tr class="data">
                    <td>First name</td>
                    <td><input type = "text" name="fname" id="fname"></td>
                    <td><p id="firstnameError"></p></td>
                </tr>
                <tr class="data">
                    <td>Last name</td>
                    <td><input type = "text" name="lname" id="lname"></td>
                    <td><p id="lastnameError"></p></td>
                </tr>
                <tr class="data">
                    <td>Age</td>
                    <td><input type = "text" name="age" id="age"></td>
                    <td><p id="ageError"></p></td>
                </tr>
                <tr class="data">
                    <td>Designation</td>
                    <td>
                    <div id="jp"><input type="radio" name="designation" value="juniorprogrammer" id="junior">Junior Programmer </div> 
                    <div id="sp"><input type="radio" name="designation" value="seniorprogrammer" id="senior">Senior Programmer
                    </div>
                    <div id="pl"><input type="radio" name="designation" value="projectlead" id="lead">Project Lead</div>
                    </td>
                    <td><p id="designationError"></p></td>
                </tr>
                <tr class="data">
                    <td>Prefered Language</td>
                    <td>
                        <input type = "checkbox" value="java" name="java" id="lan">JAVA
                        <input type = "checkbox" value="php" name="php" id="lan">PHP
                        <input type = "checkbox" value="c++" name="c++" id="lan">C++
                    </td>
                    <td><p id="languageError"></p></td>
                </tr>
                <tr class="data">
                    <td>Email</td>
                    <td><input type = "text" name="email" id="email"></td>
                    <td><p id="emailError"></p></td>
                </tr>
                <tr class="data">
                    <td>Password</td>
                    <td><input type = "password" name="password" id="password"></td>
                    
                    <td><p id="passwordError"></p></td>
                </tr>
                
                <tr class="data">
                    <td>Please choose a file</td>
                    <td><input type="file" name="myfile" id="files">
                    <td><p id="fileError"></p></td>
                </tr>
                <td ><input class="btn submit" type="submit" value="Submit" name="registraion">
                <input class="btn reset" type="reset" value="Reset"></td>

            </table>
        </form>
    </body>
   
</html>