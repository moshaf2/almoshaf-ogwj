<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>المصحف</title>
  <style>
    body {
      margin: 0;
      font-family: 'Arial', sans-serif;
      background-color: #f8f4f0;
      color: #3e2f1c;
      direction: rtl;
    }

    header {
      background-color: #6e4b2c;
      color: white;
      padding: 1rem;
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
    }

    .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      padding: 2rem;
    }

    .section {
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      padding: 2rem 1rem;
      text-align: center;
      transition: 0.3s;
      border-bottom: 4px solid #c4a484;
    }

    .section:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 15px rgba(0,0,0,0.15);
    }

    .section h2 {
      margin-bottom: 1rem;
      font-size: 1.4rem;
      color: #5a3e2b;
    }

    footer {
      text-align: center;
      padding: 1rem;
      background-color: #eee3d4;
      font-size: 0.9rem;
      color: #6e4b2c;
    }

    .settings {
      position: fixed;
      top: 1rem;
      left: 1rem;
      background: #fff;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      box-shadow: 0 0 5px rgba(0,0,0,0.1);
      font-size: 0.9rem;
    }

    .back-button {
      position: fixed;
      top: 1rem;
      right: 1rem;
      background: #6e4b2c;
      color: white;
      padding: 0.4rem 1rem;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>

  <header>المصحف</header>

  <div class="settings">
    الوضع: داكن مفعل ✅
  </div>

  <button class="back-button" onclick="history.back()">رجوع</button>

  <div class="container">
    <div class="section">
      <h2>القرآن الكريم</h2>
    </div>
    <div class="section">
      <h2>الأذكار</h2>
    </div>
    <div class="section">
      <h2>السبحة</h2>
    </div>
    <div class="section">
      <h2>حول الموقع</h2>
    </div>
  </div>

  <footer>
    جميع الحقوق محفوظة © المصحف 2025
  </footer>

</body>
</html>
