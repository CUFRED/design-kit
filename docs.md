# Design Kit

Architizer Design Kit is a system of styles and interface elements based on [Foundation 6](http://foundation.zurb.com/docs).

<a class="primary hollow button" target="_blank" href="https://github.com/Architizer/design-kit">View on GitHub</a>

### Starter Template
```html
<!doctype html>
<html class="adk no-js" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Architizer Design Kit Starter Template</title>
    <!-- Architizer Design Kit CSS -->
    <link rel="stylesheet" href="https://design-kit.arc.ht/css/adk.css" />
  </head>
  <body>
    <!-- Page content begins here -->
    <h1>Hello, world!</h1>
    <!-- Page content ends here -->
    <!-- JavaScript dependencies -->
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/what-input/2.1.1/what-input.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/js/foundation.min.js"></script>
    <script>
      $(document).foundation();
    </script>
  </body>
</html>
```



# The Grid

Architizer Design Kit uses the standard Foundation 12-column flex-grid. You can [read more about it here](http://foundation.zurb.com/sites/docs/flex-grid.html).

---

## Overview

The grid is built around two key elements: rows and columns. Rows create a max-width and contain the columns, and columns create the final structure. Everything on your page that you don't give a specific structural style to should be within a row or column.

---

## How to Use

Using this framework is easy. Here's how your code will look when you use a series of `<div>` tags to create vertical columns.

```html
<div class="row">
  <div class="small-6 medium-4 large-3 columns">...</div>
  <div class="small-6 medium-8 large-9 columns">...</div>
</div>
```
---

<div class="row display bg-quicksilver-50">
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-4 columns">4</div>
</div>
<div class="row display bg-quicksilver-50">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-3 columns">3</div>
</div>
<div class="row display bg-quicksilver-50">
  <div class="small-12 large-2 columns">2</div>
  <div class="small-12 large-8 columns">8</div>
  <div class="small-12 large-2 columns">2</div>
</div>
<div class="row display bg-quicksilver-50">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-9 columns">9</div>
</div>
<div class="row display bg-quicksilver-50">
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-8 columns">8</div>
</div>
<div class="row display bg-quicksilver-50">
  <div class="small-12 large-5 columns">5</div>
  <div class="small-12 large-7 columns">7</div>
</div>
<div class="row display bg-quicksilver-50">
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-6 columns">6</div>
</div>

---

## Gutters
- Use `gutter-<size>` class with flex grid's `row`, `column`, `columns` classes or with x-grid's `grid-padding-x` or `cell` classes to get custom gutter.
- Use `small-gutter-<size>` class with the same classes to get custom gutter on small screens.

### Flex Grid
<div class="row bg-quicksilver-50 display gutter-0">
  <div class="columns">gutter-0</div><div class="columns">gutter-0</div>
</div>
<div class="row bg-quicksilver-50 display gutter-micro">
  <div class="columns">gutter-micro</div><div class="columns">gutter-micro</div>
</div>
<div class="row bg-quicksilver-50 display gutter-xxxs">
  <div class="columns">gutter-xxxs</div><div class="columns">gutter-xxxs</div>
</div>
<div class="row bg-quicksilver-50 display gutter-xxs">
  <div class="columns">gutter-xxs</div><div class="columns">gutter-xxs</div>
</div>
<div class="row bg-quicksilver-50 display gutter-xs">
  <div class="columns">gutter-xs</div><div class="columns">gutter-xs</div>
</div>
<div class="row bg-quicksilver-50 display gutter-s">
  <div class="columns">gutter-s</div><div class="columns">gutter-s</div>
</div>
<div class="row bg-quicksilver-50 display gutter-base">
  <div class="columns">gutter-base</div><div class="columns">gutter-base</div>
</div>
<div class="row bg-quicksilver-50 display gutter-m">
  <div class="columns">gutter-m</div><div class="columns">gutter-m</div>
</div>
<div class="row bg-quicksilver-50 display gutter-l">
  <div class="columns">gutter-l</div><div class="columns">gutter-l</div>
</div>
<div class="row bg-quicksilver-50 display gutter-xl">
  <div class="columns">gutter-xl</div><div class="columns">gutter-xl</div>
</div>
<div class="row bg-quicksilver-50 display gutter-xxl">
  <div class="columns">gutter-xxl</div><div class="columns">gutter-xxl</div>
</div>
<div class="row bg-quicksilver-50 display gutter-xxxl">
  <div class="columns">gutter-xxxl</div><div class="columns">gutter-xxxl</div>
</div>

### X-Grid
<div class="grid-x grid-padding-x gutter-xxxl bg-quicksilver-50">
  <div class="cell auto" style="border: solid 1px #c6d1d9;">gutter-xxxl</div>
  <div class="cell auto" style="border: solid 1px #c6d1d9;">gutter-xxxl</div>
</div>


### Small Rules
<div class="row bg-quicksilver-50 display gutter-xxxl small-gutter-0">
  <div class="columns">Medium and up: gutter-xxxl<br /> Small: small-gutter-0</div>
  <div class="columns">Medium and up: gutter-xxxl<br /> Small: small-gutter-0</div>
</div>

---

## Useful links

* [Block Grids](http://foundation.zurb.com/sites/docs/flex-grid.html#block-grids)  
Make grids of items without dealing with column widths
* [Source Ordering](http://foundation.zurb.com/sites/docs/flex-grid.html#source-ordering)  
Move things around in responsive views without Javascript
* [Visibility classes](http://foundation.zurb.com/sites/docs/visibility.html)  
The bread and butter of responsive design in Foundation



# Colors

Based on the approach to color swatches taken by [Material Design](https://material.io/guidelines/style/color.html#color-color-palette), Design Kit's color system contains neutral colors and palette colors.

---

## Neutral Colors

Neutral colors exist stand-alone – they do not require a generated set of dynamic colors that are easily chosen and transitioned between for interactive or otherwise dynamic purposes.

### Utility Classes
These colors are surfaced as utility classes in the format below:
* `.{color}` sets the `color` CSS property
* `.bg-{color}` sets the `background-color` CSS property
* `.border-{color}` sets the `border-color` CSS property

Or to set `:hover` colors:
* `.hover-{color}` sets the `color` CSS property on hover
* `.hover-bg-{color}` sets the `background-color` CSS property on hover
* `.hover-border-{color}` sets the `border-color` CSS property on hover

where:
* `{color}` is the name of the color

### Color Reference
<div class="row color-blocks small-up-1">
  <div class="column">
    <div class="card">
    <div class="card-section bg-white"><strong>white</strong></div>
    <div class="card-section bg-extra-light-gray"><strong>extra-light-gray</strong></div>
    <div class="card-section bg-light-gray"><strong>light-gray</strong></div>
    <div class="card-section bg-medium-gray"><strong>medium-gray</strong></div>
    <div class="card-section bg-black white"><strong>black</strong></div>
    </div>
  </div>
</div>

---

## Palette Colors

We use a base set of palette colors and generate 9 shades (5 lighter, 4 darker) for each of them.
Currently, each shade is **incremented by 7% lightness**, but the SCSS functions are written to be modifiable.

### Utility Classes
These colors are surfaced as utility classes in the format below:
* `.{color}` sets the `color` CSS property (uses the *500* shade for this color)
* `.{color}-{shade}` sets the `color` CSS property  (to specify the shade)
* `.bg-{color}-{shade}` sets the `background-color` CSS property
* `.border-{color}-{shade}` sets the `border-color` CSS property

Or to set `:hover` colors:
* `.hover-{color}` sets the `color` CSS property on hover (uses the *500* shade for this color)
* `.hover-{color}-{shade}` sets the `color` CSS property on hover
* `.hover-bg-{color}-{shade}` sets the `background-color` CSS property on hover
* `.hover-border-{color}-{shade}` sets the `border-color` CSS property on hover

where:
* `{color}` is the name of the color
* `{shade}` is the *number* of the shade (e.g. *500* or *300*)

### Color Reference
<div class="row color-blocks small-up-2 medium-up-3 large-up-3">

  <div class="column">
    <div class="card">
      <div class="card-section">
        <p>quicksilver</p>
      </div>
    <div class="card-section bg-quicksilver-50"><strong>50</strong></div>
    <div class="card-section bg-quicksilver-100"><strong>100</strong></div>
    <div class="card-section bg-quicksilver-200"><strong>200</strong></div>
    <div class="card-section bg-quicksilver-300"><strong>300</strong></div>
    <div class="card-section bg-quicksilver-400"><strong>400</strong></div>
    <div class="card-section bg-quicksilver-500"><strong>500</strong></div>
    <div class="card-section bg-quicksilver-600"><strong>600</strong></div>
    <div class="card-section bg-quicksilver-700 white"><strong>700</strong></div>
    <div class="card-section bg-quicksilver-800 white"><strong>800</strong></div>
    <div class="card-section bg-quicksilver-900 white"><strong>900</strong></div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="card-section">
        <p>blue</p>
      </div>
    <div class="card-section bg-blue-50"><strong>50</strong></div>
    <div class="card-section bg-blue-100"><strong>100</strong></div>
    <div class="card-section bg-blue-200"><strong>200</strong></div>
    <div class="card-section bg-blue-300"><strong>300</strong></div>
    <div class="card-section bg-blue-400"><strong>400</strong></div>
    <div class="card-section bg-blue-500"><strong>500</strong></div>
    <div class="card-section bg-blue-600"><strong>600</strong></div>
    <div class="card-section bg-blue-700 white"><strong>700</strong></div>
    <div class="card-section bg-blue-800 white"><strong>800</strong></div>
    <div class="card-section bg-blue-900 white"><strong>900</strong></div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="card-section">
        <p>green</p>
      </div>
    <div class="card-section bg-green-50"><strong>50</strong></div>
    <div class="card-section bg-green-100"><strong>100</strong></div>
    <div class="card-section bg-green-200"><strong>200</strong></div>
    <div class="card-section bg-green-300"><strong>300</strong></div>
    <div class="card-section bg-green-400"><strong>400</strong></div>
    <div class="card-section bg-green-500"><strong>500</strong></div>
    <div class="card-section bg-green-600"><strong>600</strong></div>
    <div class="card-section bg-green-700 white"><strong>700</strong></div>
    <div class="card-section bg-green-800 white"><strong>800</strong></div>
    <div class="card-section bg-green-900 white"><strong>900</strong></div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="card-section">
        <p>red</p>
      </div>
    <div class="card-section bg-red-50"><strong>50</strong></div>
    <div class="card-section bg-red-100"><strong>100</strong></div>
    <div class="card-section bg-red-200"><strong>200</strong></div>
    <div class="card-section bg-red-300"><strong>300</strong></div>
    <div class="card-section bg-red-400"><strong>400</strong></div>
    <div class="card-section bg-red-500"><strong>500</strong></div>
    <div class="card-section bg-red-600"><strong>600</strong></div>
    <div class="card-section bg-red-700 white"><strong>700</strong></div>
    <div class="card-section bg-red-800 white"><strong>800</strong></div>
    <div class="card-section bg-red-900 white"><strong>900</strong></div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="card-section">
        <p>yellow</p>
      </div>
    <div class="card-section bg-yellow-50"><strong>50</strong></div>
    <div class="card-section bg-yellow-100"><strong>100</strong></div>
    <div class="card-section bg-yellow-200"><strong>200</strong></div>
    <div class="card-section bg-yellow-300"><strong>300</strong></div>
    <div class="card-section bg-yellow-400"><strong>400</strong></div>
    <div class="card-section bg-yellow-500"><strong>500</strong></div>
    <div class="card-section bg-yellow-600"><strong>600</strong></div>
    <div class="card-section bg-yellow-700 white"><strong>700</strong></div>
    <div class="card-section bg-yellow-800 white"><strong>800</strong></div>
    <div class="card-section bg-yellow-900 white"><strong>900</strong></div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="card-section">
        <p>gunmetal</p>
      </div>
    <div class="card-section bg-gunmetal-50"><strong>50</strong></div>
    <div class="card-section bg-gunmetal-100"><strong>100</strong></div>
    <div class="card-section bg-gunmetal-200"><strong>200</strong></div>
    <div class="card-section bg-gunmetal-300"><strong>300</strong></div>
    <div class="card-section bg-gunmetal-400"><strong>400</strong></div>
    <div class="card-section bg-gunmetal-500"><strong>500</strong></div>
    <div class="card-section bg-gunmetal-600"><strong>600</strong></div>
    <div class="card-section bg-gunmetal-700 white"><strong>700</strong></div>
    <div class="card-section bg-gunmetal-800 white"><strong>800</strong></div>
    <div class="card-section bg-gunmetal-900 white"><strong>900</strong></div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <div class="card-section">
        <p>gray</p>
      </div>
    <div class="card-section bg-gray-50"><strong>50</strong></div>
    <div class="card-section bg-gray-100"><strong>100</strong></div>
    <div class="card-section bg-gray-200"><strong>200</strong></div>
    <div class="card-section bg-gray-300"><strong>300</strong></div>
    <div class="card-section bg-gray-400"><strong>400</strong></div>
    <div class="card-section bg-gray-500"><strong>500</strong></div>
    <div class="card-section bg-gray-600"><strong>600</strong></div>
    <div class="card-section bg-gray-700 white"><strong>700</strong></div>
    <div class="card-section bg-gray-800 white"><strong>800</strong></div>
    <div class="card-section bg-gray-900 white"><strong>900</strong></div>
    </div>
  </div>

</div>



# Typography

This design uses Theinhardt for headings and paragraph text.

---

## Headings

Headings are used to denote different sections of content, usually consisting of related paragraphs and other HTML elements. They range from h1 to h6 and should be styled in a clear hierarchy (i.e., largest to smallest)

---

## Paragraphs

Paragraphs are groups of sentences, each with a lead (first sentence) and transition (last sentence). They are block level elements, meaning they stack vertically when repeated. Use them as such.

---

<h1>Heading Level 1</h1>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h2>Heading Level 2</h2>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h3>Heading Level 3</h3>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h4>Heading Level 4</h4>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h5>Heading Level 5</h5>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h6>Heading Level 6</h6>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

---
## Utility Classes

#### Font T-Shirt sizes 
* XSmall `fs-xs` 
* Small `fs-s` 
* Base `fs-base` 
* Medium `fs-m` 
* Large `fs-l`

#### Ellipsis

Add `.ellipsis` to overflow a long text element with an ellipsis.

The text must be contained inside an element with a defined width, like a `.columns` div.

```html_example
<div class="row">
  <div class="small-3 columns">
    <div class="card">
      <img src="img/saturn.jpg">
      <p class="ellipsis">This is a really long text field and it definitely won't fit on this card.</p>
    </div>
  </div>
</div>
```



# Buttons

## Sizes

```html
<a href="#" class="large button">.large .button</a>
<a href="#" class="button">.button</a>
<a href="#" class="small button">.small .button</a>
<a href="#" class="tiny button">.tiny .button</a>
<a href="#" class="icon button"><i class="material-icons">face</i></a>
```

<a href="#" class="large button">.large .button</a>
<a href="#" class="button">.button</a>
<a href="#" class="small button">.small .button</a>
<a href="#" class="tiny button">.tiny .button</a>
<a href="#" class="icon button">.icon .button</a>
<a href="#" class="icon button"><i class="material-icons">face</i></a>
<a href="#" class="icon button"><i class="material-icons">motorcycle</i></a>
<a href="#" class="icon button"><i class="material-icons">help_outline</i></a>
<a href="#" class="icon button"><i class="material-icons">favorite</i></a>
<a href="#" class="icon button"><i class="material-icons">close</i></a>
<a href="#" class="icon button"><i class="material-icons">done</i></a>

---
## Colors

Foundation comes the following classes for button colors:

<div class="row small-up-2 medium-up-7">
  <!-- .primary -->
  <div class="columns">
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded primary button">.primary</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded primary-light button">.primary-light</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded primary-transparent button">.primary-transparent</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded disabled primary button">.primary .disabled</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow primary button">.primary .hollow</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow disabled primary button">.primary .hollow .disabled</a></div></div>
  </div>
  <!-- .secondary -->
  <div class="columns">
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded secondary button">.secondary</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded secondary-light button">.secondary-light</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded secondary-transparent button">.secondary-transparent</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded disabled secondary button">.secondary .disabled</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow secondary button">.secondary .hollow</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow disabled secondary button">.secondary .hollow .disabled</a></div></div>
  </div>
  <!-- .alert -->
  <div class="columns">
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded alert button">.alert</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded alert-light button">.alert-light</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded alert-transparent button">.alert-transparent</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded disabled alert button">.alert .disabled</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow alert button">.alert .hollow</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow disabled alert button">.alert .hollow .disabled</a></div></div>
  </div>
  <!-- .warning -->
  <div class="columns">
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded warning button">.warning</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded warning-light button">.warning-light</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded warning-transparent button">.warning-transparent</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded disabled warning button">.warning .disabled</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow warning button">.warning .hollow</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow disabled warning button">.warning .hollow .disabled</a></div></div>
  </div>
  <!-- .success -->
  <div class="columns">
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded success button">.success</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded success-light button">.success-light</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded success-transparent button">.success-transparent</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded disabled success button">.success .disabled</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow success button">.success .hollow</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow disabled success button">.success .hollow .disabled</a></div></div>
  </div>
  <!-- .black-button -->
  <div class="columns">
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded black-button button">.black-button</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded black-button-light button">.black-button-light</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded black-button-transparent button">.black-button-transparent</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded disabled black-button button">.black-button .disabled</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow black-button button">.black-button .hollow</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow disabled black-button button">.black-button .hollow .disabled</a></div></div>
  </div>
  <!-- .white-button -->
  <div class="columns bg-gray-900">
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded white-button button">.white</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded white-button-light button">.white-light</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded white-button-transparent button">.white-transparent</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded disabled white-button button">.white .disabled</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow white-button button">.white .hollow</a></div></div>
    <div class="row mb-s"><div class="columns"><a href="#" class="expanded hollow disabled white-button button">.white .hollow .disabled</a></div></div>
  </div>
</div>

```html
<a href="#" class="primary button">.primary</a>
<a href="#" class="primary-light button">.primary-light</a>
<a href="#" class="expanded disabled primary button">.primary .disabled</a>
<a href="#" class="primary hollow button">.primary .hollow</a>
<a href="#" class="primary hollow disabled button">.primary .hollow .disabled</a>
```
Append `-light` to the Foundation color classes to make the button lighter.

---

## Variants

### Pills

Pill buttons extend base buttons, but have a smaller padding. They are intended for use in forms.

```html_example
<a href="#" class="pill button">.pill</a>
<a href="#" class="secondary pill button">.secondary .pill</a>
<a href="#" class="alert hollow pill button">.alert .hollow .pill</a>
<a href="#" class="warning-light pill button">.warning-light .pill</a>
<a href="#" class="success disabled pill button">.success .disabled .pill</a>
```

---

### Icon Buttons

Icon buttons extend hollow buttons, but only show an outline on hover. They are intended for use in action bars.


Use `.fill` to set the background color.

```html_example
<button class="secondary icon button"><span class="material-icons">add</span></button>
<button class="primary icon button"><span class="material-icons">more_horiz</span></button>
<button class="alert icon button"><span class="material-icons">close</span></button>
<button class="success icon button"><span class="material-icons">done</span></button>
<button class="warning icon fill button"><span class="material-icons">lightbulb_outline</span></button>
```

### Pill Groups

Following Material Design's [guidelines on Toggle Buttons](https://material.io/guidelines/components/buttons.html#buttons-toggle-buttons), avoid using Pill Groups when there are fewer than three options.

Use the `.active` class to denote which is selected.

```html
<div class="row">
  <div class="small-6 columns">
    <label>Price Range</label>
    <div class="row pill-group price-range">
      <!-- Data Point Buttons-->
      <a class="columns small-4 pill button mb-0">Low</a>
      <a class="columns small-4 pill button mb-0">Medium</a>
      <a class="columns small-4 pill active button mb-0">High</a>
    </div>
    <label>Ice Cream Flavor</label>
    <div class="row pill-group ice-cream">
      <!-- Data Point Buttons-->
      <a class="columns small-3 pill button mb-0">Vanilla</a>
      <a class="columns small-3 pill button mb-0">Chocolate</a>
      <a class="columns small-3 pill active button mb-0">Strawberry</a>
      <a class="columns small-3 pill button mb-0">Rocky Road</a>
    </div>
  </div>
</div>
```
<div class="row">
  <div class="small-6 columns">
    <label>Price Range</label>
    <div class="row pill-group price-range">
      <!-- Data Point Buttons-->
      <a class="columns small-4 pill button mb-0">Low</a>
      <a class="columns small-4 pill button mb-0">Medium</a>
      <a class="columns small-4 pill active button mb-0">High</a>
    </div>
    <label>Ice Cream Flavor</label>
    <div class="row pill-group ice-cream">
      <!-- Data Point Buttons-->
      <a class="columns small-3 pill button mb-0">Vanilla</a>
      <a class="columns small-3 pill button mb-0">Chocolate</a>
      <a class="columns small-3 pill active button mb-0">Strawberry</a>
      <a class="columns small-3 pill button mb-0">Rocky Road</a>
    </div>
  </div>
</div>



# Images
## Aspect Ratios - Responsive
To display images that are responsize while locking their aspect ratios, use background images on divs with the following classes:

`.img-square` - 1:1 aspect  
`.img-standard` - 4:3 aspect  
`.img-gold` - Golden ratio aspect  
`.img-wide` - 16:9 aspect  
`.img-half` - 2:1 aspect  

```html_example
<div class="row small-up-1 medium-up-3 large-up-5 mb-s">
  <div class="column">
    <div class="img-square" style="background-image: url('https://architizer-prod.imgix.net/media/1495726376799-Product_Slider_2048x2048.jpg?auto=format,compress&amp;cs=strip&amp;fit=crop&amp;q=60&amp;w=520')"></div>
  </div>
  <div class="column">
    <div class="img-standard" style="background-image: url('https://architizer-prod.imgix.net/media/1495726376799-Product_Slider_2048x2048.jpg?auto=format,compress&amp;cs=strip&amp;fit=crop&amp;q=60&amp;w=520')"></div>
  </div>
  <div class="column">
    <div class="img-gold" style="background-image: url('https://architizer-prod.imgix.net/media/1495726376799-Product_Slider_2048x2048.jpg?auto=format,compress&amp;cs=strip&amp;fit=crop&amp;q=60&amp;w=520')"></div>
  </div>
  <div class="column">
    <div class="img-wide" style="background-image: url('https://architizer-prod.imgix.net/media/1495726376799-Product_Slider_2048x2048.jpg?auto=format,compress&amp;cs=strip&amp;fit=crop&amp;q=60&amp;w=520')"></div>
  </div>
  <div class="column">
    <div class="img-half" style="background-image: url('https://architizer-prod.imgix.net/media/1495726376799-Product_Slider_2048x2048.jpg?auto=format,compress&amp;cs=strip&amp;fit=crop&amp;q=60&amp;w=520')"></div>
  </div>
</div>
```
---
## Avatars
These are ADK Avatars  

`.avatar` - Standard avatar  
`.avatar.small`  
`.avatar.large`  
`.avatar.float-right` - Changes  spacing from right side to left  

```html_example
<div class="row mb-s">
  <div class="shrink columns">
    <img class="avatar small" src="https://architizer-prod.imgix.net/media/1466174102182parsa-headshot-sat.JPG?auto=format,compress&cs=strip&fit=crop&q=60&w=200">
    <img class="avatar" src="https://architizer-prod.imgix.net/media/1466174102182parsa-headshot-sat.JPG?auto=format,compress&cs=strip&fit=crop&q=60&w=200">
    <img class="avatar large" src="https://architizer-prod.imgix.net/media/1466174102182parsa-headshot-sat.JPG?auto=format,compress&cs=strip&fit=crop&q=60&w=200">
  </div>
</div>
<div class="row mb-s">
  <div class="shrink columns">
    <div class="avatar small"><span class="initials">PK</span></div>
    <div class="avatar"><span class="initials">PK</span></div>
    <div class="avatar large"><span class="initials">PK</span></div>
  </div>
</div>
```
---
## Thumbnails
When creating thumbnails in series, such as on product cards or modals, place the images inside thumbnail rows instead of the regular grid rows.

`row thumbnails-up-[n]` - Add this class to what will be the row of the thumbnails. It follows the normal grid's naming convention for how many columns should be inside of it. `n` can be a number from 2-6; you shouldn't ever need any more than 6 thumbnails in series, and try to use an even number of columns. 

`thumb-col` - Add this class to the thumbnails column itself, and add the image inside of it.

## Thumbnail Rows
```html_example
<div class="row">
  <div class="small-12 medium-4 columns">
    <div class="row thumbnails-up-2">
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
    </div>
    <div class="row thumbnails-up-4">
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
    </div>
    <div class="row thumbnails-up-6">
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
      <div class="thumb-col">
        <img class="thumbnail" src="/docs/img/table.jpg" alt="Product">
      </div>
    </div>
  </div>
</div>
```
---
## Orbit Galleries
[Foundation's Orbit](http://foundation.zurb.com/sites/docs/orbit.html) should be used to build image galleries.

*Note:* When building orbit galleries inside modals, only ever feed images that have the same height so that the modal does not resize. Use Imgix. 

**Helper Classes**  
`.orbit-bullets.right` - Position bullets on right (centered by default)  
`.orbit-bullets.right` - Position bullets on left (centered by default)  
`.orbit-caption.center` - Center the caption text (left by default)  

```html_example
<!-- Gallery -->
<div class="row">
  <div class="small-4 small-centered columns">
    <div class="orbit callout" role="region" aria-label="Product Images" data-orbit data-auto-play=false>
      <ul class="orbit-container">
        <button class="orbit-previous"><span class="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
        <button class="orbit-next"><span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;</button>
        <li class="is-active orbit-slide">
          <img class="orbit-image" src="/docs/img/placeholder-4:3.png" alt="Space">
          <figcaption class="orbit-caption"><a href="#">Download</a></figcaption>
        </li>
        <li class="orbit-slide">
          <img class="orbit-image" src="/docs/img/placeholder-16:9.png" alt="Space"><a>
         </a> <figcaption class="orbit-caption"><a href="#">Download</a></figcaption>
        </li>
        <li class="orbit-slide">
          <img class="orbit-image" src="/docs/img/placeholder-4:3.png" alt="Space">
          <figcaption class="orbit-caption"><a href="#">Download</a></figcaption>
        </li>
        <li class="orbit-slide">
          <img class="orbit-image" src="/docs/img/placeholder-4:3.png" alt="Space">
          <figcaption class="orbit-caption"><a href="#">Download</a></figcaption>
        </li>
      </ul>
      <nav class="orbit-bullets left">
        <!-- Bullets -->
        <button class="is-active" data-slide="0"><span class="show-for-sr">First slide details.</span><span class="show-for-sr">Current Slide</span></button>
        <button data-slide="1"><span class="show-for-sr">Second slide details.</span></button>
        <button data-slide="2"><span class="show-for-sr">Third slide details.</span></button>
        <button data-slide="3"><span class="show-for-sr">Fourth slide details.</span></button>
      </nav>
    </div>
  </div>
</div>
```



# UI

## Top Bar

The top bar is the main header on Architizer.

```html_example
<!-- Respopnsive Top Bar -->
<div class="title-bar" data-responsive-toggle="responsive-menu" data-hide-for="medium">
  <button type="button" data-toggle><i class="material-icons white">menu</i></button>
  <div class="title-bar-title"><span class="architizer-glyph white">C</span></div>
</div>
<!-- Top Bar -->
<div class="top-bar" id="responsive-menu">
  <div class="top-bar-left">
    <ul class="vertical medium-horizontal menu" data-dropdown-menu>
      <li class="hide-for-small-only"><a><object class="nav-logo" type="image/svg+xml" data="/docs/logo/source-logo.svg">Architizer Source</object></a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Brands</a></li>
      <li class="active"><a href="#">Source</a></li>
    </ul>
  </div>
  <div class="top-bar-right">
    <ul class="dropdown menu" data-dropdown-menu>
      <li>
        <a href="#" class="black">Rem Koolhaas</a>
        <ul class="menu vertical">
          <li><a href="#">Your Profile &amp; Collections</a></li>
          <li><a href="#"><i class="material-icons">work</i> OMA</a></li>
          <li><a href="#">Account Settings</a></li>
          <li><a href="#">Sign Out</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
```
---

## Action Bars

Action Bars are title bars with other functionality inside them.

```html_example
<div class="actionbar">
  <!-- Left: Data -->
  <div class="row align-middle">
    <div class="small-12 large-expand columns">
      <!-- Current View Title -->
      <div class="row">
        <div class="columns">
          <h3>Project Title</h3>
        </div>
      </div>
    </div>
    <!-- Right: Buttons -->
    <div class="columns shrink">
      <ul class="menu">
        <li><a>Searches</a></li>
        <li class="active"><a>Messages</a></li>
        <li><a>Details</a></li>
      </ul>
    </div>
  </div>
</div>
```
---

## Cards
Card elements are modules that can be used across our UI, and are currently used for the most part in our conversation feed. 


### Classes and Usage
The top level class for creating card elements is `.card`.
- `.card.clickable` - Add "clickable" to a card if it is an interactive element.
- `.card.has-notification-dot` – A red notification dot is added to the top left corner of the card.
- `.card .card-button` - This is our old style card action, which was a button embedded into the card itself. Used when cards are not in the context of a grid and are not clickable, eg. in the message thread.
- `.card .caption` - To be used inside card headers to show the status or type of a card, if it's a product.

- `.card.responsive-image` - Add to cards built using responsive `.img-[ratio]` images to get rid of padding on `.card` and add margin on `.card-section`   

Refer to [Foundation's Card Documentation](http://foundation.zurb.com/sites/docs/card.html) for all card options.

### Card Types and Overlays
To overlay information over card images, `.image-overlay-info` to the `.img-[ratio]` div.  
Then simply add an empty `.overlay` div inside the image, as well as a `.info` div with the content to be overlayed.  
This is currently used on Project cards to show more information about what's happening inside of it.  
  
The examples below are the main image-based card types on Architizer. 

**Project Cards** - Displays project title and phase with edit button. `-wide` (16:9) image ratio w/ information on hover.  
**Search Cards** - Displays search title and # of products inside. Mosaic of floating product images as card content.  
**Product Cards** - Displays product and brand names (note smaller type size) with product action button. `-standard` (4:3) image ratio displaying product image and creator info on hover overlay.
**Responsive Search Cards** - Same content as search card above but without the fixed width.
**Responsive Product Cards** - Displays the product name, brand name, PRO and verified badges (if available) and action button.


```html_example
<div class="row small-up-1 medium-up-2 large-up-3">
  <div class="column">
    <!-- Card 1 - Project Card -->
    <div class="card clickable responsive-image">
    <!-- Image -->
      <div class="img-wide image-overlay-info" style="background-image: url('https://architizer-prod.imgix.net/media/1494960959876-Dig-Inn-171646-1.jpg?auto=format,compress&cs=strip&fit=crop&q=60&w=520')">
        <div class="overlay"></div>
        <div class="info">
          <div class="row align-middle collapse" style="height: 100%;">
            <div class="column">
              <div class="row column">
                <h5>An Education Center in UK</h5>
              </div>
              <div class="row collapse mt-s mb-base">
                <div class="small-4 columns">
                  <h2><strong>48</strong></h2>
                  <h4>Products</h4>
                </div>
                <div class="small-4 columns">
                  <h2><strong>22</strong></h2>
                  <h4>Searches</h4>
                </div>
                <div class="small-4 columns">
                  <h2><strong>61</strong></h2>
                  <h4>Messages</h4>
                </div>
              </div>
              <!-- Team -->
              <div class="row column">
                <img class="avatar small" src="https://architizer-prod.imgix.net/media/1496789677388Thomas.jpg?auto=format,compress&cs=strip&fit=crop&q=60&w=520">
                <div class="avatar small bg-blue-300"><span class="initials">P</span></div>
                <div class="avatar small bg-green-300"><span class="initials">S</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Info -->
      <div class="card-section">
        <div class="row align-middle mt-s">
          <div class="columns">
            <h3 class="ellipsis">Project Card</h3>
            <span class="fs-s">Construction Documents</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="column">
    <!-- Card 2 - Multi Image Search Card -->
    <div class="card multi-image clickable responsive-image">
      <!-- Image -->
      <div class="img-standard image-overlay-info">
        <div class="image-items-container">
          <div class="image-item" style="background-image: url('https://architizer-prod.imgix.net/media/1495726376799-Product_Slider_2048x2048.jpg?auto=format,compress&cs=strip&fit=crop&q=60&w=520')">
          </div>
          <div class="image-item" style="background-image: url('https://architizer-prod.imgix.net/media/1495726376799-Product_Slider_2048x2048.jpg?auto=format,compress&cs=strip&fit=crop&q=60&w=520')">
          </div>
          <div class="image-item" style="background-image: url('https://architizer-prod.imgix.net/media/1495726376799-Product_Slider_2048x2048.jpg?auto=format,compress&cs=strip&fit=crop&q=60&w=520')">
          </div>
          <div class="image-item" style="background-image: url('https://architizer-prod.imgix.net/media/1495726376799-Product_Slider_2048x2048.jpg?auto=format,compress&cs=strip&fit=crop&q=60&w=520')">
          </div>
          <div class="image-item" style="background-image: url('https://architizer-prod.imgix.net/media/1495726376799-Product_Slider_2048x2048.jpg?auto=format,compress&cs=strip&fit=crop&q=60&w=520')">
          </div>
        </div>
        <div class="overlay"></div>
        <div class="info" style="text-align: center;">
          <div class="row align-middle collapse" style="height: 100%;">
            <div class="column">
              <div class="row mb-xs">
                <div class="column">
                  <h5>Added by</h5>
                </div>
              </div>
              <!-- Avatar -->
              <div class="row mb-xs">
                <div class="column">
                  <img class="avatar large" src="https://architizer-prod.imgix.net/media/1496789677388Thomas.jpg?auto=format,compress&cs=strip&fit=crop&q=60&w=520">
                </div>
              </div>
              <!-- User Name -->
              <div class="row">
                <div class="columns align-center">
                  <h4><strong>Thomas Tachibana</strong></h4>
                </div>
              </div>
              <!-- User Role -->
              <div class="row">
                <div class="columns align-center">
                  <h5>Project Team Member</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Info -->
      <div class="card-section">
        <div class="row align-middle">
          <div class="small-10 columns pr-s">
            <!-- Product Name -->
            <div class="row">
              <strong class="ellipsis" title="Custom Metal Chair">Search Card</strong>
            </div>
            <!-- Brand Name -->
            <div class="row align-middle">
              <div class="columns shrink fs-s gray pr-0" style="max-width: 85%">
                <p class="mb-0 ellipsis" title="Products">5 Products</p>
              </div>
              <div class="columns pl-xxs">
                <span class="architizer-glyph blue-500 pl-0">&nbsp;</span>
              </div>
            </div>
          </div>
          <!-- Edit -->
          <div class="small-2 columns text-right">
            <a class="secondary icon hollow button"><i class="material-icons">edit</i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="column">
    <!-- Card 3 - Product Card-->
    <div class="card clickable responsive-image">
      <!-- Image -->
      <div class="img-standard image-overlay-info" style="background-image: url('https://architizer-prod.imgix.net/media/1495726376799-Product_Slider_2048x2048.jpg?auto=format,compress&cs=strip&fit=crop&q=60&w=520')">
        </div>
      <!-- Info -->
      <div class="card-section">
        <div class="row">
          <!-- Response Marking -->
          <div class="columns shrink">
            <span class="caption red">In Review</span>
          </div>
        </div>
        <div class="row align-middle">
          <div class="small-10 columns pr-s">
            <!-- Product Name -->
            <div class="row">
              <strong class="ellipsis" title="Custom Metal Chair">Product Card</strong>
            </div>
            <!-- Brand Name -->
            <div class="row align-middle">
              <div class="columns shrink fs-s gray pr-0" style="max-width: 85%">
                <p class="mb-0 ellipsis" title="Bend Goods">Bend Goods</p>
              </div>
              <div class="columns pl-xxs">
                <span class="architizer-glyph blue-500 pl-0">&nbsp;</span>
              </div>
            </div>
          </div>
          <!-- Shortlist -->
          <div class="small-2 columns" style="white-space: nowrap">
            <div class="float-right">
              <a class="button tiny secondary-light hover-bg-green-500""><span class="material-icons fs-base">done</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="columns small-4">
    <!-- Card 4 - Responsive Search Card (Multi-Image) -->
    <div class="card multi-image responsive-image clickable">
      <!-- Card Image -->
      <div class="card-section">
        <div class="card-multi-image card-multi-image-no-margin">
          <div class="image-items-container pb-0">
            <div class="image-item" style="background-image: url('https://architizer-prod.imgix.net/media/1498657209559-duchateau_chateau_02.png?auto=format,compress&cs=strip&fit=crop&q=60&w=520');"></div>
            <div class="image-item" style="background-image: url('https://architizer-prod.imgix.net/media/1498657209559-duchateau_chateau_02.png?auto=format,compress&cs=strip&fit=crop&q=60&w=520');"></div>
            <div class="image-item" style="background-image: url('https://architizer-prod.imgix.net/media/1498657209559-duchateau_chateau_02.png?auto=format,compress&cs=strip&fit=crop&q=60&w=520');"></div>
            <div class="image-item" style="background-image: url('https://architizer-prod.imgix.net/media/1498657209559-duchateau_chateau_02.png?auto=format,compress&cs=strip&fit=crop&q=60&w=520');"></div>
            <div class="image-item" style="background-image: url('https://architizer-prod.imgix.net/media/1498657209559-duchateau_chateau_02.png?auto=format,compress&cs=strip&fit=crop&q=60&w=520');"></div>
          </div>
        </div>
      </div>
      <!-- Card Content -->
      <div class="card-section">
        <div class="row align-middle">
          <!-- Name -->
          <div class="small-10 columns">
            <!-- Product Name -->
            <div class="row">
              <strong class="ellipsis">Product Name</strong>
            </div>
            <div class="row">
              <!-- Brand Name -->
              <div class="columns shrink subtitle fs-s ellipsis gray">12 Products</div>
            </div>
          </div>
          <!-- Shortlist checkmark button -->
          <div class="small-2 columns"
               style="white-space: nowrap;">
            <div class="float-right">
              <a class="button tiny secondary hollow"
                 tooltip="Shortlist">
                <span class="material-icons">edit</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="columns small-4">
    <!-- Card 5 - Responsive Product Card -->
    <div class="card responsive-image clickable">
      <!-- Card Image -->
      <div class="img-standard"
           style="background-image: url('https://architizer-prod.imgix.net/media/1498657209559-duchateau_chateau_02.png?auto=format,compress&cs=strip&fit=crop&q=60&w=520');">
      </div>
      <!-- Card Content -->
      <div class="card-section">
        <div class="row align-middle">
          <div class="small-10 columns">
            <!-- Product Request Name -->
            <div class="row">
              <strong class="ellipsis">Product Request Name</strong>
            </div>
            <div class="row">
              <!-- Brand Name -->
              <!-- Brand name column width needs to be calculated so that the addition of the PRO badge doesn't cause a column break -->
              <div class="columns shrink subtitle fs-base ellipsis pr-xs"
                   style="max-width: calc(100% - 55px);">Duravit</div>
              <div class="columns small-3"
                   style="min-width: 55px;">
                <!-- PRO badge width is fixed at 55px so that brand name column can be calculated accordingly -->
                <div class="row align-middle">
                  <!-- Verified Badge -->
                  <div class="columns shrink pl-0 pr-xxs pb-xxxs">
                    <span class="verified">+</span>
                  </div>
                  <!-- Pro Badge -->
                  <div class="columns shrink pl-0 pb-xs">
                    <span class="pro">PRO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Shortlist checkmark button -->
          <div class="small-2 columns"
               style="white-space: nowrap;">
            <div class="float-right">
              <a class="button tiny secondary hover-bg-green-500 secondary-light shortlist-button"
                 tooltip="Shortlist">
                <span class="material-icons fs-base">check</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="columns small-4">
    <!-- Card 6 - Card with Top and Bottom Control -->
    <div class="card responsive-image">
      <!-- Card Image -->
      <div class="img-standard image-overlay-info" style="background-image: url('https://architizer-prod.imgix.net/media/1498657209559-duchateau_chateau_02.png?auto=format,compress&amp;cs=strip&amp;fit=crop&amp;q=60&amp;w=520');">
        <!-- Overlay -->
        <div class="overlay"></div>
        <div class="info p-0">
          <div class="row align-middle collapse">
            <div class="column">
              <!-- Top Control -->
              <div class="control top p-s">
                <div class="grid-x align-center">
                  <div class="cell shrink">
                    <button class="button tiny dark dark-transparent rounded-max pl-xs pr-xs">
                      <i class="material-icons">playlist_add</i> Collect
                    </button>
                  </div>
                </div>
              </div>
              <!-- Bottom Control -->
              <div class="control bottom p-s">
                <div class="grid-x align-center">
                  <button class="button tiny dark dark-transparent rounded-max pl-xs pr-xs">View</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

```

---

## Pro Badge

Pro badge is used across our products, and it indicates paying customers.
For the sake of convenience, here is the markup and css classes required to render it in any given context.

### Example
```html_example
<div class="row align-middle">
  <!-- Verified Badge -->
  <div class="columns shrink pt-xxxs pl-0 pr-xxs">
    <span class="verified">+
    </span>
  </div>
  <!--  Pro Badge -->
  <div class="columns shrink pl-0 pb-xxxs">
    <span class="pro">PRO</span>
  </div>
</div>
```

---

## BETA Badge

BETA badge is currently used in the Related Products grid header description, and can also be used for other new features that we are still evaluating or testing. It is applied as a class in conjunction with Foundation's `badge` class and has the same font height
and weight as the Pro badge.
For the sake of convenience, here is the markup and css classes required to render it in any given context.

### Example
```html_example
<!-- BETA badge -->
<div class="row align-middle">
  <div class="columns shrink pl-0 pr-0">
    <span class="beta">beta</span>
  </div>
</div>
```

---

## Tags

Tags are currently used in the Brand Profile sidebar and Related Products modal, and can be used for other features that require category tags. Tags are similar to pill buttons, but they do not have a border radius. For the sake of convenience, here is the markup and css classes required to render it in any given context.

### Example
```html_example
<div class="row">
  <div class="columns">
    <span class="tag">metal panels</span>
    <span class="tag">sheet panels</span>
    <span class="tag">steel fabrication</span>
    <span class="tag">bronze panels</span>
  </div>
</div>
```

---

## List Views & Items

List views are simple lists that take up 100% of parent element's height and create a minimal scrolling container for list items. Each list item contains a thumbnail, a title and a subtitle plus an optional Pro Badge. In the example below, the outermost div with the inline style of `height: 200px;` is only used to demonstrate the scrolling behavior of the list. 


### Example

#### With header

```html_example
<div style="height: 250px;">
  <div class="row list-view-header">
    <div class="columns list-view-header-inner">
      <h5>List View Title</h5>
      <hr>
    </div>
  </div>
  <ul class="list-view">
    <li class="list-item">
      <div class="row list-item-content align-middle">
        <div class="columns shrink list-item-image">
          <!-- Image is used as an inline `background-image` property -->
          <span 
            style="background-image:url('https://architizer-prod.imgix.net/media/mediadata/uploads/1514926429370-Barcelona_Gallery_2_EU.jpg?fit=crop&h=50&w=50')">
          </span>
        </div>
        <div class="columns pl-0">
          <div class="row">
            <!-- List Item  Title -->
            <div class="columns ellipsis small-12 title">
              Exterior Siding - Accoya
            </div>
          </div>
          <div class="row">
            <!-- List Item  Subtitle -->
            <div class="columns shrink subtitle ellipsis">
              Delta Millworks
            </div>
            <div class="columns small-2 pro-badge">
              <div class="row">
                <!-- Verified Badge -->
                  <div class="columns shrink pl-0 pr-xxs">
                    <span class="verified">+</span>
                  </div>
                  <!--  Pro Badge -->
                  <div class="columns shrink pl-0">
                    <span class="pro">PRO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </li>
    <li class="list-item">
      <div class="row list-item-content align-middle">
        <div class="columns shrink list-item-image">
          <!-- Image is used as an inline `background-image` property -->
          <span 
            style="background-image:url('https://architizer-prod.imgix.net/media/mediadata/uploads/1514926429370-Barcelona_Gallery_2_EU.jpg?fit=crop&h=50&w=50')">
          </span>
        </div>
        <div class="columns pl-0">
          <div class="row">
            <!-- List Item  Title -->
            <div class="columns ellipsis small-12 title">
              Exterior Siding - Accoya
            </div>
          </div>
          <div class="row">
            <!-- List Item  Subtitle -->
            <div class="columns shrink subtitle ellipsis">
              Delta Millworks
            </div>
            <div class="columns small-2 pro-badge">
              <div class="row">
                <!-- Verified Badge -->
                  <div class="columns shrink pl-0 pr-xxs">
                    <span class="verified">+</span>
                  </div>
                  <!--  Pro Badge -->
                  <div class="columns shrink pl-0">
                    <span class="pro">PRO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </li>
    <li class="list-item">
      <div class="row list-item-content align-middle">
        <div class="columns shrink list-item-image">
          <!-- Image is used as an inline `background-image` property -->
          <span 
            style="background-image:url('https://architizer-prod.imgix.net/media/mediadata/uploads/1514926429370-Barcelona_Gallery_2_EU.jpg?fit=crop&h=50&w=50')">
          </span>
        </div>
        <div class="columns pl-0">
          <div class="row">
            <!-- List Item  Title -->
            <div class="columns ellipsis small-12 title">
              Exterior Siding - Accoya
            </div>
          </div>
          <div class="row">
            <!-- List Item  Subtitle -->
            <div class="columns shrink subtitle ellipsis">
              Delta Millworks
            </div>
            <div class="columns small-2 pro-badge">
              <div class="row">
                <!-- Verified Badge -->
                  <div class="columns shrink pl-0 pr-xxs">
                    <span class="verified">+</span>
                  </div>
                  <!--  Pro Badge -->
                  <div class="columns shrink pl-0">
                    <span class="pro">PRO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </li>
  </ul>
</div>
```
<br>

#### Without header
Please note that if you don't include the list header `.list-view-header`, you must add `.no-header` class to the list element `.list-view`.

```html_example
<div style="height: 250px;">
  <ul class="list-view no-header">
    <li class="list-item">
      <div class="row list-item-content align-middle">
        <div class="columns shrink list-item-image">
          <!-- Image is used as an inline `background-image` property -->
          <span 
            style="background-image:url('https://architizer-prod.imgix.net/media/mediadata/uploads/1514926429370-Barcelona_Gallery_2_EU.jpg?fit=crop&h=50&w=50')">
          </span>
        </div>
        <div class="columns pl-0">
          <div class="row">
            <!-- List Item  Title -->
            <div class="columns ellipsis small-12 title">
              Exterior Siding - Accoya
            </div>
          </div>
          <div class="row">
            <!-- List Item  Subtitle -->
            <div class="columns shrink subtitle ellipsis">
              Delta Millworks
            </div>
            <div class="columns small-2 pro-badge">
              <div class="row">
                <!-- Verified Badge -->
                  <div class="columns shrink pl-0 pr-xxs">
                    <span class="verified">+</span>
                  </div>
                  <!--  Pro Badge -->
                  <div class="columns shrink pl-0">
                    <span class="pro">PRO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </li>
    <li class="list-item">
      <div class="row list-item-content align-middle">
        <div class="columns shrink list-item-image">
          <!-- Image is used as an inline `background-image` property -->
          <span 
            style="background-image:url('https://architizer-prod.imgix.net/media/mediadata/uploads/1514926429370-Barcelona_Gallery_2_EU.jpg?fit=crop&h=50&w=50')">
          </span>
        </div>
        <div class="columns pl-0">
          <div class="row">
            <!-- List Item  Title -->
            <div class="columns ellipsis small-12 title">
              Exterior Siding - Accoya
            </div>
          </div>
          <div class="row">
            <!-- List Item  Subtitle -->
            <div class="columns shrink subtitle ellipsis">
              Delta Millworks
            </div>
            <div class="columns small-2 pro-badge">
              <div class="row">
                <!-- Verified Badge -->
                  <div class="columns shrink pl-0 pr-xxs">
                    <span class="verified">+</span>
                  </div>
                  <!--  Pro Badge -->
                  <div class="columns shrink pl-0">
                    <span class="pro">PRO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </li>
    <li class="list-item">
      <div class="row list-item-content align-middle">
        <div class="columns shrink list-item-image">
          <!-- Image is used as an inline `background-image` property -->
          <span 
            style="background-image:url('https://architizer-prod.imgix.net/media/mediadata/uploads/1514926429370-Barcelona_Gallery_2_EU.jpg?fit=crop&h=50&w=50')">
          </span>
        </div>
        <div class="columns pl-0">
          <div class="row">
            <!-- List Item  Title -->
            <div class="columns ellipsis small-12 title">
              Exterior Siding - Accoya
            </div>
          </div>
          <div class="row">
            <!-- List Item  Subtitle -->
            <div class="columns shrink subtitle ellipsis">
              Delta Millworks
            </div>
            <div class="columns small-2 pro-badge">
              <div class="row">
                <!-- Verified Badge -->
                  <div class="columns shrink pl-0 pr-xxs">
                    <span class="verified">+</span>
                  </div>
                  <!--  Pro Badge -->
                  <div class="columns shrink pl-0">
                    <span class="pro">PRO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </li>
    <li class="list-item">
      <div class="row list-item-content align-middle">
        <div class="columns shrink list-item-image">
          <!-- Image is used as an inline `background-image` property -->
          <span 
            style="background-image:url('https://architizer-prod.imgix.net/media/mediadata/uploads/1514926429370-Barcelona_Gallery_2_EU.jpg?fit=crop&h=50&w=50')">
          </span>
        </div>
        <div class="columns pl-0">
          <div class="row">
            <!-- List Item  Title -->
            <div class="columns ellipsis small-12 title">
              Exterior Siding - Accoya
            </div>
          </div>
          <div class="row">
            <!-- List Item  Subtitle -->
            <div class="columns shrink subtitle ellipsis">
              Delta Millworks
            </div>
            <div class="columns small-2 pro-badge">
              <div class="row">
                <!-- Verified Badge -->
                  <div class="columns shrink pl-0 pr-xxs">
                    <span class="verified">+</span>
                  </div>
                  <!--  Pro Badge -->
                  <div class="columns shrink pl-0">
                    <span class="pro">PRO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </li>
    
  </ul>
</div>
```


---

## Modals

Modals are popup windows. They are based on Foundation [Reveal](http://foundation.zurb.com/sites/docs/reveal.html).

### Modal Classes
* `.header` - Header section for modal title
* `.footer` - Footer section for modal buttons

Use Foundation [Flex Grid](http://foundation.zurb.com/sites/docs/flex-grid.html) classes when building content inside of modals.

Refer to the code below to structure a modal or start with the modal template in [`templates/modal.html`](/templates/modal.html).

### Example
```html_example
<!-- Open Modal Button-->
<a class="button" data-open="exampleModal1">Click me for a modal</a>

<!-- Modal Content -->
<div class="reveal" id="exampleModal1" data-reveal>
  <!-- Header -->
  <div class="header">
    <div class="row">
      <!-- Modal Title -->
      <div class="columns">
        <h4><strong>Product Name</strong></h4>
      </div>
      <!-- Close Button -->
      <div class="columns shrink">
        <button class="close-button" data-close aria-label="Close modal" type="button">
          <span class="material-icons" aria-hidden="true">close</span>
        </button>
      </div>
    </div>
  </div>
  <!-- Attachments -->
  <div class="row thumbnails-up-4">
    <div class="thumb-col">
      <img class="thumbnail" src="/docs/img/bear.gif" alt="Product">
    </div>
    <div class="thumb-col">
      <img class="thumbnail" src="/docs/img/bear.gif" alt="Product">
    </div>
    <div class="thumb-col">
      <img class="thumbnail" src="/docs/img/bear.gif" alt="Product">
    </div>
    <div class="thumb-col">
      <img class="thumbnail" src="/docs/img/bear.gif" alt="Product">
    </div>
  </div>
  <!-- Brand -->
  <div class="row">
    <div class="columns">
      <div class="media-object">
        <div class="media-object-section middle">
          <img class="thumbnail brand" src="/docs/img/bear.gif" alt="Product">
        </div>
        <div class="media-object-section main-section">
          <h5>Cubby Bear Manufacturing</h5>
          <span class="meta">Sent on January 4, 2017</span>
        </div>
      </div>
    </div>
  </div>
  <!-- Description -->
  <div class="row">
    <div class="columns">
      <h5 class="mb-xs"><strong>Description</strong></h5>
      <p>I'm really just a wonderful product inside of an even cooler modal. Puppy kitty ipsum dolor sit good dog roll over carrier tuxedo fish lol catz puppy kisses pet supplies meow scooby snacks meow mittens. Fido Rover lol catz yawn drool wag tail Fido food pet gate purr warm behavior kibble litter box ID tag. Roll Over house train chirp pet supplies shake polydactyl wet nose harness tabby biscuit gimme five Rover vaccine roll over licks nap parrot lol catz. Wins!</p>
    </div>
  </div>
  <!-- Metrics -->
  <div class="row mb-xxs">
    <div class="columns">
      <h5 class="mb-xs"><strong>Details</strong></h5>
      <div class="row small-up-4 collapse">
        <div class="column">
          <h5>1.00 – 2.00 USD</h5>
          <h6 class="subheader">Price Per Units</h6>
        </div>
        <div class="column">
          <h5>Two Weeks</h5>
          <h6 class="subheader">Lead Time</h6>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="columns">
      <a class="">View product on manufacturer's site</a>
    </div>
  </div>
  <!-- Footer (Buttons) -->
  <div class="footer">
    <div class="row align-center">
      <div class="small-3 columns">
        <button class="secondary hollow small expanded button" data-close type="button">Close</button>
      </div>
      <div class="small-3 columns">
        <button class="small expanded button" data-close type="button">Save</button>
      </div>
    </div>
  </div>
</div>
```
---

## Loading Spinners

```html_example
<div class="row align-middle">
  <div class="columns shrink"><div class="loading-spinner-s"></div></div>
  <div class="columns shrink"><div class="loading-spinner-m"></div></div>
  <div class="columns shrink"><div class="loading-spinner-l"></div></div>
</div>
```

---



# Utilities
Utilities are helper classes created to expose some rules properties and common values.

## Display
- Use `display-inline-block` or `inline-block` classes to get an inline-block display.
- Use `block` class to get a block display. 

---

## Positions
- Use `p-a` class to get an absolute position.
- Use `p-r` class to get a relative position.
- Use `p-f` class to get a fixed position.

---

## Width and Height
- Use `full-width` class to get 100% width.
- Use `full-height` class to get 100% height.

---

## Overflow
- Use `of-<value>` class to get a hidden overflow.
- Can be applied on individual axises using `of-x-<value>` and `of-y-<value>` for the x and y axises respectively.
- Values:
  - `hidden`
  - `scroll`
  - `visible`
  - `auto`

---

## Rounded
Use `rounded` class to get full roundness by 50% border-radius. 

---

## Radius Size
- Use `br-<size>` class to get border-radius.
- Sizes:
  - `0`: 0
  - `xs`: 1px
  - `s`: 2px
  - `base`: 4px
  - `m`: 6px
  - `l`: 8px
  - `xl`: 10px
  - `max`: 99rem

```html_example
<div class="row text-center">
  <div class="columns">
    <div class="pt-base pb-base bg-blue-50 br-0">br-0 </div>
  </div>
  <div class="columns">
    <div class="pt-base pb-base bg-blue-100 br-xs">br-xs</div>
  </div>
  <div class="columns">
    <div class="pt-base pb-base bg-blue-200 br-s">br-s</div>
  </div>
  <div class="columns">
    <div class="pt-base pb-base bg-blue-300 br-base">br-base</div>
  </div>
  <div class="columns">
    <div class="pt-base pb-base bg-blue-400 br-m">br-m</div>
  </div>
  <div class="columns">
    <div class="pt-base pb-base bg-blue-500 br-l">br-l</div>
  </div>
  <div class="columns">
    <div class="pt-base pb-base bg-blue-600 br-xl">br-xl</div>
  </div>
  <div class="columns">
    <div class="pt-base pb-base bg-blue-700 br-max">br-max</div>
  </div>
</div>
```

---

## Margin
- Use `m-auto` class to get auto margin on all edges.

---

## Font Size and Line Height
- Use `lh-<size>` class to get line-height.
- Use `fs-<size>` class to get font-size.
- Sizes:
  - `xs`: 0.512rem.
  - `s`: 0.8rem.
  - `base`: 1rem.
  - `m`: 1.25rem.
  - `l`: 1.5625rem.

---

## Link Underline
- Use `underline` class on `a` tag to get a blue underline.
- Use `<color>-under-line` class on `a` tag to get an underline that matches the selected color. 
- The underline is achevied by using a bottom border with .6 opacity in normal state and 1 on hover state.

---

## Mouse Cursors
- Use `cursor-<value>` class to get common mouse-cursor values.
- Values:
  - `none`
  - `not-allowed`
  - `pointer`
  - `help`
  - `wait`
  - `crosshair`

```html_example
<div class="row text-center">
  <div class="columns">
    <div class="p-base bg-gray-50 cursor-none">none</div>
  </div>
  <div class="columns">
    <div class="p-base bg-gray-50 cursor-not-allowed">not-allowed</div>
  </div>
  <div class="columns">
    <div class="p-base bg-gray-50 cursor-pointer">pointer</div>
  </div>
  <div class="columns">
    <div class="p-base bg-gray-50 cursor-help">help</div>
  </div>
  <div class="columns">
    <div class="p-base bg-gray-50 cursor-wait">wait</div>
  </div>
  <div class="columns">
    <div class="p-base bg-gray-50 cursor-crosshair">crosshair</div>
  </div>
</div>
```
---



# Forms

Use forms to allow users to interact with the site and provide information to the company.

---

## Elements of a Form

A form should be marked up using its default HTML properties. The ones we make use of include (in hierarchical order):

- Form
- Label
- Input
- Select
- Text area
- Button

---

## How to Use

Make forms great and easy to use with the following rules:

- Wrap checkboxes and radio buttons within labels for larger hit areas, and be sure to set the for, name, and id attributes for all applicable elements.
- Series of checkboxes and radio buttons below within a `<ul class="inline-list">`.
- Before selecting any set of fields to use for a required input, explore other options (e.g., radio buttons over select lists).

**Utilities**

`.no-h-resize` - Add this to textareas to prevent the user from resizing the element horizontally

`.no-v-resize` - Add this to textareas to prevent the user from resizing the element vertically

---

## Learn All About Forms

Check out the [Foundation Docs](http://foundation.zurb.com/sites/docs) to learn about how flexible our forms are for creating different layouts. It works perfectly with the grid to meet all your form needs.

---

## Form Layouts

Form elements in Foundation are styled based on their type attribute rather than a class. Inputs in Foundation have another major advantage — they are full width by default. That means that inputs will run as wide as the column that contains them. However, you have two options which make these forms extremely versatile:

- You can size inputs using column sizes, like `.medium-6`, `.small-6`.
- You can create row elements inside your form and use columns for the form, including inputs, labels and more. Rows inside a form inherit some special padding to even up input spacing.

---

## Form Example

```html_example
<form>
  <div class="row">
    <div class="large-12 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
    <div class="large-6 columns">
      <div class="row collapse">
        <label>Label</label>
        <div class="input-group">
          <input class="input-group-field" type="text" placeholder="placeholder">
          <span class="input-group-label">.com</span>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Label</label>
      <div class="input-group">
          <span class="input-group-label icon"><span class="material-icons">search</span></span>
        <input class="input-group-field" type="text" placeholder="Search...">
      </div>
    </div>
    <div class="large-6 columns">
      <div class="row collapse">
        <label>Label</label>
        <div class="input-group">
          <span class="input-group-label icon"><span class="material-icons">location_on</span></span>
          <input class="input-group-field" type="text" placeholder="Enter your location">
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Select Box</label>
      <select>
        <option value="good">Good</option>
        <option value="better">Better</option>
        <option value="best">Best</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Choose Your Favorite</label>
      <input type="radio" name="radio1" value="radio1" id="radio1"><label for="radio1">Red</label>
      <input type="radio" name="radio2" value="radio2" id="radio2"><label for="radio2">Blue</label>
    </div>
    <div class="large-6 columns">
      <label>Check these out</label>
      <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Textarea Label</label>
      <textarea placeholder="placeholder"></textarea>
    </div>
  </div>
</form>
```
---

## Minimal Forms  
"Minimal Fields" is the new styling for fields/forms that ADK is transitioning to. It was written based on [Material Design Fields](https://getmdl.io/components/index.html#textfields-section).

### Example

<div class="row align-left">
  <div class="small-12 medium-8 large-6 xlarge-4 columns">
    <form class="callout">
      <div class="row">
        <div class="columns">
          <div class="minimal-field floating-label">
            <input type="text" class="ng-empty">
            <label>What are you looking for?</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="columns">
          <div class="minimal-field floating-label">
            <select class="ng-empty">
              <option value=""></option>
              <option value="value">Starbuck</option>
              <option value="value">Hot Dog</option>
              <option value="value">Apollo</option>
            </select>
            <label>What kind of product is this?</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="columns">
          <div class="minimal-field floating-label">
            <textarea class="ng-empty" rows="4"></textarea>
            <label>What other information can you provide?</label>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="columns">
          <div class="minimal-field floating-label">
            <input type="text" class="ng-invalid ng-empty" />
            <label>What does an error look like?</label>
            <span ng-messages=""><span>This is what an error looks like.</span></span>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

### Usage

Add the classes `.minimal-field` and `.floating-label` to the parent element.

**The HTML within the parent element must be structured in the following order:**
1. Field (the input, select, or textarea element)
1. Label (a label element)
1. Errors (a span element with the ng-messages attribute set)

See the following examples below:

**Input**
```html
<div class="minimal-field floating-label">
  <!-- Field -->
  <input type="text" name="name" />
  <!-- Label -->
  <label>What are you looking for?</label>
  <!-- Errors -->
  <span ng-messages="YourCtrl.form['name'].$error">
    <span ng-message="required">Required</span>
    <span ng-message="maxlength">Please enter less than 60 characters</span>
  </span>
</div>
```

**Select**
```html
<div class="minimal-field floating-label">
  <!-- Select -->
  <select name="productType">
    <option value="Starbuck">Starbuck</option>
    <option value="Hot Dog">Hot Dog</option>
    <option value="Apollo">Apollo</option>
  </select>
  <!-- Label -->
  <label>What kind of product is this?</label>
  <!-- Errors -->
  <span ng-messages="YourCtrl.form['productType'].$error">
    <span ng-message="required">Required</span>
  </span>
</div>
```

**Textarea**
```html
<div class="minimal-field floating-label">
  <!-- Textarea -->
  <textarea rows="4" name="description"></textarea>
  <!-- Label -->
  <label>What other information can you provide?</label>
  <!-- Errors -->
  <span ng-messages="YourCtrl.form['description'].$error">
    <span ng-message="required">Required</span>
  </span>
</div>
```



# Tables
Tables are simple. We've got a few classes applied to set the styling and alignment of the cells. For all other table settings and classes, reference [Foundation's Table Documentation.](http://foundation.zurb.com/sites/docs/table.html)

Table cells may have plain text, links, buttons, and actions.

## Usage
Build a table using the `<table>` element. The following modifiers exist for table cells (`<td>`s).
- `td.action` - "Actions" in tables should be used when doing something within the current view, such as opening a modal. They look like small links. To create one, apply `.action` to the cell's `<td>` tag.
- `td.has-notification-dot` - A red notification dot is added to the center of the table cell.

```html
<td class="action"><a>Send Email</a></td>
```

When building tables, try to keep the action/button columns hugging the right side of the table. This improves readability when scanning tables with sparse data.

### Alignment
In columns:

- Buttons and actions should be centered
- Numbers should be aligned right
- Text should be aligned left

Apply `.centered`, `.left`, or `.right` to the cell tag.

Add `.inactive` to make a row appear inactive, such as on product rows that have been dismissed by an architect.

Add `.underline` to links that direct the user to external pages to keep these distinct from in-app links. 

### Example
```html_example
<div class="row expanded">
  <table class="hover">
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th width="140">Brand</th>
        <th width="200">Product Name</th>
        <th>Status</th>
        <th class="center" width="100">Outreach</th>
        <th class="center" width="100">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="has-notification-dot"></td>
        <td><a class="underline">Knoll</a></td>
        <td>Pollock Executive Chair</td>
        <td>Recommended</td>
        <td class="action"><a>Send Email</a></td>
        <td class="action"><a>View</a></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td><a class="underline">Herman Miller</a></td>
        <td>Aeron Chair</td>
        <td>In Review</td>
        <td class="action"><a>Send Email</a></td>
        <td class="action"><a>View</a></td>
      </tr>
      <tr class="inactive">
        <td>&nbsp;</td>
        <td><a class="underline">Steelcase</a></td>
        <td>Mesh Think Chair</td>
        <td>Dismissed</td>
        <td class="action"><a>Send Email</a></td>
        <td class="action"><a>View</a></td>
      </tr>
    </tbody>
  </table>
</div>
```




# Spacing and Scale


Design Kit has utility classes for applying margins and paddings to elements.

The classes are named using the format `{property}{side}-{size}`

Where *property* is one of:

* `m` - for classes that set `margin`
* `p` - for classes that set `padding`

Where *sides* is one of:

* `t` - for classes that set `margin-top` or `padding-top`
* `b` - for classes that set `margin-bottom` or `padding-bottom`
* `l` - for classes that set `margin-left` or `padding-left`
* `r` - for classes that set `margin-right` or `padding-right`
* blank - for classes that set a `margin` or `padding` on all 4 sides of the element

Where *size* is one of:

* `0` - for classes that eliminate the margin or padding by setting it to `0`
* `micro` - for classes that set the margin or padding to `$space-micro`
* `xxxs` - for classes that set the margin or padding to `$space-xxxs`
* `xxs` - for classes that set the margin or padding to `$space-xxs`
* `xs` - for classes that set the margin or padding to `$space-xs`
* `s` - for classes that set the margin or padding to `$space-s`
* `base` - for classes that set the margin or padding to `$space`
* `m` - for classes that set the margin or padding to `$space-m`
* `l` - for classes that set the margin or padding to `$space-l`
* `xl` - for classes that set the margin or padding to `$space-xl`
* `xxl` - for classes that set the margin or padding to `$space-xxl`
* `xxxl` - for classes that set the margin or padding to `$space-xxxl`

(You can add more sizes by adding entries to the `$sizes` Sass map variable in `_adk-spacing.scss`)


#### Example

```html_example
<button class="button p-0">.p-0</button>
<button class="button p-micro">.p-micro</button>
<button class="button p-xxs">.p-xxs</button>
<button class="button p-xs">.p-xs</button>
<button class="button p-s">.p-s</button>
<button class="button p-base">.p-base</button>
<button class="button p-m">.p-m</button>
<button class="button p-l">.p-l</button>
<button class="button p-xl">.p-xl</button>
<button class="button p-xxl">.p-xxl</button>
```

---

### Scale
Ideally, the styling of every element in our UI is controlled by a scalar system which gives all our pages and interface a sense of relationship and harmony. That means that by changing one number, the scale itself, the spacing of elements in relation to each other and the elements themselves will all change according to the system. By combining REMs, which reference font size of the root `html` element, the browser's font size, with a scale that dictates the relationship to the default font size, we are able to do this.

ADK uses a scale of 1.25 (Major Third) and is set by the `$scale` variable. Refer to [TypeScale](http://type-scale.com/) to play with different scales and see how the affect headings. These relationships are built of 1.25 scale (each subsequent number is multiplied by 1.25):

`0.134rem` `0.21rem` `0.328rem` `0.512rem` `0.8rem` `1rem` `1.25rem` `1.563rem` `1.953rem` `2.441rem` `3.05rem` etc…

Thus all of our spacing, font sizing, padding, etc. should be based on this scale. We've included t-shirt size variables that you should use to styling elements. **_Try not to hard-code pixel numbers_**.

These are the variables:
```
$space: 1rem; // 16px
$space-m: 1.25rem; // 20px
$space-l: 1.563rem; // 25px
$space-xl: 1.953rem; // 31.25px
$space-xxl: 2.441rem; // 39px
$space-xxxl: 3.05rem; // 48.8px
$space-s: 0.8rem; // 12.8px
$space-xs: 0.512rem; // 8.2px
$space-xxs: 0.328rem; // 5.2px
$space-xxxs: 0.21rem; // 3.4px
$space-micro: 0.134rem; // 2.1px
```

#### Reference

[Bootstrap Reference](https://v4-alpha.getbootstrap.com/utilities/spacing/)


---



# Extensions

Extensions are Architizer styles applied to third-party JavaScript/CSS libraries.

---
## Selectize

This is a [selectize](http://selectize.github.io/selectize.js/) element.

<input type="text" class="selectize"></input>

There are classes in `scss/_adk-selectize.scss` that affect the styling of this element.

We extend the default [`selectize.css`](https://github.com/selectize/selectize.js/blob/master/dist/css/selectize.css) with our `/scss/_adk-selectize.scss` file to overwrite default styles.

---

## Dropzone

This is a [Dropzone.js](http://dropzonejs.com) element.

<div id="dropzoneExample" action="file/" class="dropzone"></div>

There are classes in `scss/_adk-dropzone.scss` that affect the styling of this element.

We extend the default [`dropzone.scss`](https://github.com/enyo/dropzone/blob/master/src/dropzone.scss) with our `/scss/_adk-dropzone.scss` file to overwrite default styles.



# Templates

[Templates Directory](/templates/index.html)

