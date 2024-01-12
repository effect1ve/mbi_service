<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['pho<?php
    // Подключение библиотеки
    require 'phpmailer/PHPMailer.php';
    require 'phpmailer/SMTP.php';
    require 'phpmailer/Exception.php';
    
    // Получение данных
    $json = file_get_contents('php://input'); // Получение json строки
    $data = json_decode($json, true); // Преобразование json
    
    // Данные
    $phone = $data['phone'];
    
    // Контент письма
    $title = 'Заявка с сайта'; // Название письма
    $body = '<p>Телефон: <strong>'.$phone.'</strong></p>';
    
    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    
    try {
      $mail->isSMTP();
      $mail->CharSet = 'UTF-8';
      $mail->SMTPAuth   = true;
    
      // Настройки почты отправителя
      $mail->Host       = ''; // SMTP сервера вашей почты
      $mail->Username   = ''; // Логин на почте
      $mail->Password   = ''; // Пароль на почте
      $mail->SMTPSecure = 'ssl';
      $mail->Port       = 465;
    
      $mail->setFrom('effectCatana@yandex.ru', 'Заявка с сайта'); // Адрес самой почты и имя отправителя
    
      // Получатель письма
      $mail->addAddress('');
     
      // Отправка сообщения
      $mail->isHTML(true);
      $mail->Subject = $title;
      $mail->Body = $body;
    
      $mail->send('d');
    
      // Сообщение об успешной отправке
      echo ('Заявка отправлено успешно! Наша команда свяжется с Вами в ближайшее время!');
    
    } catch (Exception $e) {
      header('HTTP/1.1 400 Bad Request');
      echo('Сообщение не было отправлено! Причина ошибки: {$mail->ErrorInfo}');
    }