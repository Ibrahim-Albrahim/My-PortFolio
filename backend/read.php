<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    include_once './config/database.php';
    include_once './projects.php';

    

    $database = new Database();
    $db = $database->getConnection();

    $items = new Projects($db);
    

    $stmt = $items->getProjects();
    $itemCount = $stmt->rowCount();

    // echo json_encode($itemCount);

    if($itemCount > 0){
        
        $projectArr = array();
        // $projectArr["body"] = array();
        // $projectArr["itemCount"] = $itemCount;

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id" => $id,
                "title" => $title,
                "about" => $about,
                "languages" => $languages,
                "links" => $links
                    );

            // array_push($projectArr["body"], $e);
            array_push($projectArr, $e);

        }
        echo json_encode($projectArr);
        
    }

    else{
        http_response_code(404);
        echo json_encode(
            array("message" => "No record found.")
        );
        
    }
?>

 

    