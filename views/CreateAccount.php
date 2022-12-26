<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Join us!</title>
    <link href="http://fonts.googleapis.com/css?family=Nunito:400,300" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="../static/css/CreateAccount.css">
    <link href="../static/css/nav.css" rel="stylesheet" type="text/css"/>
    <link href="../static/css/footer.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <script  type = "text/javascript" src="../static/javascript/Registration.js" ></script>
</head>

<body>
<?php require 'nav.html'; ?>

<div class="form-wrap">
<form>
    <h1>Join us</h1>
    <div class="input">
         <input type="text" name="name" id="name" value="" placeholder="Name">
    </br>
         <input type="email" name="email" id="email" value="" placeholder="Email">
        </br>
         <input type="password" name="password" id="password" value="" placeholder="Password">
        </br>
        <input type="password" name="password2" id ="password2" value="" placeholder="Confirm Password">
    </div>

</form>


<div class="button">
    <button onclick="RegVal()">Sign Up</button>
</div>

</div>

<?php require 'footer.html';?>
</body>