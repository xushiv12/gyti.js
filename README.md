<h1>GYTI.js</h1>

<p>
GYTI.js is a lightweight tool that makes JavaScript simpler.
It also supports native JavaScript, so you can use GYTI and JavaScript together.
</p>

<hr>

<h2>v1.0.0</h2>

<p>
The first version of GYTI.js.
It includes the basic GYTI language, input/output tools, AI tools,
browser tools, loops, conditions, functions, and native JavaScript support.
</p>

<h3>Download / Import</h3>

<code>
Go to docs and find 1.0.0.js and download it.
</code>

<p>Or use:</p>

<code>
https://xushiv12.github.io/gyti.js/1.0.0.js
</code>

<h3>How to run GYTI code</h3>

<p>Use <code>run()</code>:</p>

<pre><code>
run(`
xy a = 10;
out(a);
`);
</code></pre>

<p>
GYTI also supports native JavaScript inside <code>run()</code>.
You can mix GYTI and JavaScript together.
</p>

<h3>Basic functions</h3>

<h4>out()</h4>

<p>Shows a message using a browser alert.</p>

<pre><code>
out("Hello!");
</code></pre>

<h4>put()</h4>

<p>
Shows a prompt and returns what the user enters.
</p>

<pre><code>
xy name = put("What is your name?");
out(name);
</code></pre>

<h4>wt()</h4>

<p>
Writes HTML into the element with the ID <code>b</code>.
</p>

<pre><code>
wt("Hello World");
</code></pre>

<p>Your HTML should contain:</p>

<pre><code>
&lt;p id="b"&gt;&lt;/p&gt;
</code></pre>

<h3>AI functions</h3>

<h4>AI_local()</h4>

<p>
Opens the local AI system.
This function is designed for local or LAN use.
</p>

<pre><code>
AI_local(key, question);
</code></pre>

<p>
The local AI server uses a private key and should not be exposed to the public Internet.
</p>

<h4>AI_local_2()</h4>

<p>
Gets a result from the local AI system and writes it into the element with ID
<code>b</code>.
</p>

<pre><code>
AI_local_2(key);
</code></pre>

<h4>AI_public()</h4>

<p>
Opens the public AI page.
The user can enter their own key.
This is designed for public projects.
</p>

<pre><code>
AI_public("Hello AI");
</code></pre>

<h4>AI_public_2()</h4>

<p>
Gets a result from the public AI system and writes it into the element with ID
<code>b</code>.
</p>

<pre><code>
AI_public_2(key);
</code></pre>

<h3>GYTI keywords</h3>

<table border="1">
<tr>
<th>GYTI</th>
<th>JavaScript</th>
<th>Use</th>
</tr>

<tr>
<td><code>xy</code></td>
<td><code>let</code></td>
<td>Create a variable</td>
</tr>

<tr>
<td><code>fc</code></td>
<td><code>function</code></td>
<td>Create a function</td>
</tr>

<tr>
<td><code>II</code></td>
<td><code>if</code></td>
<td>Condition</td>
</tr>

<tr>
<td><code>EE</code></td>
<td><code>else</code></td>
<td>Else condition</td>
</tr>

<tr>
<td><code>FF</code></td>
<td><code>for</code></td>
<td>For loop</td>
</tr>

<tr>
<td><code>WW</code></td>
<td><code>while</code></td>
<td>While loop</td>
</tr>

<tr>
<td><code>prt</code></td>
<td><code>window.print()</code></td>
<td>Print the page</td>
</tr>

<tr>
<td><code>wd</code></td>
<td><code>window</code></td>
<td>Browser window object</td>
</tr>

<tr>
<td><code>op</code></td>
<td><code>window.open</code></td>
<td>Open a new window or page</td>
</tr>

<tr>
<td><code>wtime</code></td>
<td><code>setInterval</code></td>
<td>Run code repeatedly</td>
</tr>

<tr>
<td><code>otime</code></td>
<td><code>setTimeout</code></td>
<td>Run code after a delay</td>
</tr>

<tr>
<td><code>full</code></td>
<td><code>document.documentElement.requestFullscreen()</code></td>
<td>Enter fullscreen mode</td>
</tr>
</table>

<h3>Keyword escape system</h3>

<p>
If you want to use a GYTI keyword as normal text,
put <code>/</code> after the first character of the keyword.
</p>

<p>Examples:</p>

