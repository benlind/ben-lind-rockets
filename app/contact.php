<?php

$method = 'database';  # 'database' or 'email'

header('Content-type: application/json');

# If the form was submitted, scrub the input (server-side validation)
# see below in the html for the client-side validation using jQuery

$data = [
  'name'    => '',
  'email'   => '',
  'message' => '',
];

$errors = array();  # array to hold errors and success/error status

# Collect all input and trim to remove leading and trailing whitespaces
foreach ($data as $input => $val) {
  if (isset($_GET[$input])) {
    $data[$input] = trim(filter_var(removeHeaders($_GET[$input], FILTER_SANITIZE_STRING)));
  }
  else {
    $data[$input] = '';
  }
}

# Validate the inputs
if (strlen($data['name']) == 0)
  $errors['name'] = "You must enter a name.";
if (strlen($data['name']) < 2)
  $errors['name'] = "Your name must be at least 2 characters.";

if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL) || strlen($data['email']) === 0)
  $errors['email'] = "Please enter a valid email address.";

if (strlen($data['message']) == 0)
  $errors['message'] = "You must enter a message.";
else if(strlen($data['message']) < 25)
  $errors['message'] = "Your name must be at least 25 characters.";


# If no errors were found, proceed with storing the user input
if (!empty($errors)) {
  http_response_code(400);  # Bad Request: invalid information entered
  echo json_encode($errors);
  die();
}

if ($method === 'database') {
  # Add the message to the database

  $db = new mysqli('localhost', 'root', 'root', 'cs1520');

  if($db->connect_errno > 0){
    die('Unable to connect to database [' . $db->connect_error . ']');
  }

  $sql = "INSERT INTO Messages (email, name, message)
          VALUES (?, ?, ?);";

  $stmt = $db->prepare($sql);
  if (!$stmt)
    die('Error during prepare() [' . htmlspecialchars($stmt->error) . ']');

  $success = $stmt->bind_param("sss", $data['name'], $data['email'], $data['message']);
  if (!$success)
    die('Error during bind_param() [' . htmlspecialchars($stmt->error) . ']');

  if (!$stmt->execute())
    die('Error during execute() [' . htmlspecialchars($stmt->error) . ']');

  $stmt->close();
  $db->close();
}
// else if ($method === 'email') {
//   # Build the email (replace the address in the $to section with your own)
//
//   $subject = "BL Contact - " . $data['name'];
//   $headers = "From: " . $data['email'];
//   $data['message'] = $data['message'] . "\n\n"
//              . "From: " . $data['name'] . " <" . $data['email'] . ">";
//
//   mail($to, $subject, $data['message'], $headers);
// }

http_response_code(200);
echo "{}";  # jQuery validate needs some JSON back
die();

# Mail header removal
function removeHeaders($string) {
  $headers = array(
    "/to\:/i",
    "/from\:/i",
    "/bcc\:/i",
    "/cc\:/i",
    "/Content\-Transfer\-Encoding\:/i",
    "/Content\-Type\:/i",
    "/Mime\-Version\:/i"
  );
  $string = preg_replace($headers, '', $string);
  return strip_tags($string);
}

# If passed variable is not set, return empty string
function isset_or_init($var) {
  return isset($var) ? $var : '';
}
