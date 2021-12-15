<?php
    class Projects{

        // Connection
        private $conn;

        // Table
        private $db_table = "Projects";

        // Columns
        public $id;
        public $title;
        public $about;
        public $languages;
        public $links;
        
        // Db connection
        public function __construct($db){
            $this->conn = $db;
        }

        // GET ALL
        public function getProjects(){
            $sqlQuery = "SELECT id, title, about, languages, links FROM " . $this->db_table . "";
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        // CREATE
        public function createProject(){
            $sqlQuery = "INSERT INTO
                        ". $this->db_table ."
                    SET
                        title = :title, 
                        about = :about, 
                        languages = :languages, 
                        links = :links";
            
            
            $stmt = $this->conn->prepare($sqlQuery);
        
            // sanitize
            $this->title=htmlspecialchars(strip_tags($this->title));
            $this->about=htmlspecialchars(strip_tags($this->about));
            $this->languages=htmlspecialchars(strip_tags($this->languages));
            $this->links=htmlspecialchars(strip_tags($this->links));
        
            // bind data
            $stmt->bindParam(":title", $this->title);
            $stmt->bindParam(":about", $this->about);
            $stmt->bindParam(":languages", $this->languages);
            $stmt->bindParam(":links", $this->links);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        // READ single
        public function getSingleEmployee(){
            $sqlQuery = "SELECT
                        id, 
                        title, 
                        about, 
                        languages, 
                        links 
                      FROM
                        ". $this->db_table ."
                    WHERE 
                       id = ?
                    LIMIT 0,1";

            $stmt = $this->conn->prepare($sqlQuery);

            $stmt->bindParam(1, $this->id);

            $stmt->execute();

            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            
            $this->title = $dataRow['title'];
            $this->about = $dataRow['about'];
            $this->languages = $dataRow['languages'];
            $this->links = $dataRow['links'];
        }        

        // UPDATE
        public function updateEmployee(){
            $sqlQuery = "UPDATE
                        ". $this->db_table ."
                    SET
                        title = :title, 
                        about = :about, 
                        languages = :languages, 
                        links = :links
                    WHERE 
                        id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->title=htmlspecialchars(strip_tags($this->title));
            $this->about=htmlspecialchars(strip_tags($this->about));
            $this->languages=htmlspecialchars(strip_tags($this->languages));
            $this->links=htmlspecialchars(strip_tags($this->links));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $stmt->bindParam(":title", $this->title);
            $stmt->bindParam(":about", $this->about);
            $stmt->bindParam(":languages", $this->languages);
            $stmt->bindParam(":links", $this->links);
            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        // DELETE
        function deleteEmployee(){
            $sqlQuery = "DELETE FROM " . $this->db_table . " WHERE id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            $stmt->bindParam(1, $this->id);
        
            if($stmt->execute()){
                return true;
            }
            return false;
        }

    }
?>