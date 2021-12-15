<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once './config/database.php';
    include_once './projects.php';

    $database = new Database();
    $db = $database->getConnection();
    

    $item = new Projects($db);
    
    $data = json_decode(file_get_contents('php://input'));
    
    $item->title = $data->title;
    $item->about = $data->about;
    $item->languages = $data->languages;
    $item->links = $data->links;
    
    
    if($item->createProject()){
        echo 'Project created successfully.';
        echo json_encode('Project created successfully.');
    }else{
        echo 'Project could not be created.';
        echo json_encode('Project not created.');

    }
?>