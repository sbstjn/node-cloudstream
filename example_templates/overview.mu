<!DOCTYPE html> 
<html lang="en"> 
<head> 
  <title>GetCloudApp API Example</title>
  <meta charset=utf-8 /> 
  <style>
    section img { display: none; }
    .image section img { display: block; }
    h2 a { color: #477DAF; display: inline; font-family: 'Helvetica Neue', Helvetica, 'Arial Geneva', sans-serif; font-size: 12px; font-weight: bold; line-height: 7px; list-style-image: none; list-style-position: outside;  list-style-type: none; text-decoration: none; margin: 0px 0px 0px 20px; padding: 0px 0px 0px 0px; }
    h2 {  margin: 0px 0px 0px 20px; padding: 0px 0px 8px 0px; }
    h2 img { float: left; top: 9px; position: relative; }
    #cloud { background: url('http://my.cl.ly/images/new/header-hgroup-logo.png') no-repeat; height: 34px; margin: 0 auto; position: relative; width: 48px; margin-top: 44px; }
    article { border-bottom: 1px solid #E5E5E5; }
    #container { border-top: 1px solid #E5E5E5; width: 380px; margin: 35px auto 0 auto; }
    section img { max-width: 380px };
  </style>
</head>
<body>
  <header><div id="cloud"></div></header>
  <div id="container">
  {{#items}}  
  <article class="{{item_type}}">
      <h2><img src="{{icon}}"><a href="{{content_url}}">{{name}}</a></h2>
      {{#image}}
      <section><img src="{{content_url}}"></section>
      {{/image}}
  </article>
  {{/items}}
  </div>
</body>
</html>