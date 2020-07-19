<?php 
$conn = mysqli_connect('localhost', 'root', '', 'mybase');


$message = '';

if (isset ($_POST['submit'])) {
    $email = $_POST['email'];
    $email = mysqli_real_escape_string($conn, $email);

    $query = "INSERT INTO details (email) 
    
    VALUES ('$email')";
    $result = mysqli_query($conn,$query);
    if ($result) {
        echo "<script>
        window.location.pathname = '/src/success.html'
        </script>";
    }else {
        echo "<script>
        alert('Unsuccessful')
        window.location.pathname = '/src/success.html'
        </script>";
    }
}
