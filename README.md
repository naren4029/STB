# Gov Tech (STB) - URL Shortener App

> $ Project Description :

1. As a shortened URL creator, I want to shorten a normal URL to a shortened one, so that I
   can have a shorter URL to disseminate.

- Sample request: www.google.com
- Sample response: sho.rt/sdf87sf

2. As a shortened URL consumer, I want to click on a shortened URL and have it arrive at the
   full URL without further clicks, so that I can type less into my browser.

> $ Installation and Config Setup:

- Installation Requirements: XAMPP Sever (for Mysql), Node Js Version 16 and above

- Config Setup:

  1. Press the Windows key.

  2. Type Notepad in the search field.

  3. In the search results, right-click Notepad and select Run as administrator.

  4. From Notepad, open the following file: "c:\Windows\System32\Drivers\etc\hosts"

  5. Make the necessary changes to the file (copy paste content inside quote '127.0.0.1 sho.rt').

  6. Save to save your changes.

> $ Project Setup:

- Frontend Setup:

1. Navigate to path "STB\frontend\stb-url-shortner" run command "npm install" to install frontend dependencies
2. To run frontend on dev mode run command "npm start" (host & port: localhost:3000) [localhost IP:127.0.0.1]
3. To Build lastest changes for Production mode run command "npm run build"

- Backend Setup:

1. Navigate to path "STB\backend\stb-url-shortner" run command "npm install" to install backend dependencies
2. To run backend on dev mode run command "npm start" (host & port:localhost:80) [localhost IP:127.0.0.1]

> $ Unit Testing:

- Frontend Unit testing:

1. Navigate to path "STB\frontend\stb-url-shortner" run command "npm test" to execute frontend unit testcases
2. All unit test files are named as \*.spec.tsx or \*.spec.ts

- Backend Unit testing:

1. Navigate to path "STB\backend\stb-url-shortner" run command "npm test" to execute backend unit testcases
2. All unit test files are named as \*.spec.js

> User Testing on Browser (manual functional testing):

1. Navigate to path "STB\backend\stb-url-shortner" run command "npm start" (host & port:localhost:80) [localhost IP:127.0.0.1].
2. Open browser (prefered browser: google chrome) enter "localhost:80" in location bar.
3. Application is ready for testing.

<--End of File-->
