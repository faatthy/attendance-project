<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="robots" content="noindex" />
        <link rel="stylesheet" href="../style.css">
        <title>scriptdo.js · Att-web-app · GitFront</title>
    </head>
    <body>
        <div class="container">
            <div class="location">
                <a href="..">Att-web-app</a> /
                <span>scriptdo.js</span>
            </div>

            <div class="blob-view">
                <div class="header">
                    <div>scriptdo.js</div>
                    <div class="last">
                        <a class="btn" href="../raw/scriptdo.js">Raw</a>
                    </div>
                </div>
                <div class="content ">
                    <pre style="background-color:#fff"><span style="color:#2838b0;font-style:italic">var</span> download <span style="color:#666">=</span> <span style="color:#388038">document</span><span style="color:#888">.</span>getElementById<span style="color:#888">(</span><span style="color:#b83838">&#34;download-btn&#34;</span><span style="color:#888">)</span><span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">var</span> a <span style="color:#666">=</span> <span style="color:#388038">document</span><span style="color:#888">.</span>getElementById<span style="color:#888">(</span><span style="color:#b83838">&#34;hid&#34;</span><span style="color:#888">)</span><span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">var</span> submit <span style="color:#666">=</span> <span style="color:#388038">document</span><span style="color:#888">.</span>getElementById<span style="color:#888">(</span><span style="color:#b83838">&#34;clr&#34;</span><span style="color:#888">)</span><span style="color:#888">;</span>
download<span style="color:#888">.</span>onclick <span style="color:#666">=</span><span style="color:#888">(</span><span style="color:#888">)</span> <span style="color:#888">=&gt;</span><span style="color:#888">{</span>
  a<span style="color:#888">.</span>href<span style="color:#666">=</span><span style="color:#b83838">`</span><span style="color:#b83838">/attendance/download</span><span style="color:#b83838">`</span><span style="color:#888">;</span>
  a<span style="color:#888">.</span>click<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>

<span style="color:#888">}</span>
submit<span style="color:#888">.</span>onclick <span style="color:#666">=</span> <span style="color:#888">(</span><span style="color:#888">)</span> <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>
  <span style="color:#2838b0;font-style:italic">var</span> data <span style="color:#666">=</span> <span style="color:#888">{</span>
    v<span style="color:#666">:</span><span style="color:#b83838">&#39;1&#39;</span><span style="color:#888">,</span>
    cl<span style="color:#666">:</span> <span style="color:#b83838">&#39;1&#39;</span>
        <span style="color:#888">}</span><span style="color:#888">;</span>
console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39;nothing!&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span>
fetch<span style="color:#888">(</span><span style="color:#388038">window</span><span style="color:#888">.</span>location<span style="color:#888">,</span> <span style="color:#888">{</span>
  method<span style="color:#666">:</span> <span style="color:#b83838">&#39;POST&#39;</span><span style="color:#888">,</span>
  headers<span style="color:#666">:</span> <span style="color:#888">{</span>
    <span style="color:#b83838">&#39;Content-Type&#39;</span><span style="color:#666">:</span> <span style="color:#b83838">&#39;application/json&#39;</span>
  <span style="color:#888">}</span><span style="color:#888">,</span>
  body<span style="color:#666">:</span> JSON<span style="color:#888">.</span>stringify<span style="color:#888">(</span>data<span style="color:#888">)</span>
  
<span style="color:#888">}</span><span style="color:#888">)</span>
<span style="color:#888">.</span>then<span style="color:#888">(</span>response <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>
  <span style="color:#2838b0">if</span> <span style="color:#888">(</span>response<span style="color:#888">.</span>status <span style="color:#666">===</span><span style="color:#444">200</span><span style="color:#888">)</span>
  console<span style="color:#888">.</span>log<span style="color:#888">(</span>response<span style="color:#888">.</span>body<span style="color:#888">)</span><span style="color:#888">;</span>
  <span style="color:#2838b0">if</span> <span style="color:#888">(</span>response<span style="color:#888">.</span>status <span style="color:#666">===</span><span style="color:#444">500</span><span style="color:#888">)</span>
  console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39;nothing!&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span>
  <span style="color:#2838b0">return</span> response<span style="color:#888">.</span>text<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>
   
<span style="color:#888">}</span><span style="color:#888">)</span>
<span style="color:#888">.</span>then<span style="color:#888">(</span>text <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>
  console<span style="color:#888">.</span>log<span style="color:#888">(</span>text<span style="color:#888">)</span><span style="color:#888">;</span>
  alert<span style="color:#888">(</span>text<span style="color:#888">)</span><span style="color:#888">;</span>

<span style="color:#888">}</span><span style="color:#888">)</span>

