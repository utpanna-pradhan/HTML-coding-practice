✅ 100 HTML Theory Questions
Basics

# 1.What is HTML?
- HTML (HyperText Markup Language) is the standard language used to create web pages.
- It is used to give structure to a web page
- Without HTML also we are able to display a web page but that will not follow any structure .
- Every webpage you see online, from news sites to social media, is built using HTML.

# 2.What does HTML stand for?
- HyperText Markup Language.

# 3.What are HTML tags?
- It is used to provide instructions to web browsers on how to render content
- It is a part of HTML element
- They are not case sensitive, i.e <p> =<P>
- eg : &lt;br&gt;,&lt;h1&gt;,&lt;div&gt;,&lt;p&gt; etc.

# 4.What is the difference between HTML elements and tags?
- A tag is part of an element. 
- An element includes the start tag, content, and end tag.
- syntax for element - &lt;start tag&gt;content&lt;/end tag&gt;
- eg: &lt;h1&gt; This is a heading tag &lt;/h1&gt;

# 5.What is the purpose of the &lt;!DOCTYPE html&gt; declaration?
- It defines the document type and HTML version being used.
- All HTML documents must start with a &lt;!DOCTYPE&gt;.
- Not an HTML tag.
- Not case sensitive.

# 6.What are void (self-closing) elements in HTML?
- Elements that don't have an end tag .
- They don't have any content.
- Empty tag
- eg : &lt;br&gt;,&lt;hr&gt;,&lt;img&gt;,&lt;link&gt;

# 7.What is the use of the &lt;html&gt; tag?

- It wraps the entire HTML document.
- Root element .
- Parent tag.

# 8.What is the purpose of the &lt;head&gt; tag?

- It contains meta-information, links to stylesheets, and scripts.
- Placed between the &lt;html&gt; tag and the &lt;body&gt; tag.
- Not for user.
- Not visible to frontend.
- Pass information to the browser .
- eg: 

    &lt;meta charset="UTF-8" /&gt;
    &lt;meta name="viewport" content="width=device-width" /&gt;

# 9.What is contained within the &lt;body&gt; tag?

- All visible content on a webpage .
- Display on browser.
- Can be only one &lt;body&gt;

# 10.What is the role of the &lt;title&gt; tag?

- It sets the title of the webpage shown in the browser tab.
- Required tag in HTML documents.
- Important for search engine optimization (SEO)
- Longer, descriptive title performs better
- Beyond 55–60 characters may be lost.
- Should be as unique as possible.
- Describe the page's purpose.
- Mostly user read the page title and infer the content the page contains.

# 11.What does the &lt;h1&gt; to &lt;h6&gt; tag represent?

- Headings from most to least important.
- &lt;h1&gt; defines the most important heading.
- &lt;h6&gt; defines the least important heading.
- It has six levels(h1-h6)
- Block level element (Takes 100% width).
- eg: &lt;h1&gt;Heading level 1&lt;/h1&gt;

# 12.What does the &lt;p&gt; tag do?

- It defines a paragraph.
- Single blank line before and after each &lt;p&gt; element.
- Block level element (Takes 100% width).
- eg: &lt;p&gt;Some text inside paragraph&lt;/p&gt;

# 13.What is the difference between &lt;strong&gt; and &lt;b&gt;?

&lt;strong&gt; 
- Indicates importance.
- Visual appearance with logical information. 
- Gives information to browser.
- Useful for screen reader.
- Logical tag

&lt;b&gt; 
- Just makes text bold.
- Provide only visual appearance .
- No logical information.
- Doesn't pass any information to broswer.
- Physical tag.

# 14.What is the difference between &lt;em&gt; and &lt;i&gt;?

&lt;em&gt; 
- adds emphasis. 
- Visual appearance with logical information.
- Gives information to browser.
- Useful for screen reader.
- Logical tag

&lt;i&gt;
- italicizes text visually only.
- Provide only visual appearance .
- No logical information.
- Doesn't pass any information to broswer.
- Physical tag.

