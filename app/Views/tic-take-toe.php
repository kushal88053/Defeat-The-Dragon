<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tick-take-toe</title>
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"> -->
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAz9BzJwfRWIDQTG8JdcJwn1JYJx1V25jg&libraries=places"></script> -->

    <!-- Link to your CSS file using base_url() -->
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bungee+Inline&display=swap"> 
<link rel="stylesheet" href="<?= base_url('css/style.css') ?>">


  
</head>
<body>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> -->
<!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script> -->

<div class="wrapper ">
  <div>
    <h1>dragons <span>vs</span> unicorns</h1>
    <div class="current-status" id="currentStatus">
      <img src="asset/unicorn.png" alt="" id="currentBeastImg">
      <p>'s turn</p>
    </div>
    <div class="board" id="board">
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
    </div>
    <div class="game-end-overlay" id="gameEndOverlay">
      <div class="winning-message" data-winning-message>
        <p></p>
      </div>
      <div class="btn-container">
        <button class="reset-button" id="resetButton">play again</button>
      </div>
    </div>
  </div>
</div>

</body>
<script src="<?= base_url('js/script.js') ?>"></script>

<!-- <script>
    document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM content loaded!');

    // Your existing JavaScript code here

    // Start the game after the DOM is fully loaded
    startGame();
}); -->
</script>
</html>
