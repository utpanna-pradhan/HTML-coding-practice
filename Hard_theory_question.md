What is the Shadow DOM and how is it used in HTML?

Shadow DOM encapsulates a component's DOM tree to prevent style conflicts.

What are Web Components?

Reusable custom elements using Shadow DOM, templates, and custom tags.

What is the difference between async and defer in script tags?

async: runs immediately after download; defer: waits until DOM is loaded.

What is a custom element?

A user-defined HTML tag using JavaScript and Web Components.

What is a content model in HTML5?

Describes what content is allowed inside each HTML element.

How does ARIA improve accessibility in HTML?

Adds roles and states to elements for assistive technologies.

What is the inert attribute?

Disables interaction and accessibility with an element.

What is the purpose of the <template> tag?

Defines HTML that’s not rendered until activated via JavaScript.

What are Boolean attributes?

Attributes with true/false values implied by presence (e.g., disabled).

How can HTML handle drag-and-drop natively?

Using draggable attribute and related JavaScript events.

What is the purpose of the sandbox attribute in <iframe>?

Restricts the actions an iframe can perform, improving security (e.g., block scripts, forms).

How does the content-security-policy meta tag enhance HTML security?

Prevents XSS and data injection by defining trusted sources for scripts, styles, etc.

How do you define a responsive table in HTML?

Wrap the table in a <div style=\"overflow-x: auto\"> and ensure proper use of <thead>, <tbody>, etc.

What is the part attribute in Web Components?

Exposes internal elements of a Shadow DOM to the outside for styling with ::part.

What’s the difference between custom elements and slots?

Custom elements define new tags; slots enable content projection in shadow DOM.

What is a named slot?

A slot element with a name attribute allowing targeted content projection.

What is HTML parsing?

The process where the browser converts HTML into the DOM tree.

What is the event lifecycle of a form submission?

Events like submit, preventDefault(), and input validations occur.

What is the Accessibility Tree in HTML?

A subset of the DOM that assistive technologies use to interpret content.

How do you create a modal dialog using semantic HTML?

Use <dialog> element and control with open, .showModal() methods.

What is the difference between window.onload and DOMContentLoaded?

DOMContentLoaded fires when HTML is loaded; onload waits for all resources.

What is the use of itemtype and itemscope in microdata?

Define structured data vocabularies for SEO (e.g., schema.org).

What is the popstate event used for?

Detects back/forward navigation in the browser history API.

What does crossorigin attribute do in <img> and <script>?

Manages CORS behavior for media and script loading.

How is <iframe> used for embedding cross-origin content securely?

With sandbox, referrerpolicy, and restricted headers.

What is the difference between <object>, <embed>, and <iframe>?

<object>: generalized; <embed>: used for plugins; <iframe>: HTML documents.

What is a scoped style in HTML?

Applies styles within a limited scope (not widely supported).

What is the difference between passive and non-passive event listeners?

Passive listeners cannot call preventDefault(), improving performance.

What is a mutation observer?

Watches the DOM for changes (not HTML, but tightly related).

How do you apply a fallback font using HTML/CSS?

In the style attribute or CSS: font-family: 'Custom', 'Arial', sans-serif;.

What are the native HTML validation error messages?

Browser-provided tooltips for invalid inputs with required, type, etc.

How do you disable zooming on mobile using meta tags?

<meta name=\"viewport\" content=\"width=device-width, user-scalable=no\">

What is the role of aria-live?

Announces dynamic content updates to screen readers.

What are aria-hidden and its implications?

Hides content from assistive technologies without removing it visually.

What’s the use of role=\"presentation\"?

Removes semantic meaning from an element for screen readers.

How does the <mark> tag differ from <strong>?

<mark> highlights text; <strong> indicates importance.

How do browser rendering engines work with HTML?

Parse, create DOM tree, construct render tree, layout, paint.

What is a render-blocking resource in HTML?

Resources (like CSS or JS) that pause page rendering until loaded.

How can you reduce HTML page load time?

Minify HTML, use lazy loading, avoid unnecessary scripts/styles.

What is the Critical Rendering Path?

Steps the browser takes to convert HTML/CSS/JS into pixels.

What is a cookie banner and how is it related to HTML?

HTML element that collects user consent for cookies (often using modals).

What are inertial scroll effects and how are they implemented in HTML?

Using CSS/JS to simulate momentum scrolling on supported devices.

What is a beacon request and where does HTML use it?

navigator.sendBeacon() for analytics/data submission post unload.

What is the difference between rel=\"preload\", prefetch, and dns-prefetch?

Used in <link> to optimize loading: preload critical, prefetch future, dns-prefetch resolves domains early.

What is Intersection Observer and how does it relate to HTML?

JS API to detect element visibility changes, useful in infinite scroll/lazy load.

What is an HTML fragment?

A snippet of valid HTML that’s not a complete document (e.g., innerHTML).

How does HTML rendering differ in headless browsers?

No UI; used for testing, SEO crawling.

What is the visual viewport vs layout viewport in HTML?

Visual: what the user sees; Layout: the full document layout area.

What are the limitations of HTML alone (without CSS/JS)?

Lacks interactivity, animations, dynamic behavior, styling control.

What new features may arrive in future HTML specs?

Declarative shadow DOM, native components, new semantic tags (like <toast>, <popover>), enhanced accessibility features.