# 15.What is the &lt;br&gt; tag used for?

- To insert a line break.
- Empty tag.

# 16.How is a horizontal line created in HTML?

- Using the &lt;hr&gt; tag.
- Empty tag.

# 17.What is the difference between pre and code?

&lt;pre&gt;
 preserves spacing and formatting both spaces and line breaks.
preformatted text.

&lt;code&gt;
Used for inline code.
Text will be displayed exactly as written in the HTML source code

# 18. What does the &lt;blockquote&gt; tag do?

It defines a block of quoted text.

# 19.What is the &lt;abbr&gt; tag used for?

To define abbreviations or acronyms.

# 20.What does the <mark> tag represent?

Highlighted or marked text.
# 3 What is the <a> tag used for?

To create hyperlinks.

# 3 How do you open a link in a new tab using HTML?

Add target="_blank" to the <a> tag.

# 3 What are relative and absolute URLs?

Relative: relative to the current page; Absolute: full URL with protocol.

# 3 How do you create an image in HTML?

Using <img src="image.jpg" alt="description">.

# 3 What is the use of the alt attribute in the <img> tag?

Describes the image for accessibility and when image fails to load.

# 3 Can an image be used as a link? How?

Yes, by wrapping it in an <a> tag: <a href="url"><img src="..."></a>.

# 3 What is an image map?

A way to make different areas of a single image clickable using <map> and <area>.

# 3 What is the title attribute in an anchor tag?

Shows additional info when hovered over.

# 3 How do you link to a section within the same page?

Use id and href="#id".

# 3 How do you make an email link in HTML?

<a href="mailto:someone@example.com">Email Us</a>.

Lists

# 3 What are the types of lists in HTML?

Ordered (<ol>), Unordered (<ul>), and Definition lists (<dl>).

# 3 What is the difference between <ul> and <ol>?

<ul> creates a bulleted list; <ol> creates a numbered list.

# 3 What is the <dl> tag used for?

To define a description list.

# 3 What do <dt> and <dd> stand for?

<dt> defines the term; <dd> defines the description.

# 3 Can you nest lists in HTML?

Yes, lists can be nested inside list items.

Tables

# 3 How do you create a table in HTML?

Using <table>, <tr>, <th>, and <td> tags.

# 3 What does the <tr> tag do?

Defines a table row.

# 3 What is the difference between <td> and <th>?

<td> defines standard cells; <th> defines header cells.

# 3 What are colspan and rowspan attributes?

They allow a cell to span multiple columns or rows.

# 3 What is the <caption> tag used for in tables?

To add a title or explanation to a table.

Forms

# 3 What is the <form> tag used for?

It defines a form that can collect user input.

# 3 What are the common input types in HTML?

text, password, email, radio, checkbox, submit, etc.

# 3 What is the use of the action attribute in forms?

Specifies the URL to send form data.

# 3 What is the use of the method attribute?

Defines HTTP method: GET or POST.

# 3 What is the purpose of the <label> tag?

It binds a label to a specific input.

# 3 What is the difference between <input type="text"> and <textarea>?

<input> is for single-line; <textarea> is for multi-line text.

# 3 What is the <select> tag used for?

To create dropdown lists.

# 3 What is the <fieldset> and <legend> tag?

<fieldset> groups form elements; <legend> provides a caption.

# 3 What is the purpose of the required attribute?

Makes a field mandatory to submit.

# 3 What is the placeholder attribute?

Displays text in an empty input field for guidance.
# 3 What are semantic tags?

Tags that clearly define their content’s meaning (e.g., <article>, <section>).

# 3 What is the difference between <div> and <section>?

<div> is generic; <section> has semantic meaning.

# 3 What is the <article> tag used for?

For independent, self-contained content.

# 3 What does the <header> tag represent?

A container for introductory content or navigational links.

# 3 What is the <footer> tag used for?

