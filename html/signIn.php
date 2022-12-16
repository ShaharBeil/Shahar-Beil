<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sign In</title>
    <link href="http://fonts.googleapis.com/css?family=Nunito:400,300" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="../css/signIn.css">
    <link href="../css/nav.css" rel="stylesheet" type="text/css"/>
    <link href="../css/footer.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">

</head>
<body>
<?php require 'nav.html'; ?>


<div class="form-wrap">
    <form>
        <h1>Sign In</h1>
        <div class="input">
            <input type="email" name="email" value="" placeholder="Email">
            <input type="password" name="password" value="" placeholder="Password">
        </div>

    </form>


    <div class="button">
        <button type="submit">Sign In</button>
    </div>

    <p>
        Not a member yet?
        <a href="../html/CreateAccount.php">Create New Account</a>
    </p>

</div>


<?php require 'footer.html';?>
</body>