<?php 

    $netw = mysqli_connect("localhost", "root", "", "sarpas_db_web");

    function query($query) {
        global $netw;
        $result = mysqli_query($netw, $query);
        $mediaArr = [];
        while ( $medArr = mysqli_fetch_assoc($result) ) {
            $mediaArr[] = $medArr;
        }
        return $mediaArr;
    };

    function srnSER($keyText) {
        $query = "SELECT * FROM sarana WHERE
            namaxsrn LIKE '$keyText' OR
            kodexsrn LIKE '$keyText' OR
            merekxsrn LIKE '$keyText' OR
            dprxtahunxsrn LIKE '$keyText' OR
            dprxdarixsrn LIKE '$keyText' ";

        return query($query);
    };

?>

