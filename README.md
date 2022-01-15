# uncover.js
Minimalistic, quick and fast Presentations on the Web.

## Documentation

### \<slide\>

In uncover.js, the html body consists out of slides.
They always have the dimensions of the user's viewport and can be navigated using the Up and Down Arrow Keys.
This way, the presentation is always in the correct aspect ratio. You may have to zoom in/out in the browser to
get optimal results.


### \<p\>

The paragraph `<p>` is one of the few elements that has no inline display. Therefore it is used to include all the inline-elements
like `<bt>`, `<a>`, etc. Of course all the text goes there too. Use `<br>` to break lines instead of creating multiple
paragraphs.


### \<h1\> - \<h6\>

The headers `<h1>` to `<h3>` are inline elements and can be used for titles, subtitles or just to highlight words in a paragraph.


### \<bt\>

The button `<bt>` is an inline-element and, well, a button.


### \<row\> and \<col\>

The containers `<row>` and `<col>` are Shortcuts for flex-boxes with the `row` or `column` direction.


### \<hs\> and \<vs\>

The horizontal space `<hs>` and the vertical space `<vs>` are used to separate elements. Their innerHTML is the width/height in pixels.





