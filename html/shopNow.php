<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Shop Now</title>
    <link href="http://fonts.googleapis.com/css?family=Nunito:400,300" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="../css/shopnow.css">
    <link href="../css/nav.css" rel="stylesheet" type="text/css"/>
    <link href="../css/footer.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">

</head>



<body>
<?php require 'nav.html'; ?>


<main>

    <div class="title">Shop Now</div>

    <div class="filter">



        <div id="type">
            <label>Choose Type </label>
            <select name="type" id="medicType">
                <option id="all" selected> All </option>
                <option id="equipment"> Equipment </option>
                <option id="item"> items </option>
            </select>
        </div>
    </div>

    </div>
    
    
    <div class="items">
        <div class="medic">
            <h2>Medical Equipment</h2>


      

            <div class="item">
                <img src="../photos/alunk.png" height="150px" width="300px"></a>
                <p>Rescue Stretcher</p>

            </div>

            <div class="item">
                <a href="products\stato.php"><img src="https://d3m9l0v76dty0.cloudfront.net/system/photos/3995401/large/2ef53320a7a5ba312429e22264db17d9.jpg" width="300px" height="150px"></a>
                <p>Heart pulse stethoscope</p>
              

            </div>

            <div class="item">
                <img src="../photos/ambo.jpg" height="150px" width="300px"  ></a>
                <p>Breath Ambo</p>
         

            </div>

        </div>
    </div>

        <div class="perish">

            <h2>Perishable medical items</h2>
    
                <div class="item">
             
                <img src="../photos/egged.jpg" height="150px" width="300px"></a>
                <p>Elastic Egged</p>
               
                </div>
                <div class="item">
                    <a href="products/alco.php"><img src="../photos/alco.jpg" height="150px" width="300px"></a>
                    <p>alcohol bottle</p>
                </div>

                <div class="item">
                    <img src="../photos/burnshield.jpg" height="150px" width="300px"></a>
                    <p>burns bandage</p>
                </div>
    </div>

</main>


<?php require 'footer.html';?>
</body>

</html>