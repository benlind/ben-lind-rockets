<?php

header('Content-type: application/json');

# Expected inputs (these should map to $_GET indices)
$data = [
  'name'    => '',
  'email'   => '',
  'message' => '',
];

$errors = array();


# Collect and sanitize inputs
foreach ($data as $input => $val) {
  if (isset($_GET[$input])) {
    $data[$input] = trim(sanitize_str($_GET[$input], FILTER_SANITIZE_EMAIL));
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

if (!empty($errors)) {
  http_response_code(400);  # Bad Request: invalid information entered
  echo json_encode($errors);
  die();
}


# If no errors were found, send the email
$to = "bendlind@gmail.com";
$subject = "BL Contact - " . $data['name'];
$headers = "From: mail@benlind.com";
$data['message'] = $data['message'] . "\n\n"
           . "From: " . $data['name'] . " <" . $data['email'] . ">";

mail($to, $subject, $data['message'], $headers);

http_response_code(200);
echo "{}";  # jQuery validate needs some JSON back
die();





/**********************************************
 * Functions
 */

/**
 * sanitize_str() sanitizes the passed string $str. Based on the $target
 * (e.g., 'database' or 'email'), the string will be sanitized differently.
 */
function sanitize_str($str, $target) {
  if ($target === 'database') {
    return mysql_real_escape_string($str);
  }
  else if ($target === 'email') {
    return filter_var($str, FILTER_SANITIZE_EMAIL);
  }
  return $str;
}