<span style="color:#888">.</span><span style="color:#2838b0">catch</span><span style="color:#888">(</span>error <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>
  console<span style="color:#888">.</span>error<span style="color:#888">(</span><span style="color:#b83838">&#39; Error:&#39;</span><span style="color:#888">,</span> error<span style="color:#888">)</span><span style="color:#888">;</span>
             <span style="color:#888">}</span><span style="color:#888">)</span><span style="color:#888">;</span> 
<span style="color:#888">}</span>

  <span style="color:#2838b0;font-style:italic">function</span> getLocation<span style="color:#888">(</span><span style="color:#888">)</span> <span style="color:#888">{</span>
    <span style="color:#2838b0">if</span> <span style="color:#888">(</span>navigator<span style="color:#888">.</span>geolocation<span style="color:#888">)</span> <span style="color:#888">{</span>
      navigator<span style="color:#888">.</span>geolocation<span style="color:#888">.</span>getCurrentPosition<span style="color:#888">(</span>showPosition<span style="color:#888">,</span> <span style="color:#888">(</span>err<span style="color:#888">)</span> <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39;Error in location&#39;</span><span style="color:#888">)</span><span style="color:#888">}</span><span style="color:#888">,</span> <span style="color:#888">{</span>
          enableHighAccuracy<span style="color:#666">:</span> <span style="color:#444;font-style:italic">true</span>
      <span style="color:#888">}</span><span style="color:#888">)</span><span style="color:#888">;</span>
  <span style="color:#888">}</span> <span style="color:#2838b0">else</span> <span style="color:#888">{</span>
      alert<span style="color:#888">(</span><span style="color:#b83838">&#34;Geolocation is not supported by this browser.&#34;</span><span style="color:#888">)</span><span style="color:#888">;</span>
  <span style="color:#888">}</span>
<span style="color:#888">}</span>

<span style="color:#2838b0;font-style:italic">function</span> showPosition<span style="color:#888">(</span>position<span style="color:#888">)</span> <span style="color:#888">{</span>
  <span style="color:#2838b0;font-style:italic">var</span> latitude <span style="color:#666">=</span> position<span style="color:#888">.</span>coords<span style="color:#888">.</span>latitude<span style="color:#888">;</span>
  <span style="color:#2838b0;font-style:italic">var</span> longitude <span style="color:#666">=</span> position<span style="color:#888">.</span>coords<span style="color:#888">.</span>longitude<span style="color:#888">;</span>
  <span style="color:#2838b0;font-style:italic">var</span> accuracy <span style="color:#666">=</span> position<span style="color:#888">.</span>coords<span style="color:#888">.</span>accuracy<span style="color:#888">;</span>
  <span style="color:#2838b0;font-style:italic">var</span> accuracyInMeters <span style="color:#666">=</span> accuracy<span style="color:#888">.</span>toFixed<span style="color:#888">(</span><span style="color:#444">2</span><span style="color:#888">)</span> <span style="color:#666">+</span> <span style="color:#b83838">&#34; meters&#34;</span><span style="color:#888">;</span>

  <span style="color:#2838b0;font-style:italic">var</span> data <span style="color:#666">=</span> <span style="color:#888">{</span>
    v<span style="color:#666">:</span><span style="color:#b83838">&#39;2&#39;</span><span style="color:#888">,</span>
    latd<span style="color:#666">:</span> latitude<span style="color:#888">,</span>
    lond<span style="color:#666">:</span> longitude<span style="color:#888">,</span>
    accd<span style="color:#666">:</span> accuracyInMeters
              <span style="color:#888">}</span><span style="color:#888">;</span>
  
  fetch<span style="color:#888">(</span><span style="color:#388038">window</span><span style="color:#888">.</span>location<span style="color:#888">.</span>href<span style="color:#888">,</span> <span style="color:#888">{</span>
    method<span style="color:#666">:</span> <span style="color:#b83838">&#39;POST&#39;</span><span style="color:#888">,</span>
    headers<span style="color:#666">:</span> <span style="color:#888">{</span>
      <span style="color:#b83838">&#39;Content-Type&#39;</span><span style="color:#666">:</span> <span style="color:#b83838">&#39;application/json&#39;</span>
    <span style="color:#888">}</span><span style="color:#888">,</span>
    body<span style="color:#666">:</span> JSON<span style="color:#888">.</span>stringify<span style="color:#888">(</span>data<span style="color:#888">)</span>
  <span style="color:#888">}</span><span style="color:#888">)</span>
  <span style="color:#888">.</span>then<span style="color:#888">(</span>response <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>
    <span style="color:#2838b0">if</span> <span style="color:#888">(</span>response<span style="color:#888">.</span>status <span style="color:#666">===</span><span style="color:#444">200</span><span style="color:#888">)</span>
    console<span style="color:#888">.</span>log<span style="color:#888">(</span>response<span style="color:#888">.</span>body<span style="color:#888">)</span><span style="color:#888">;</span>
    <span style="color:#2838b0">if</span> <span style="color:#888">(</span>response<span style="color:#888">.</span>status <span style="color:#666">===</span><span style="color:#444">500</span><span style="color:#888">)</span>
    console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39;nothing!&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span>
    <span style="color:#2838b0">return</span> response<span style="color:#888">.</span>text<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>
     
<span style="color:#888">}</span><span style="color:#888">)</span>
<span style="color:#888">.</span>then<span style="color:#888">(</span>text <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>
    console<span style="color:#888">.</span>log<span style="color:#888">(</span>text<span style="color:#888">)</span><span style="color:#888">;</span>
    alert<span style="color:#888">(</span>text<span style="color:#888">)</span><span style="color:#888">;</span>

<span style="color:#888">}</span><span style="color:#888">)</span>
  <span style="color:#888">.</span><span style="color:#2838b0">catch</span><span style="color:#888">(</span>error <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>
    console<span style="color:#888">.</span>error<span style="color:#888">(</span><span style="color:#b83838">&#39; Error:&#39;</span><span style="color:#888">,</span> error<span style="color:#888">)</span><span style="color:#888">;</span>
             <span style="color:#888">}</span><span style="color:#888">)</span><span style="color:#888">;</span><span style="color:#888">}</span>


