<!DOCTYPE html> 
<html lang="en"> 
<head> 
  <meta charset=utf-8 /> 
  <style>
    img[src=''] { display: none; }
    h2 a { color: #477DAF; display: inline; font-family: 'Helvetica Neue', Helvetica, 'Arial Geneva', sans-serif; font-size: 12px; font-weight: bold; line-height: 7px; list-style-image: none; list-style-position: outside;  list-style-type: none; margin-left: 20px; text-decoration: none; }
    h2 img { float: left; top: 9px; position: relative; }
  </style>
</head>
<body>
  <header></header>
  {{#items}}  
  <article class="{{item_type}}">
      <h2><img src="{{icon}}"><a href="{{content_url}}">{{name}}</a></h2>
      <section><img src="{{preview_image}}"></section>
  </article>
  {{/items}}
</body>
</html>