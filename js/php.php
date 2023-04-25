$data = json_decode(file_get_contents("php://input"), true);

$file = fopen('products.json', 'w');

fwrite($file, json_encode($data));

fclose($file);
