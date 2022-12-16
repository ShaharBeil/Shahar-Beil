<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Wish List</title>
    <link href="http://fonts.googleapis.com/css?family=Nunito:400,300" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="../css/wishlist.css">
    <link href="../css/nav.css" rel="stylesheet" type="text/css"/>
    <link href="../css/footer.css" rel="stylesheet" type="text/css"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">

</head>

<body>
<?php require 'nav.html'; ?>
<h1>Wish List</h1>

<div class="wish-list">
    
    <div class="column-labels">
        <label class="image">Item</label>
        <label class="description">Description</label>
        <label class="price">Price</label>
        <label class="quantity">Amount</label>
        <label class="p-remove">Remove</label>
        <label class="price-total">Total</label>
    
    </div>
    
    <!--product1-->
    <div class="item">
        
        <div class="image">
            <img src="../photos/egged.jpg" >
        </div>
        
        <div class="description">
            <div class="p-title">Bandage 20x20cm</div>
            <p class="p-description">  High utility, long duration activity. The best anyone can get</p>
        </div>
        
        <div class="price">12.5$</div>
        
        <div class="quantity">
            <input type="number" value="2" min="1">
        </div>
        <div class="p-remove">
            <button class="remove">Remove </button>
        </div>
        
        
        <div class="price-total">25$</div>
    
    </div>
    
    <!--product2-->
    <div class="item">
        
        <div class="image">
            <img src="../photos/alunk.png" >
        </div>
        
        <div class="description">
            <div class="p-title">Stretcher 200x200cm</div>
            <p class="p-description">  Number 1 Alunka in the world</p>
        </div>
        
        <div class="price">50$</div>
        
        <div class="quantity">
            <input type="number" value="1" min="1">
        </div>
        <div class="p-remove">
            <button class="remove">Remove </button>
        </div>
        
        
        <div class="price-total">50$</div>
    
    </div>
    
    <?php require 'footer.html';?>
</body>
</html>