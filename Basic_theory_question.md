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

- &lt;pre&gt;
 - preserves spacing and formatting both spaces and line breaks.
 - preformatted text.

- &lt;code&gt;
 - Used for inline code.
 - Text will be displayed exactly as written in the HTML source code

# 18. What does the &lt;blockquote&gt; tag do?
- It defines a block of quoted text.
- A section that is quoted from another source.

# 19.What is the &lt;abbr&gt; tag used for?
- To define abbreviations or acronyms.
- Use title attribute to show the description for the abbreviation
- eg: &lt;abbr title="Cascading Style Sheets"&gt;CSS&lt;/abbr&gt;

# 20.What does the &lt;mark&gt; tag represent?
- Highlighted or marked text.
- eg: &lt;mark&gt;HTML&lt;/mark&gt;

# 21. What is the &lt;a&gt; tag used for?
- To create hyperlinks.
- Link from one page to another.
- It has attributes: 

- href
 - URL that the hyperlink

- target
 - _self: opens in the current browsing tab. (Default)
 - _blank: opens in a new tab
 - _parent: opens in parent browsing context of the current one. If no parent, behaves as _self.
 - _top: opens in the topmost browsing context. To be specific, this means the "highest" context that's an ancestor of the current one. If no ancestors, behaves as _self.

- download
 - Downloaded linked URL .

- type
 - Specifies linked URL's format.

- rel
 - Specify the relationship between the current document and the linked document

# 21. How do you open a link in a new tab using HTML?
- Add target="_blank" to the &lt;a&gt; tag.

# 22. What are relative and absolute URLs?
- Relative: relative to the current page.Points to the path located in the system. 
- Absolute: full URL to a file.

# 23. How do you create an image in HTML?
- Using &lt;img src="image.jpg" alt="description" height="500" width="500" loading="lazy"&gt;.
- src attribute holds the path to the image.
- alt attribute holds an alternative text for the image
- height, width attributes specifies the height and width of an image.
- loading attribute tells how the browser should load the image

 - eager - Loads the image immediately
 - lazy-defer loading of images until some conditions are met,improves the performance of the content

# 24. What is the use of the alt attribute in the &lt;img&gt; tag?
- Alternative text .
- Describes the image for accessibility and when image fails to load.

# 25. Can an image be used as a link? How?

Yes, by wrapping it in an <a&gt; tag: <a href="url"><img src="..."></a>.

# 26. What is an image map?

A way to make different areas of a single image clickable using <map> and <area>.

# 27. What is the title attribute in an anchor tag?

Shows additional info when hovered over.

# 28. How do you link to a section within the same page?

Use id and href="#id".

# 29. How do you make an email link in HTML?

<a href="mailto:someone@example.com">Email Us</a>.

Lists

# 30. What are the types of lists in HTML?

Ordered (<ol>), Unordered (<ul>), and Definition lists (<dl>).

# 31. What is the difference between <ul> and <ol>?

<ul> creates a bulleted list; <ol> creates a numbered list.

# 32. What is the <dl> tag used for?

To define a description list.

# 33. What do <dt> and <dd> stand for?

<dt> defines the term; <dd> defines the description.

# 34. Can you nest lists in HTML?

Yes, lists can be nested inside list items.

Tables

# 35. How do you create a table in HTML?

Using <table>, <tr>, <th>, and <td> tags.

# 36. What does the <tr> tag do?

Defines a table row.

# 37. What is the difference between <td> and <th>?

<td> defines standard cells; <th> defines header cells.

# 38. What are colspan and rowspan attributes?

They allow a cell to span multiple columns or rows.

# 39. What is the <caption> tag used for in tables?

To add a title or explanation to a table.

Forms

# 40. What is the <form> tag used for?

It defines a form that can collect user input.

# 41. What are the common input types in HTML?

text, password, email, radio, checkbox, submit, etc.

# 42. What is the use of the action attribute in forms?

Specifies the URL to send form data.

# 43. What is the use of the method attribute?

Defines HTTP method: GET or POST.

# 44. What is the purpose of the <label> tag?

It binds a label to a specific input.

# 45. What is the difference between <input type="text"> and <textarea>?

<input> is for single-line; <textarea> is for multi-line text.

# 46. What is the <select> tag used for?

To create dropdown lists.

# 3 What is the <fieldset> and <legend> tag?

<fieldset> groups form elements; <legend> provides a caption.

# 47. What is the purpose of the required attribute?

Makes a field mandatory to submit.

# 48. What is the placeholder attribute?

Displays text in an empty input field for guidance.
# 49. What are semantic tags?

Tags that clearly define their content’s meaning (e.g., <article>, <section>).

# 50 What is the difference between <div> and <section>?

<div> is generic; <section> has semantic meaning.

# 51. What is the <article> tag used for?

For independent, self-contained content.

# 52. What does the <header> tag represent?

A container for introductory content or navigational links.

# 53. What is the <footer> tag used for?

Contains footer information for its nearest section or the page.

# 54. What is the <nav> tag?

Defines a block of navigation links.

# 56. What is the purpose of <main>?

Denotes the primary content of a document.

# 57. What is the <aside> tag used for?

For side content, like ads or related links.

# 58. What is the difference between <span> and <div>?

<div> is a block-level element; <span> is inline.

# 59. Why are semantic elements important for accessibility and SEO?

They help screen readers and search engines understand page structure.

Multimedia & Embeds

# 60. What is the <audio> tag used for?

To embed audio files.

# 61. What is the <video> tag used for?

To embed video files.

# 62. What is the controls attribute in <audio> and <video>?

It displays built-in playback controls.

# 63. What is the <source> tag used for?

Specifies multiple media sources.

# 64. How do you embed a YouTube video in HTML?

Using the <iframe> tag with the video URL.

# 65. What is the <embed> tag used for?

To embed external content (like PDFs, Flash).

# 66. What is the <object> tag used for?

Embeds multimedia or external resources.

# 67. What is the difference between <embed> and <object>?

<object> is more versatile; <embed> is simpler.

# 68. What is the <iframe> tag used for?

To embed another HTML page within the current one.

# 69. What are sandbox attributes in iframes?

Restrict iframe content behavior for security.

Meta Tags & Head

# 70 What are meta tags?

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


