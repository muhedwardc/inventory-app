<?php

    $conn = mysqli_connect('localhost', 'root', '', 'inventorydb');
    if (!$conn) {
        echo "cannot connect to server!";
        exit();
    }

    $page = isset($_GET['p']) ? $_GET['p'] : '';

    if ($page == 'add') {
        $title = $_POST['t'];
        $quantity = $_POST['q'];
        $measure = $_POST['m'];
        
        $conn -> query ("INSERT INTO item VALUES (null, '".$title."', '".$quantity."', '".$measure."' )");
    } else if ($page == 'get') {
        $queryResult = $conn -> query ("SELECT * FROM item");
        $result = array();
        while($fethData = $queryResult -> fetch_assoc()) {
            $result[] = $fethData;
        }

        echo json_encode($result);
    } else if ($page == 'update') {
        $title = $_POST['t'];
        $quantity = $_POST['q'];
        $measure = $_POST['m'];
        
        $conn -> query ("UPDATE item SET kuantitas=".$quantity." WHERE nama='".$title."'");
    } else if ($page == 'delete') {
        $nama = $_GET['n'];

        $conn -> query ("DELETE FROM item WHERE nama='".$nama."'");
    }
?>