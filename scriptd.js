<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="robots" content="noindex" />
        <link rel="stylesheet" href="../style.css">
        <title>scriptd.js · Att-web-app · GitFront</title>
    </head>
    <body>
        <div class="container">
            <div class="location">
                <a href="..">Att-web-app</a> /
                <span>scriptd.js</span>
            </div>

            <div class="blob-view">
                <div class="header">
                    <div>scriptd.js</div>
                    <div class="last">
                        <a class="btn" href="../raw/scriptd.js">Raw</a>
                    </div>
                </div>
                <div class="content ">
                    <pre style="background-color:#fff">
<span style="color:#2838b0;font-style:italic">var</span> password <span style="color:#666">=</span> <span style="color:#388038">document</span><span style="color:#888">.</span>getElementById<span style="color:#888">(</span><span style="color:#b83838">&#34;password&#34;</span><span style="color:#888">)</span><span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">var</span> user <span style="color:#666">=</span> <span style="color:#388038">document</span><span style="color:#888">.</span>getElementById<span style="color:#888">(</span><span style="color:#b83838">&#34;User_name&#34;</span><span style="color:#888">)</span><span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">var</span> submit <span style="color:#666">=</span> <span style="color:#388038">document</span><span style="color:#888">.</span>getElementById<span style="color:#888">(</span><span style="color:#b83838">&#34;submit&#34;</span><span style="color:#888">)</span><span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">var</span> a <span style="color:#666">=</span> <span style="color:#388038">document</span><span style="color:#888">.</span>getElementById<span style="color:#888">(</span><span style="color:#b83838">&#34;hid&#34;</span><span style="color:#888">)</span><span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">var</span> u<span style="color:#666">=</span> <span style="color:#444;font-style:italic">null</span> <span style="color:#888">;</span>

user<span style="color:#888">.</span>onkeypress <span style="color:#666">=</span> <span style="color:#2838b0;font-style:italic">function</span> <span style="color:#888">(</span>event<span style="color:#888">)</span> <span style="color:#888">{</span>
  <span style="color:#2838b0">if</span> <span style="color:#888">(</span>event<span style="color:#888">.</span>key <span style="color:#666">===</span> <span style="color:#b83838">&#39;Enter&#39;</span><span style="color:#888">)</span> <span style="color:#888">{</span>
      event<span style="color:#888">.</span>preventDefault<span style="color:#888">(</span><span style="color:#888">)</span>
     password<span style="color:#888">.</span>focus<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>
  <span style="color:#888">}</span> 
<span style="color:#888">}</span>

password<span style="color:#888">.</span>onkeypress <span style="color:#666">=</span> <span style="color:#2838b0;font-style:italic">function</span> <span style="color:#888">(</span>event<span style="color:#888">)</span> <span style="color:#888">{</span>
  <span style="color:#2838b0">if</span> <span style="color:#888">(</span>event<span style="color:#888">.</span>key <span style="color:#666">===</span> <span style="color:#b83838">&#39;Enter&#39;</span><span style="color:#888">)</span> <span style="color:#888">{</span>
      event<span style="color:#888">.</span>preventDefault<span style="color:#888">(</span><span style="color:#888">)</span>
     submit<span style="color:#888">.</span>click<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>
  <span style="color:#888">}</span> 
<span style="color:#888">}</span>

submit<span style="color:#888">.</span>onclick <span style="color:#666">=</span> <span style="color:#888">(</span><span style="color:#888">)</span> <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>
console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39;Clicked&#39;</span><span style="color:#888">)</span>
  <span style="color:#2838b0;font-style:italic">var</span> data <span style="color:#666">=</span> <span style="color:#888">{</span>
    passwordin<span style="color:#666">:</span>  password<span style="color:#888">.</span>value<span style="color:#888">,</span>
    userin<span style="color:#666">:</span> user<span style="color:#888">.</span>value
              <span style="color:#888">}</span><span style="color:#888">;</span>

  fetch<span style="color:#888">(</span><span style="color:#b83838">&#39;/doc&#39;</span><span style="color:#888">,</span> <span style="color:#888">{</span>
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
    u<span style="color:#666">=</span>text<span style="color:#888">;</span>
    <span style="color:#2838b0">if</span> <span style="color:#888">(</span>u <span style="color:#666">==</span> <span style="color:#444">1</span> <span style="color:#888">)</span><span style="color:#888">{</span>
      alert<span style="color:#888">(</span><span style="color:#b83838">&#39;Wrong password or user name&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span>
    <span style="color:#888">}</span>
    <span style="color:#2838b0">else</span><span style="color:#888">{</span>
      a<span style="color:#888">.</span>href<span style="color:#666">=</span><span style="color:#b83838">`</span><span style="color:#b83838;text-decoration:underline">${</span>u<span style="color:#b83838;text-decoration:underline">}</span><span style="color:#b83838">`</span><span style="color:#888">;</span>
      a<span style="color:#888">.</span>click<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>
    <span style="color:#888">}</span>

<span style="color:#888">}</span><span style="color:#888">)</span>
  <span style="color:#888">.</span><span style="color:#2838b0">catch</span><span style="color:#888">(</span>error <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>
    console<span style="color:#888">.</span>error<span style="color:#888">(</span><span style="color:#b83838">&#39; Error:&#39;</span><span style="color:#888">,</span> error<span style="color:#888">)</span><span style="color:#888">;</span>
             <span style="color:#888">}</span><span style="color:#888">)</span><span style="color:#888">;</span> 




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
