export function createBaseEmail(content: string) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #0033a0;
            color: #ffffff;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            padding: 30px;
        }
        .logo {
            text-align: center;
            margin-bottom: 20px;
        }
        h1 {
            color: #0033a0;
            text-align: center;
        }
        .content {
            color: #333333;
        }
        .button {
            display: inline-block;
            background-color: #ffd700;
            color: #0033a0;
            padding: 10px 20px;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            color: #cccccc;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">
            <img src="https://www.visa.bg/logo.png" alt="VISA Club Logo" width="150">
        </div>
        <h1>Verify Your Account</h1>
        <div class="content">
            ${content}
        </div>
        <div class="footer">
            <p>© 2024 VISA Club. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`
}
