<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="robots" content="noindex" />
        <link rel="stylesheet" href="../style.css">
        <title>1.js · Att-web-app · GitFront</title>
    </head>
    <body>
        <div class="container">
            <div class="location">
                <a href="..">Att-web-app</a> /
                <span>1.js</span>
            </div>

            <div class="blob-view">
                <div class="header">
                    <div>1.js</div>
                    <div class="last">
                        <a class="btn" href="../raw/1.js">Raw</a>
                    </div>
                </div>
                <div class="content ">
                    <pre style="background-color:#fff"><span style="color:#2838b0;font-style:italic">var</span> code <span style="color:#666">=</span> <span style="color:#388038">document</span><span style="color:#888">.</span>getElementById<span style="color:#888">(</span><span style="color:#b83838">&#34;id&#34;</span><span style="color:#888">)</span><span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">var</span> a <span style="color:#666">=</span> <span style="color:#388038">document</span><span style="color:#888">.</span>getElementById<span style="color:#888">(</span><span style="color:#b83838">&#34;hid&#34;</span><span style="color:#888">)</span><span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">var</span> submit<span style="color:#666">=</span> <span style="color:#388038">document</span><span style="color:#888">.</span>getElementById<span style="color:#888">(</span><span style="color:#b83838">&#34;submet&#34;</span><span style="color:#888">)</span><span style="color:#888">;</span>
id<span style="color:#888">.</span>onkeypress <span style="color:#666">=</span> <span style="color:#2838b0;font-style:italic">function</span> <span style="color:#888">(</span>event<span style="color:#888">)</span> <span style="color:#888">{</span>
    <span style="color:#2838b0">if</span> <span style="color:#888">(</span>event<span style="color:#888">.</span>key <span style="color:#666">===</span> <span style="color:#b83838">&#39;Enter&#39;</span><span style="color:#888">)</span> <span style="color:#888">{</span>
        event<span style="color:#888">.</span>preventDefault<span style="color:#888">(</span><span style="color:#888">)</span>
        a<span style="color:#888">.</span>href<span style="color:#666">=</span><span style="color:#b83838">`</span><span style="color:#b83838">/users/</span><span style="color:#b83838;text-decoration:underline">${</span>code<span style="color:#888">.</span>value<span style="color:#b83838;text-decoration:underline">}</span><span style="color:#b83838">`</span><span style="color:#888">;</span>
        a<span style="color:#888">.</span>click<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>  <span style="color:#888">}</span> <span style="color:#888">}</span>
            submit<span style="color:#888">.</span>onclick <span style="color:#666">=</span><span style="color:#888">(</span><span style="color:#888">)</span> <span style="color:#888">=&gt;</span><span style="color:#888">{</span>
                a<span style="color:#888">.</span>href<span style="color:#666">=</span><span style="color:#b83838">`</span><span style="color:#b83838">/users/</span><span style="color:#b83838;text-decoration:underline">${</span>code<span style="color:#888">.</span>value<span style="color:#b83838;text-decoration:underline">}</span><span style="color:#b83838">`</span><span style="color:#888">;</span>
                a<span style="color:#888">.</span>click<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span><span style="color:#888">}</span>
              
             
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
