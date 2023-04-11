<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="robots" content="noindex" />
        <link rel="stylesheet" href="../style.css">
        <title>app.js · Att-web-app · GitFront</title>
    </head>
    <body>
        <div class="container">
            <div class="location">
                <a href="..">Att-web-app</a> /
                <span>app.js</span>
            </div>

            <div class="blob-view">
                <div class="header">
                    <div>app.js</div>
                    <div class="last">
                        <a class="btn" href="../raw/app.js">Raw</a>
                    </div>
                </div>
                <div class="content ">
                    <pre style="background-color:#fff"><span style="color:#2838b0;font-style:italic">var</span> user <span style="color:#666">=</span><span style="color:#b83838">&#39;mohamed&#39;</span><span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">var</span> password <span style="color:#666">=</span><span style="color:#b83838">&#39;00000&#39;</span><span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">var</span> lat<span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">var</span> lon<span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">var</span> acc<span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">var</span> fs <span style="color:#666">=</span> require<span style="color:#888">(</span><span style="color:#b83838">&#39;fs&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">var</span> express <span style="color:#666">=</span> require<span style="color:#888">(</span><span style="color:#b83838">&#39;express&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">var</span> bodyParser <span style="color:#666">=</span> require<span style="color:#888">(</span><span style="color:#b83838">&#39;body-parser&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span>
