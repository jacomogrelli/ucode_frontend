#!/bin/bash



CURRENTDATE=`date +"%Y/%m/%d %H:%M"`

mkdir -p t$1 t$1/assets t$1/css t$1/js
touch t$1/css/style.css t$1/js/script.js t$1/index.html
echo "<!-- ----------------------------------------------------------------------- -->
<!--                                                                         -->
<!--   $2. sprint04. t$1                           -->
<!--                                                                         -->
<!--   By: Oleksiy Nechaiev <nechaeff@gmail.com>                             -->
<!--                        <t.me/losini>                                    -->
<!--   Created: $CURRENTDATE (24H)                                       -->
<!--   Finished: UNFINISHED                                      -->
<!--                                                                         -->
<!--   ucode IT academy <ucode.world>                                        -->
<!--   Je sues 42, nous sommes 42                                            -->
<!--                                                                         -->
<!--   Topics: $3                          -->
<!--                                                                         -->
<!-- ----------------------------------------------------------------------- -->
<!DOCTYPE html>
<html lang="en">

<head>
  <title>$2</title>
  <meta charset=\"utf-8\">
  <meta name=\"description\" content=\"t$1. $2\">
  <meta name=\"author\" content=\"Oleksiy Nechayev\">
  <meta name=\"keywords\" content=\"front-end, frontend, html,
java script, javascript js, c, css, html5, css3\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale-1\">
  <link rel=\"stylesheet\" href=\"./css/style.css\">
  <script src=\"js/script.js\" defer></script>
</head>

<body>
  <h1>$2</h1>
</body>

</html>" >> t$1/index.html

echo "/* ----------------------------------------------------------------------- */
/*                                                                         */
/*   $2. sprint04. t$1                           */
/*                                                                         */
/*   By: Oleksiy Nechaiev <nechaeff@gmail.com>                             */
/*                        <t.me/losini>                                    */
/*   Created: $CURRENTDATE (24H)                                       */
/*   Finished: UNFINISHED                                      */
/*                                                                         */
/*   ucode IT academy <ucode.world>                                        */
/*   Je sues 42, nous sommes 42                                            */
/*                                                                         */
/*   Topics: $3                          */
/*                                                                         */
/* ----------------------------------------------------------------------- */" >> t$1/css/style.css

echo "/* ----------------------------------------------------------------------- */
/*                                                                         */
/*   $2. sprint04. t$1                           */
/*                                                                         */
/*   By: Oleksiy Nechaiev <nechaeff@gmail.com>                             */
/*                        <t.me/losini>                                    */
/*   Created: $CURRENTDATE (24H)                                       */
/*   Finished: UNFINISHED                                      */
/*                                                                         */
/*   ucode IT academy <ucode.world>                                        */
/*   Je sues 42, nous sommes 42                                            */
/*                                                                         */
/*   Topics: $3                          */
/*                                                                         */
/* ----------------------------------------------------------------------- */
'use strict'" >> t$1/js/script.js
