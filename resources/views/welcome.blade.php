<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Systematik</title>

        <!-- Fonts -->
        <link href="/dist/output.css" rel="stylesheet">

       @vite('resources/css/app.css')
    </head>
    <body>
       <div id="app"></div>
      <div class="text-red-500">KANYINDA</div>
       @vite('resources/js/app.js')
    </body>
</html>