Contains footer information for its nearest section or the page.

# 3 What is the <nav> tag?

Defines a block of navigation links.

# 3 What is the purpose of <main>?

Denotes the primary content of a document.

# 3 What is the <aside> tag used for?

For side content, like ads or related links.

# 3 What is the difference between <span> and <div>?

<div> is a block-level element; <span> is inline.

# 3 Why are semantic elements important for accessibility and SEO?

They help screen readers and search engines understand page structure.

Multimedia & Embeds

# 3 What is the <audio> tag used for?

To embed audio files.

# 3 What is the <video> tag used for?

To embed video files.

# 3 What is the controls attribute in <audio> and <video>?

It displays built-in playback controls.

# 3 What is the <source> tag used for?

Specifies multiple media sources.

# 3 How do you embed a YouTube video in HTML?

Using the <iframe> tag with the video URL.

# 3 What is the <embed> tag used for?

To embed external content (like PDFs, Flash).

# 3 What is the <object> tag used for?

Embeds multimedia or external resources.

# 3 What is the difference between <embed> and <object>?

<object> is more versatile; <embed> is simpler.

# 3 What is the <iframe> tag used for?

To embed another HTML page within the current one.

# 3 What are sandbox attributes in iframes?

Restrict iframe content behavior for security.

Meta Tags & Head

# 3 What are meta tags?

Tags that provide metadata about the document.

# 3 What does <meta charset="UTF-8"> do?

Sets character encoding to UTF-8.

# 3 What is the use of <meta name="viewport">?

Controls layout on mobile browsers.

# 3 How to redirect a page using meta tag?

<meta http-equiv="refresh" content="5;url=page.html">.

# 3 What is the difference between <link> and <style> tags?

<link> references external CSS; <style> includes internal CSS.

# 3 What is the <base> tag used for?

Sets a base URL for all relative links.

# 3 What does <meta name="description"> do?

Adds a page description used by search engines.

# 3 How do you specify keywords in HTML?

Using <meta name="keywords" content="html, web">.

# 3 What is a favicon?

A small icon shown in the browser tab.

# 3 How to include a favicon?

<link rel="icon" href="favicon.ico">.

Miscellaneous

# 3 What is the role of comments in HTML?

To add notes or explanations in code (<!-- comment -->).

# 3 Can HTML be case-sensitive?

No, HTML is not case-sensitive.

# 3 What is the purpose of data-* attributes?

Store extra custom data.

# 3 What are global attributes?

Attributes applicable to any HTML element (e.g., id, class, style).

# 3 What is progressive enhancement?

Designing for basic functionality first, then enhancing.

# 3 What is graceful degradation?

Designing rich features that degrade gracefully in older browsers.

# 3 What are custom data attributes?

Attributes starting with data- used to store custom data.

# 3 What is ARIA in HTML?

Accessible Rich Internet Applications—improves accessibility.

# 3 What is the role of the lang attribute in HTML?

Specifies the language of the content.

# 3 What is the difference between HTML and XHTML?

XHTML is stricter and XML-based.

APIs & HTML5

# 3 What is HTML5?

The latest version of HTML with new elements and APIs.

# 3 What is the Canvas API in HTML5?

Used for drawing graphics with JavaScript.

# 3 What is the Drag and Drop API?

Allows drag-and-drop functionality in HTML elements.

# 3 What is the Geolocation API?

Allows access to the user’s location.

# 3 What is Web Storage in HTML5?

LocalStorage and SessionStorage for storing data locally.

# 3 What is the difference between LocalStorage and SessionStorage?

LocalStorage persists; SessionStorage lasts only per session.

# 3 What is the <details> tag used for?

To create a collapsible element.

# 3 What is the <summary> tag?

Provides a summary for <details>.

# 3 What is the <template> tag used for?

Holds client-side content that is not rendered when the page loads.

# 3 What is the purpose of the <noscript> tag?
- Provides fallback content for users with JavaScript disabled.