<pre><code>
x/y   = xy
f/c   = fc
o/p   = op
w/time = wtime
o/time = otime
f/ull = full
I/I   = II
E/E   = EE
F/F   = FF
W/W   = WW
</code></pre>

<p>
This prevents the word from being converted into a GYTI command.
</p>

<h3>Native JavaScript support</h3>

<p>
GYTI does not block native JavaScript.
You can use normal JavaScript inside <code>run()</code>.
</p>

<pre><code>
run(`
xy a = 10;

console.log(a);

document.body.style.fontSize = "20px";
`);
</code></pre>

<p>
This means GYTI can also work with existing JavaScript libraries.
Use GYTI when you want simpler code,
and native JavaScript when you need full JavaScript control.
</p>

<hr>

<h2>v1.0.1</h2>

<p>
v1.0.1 includes everything in v1.0.0 and adds
<code>how_to_ipt()</code>.
</p>

<h3>Download / Import</h3>

<code>
Go to docs and find 1.0.1.js and download it.
</code>

<p>Or use:</p>

<code>
https://xushiv12.github.io/gyti.js/1.0.1.js
</code>

<h3>New: how_to_ipt()</h3>

<p>
<code>how_to_ipt()</code> helps developers import a JavaScript library.
</p>

<p>Usage:</p>

<pre><code>
how_to_ipt("https://example.com/library.js");
</code></pre>

<p>
GYTI will show you the HTML code needed to import the library:
</p>

<pre><code>
&lt;script src="https://example.com/library.js"&gt;&lt;/script&gt;
</code></pre>

<p>
Because GYTI supports native JavaScript,
JavaScript libraries can be used together with GYTI.
</p>

<p>
The library does not need to be hosted on the GYTI website.
Developers can host libraries on their own websites or servers.
</p>

<hr>

<h2>v1.0.2</h2>

<p>
v1.0.2 includes everything in v1.0.0 and v1.0.1,
and adds simple QR code generation.
</p>

<h3>Download / Import</h3>

<code>
Go to docs and find 1.0.2.js and download it.
</code>

<p>Or use:</p>

<code>
https://xushiv12.github.io/gyti.js/1.0.2.js
</code>

<h3>New: Q()</h3>

<p>
<code>Q()</code> creates a QR code.
</p>

<p>
<strong>Important:</strong>
To use <code>Q()</code>, you must import the
<strong>qrcodejs</strong> library first.
GYTI.js does not include qrcodejs automatically.
</p>

<p>
Import qrcodejs before GYTI:
</p>

<pre><code>
&lt;script src="YOUR-QRCODEJS-URL"&gt;&lt;/script&gt;
&lt;script src="https://xushiv12.github.io/gyti.js/1.0.2.js"&gt;&lt;/script&gt;
</code></pre>

<h4>Q() usage</h4>

<pre><code>
Q(elementId, text);
</code></pre>

<p>
<strong>elementId</strong> is the ID of the HTML element where the QR code will appear.
</p>

<p>
<strong>text</strong> is the text or URL stored inside the QR code.
</p>

<p>Example HTML:</p>

<pre><code>
&lt;div id="qrcode"&gt;&lt;/div&gt;
</code></pre>

<p>Example GYTI / JavaScript:</p>

<pre><code>
Q("qrcode", "https://example.com");
</code></pre>

<p>
This creates a QR code inside:
</p>

<pre><code>
&lt;div id="qrcode"&gt;&lt;/div&gt;
</code></pre>

<hr>

<h2>Version Summary</h2>

<table border="1">

<tr>
<th>Version</th>
<th>Main features</th>
</tr>

<tr>
<td>1.0.0</td>
<td>
Basic GYTI language,
run(),
out(),
put(),
wt(),
AI_local(),
AI_local_2(),
AI_public(),
AI_public_2(),
conditions,
loops,
functions,
browser tools,
escape system,
and native JavaScript compatibility.
</td>
</tr>

<tr>
<td>1.0.1</td>
<td>
Everything in 1.0.0 +
how_to_ipt() for importing JavaScript libraries.
</td>
</tr>

<tr>
<td>1.0.2</td>
<td>
Everything in 1.0.1 +
Q() for simple QR code generation using qrcodejs.
</td>
</tr>

</table>

<hr>

<p>
<strong>GYTI.js — Use GYTI when you want simplicity.
Use native JavaScript when you want full control.</strong>
</p>
