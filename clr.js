<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="robots" content="noindex" />
        <link rel="stylesheet" href="../style.css">
        <title>clr.js · Att-web-app · GitFront</title>
    </head>
    <body>
        <div class="container">
            <div class="location">
                <a href="..">Att-web-app</a> /
                <span>clr.js</span>
            </div>

            <div class="blob-view">
                <div class="header">
                    <div>clr.js</div>
                    <div class="last">
                        <a class="btn" href="../raw/clr.js">Raw</a>
                    </div>
                </div>
                <div class="content ">
                    <pre style="background-color:#fff"><span style="color:#2838b0;font-style:italic">var</span> fs <span style="color:#666">=</span> require<span style="color:#888">(</span><span style="color:#b83838">&#39;fs&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">function</span> clr<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">{</span>
    <span style="color:#2838b0;font-style:italic">var</span> txt <span style="color:#666">=</span><span style="color:#888">{</span><span style="color:#b83838">&#34;id&#34;</span><span style="color:#666">:</span><span style="color:#888">[</span><span style="color:#888">]</span><span style="color:#888">,</span><span style="color:#b83838">&#34;ip&#34;</span><span style="color:#666">:</span><span style="color:#888">[</span><span style="color:#888">]</span><span style="color:#888">,</span><span style="color:#b83838">&#34;lat&#34;</span><span style="color:#666">:</span><span style="color:#888">[</span><span style="color:#888">]</span><span style="color:#888">,</span><span style="color:#b83838">&#34;lon&#34;</span><span style="color:#666">:</span><span style="color:#888">[</span><span style="color:#888">]</span><span style="color:#888">,</span><span style="color:#b83838">&#34;time&#34;</span><span style="color:#666">:</span><span style="color:#888">[</span><span style="color:#888">]</span><span style="color:#888">,</span><span style="color:#b83838">&#34;num&#34;</span><span style="color:#666">:</span><span style="color:#444">0</span><span style="color:#888">}</span><span style="color:#888">;</span>
    <span style="color:#2838b0;font-style:italic">var</span> tclr<span style="color:#666">=</span> JSON<span style="color:#888">.</span>stringify<span style="color:#888">(</span>txt<span style="color:#888">)</span><span style="color:#888">;</span>
    fs<span style="color:#888">.</span>writeFile<span style="color:#888">(</span><span style="color:#b83838">&#39;text.json&#39;</span><span style="color:#888">,</span>tclr<span style="color:#888">,</span><span style="color:#2838b0;font-style:italic">function</span><span style="color:#888">(</span>err<span style="color:#888">)</span><span style="color:#888">{</span>
        <span style="color:#2838b0">if</span><span style="color:#888">(</span>err<span style="color:#888">)</span>
        console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39; ERROR &#39;</span><span style="color:#888">)</span>  
        <span style="color:#2838b0">else</span>
        console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39;Data is deleted&#39;</span><span style="color:#888">)</span>
         <span style="color:#888">}</span><span style="color:#888">)</span>



<span style="color:#888">}</span>

clr<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>
<span style="color:#888;font-style:italic">//
</span></pre>
                </div>
            </div>

            <div class="space"></div>
            <div class="footer">
                Powered by <a href="https://gitfront.io">GitFront</a>
            </div>
        </div>
    </body>
</html>