<span style="color:#2838b0;font-style:italic">function</span> num<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">{</span>
  <span style="color:#2838b0;font-style:italic">var</span> data <span style="color:#666">=</span><span style="color:#888">{</span>
  
    v<span style="color:#666">:</span><span style="color:#b83838">&#39;3&#39;</span>
  <span style="color:#888">}</span>
  
  fetch<span style="color:#888">(</span><span style="color:#388038">window</span><span style="color:#888">.</span>location<span style="color:#888">,</span> <span style="color:#888">{</span>
    method<span style="color:#666">:</span> <span style="color:#b83838">&#39;POST&#39;</span><span style="color:#888">,</span>
    headers<span style="color:#666">:</span> <span style="color:#888">{</span>
      <span style="color:#b83838">&#39;Content-Type&#39;</span><span style="color:#666">:</span> <span style="color:#b83838">&#39;application/json&#39;</span>
    <span style="color:#888">}</span><span style="color:#888">,</span>
    body<span style="color:#666">:</span> JSON<span style="color:#888">.</span>stringify<span style="color:#888">(</span>data<span style="color:#888">)</span>
  <span style="color:#888">}</span><span style="color:#888">)</span>
  <span style="color:#888">.</span>then<span style="color:#888">(</span>response <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>
    <span style="color:#2838b0">if</span> <span style="color:#888">(</span>response<span style="color:#888">.</span>status <span style="color:#666">===</span><span style="color:#444">200</span><span style="color:#888">)</span>
    console<span style="color:#888">.</span>log<span style="color:#888">(</span>response<span style="color:#888">.</span>body<span style="color:#888">)</span><span style="color:#888">;</span>
    <span style="color:#2838b0">if</span> <span style="color:#888">(</span>response<span style="color:#888">.</span>status <span style="color:#666">===</span><span style="color:#444">500</span><span style="color:#888">)</span>
    console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39;nothing!&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span>
    <span style="color:#2838b0">return</span> response<span style="color:#888">.</span>text<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>
     
<span style="color:#888">}</span><span style="color:#888">)</span>
<span style="color:#888">.</span>then<span style="color:#888">(</span>text <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>
    console<span style="color:#888">.</span>log<span style="color:#888">(</span>text<span style="color:#888">)</span><span style="color:#888">;</span>
    alert<span style="color:#888">(</span>text<span style="color:#888">)</span><span style="color:#888">;</span>

<span style="color:#888">}</span><span style="color:#888">)</span>
  <span style="color:#888">.</span><span style="color:#2838b0">catch</span><span style="color:#888">(</span>error <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>
    console<span style="color:#888">.</span>error<span style="color:#888">(</span><span style="color:#b83838">&#39; Error:&#39;</span><span style="color:#888">,</span> error<span style="color:#888">)</span><span style="color:#888">;</span>
             <span style="color:#888">}</span><span style="color:#888">)</span><span style="color:#888">;</span><span style="color:#888">}</span>
  
  
  
  
  <span style="color:#2838b0;font-style:italic">function</span> change_password<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">{</span>
    <span style="color:#2838b0;font-style:italic">var</span> data <span style="color:#666">=</span><span style="color:#888">{</span>
  
      v<span style="color:#666">:</span><span style="color:#b83838">&#39;4&#39;</span><span style="color:#888">,</span>
      newpass<span style="color:#666">:</span>pass
    <span style="color:#888">}</span>
  
  <span style="color:#888">}</span>
</pre>
                </div>
            </div>

            <div class="space"></div>
            <div class="footer">
                Powered by <a href="https://gitfront.io">GitFront</a>
            </div>
        </div>
    </body>
</html>