<span style="color:#2838b0">const</span> excelJSON <span style="color:#666">=</span> require<span style="color:#888">(</span><span style="color:#b83838">&#39;excel2json_converter&#39;</span><span style="color:#888">)</span>

<span style="color:#2838b0;font-style:italic">function</span> generate0To25<span style="color:#888">(</span><span style="color:#888">)</span> <span style="color:#888">{</span>
    <span style="color:#2838b0">while</span> <span style="color:#888">(</span><span style="color:#444;font-style:italic">true</span><span style="color:#888">)</span> <span style="color:#888">{</span>
        <span style="color:#2838b0;font-style:italic">let</span> num <span style="color:#666">=</span> <span style="color:#388038">Math</span><span style="color:#888">.</span>floor<span style="color:#888">(</span><span style="color:#388038">Math</span><span style="color:#888">.</span>random<span style="color:#888">(</span><span style="color:#888">)</span> <span style="color:#666">*</span> <span style="color:#444">100</span><span style="color:#888">)</span><span style="color:#888">;</span>
        <span style="color:#2838b0">if</span> <span style="color:#888">(</span>num <span style="color:#666">&lt;=</span> <span style="color:#444">25</span> <span style="color:#666">&amp;&amp;</span> num <span style="color:#666">&gt;=</span> <span style="color:#444">0</span><span style="color:#888">)</span> <span style="color:#2838b0">return</span> num<span style="color:#888">;</span>
    <span style="color:#888">}</span>
<span style="color:#888">}</span>

<span style="color:#2838b0;font-style:italic">function</span> gen_arr<span style="color:#888">(</span><span style="color:#888">)</span> <span style="color:#888">{</span>
<span style="color:#2838b0;font-style:italic">let</span> arr <span style="color:#666">=</span><span style="color:#888">[</span><span style="color:#888">]</span>
<span style="color:#2838b0">for</span><span style="color:#888">(</span><span style="color:#2838b0;font-style:italic">var</span> i<span style="color:#666">=</span><span style="color:#444">0</span><span style="color:#888">;</span>i<span style="color:#666">&lt;</span><span style="color:#444">200</span><span style="color:#888">;</span>i<span style="color:#666">++</span><span style="color:#888">)</span>
    arr<span style="color:#888">.</span>push<span style="color:#888">(</span><span style="color:#388038">String</span><span style="color:#888">.</span>fromCharCode<span style="color:#888">(</span>generate0To25<span style="color:#888">(</span><span style="color:#888">)</span> <span style="color:#666">+</span> <span style="color:#444">65</span><span style="color:#888">)</span><span style="color:#888">)</span><span style="color:#888">;</span>
<span style="color:#2838b0">return</span> arr<span style="color:#888">.</span>join<span style="color:#888">(</span><span style="color:#b83838">&#39;&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span><span style="color:#888">}</span>

<span style="color:#2838b0;font-style:italic">function</span> gen_url<span style="color:#888">(</span><span style="color:#888">)</span> <span style="color:#888">{</span>
    <span style="color:#2838b0;font-style:italic">let</span> arr <span style="color:#666">=</span><span style="color:#888">[</span><span style="color:#888">]</span>
    <span style="color:#2838b0">for</span><span style="color:#888">(</span><span style="color:#2838b0;font-style:italic">var</span> i<span style="color:#666">=</span><span style="color:#444">0</span><span style="color:#888">;</span>i<span style="color:#666">&lt;</span><span style="color:#444">5</span><span style="color:#888">;</span>i<span style="color:#666">++</span><span style="color:#888">)</span>
        arr<span style="color:#888">.</span>push<span style="color:#888">(</span><span style="color:#388038">String</span><span style="color:#888">.</span>fromCharCode<span style="color:#888">(</span>generate0To25<span style="color:#888">(</span><span style="color:#888">)</span> <span style="color:#666">+</span> <span style="color:#444">65</span><span style="color:#888">)</span><span style="color:#888">)</span><span style="color:#888">;</span>
    <span style="color:#2838b0">return</span> arr<span style="color:#888">.</span>join<span style="color:#888">(</span><span style="color:#b83838">&#39;&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span><span style="color:#888">}</span>
fs<span style="color:#888">.</span>readFile<span style="color:#888">(</span><span style="color:#b83838">&#39;location.json&#39;</span><span style="color:#888">,</span><span style="color:#b83838">&#39;utf8&#39;</span><span style="color:#888">,</span><span style="color:#2838b0;font-style:italic">function</span><span style="color:#888">(</span>err<span style="color:#888">,</span>data<span style="color:#888">)</span><span style="color:#888">{</span>
    <span style="color:#2838b0;font-style:italic">var</span> data1 <span style="color:#666">=</span> JSON<span style="color:#888">.</span>parse<span style="color:#888">(</span>data<span style="color:#888">)</span><span style="color:#888">;</span>
    lat <span style="color:#666">=</span> data1<span style="color:#888">.</span>lat<span style="color:#888">;</span>
    lon <span style="color:#666">=</span> data1<span style="color:#888">.</span>lon<span style="color:#888">;</span>
    <span style="color:#888">}</span><span style="color:#888">)</span>

<span style="color:#2838b0;font-style:italic">var</span> k<span style="color:#888">;</span>
<span style="color:#2838b0;font-style:italic">var</span> l<span style="color:#666">=</span><span style="color:#444;font-style:italic">null</span><span style="color:#888">;</span>



<span style="color:#2838b0;font-style:italic">var</span> loc <span style="color:#666">=</span> JSON<span style="color:#888">.</span>parse<span style="color:#888">(</span>fs<span style="color:#888">.</span>readFileSync<span style="color:#888">(</span><span style="color:#b83838">&#39;location.json&#39;</span><span style="color:#888">,</span> <span style="color:#b83838">&#39;utf-8&#39;</span><span style="color:#888">)</span><span style="color:#888">)</span><span style="color:#888">;</span>

<span style="color:#2838b0;font-style:italic">var</span> app <span style="color:#666">=</span> express<span style="color:#888">(</span><span style="color:#888">)</span>

app<span style="color:#888">.</span>use<span style="color:#888">(</span>express<span style="color:#888">.</span>json<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">)</span><span style="color:#888">;</span>
app<span style="color:#888">.</span>use<span style="color:#888">(</span>express<span style="color:#888">.</span>urlencoded<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">)</span>
app<span style="color:#888">.</span>use<span style="color:#888">(</span>express<span style="color:#888">.</span><span style="color:#2838b0">static</span><span style="color:#888">(</span><span style="color:#b83838">&#39;public&#39;</span><span style="color:#888">)</span><span style="color:#888">)</span>
app<span style="color:#888">.</span>use<span style="color:#888">(</span>logger<span style="color:#888">)</span>

<span style="color:#2838b0;font-style:italic">function</span> logger<span style="color:#888">(</span>req<span style="color:#888">,</span> res<span style="color:#888">,</span> next<span style="color:#888">)</span> <span style="color:#888">{</span>
    console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">`</span><span style="color:#b83838;text-decoration:underline">${</span>req<span style="color:#888">.</span>method<span style="color:#b83838;text-decoration:underline">}</span><span style="color:#b83838"> request is made on </span><span style="color:#b83838;text-decoration:underline">${</span>req<span style="color:#888">.</span>path<span style="color:#b83838;text-decoration:underline">}</span><span style="color:#b83838">`</span><span style="color:#888">)</span><span style="color:#888">;</span>
    next<span style="color:#888">(</span><span style="color:#888">)</span>
<span style="color:#888">}</span>

app<span style="color:#888">.</span>get<span style="color:#888">(</span><span style="color:#b83838">&#39;/doc&#39;</span> <span style="color:#888">,</span> <span style="color:#2838b0;font-style:italic">function</span> <span style="color:#888">(</span>req<span style="color:#888">,</span> res<span style="color:#888">)</span> <span style="color:#888">{</span>
    fs<span style="color:#888">.</span>readFile<span style="color:#888">(</span><span style="color:#b83838">&#39;attendanced.html&#39;</span><span style="color:#888">,</span> <span style="color:#b83838">&#39;utf8&#39;</span><span style="color:#888">,</span> <span style="color:#2838b0;font-style:italic">function</span> <span style="color:#888">(</span>err<span style="color:#888">,</span> file<span style="color:#888">)</span> <span style="color:#888">{</span>
        res<span style="color:#888">.</span>setHeader<span style="color:#888">(</span><span style="color:#b83838">&#39;Content-Type&#39;</span><span style="color:#888">,</span> <span style="color:#b83838">&#39;text/html&#39;</span><span style="color:#888">)</span>
        res<span style="color:#888">.</span>send<span style="color:#888">(</span>file<span style="color:#888">)</span>
       
    <span style="color:#888">}</span><span style="color:#888">)</span>
<span style="color:#888">}</span><span style="color:#888">)</span>

app<span style="color:#888">.</span>post<span style="color:#888">(</span><span style="color:#b83838">&#39;/doc&#39;</span><span style="color:#888">,</span> <span style="color:#888">(</span>req<span style="color:#888">,</span> res<span style="color:#888">)</span> <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>
    console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39; log in &#39;</span><span style="color:#888">)</span><span style="color:#888">;</span> 
    <span style="color:#2838b0;font-style:italic">var</span> <span style="color:#888">{</span>passwordin<span style="color:#888">,</span>userin<span style="color:#888">}</span> <span style="color:#666">=</span> req<span style="color:#888">.</span>body<span style="color:#888">;</span>
    <span style="color:#2838b0">if</span><span style="color:#888">(</span>userin <span style="color:#666">==</span>user <span style="color:#666">&amp;&amp;</span> passwordin <span style="color:#666">==</span> password<span style="color:#888">)</span>
    <span style="color:#888">{</span>
        k <span style="color:#666">=</span> gen_arr<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>
        res<span style="color:#888">.</span>send<span style="color:#888">(</span><span style="color:#b83838">`</span><span style="color:#b83838">/</span><span style="color:#b83838;text-decoration:underline">${</span>k<span style="color:#b83838;text-decoration:underline">}</span><span style="color:#b83838">`</span><span style="color:#888">)</span><span style="color:#888">;</span>
    <span style="color:#888">}</span>
    <span style="color:#2838b0">else</span><span style="color:#888">{</span>
        res<span style="color:#888">.</span>send<span style="color:#888">(</span><span style="color:#b83838">&#39;1&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span>
    <span style="color:#888">}</span>
         <span style="color:#888">}</span><span style="color:#888">)</span><span style="color:#888">;</span>



<span style="color:#2838b0;font-style:italic">function</span> addtofile<span style="color:#888">(</span>jsob<span style="color:#888">)</span><span style="color:#888">{</span>
    fs<span style="color:#888">.</span>readFile<span style="color:#888">(</span><span style="color:#b83838">&#39;text.json&#39;</span><span style="color:#888">,</span><span style="color:#b83838">&#39;utf8&#39;</span><span style="color:#888">,</span><span style="color:#2838b0;font-style:italic">function</span><span style="color:#888">(</span>err<span style="color:#888">,</span>data<span style="color:#888">)</span><span style="color:#888">{</span>
        <span style="color:#2838b0;font-style:italic">var</span> data1 <span style="color:#666">=</span> JSON<span style="color:#888">.</span>parse<span style="color:#888">(</span>data<span style="color:#888">)</span><span style="color:#888">;</span>
        <span style="color:#2838b0;font-style:italic">let</span> b<span style="color:#888">;</span>
        <span style="color:#2838b0">for</span> <span style="color:#888">(</span><span style="color:#2838b0;font-style:italic">let</span> val <span style="color:#2838b0">of</span> data1<span style="color:#888">)</span> <span style="color:#888">{</span>
            <span style="color:#2838b0">if</span> <span style="color:#888">(</span>val<span style="color:#888">.</span>id <span style="color:#666">===</span> jsob<span style="color:#888">.</span>id<span style="color:#888">)</span> b <span style="color:#666">=</span> <span style="color:#444;font-style:italic">true</span><span style="color:#888">;</span>
        <span style="color:#888">}</span>
        <span style="color:#2838b0">if</span><span style="color:#888">(</span><span style="color:#666">!</span>b<span style="color:#888">)</span><span style="color:#888">{</span>
           data1<span style="color:#888">.</span>push<span style="color:#888">(</span>jsob<span style="color:#888">)</span><span style="color:#888">;</span>
           num <span style="color:#666">=</span> data1<span style="color:#888">.</span>length<span style="color:#888">;</span>
           <span style="color:#2838b0;font-style:italic">var</span> newdata <span style="color:#666">=</span> JSON<span style="color:#888">.</span>stringify<span style="color:#888">(</span>data1<span style="color:#888">)</span>
           fs<span style="color:#888">.</span>writeFile<span style="color:#888">(</span><span style="color:#b83838">&#39;text.json&#39;</span><span style="color:#888">,</span>newdata<span style="color:#888">,</span><span style="color:#2838b0;font-style:italic">function</span><span style="color:#888">(</span>err<span style="color:#888">)</span><span style="color:#888">{</span>
              <span style="color:#2838b0">if</span><span style="color:#888">(</span>err<span style="color:#888">)</span>
                 console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39;Data is saved&#39;</span><span style="color:#888">)</span>  
              <span style="color:#2838b0">else</span>
                 console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39;Error in saving data&#39;</span><span style="color:#888">)</span>
        <span style="color:#888">}</span><span style="color:#888">)</span><span style="color:#888">}</span>
    <span style="color:#888">}</span><span style="color:#888">)</span>
    <span style="color:#888">}</span>

    <span style="color:#2838b0;font-style:italic">function</span> clr<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">{</span>
        l<span style="color:#666">=</span>gen_url<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>
        <span style="color:#2838b0;font-style:italic">var</span> txt <span style="color:#666">=</span><span style="color:#888">[</span><span style="color:#888">]</span><span style="color:#888">;</span>
        <span style="color:#2838b0;font-style:italic">var</span> tclr<span style="color:#666">=</span> JSON<span style="color:#888">.</span>stringify<span style="color:#888">(</span>txt<span style="color:#888">)</span><span style="color:#888">;</span>
        fs<span style="color:#888">.</span>writeFile<span style="color:#888">(</span><span style="color:#b83838">&#39;text.json&#39;</span><span style="color:#888">,</span>tclr<span style="color:#888">,</span><span style="color:#2838b0;font-style:italic">function</span><span style="color:#888">(</span>err<span style="color:#888">)</span><span style="color:#888">{</span>
        <span style="color:#2838b0">if</span><span style="color:#888">(</span>err<span style="color:#888">)</span>
            console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39;ERROR in clearing&#39;</span><span style="color:#888">)</span>  
        <span style="color:#2838b0">else</span>
            console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39;NO Errors&#39;</span><span style="color:#888">)</span>
             <span style="color:#888">}</span><span style="color:#888">)</span>
    <span style="color:#888">}</span>
  
      app<span style="color:#888">.</span>get<span style="color:#888">(</span><span style="color:#b83838">`</span><span style="color:#b83838">/attendance/download</span><span style="color:#b83838">`</span><span style="color:#888">,</span> <span style="color:#888">(</span>req <span style="color:#888">,</span>res<span style="color:#888">)</span> <span style="color:#888">=&gt;</span><span style="color:#888">{</span>
      console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39;download .................................................&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span>
      <span style="color:#2838b0;font-style:italic">var</span> jsonData <span style="color:#666">=</span> JSON<span style="color:#888">.</span>parse<span style="color:#888">(</span>fs<span style="color:#888">.</span>readFileSync<span style="color:#888">(</span><span style="color:#b83838">&#39;text.json&#39;</span><span style="color:#888">,</span> <span style="color:#b83838">&#39;utf-8&#39;</span><span style="color:#888">)</span><span style="color:#888">)</span><span style="color:#888">;</span>
      convertedXLSX <span style="color:#666">=</span> excelJSON<span style="color:#888">.</span>jsonToXLSX<span style="color:#888">(</span>jsonData<span style="color:#888">,</span> <span style="color:#b83838">&#39;attendace&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span>
      fs<span style="color:#888">.</span>writeFile<span style="color:#888">(</span><span style="color:#b83838">&#39;attendance.xlsx&#39;</span><span style="color:#888">,</span> convertedXLSX<span style="color:#888">,</span> <span style="color:#888">(</span><span style="color:#888">)</span> <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>
      console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#34;Exel Written successful&#34;</span><span style="color:#888">)</span>
      res<span style="color:#888">.</span>download<span style="color:#888">(</span><span style="color:#b83838">&#39;attendance.xlsx&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span>
    <span style="color:#888">}</span><span style="color:#888">)</span><span style="color:#888">;</span>
<span style="color:#888">}</span><span style="color:#888">)</span>
      
      app<span style="color:#888">.</span>post<span style="color:#888">(</span><span style="color:#b83838">&#39;/doc&#39;</span><span style="color:#888">,</span> <span style="color:#888">(</span>req<span style="color:#888">,</span> res<span style="color:#888">)</span> <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>
      console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39; log in &#39;</span><span style="color:#888">)</span><span style="color:#888">;</span> 
      <span style="color:#2838b0;font-style:italic">var</span> <span style="color:#888">{</span>passwordin<span style="color:#888">,</span>userin<span style="color:#888">}</span> <span style="color:#666">=</span> req<span style="color:#888">.</span>body<span style="color:#888">;</span>
      <span style="color:#2838b0">if</span><span style="color:#888">(</span>userin <span style="color:#666">==</span>user <span style="color:#666">&amp;&amp;</span> passwordin <span style="color:#666">==</span> password<span style="color:#888">)</span>
      <span style="color:#888">{</span>
          k <span style="color:#666">=</span> gen_arr<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>
          res<span style="color:#888">.</span>send<span style="color:#888">(</span><span style="color:#b83838">`</span><span style="color:#b83838">/</span><span style="color:#b83838;text-decoration:underline">${</span>k<span style="color:#b83838;text-decoration:underline">}</span><span style="color:#b83838">`</span><span style="color:#888">)</span><span style="color:#888">;</span>
      <span style="color:#888">}</span>
      <span style="color:#2838b0">else</span><span style="color:#888">{</span>
          res<span style="color:#888">.</span>send<span style="color:#888">(</span><span style="color:#b83838">&#39;1&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span>
      <span style="color:#888">}</span>
         <span style="color:#888">}</span><span style="color:#888">)</span><span style="color:#888">;</span>

<span style="color:#888;font-style:italic">/////////////////////////////////////////////////////////////////////
</span><span style="color:#888;font-style:italic"></span>      app<span style="color:#888">.</span>get<span style="color:#888">(</span><span style="color:#b83838">`</span><span style="color:#b83838">/:k</span><span style="color:#b83838">`</span><span style="color:#888">,</span> <span style="color:#2838b0;font-style:italic">function</span> <span style="color:#888">(</span>req<span style="color:#888">,</span> res<span style="color:#888">)</span> <span style="color:#888">{</span>
      <span style="color:#2838b0">if</span> <span style="color:#888">(</span>req<span style="color:#888">.</span>params<span style="color:#888">.</span>k <span style="color:#666">!==</span> k<span style="color:#888">)</span> <span style="color:#888">{</span>
         res<span style="color:#888">.</span>status<span style="color:#888">(</span><span style="color:#444">404</span><span style="color:#888">)</span><span style="color:#888">.</span>send<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>
      <span style="color:#2838b0">return</span><span style="color:#888">;</span>
      <span style="color:#888">}</span>
      console<span style="color:#888">.</span>log<span style="color:#888">(</span>req<span style="color:#888">.</span>params<span style="color:#888">.</span>k<span style="color:#888">)</span>
      fs<span style="color:#888">.</span>readFile<span style="color:#888">(</span><span style="color:#b83838">&#39;downloadpage.html&#39;</span><span style="color:#888">,</span> <span style="color:#b83838">&#39;utf8&#39;</span><span style="color:#888">,</span> <span style="color:#2838b0;font-style:italic">function</span> <span style="color:#888">(</span>err<span style="color:#888">,</span> file<span style="color:#888">)</span> <span style="color:#888">{</span>
      res<span style="color:#888">.</span>setHeader<span style="color:#888">(</span><span style="color:#b83838">&#39;Content-Type&#39;</span><span style="color:#888">,</span> <span style="color:#b83838">&#39;text/html&#39;</span><span style="color:#888">)</span>
      res<span style="color:#888">.</span>send<span style="color:#888">(</span>file<span style="color:#888">)</span>
      <span style="color:#888">}</span><span style="color:#888">)</span>
<span style="color:#888">}</span><span style="color:#888">)</span>

app<span style="color:#888">.</span>post<span style="color:#888">(</span><span style="color:#b83838">`</span><span style="color:#b83838">/:k</span><span style="color:#b83838">`</span><span style="color:#888">,</span> <span style="color:#888">(</span>req<span style="color:#888">,</span> res<span style="color:#888">)</span> <span style="color:#888">=&gt;</span> <span style="color:#888">{</span>   
    <span style="color:#2838b0;font-style:italic">var</span> <span style="color:#888">{</span>v<span style="color:#888">}</span> <span style="color:#666">=</span>  req<span style="color:#888">.</span>body <span style="color:#888">;</span>
    console<span style="color:#888">.</span>log<span style="color:#888">(</span>v<span style="color:#888">)</span>
    <span style="color:#2838b0">if</span><span style="color:#888">(</span>v <span style="color:#666">==</span> <span style="color:#b83838">&#39;1&#39;</span><span style="color:#888">)</span><span style="color:#888">{</span>
       <span style="color:#2838b0;font-style:italic">var</span> <span style="color:#888">{</span>cl<span style="color:#888">}</span> <span style="color:#666">=</span>  req<span style="color:#888">.</span>body <span style="color:#888">;</span>
    <span style="color:#2838b0">if</span><span style="color:#888">(</span>cl <span style="color:#666">==</span> <span style="color:#b83838">&#39;1&#39;</span><span style="color:#888">)</span><span style="color:#888">{</span>
       clr<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>
    res<span style="color:#888">.</span>send<span style="color:#888">(</span><span style="color:#b83838">&#39;Data cleared successfully&#39;</span><span style="color:#888">)</span><span style="color:#888">}</span>
<span style="color:#888">}</span>
<span style="color:#2838b0">else</span> <span style="color:#2838b0">if</span> <span style="color:#888">(</span>v <span style="color:#666">==</span> <span style="color:#b83838">&#39;2&#39;</span><span style="color:#888">)</span><span style="color:#888">{</span>
    l <span style="color:#666">=</span> gen_url<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>
    console<span style="color:#888">.</span>log<span style="color:#888">(</span>l<span style="color:#888">)</span>
      <span style="color:#2838b0;font-style:italic">var</span> <span style="color:#888">{</span>latd<span style="color:#888">,</span>lond<span style="color:#888">,</span>accd<span style="color:#888">}</span> <span style="color:#666">=</span> req<span style="color:#888">.</span>body<span style="color:#888">;</span>
    fs<span style="color:#888">.</span>readFile<span style="color:#888">(</span><span style="color:#b83838">&#39;location.json&#39;</span><span style="color:#888">,</span><span style="color:#b83838">&#39;utf8&#39;</span><span style="color:#888">,</span><span style="color:#2838b0;font-style:italic">function</span><span style="color:#888">(</span>err<span style="color:#888">,</span>data<span style="color:#888">)</span><span style="color:#888">{</span>
    <span style="color:#2838b0;font-style:italic">var</span> data1 <span style="color:#666">=</span> JSON<span style="color:#888">.</span>parse<span style="color:#888">(</span>data<span style="color:#888">)</span><span style="color:#888">;</span>
     data1<span style="color:#888">.</span>lat <span style="color:#666">=</span> latd<span style="color:#888">;</span>
     data1<span style="color:#888">.</span>lon <span style="color:#666">=</span> lond<span style="color:#888">;</span>
     data1<span style="color:#888">.</span>acc <span style="color:#666">=</span> accd<span style="color:#888">;</span>
     lat <span style="color:#666">=</span>latd<span style="color:#888">;</span>
     lon <span style="color:#666">=</span>lond<span style="color:#888">;</span>
     acc <span style="color:#666">=</span>accd<span style="color:#888">;</span>
     console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39;hello&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span>

     <span style="color:#2838b0;font-style:italic">var</span> newdata <span style="color:#666">=</span> JSON<span style="color:#888">.</span>stringify<span style="color:#888">(</span>data1<span style="color:#888">)</span>
     fs<span style="color:#888">.</span>writeFile<span style="color:#888">(</span><span style="color:#b83838">&#39;location.json&#39;</span><span style="color:#888">,</span>newdata<span style="color:#888">,</span><span style="color:#2838b0;font-style:italic">function</span><span style="color:#888">(</span>err<span style="color:#888">)</span><span style="color:#888">{</span>
    <span style="color:#2838b0">if</span><span style="color:#888">(</span>err<span style="color:#888">)</span>
        console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39;Error in saving data&#39;</span><span style="color:#888">)</span>  
    <span style="color:#2838b0">else</span>
        console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39;data is saved&#39;</span><span style="color:#888">)</span>
    <span style="color:#888">}</span><span style="color:#888">)</span>
<span style="color:#888">}</span><span style="color:#888">)</span>
res<span style="color:#888">.</span>send<span style="color:#888">(</span><span style="color:#b83838">&#39;The location is set successfully&#39;</span><span style="color:#666">+</span><span style="color:#b83838">&#39;  lat is &#39;</span><span style="color:#666">+</span> latd <span style="color:#666">+</span><span style="color:#b83838">&#39;  lon is &#39;</span> <span style="color:#666">+</span>lond<span style="color:#666">+</span> <span style="color:#b83838">&#39; accuracy is &#39;</span><span style="color:#666">+</span> acc<span style="color:#666">+</span> <span style="color:#b83838">&#39; the url is :  &#39;</span><span style="color:#666">+</span> l <span style="color:#888">)</span>
<span style="color:#888">}</span>
<span style="color:#2838b0">else</span> <span style="color:#2838b0">if</span> <span style="color:#888">(</span>v <span style="color:#666">==</span> <span style="color:#b83838">&#39;3&#39;</span><span style="color:#888">)</span><span style="color:#888">{</span>
    fs<span style="color:#888">.</span>readFile<span style="color:#888">(</span><span style="color:#b83838">&#39;text.json&#39;</span><span style="color:#888">,</span><span style="color:#b83838">&#39;utf8&#39;</span><span style="color:#888">,</span><span style="color:#2838b0;font-style:italic">function</span><span style="color:#888">(</span>err<span style="color:#888">,</span>data<span style="color:#888">)</span><span style="color:#888">{</span>
    <span style="color:#2838b0;font-style:italic">var</span> data1 <span style="color:#666">=</span> JSON<span style="color:#888">.</span>parse<span style="color:#888">(</span>data<span style="color:#888">)</span><span style="color:#888">;</span>       
    res<span style="color:#888">.</span>send<span style="color:#888">(</span><span style="color:#388038">String</span><span style="color:#888">(</span>data1<span style="color:#888">.</span>length<span style="color:#888">)</span><span style="color:#888">)</span><span style="color:#888">;</span>
    <span style="color:#888">}</span><span style="color:#888">)</span>
<span style="color:#888">}</span>
<span style="color:#888">}</span><span style="color:#888">)</span> 
console<span style="color:#888">.</span>log<span style="color:#888">(</span>l<span style="color:#888">)</span>
app<span style="color:#888">.</span>get<span style="color:#888">(</span><span style="color:#b83838">`</span><span style="color:#b83838">/users/:l</span><span style="color:#b83838">`</span><span style="color:#888">,</span> <span style="color:#2838b0;font-style:italic">function</span> <span style="color:#888">(</span>req<span style="color:#888">,</span> res<span style="color:#888">)</span> <span style="color:#888">{</span>
    console<span style="color:#888">.</span>log<span style="color:#888">(</span>req<span style="color:#888">.</span>params<span style="color:#888">.</span>l<span style="color:#888">)</span>

    <span style="color:#2838b0">if</span> <span style="color:#888">(</span>req<span style="color:#888">.</span>params<span style="color:#888">.</span>l <span style="color:#666">!==</span> l<span style="color:#888">)</span> <span style="color:#888">{</span>
        res<span style="color:#888">.</span>status<span style="color:#888">(</span><span style="color:#444">404</span><span style="color:#888">)</span><span style="color:#888">.</span>send<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>
     <span style="color:#2838b0">return</span><span style="color:#888">;</span>
     <span style="color:#888">}</span>
    fs<span style="color:#888">.</span>readFile<span style="color:#888">(</span><span style="color:#b83838">&#39;attendance.html&#39;</span><span style="color:#888">,</span> <span style="color:#b83838">&#39;utf8&#39;</span><span style="color:#888">,</span> <span style="color:#2838b0;font-style:italic">function</span> <span style="color:#888">(</span>err<span style="color:#888">,</span> file<span style="color:#888">)</span> <span style="color:#888">{</span>
        res<span style="color:#888">.</span>setHeader<span style="color:#888">(</span><span style="color:#b83838">&#39;Content-Type&#39;</span><span style="color:#888">,</span> <span style="color:#b83838">&#39;text/html&#39;</span><span style="color:#888">)</span>
        res<span style="color:#888">.</span>send<span style="color:#888">(</span>file<span style="color:#888">)</span>
    <span style="color:#888">}</span><span style="color:#888">)</span>
<span style="color:#888">}</span><span style="color:#888">)</span>

   
    
app<span style="color:#888">.</span>post<span style="color:#888">(</span><span style="color:#b83838">`</span><span style="color:#b83838">/users/:l</span><span style="color:#b83838">`</span><span style="color:#888">,</span> <span style="color:#888">(</span>req <span style="color:#888">,</span> res<span style="color:#888">)</span> <span style="color:#888">=&gt;</span> <span style="color:#888">{</span> 
    <span style="color:#2838b0;font-style:italic">var</span> <span style="color:#888">{</span>id<span style="color:#888">,</span>lats<span style="color:#888">,</span>lons<span style="color:#888">}</span> <span style="color:#666">=</span> req<span style="color:#888">.</span>body<span style="color:#888">;</span>

    console<span style="color:#888">.</span>log<span style="color:#888">(</span>lats <span style="color:#666">&gt;=</span> <span style="color:#888">(</span>lat<span style="color:#666">-</span><span style="color:#444">0.01</span><span style="color:#888">)</span><span style="color:#888">)</span><span style="color:#888">;</span>
    console<span style="color:#888">.</span>log<span style="color:#888">(</span> lats <span style="color:#666">&lt;=</span> <span style="color:#888">(</span>lat<span style="color:#666">+</span><span style="color:#444">0.01</span><span style="color:#888">)</span><span style="color:#888">)</span><span style="color:#888">;</span>
    console<span style="color:#888">.</span>log<span style="color:#888">(</span>lons <span style="color:#666">&gt;=</span> <span style="color:#888">(</span>lon<span style="color:#666">-</span><span style="color:#444">0.1</span><span style="color:#888">)</span><span style="color:#888">)</span><span style="color:#888">;</span>
    console<span style="color:#888">.</span>log<span style="color:#888">(</span>lons <span style="color:#666">&lt;=</span> <span style="color:#888">(</span>lon<span style="color:#666">+</span><span style="color:#444">0.1</span><span style="color:#888">)</span><span style="color:#888">)</span><span style="color:#888">;</span>

    <span style="color:#2838b0">if</span><span style="color:#888">(</span><span style="color:#888">(</span>  lats <span style="color:#666">&gt;=</span> <span style="color:#888">(</span>lat<span style="color:#666">-</span><span style="color:#444">0.0002</span><span style="color:#888">)</span>  <span style="color:#666">&amp;&amp;</span>  lats <span style="color:#666">&lt;=</span> <span style="color:#888">(</span>lat<span style="color:#666">+</span><span style="color:#444">0.0002</span><span style="color:#888">)</span><span style="color:#888">)</span>  <span style="color:#666">&amp;&amp;</span>  <span style="color:#888">(</span>lons <span style="color:#666">&gt;=</span> <span style="color:#888">(</span>lon<span style="color:#666">-</span><span style="color:#444">0.0002</span><span style="color:#888">)</span>  <span style="color:#666">&amp;&amp;</span>  lons <span style="color:#666">&lt;=</span> <span style="color:#888">(</span>lon<span style="color:#666">+</span><span style="color:#444">0.0002</span><span style="color:#888">)</span>  <span style="color:#888">)</span><span style="color:#888">)</span>    <span style="color:#888">{</span>
        console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#444">101</span><span style="color:#888">)</span><span style="color:#888">;</span>
        <span style="color:#2838b0;font-style:italic">var</span> ip <span style="color:#666">=</span> req<span style="color:#888">.</span>headers<span style="color:#888">[</span><span style="color:#b83838">&#39;x-forwarded-for&#39;</span><span style="color:#888">]</span><span style="color:#888">;</span>
        <span style="color:#2838b0;font-style:italic">var</span> time <span style="color:#666">=</span> <span style="color:#388038">Date</span><span style="color:#888">.</span>now<span style="color:#888">(</span><span style="color:#888">)</span><span style="color:#888">;</span>
        addtofile<span style="color:#888">(</span><span style="color:#888">{</span><span style="color:#b83838">&#34;id&#34;</span><span style="color:#666">:</span>id<span style="color:#888">,</span><span style="color:#b83838">&#34;ip&#34;</span><span style="color:#666">:</span>ip<span style="color:#888">,</span><span style="color:#b83838">&#34;lon&#34;</span><span style="color:#666">:</span>lon<span style="color:#888">,</span><span style="color:#b83838">&#34;lat&#34;</span><span style="color:#666">:</span>lat<span style="color:#888">,</span><span style="color:#b83838">&#34;time&#34;</span><span style="color:#666">:</span>time<span style="color:#888">}</span><span style="color:#888">)</span><span style="color:#888">;</span>
        res<span style="color:#888">.</span>send<span style="color:#888">(</span><span style="color:#b83838">&#39;Data is saved successfully&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span><span style="color:#888">}</span>
    <span style="color:#2838b0">else</span><span style="color:#888">{</span>
        res<span style="color:#888">.</span>send<span style="color:#888">(</span><span style="color:#b83838">&#39;You are not at the location of the lecture or the doctor has not set the location yet&#39;</span><span style="color:#888">)</span><span style="color:#888">;</span>
     <span style="color:#888">}</span>
    <span style="color:#888">}</span>
     <span style="color:#888">)</span><span style="color:#888">;</span>

app<span style="color:#888">.</span>get<span style="color:#888">(</span><span style="color:#b83838">`</span><span style="color:#b83838">/</span><span style="color:#b83838">`</span><span style="color:#888">,</span> <span style="color:#2838b0;font-style:italic">function</span> <span style="color:#888">(</span>req<span style="color:#888">,</span> res<span style="color:#888">)</span> <span style="color:#888">{</span>

    fs<span style="color:#888">.</span>readFile<span style="color:#888">(</span><span style="color:#b83838">&#39;1.html&#39;</span><span style="color:#888">,</span> <span style="color:#b83838">&#39;utf8&#39;</span><span style="color:#888">,</span> <span style="color:#2838b0;font-style:italic">function</span> <span style="color:#888">(</span>err<span style="color:#888">,</span> file<span style="color:#888">)</span> <span style="color:#888">{</span>
    res<span style="color:#888">.</span>setHeader<span style="color:#888">(</span><span style="color:#b83838">&#39;Content-Type&#39;</span><span style="color:#888">,</span> <span style="color:#b83838">&#39;text/html&#39;</span><span style="color:#888">)</span>
    res<span style="color:#888">.</span>send<span style="color:#888">(</span>file<span style="color:#888">)</span>
    <span style="color:#888">}</span><span style="color:#888">)</span>
<span style="color:#888">}</span><span style="color:#888">)</span>

app<span style="color:#888">.</span>listen<span style="color:#888">(</span>process<span style="color:#888">.</span>env<span style="color:#888">.</span>PORT <span style="color:#666">||</span> <span style="color:#444">8080</span><span style="color:#888">,</span> <span style="color:#2838b0;font-style:italic">function</span> <span style="color:#888">(</span><span style="color:#888">)</span> <span style="color:#888">{</span>
    console<span style="color:#888">.</span>log<span style="color:#888">(</span><span style="color:#b83838">&#39;Listening At Localhost!!&#39;</span><span style="color:#888">)</span>
<span style="color:#888">}</span><span style="color:#888">)</span>
<span style="color:#888;font-style:italic">// app.listen(80, function () {
</span><span style="color:#888;font-style:italic"></span><span style="color:#888;font-style:italic">//     console.log(&#39;Listening At Localhost!!&#39;)
</span><span style="color:#888;font-style:italic"></span><span style="color:#888;font-style:italic">// })
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
