# XYZ documentation

## Sass Processor to use

[Mixture](http://mixture.io/) with [Sassaparilla](http://sass.fffunction.co/) boilerplate, the grid optimised and modified to match the Grid System

### Using media query and custom breakpoints

The assets/css/libs/_settings.scss file contains the main parameters that can contains the main settings, such as break points for media queries, color definitions, heading size settings (not used in this project).


```css
$mobile-portrait-max				: 479px;	// smart phones, portrait view max width
$mobile-landscape-min				: 480px;	// smart phones, landscape view min width
$mobile-landscape-max				: 599px;	// smart phones, landscape view max width
$phablet-min						: 600px;	// big phones min width
$phablet-max						: 767px;	// big phones max width
$tablet-min							: 768px;	// tablets min width
$tablet-max							: 991px;	// tablets min width
$laptop-min							: 992px;	// laptops min width
$laptop-max							: 1381px;	// laptops max width
$desktop							: 1382px;	// big desktop screens
$ie-fixed-vp						: 992px;    // Viewport for IE fixed width
```

These min and max values can be used in _.scss files to set different css values inline, not as separate media query. 
The @inline parameter accepts respond-to-min-max($min, $max) and respond-to-max($max) values. For example:

```css
.amq_structure_inner {
	width: 1280px;
	margin: auto;
	box-sizing: border-box;
	padding: 0 10px;
  @include respond-to-min-max($laptop-min, $laptop-max) {
    max-width: 960px;
    };
  @include respond-to-min-max($tablet-min, $tablet-max) {
    max-width: 100%;
    padding: 0 26px;
    };
  @include respond-to-min-max($mobile-landscape-min, $phablet-max) {
    max-width: 100%;
    padding: 0 26px;
    };
  @include respond-to-max($mobile-portrait-max) {
    min-width: 300px;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    font-size: 120%;
    };
}
```


## Grid System

Based on [csswizardry-grids](https://github.com/csswizardry/csswizardry-grids), customized for client needs.
You can find the grid at assets/css/libs/_grid.

There are a few extra additions to the csswizardry-grids system, that's what I'd like to share here. 

### Breakpoints

```css
$breakpoints: (
    'mobile' '(max-width: 479px)',
    'smart' '(min-width: 480px) and (max-width: 599px)',
    'phablet' '(min-width: 600px) and (max-width: 767px)',
    'lap' '(min-width: 480px) and (max-width: 767px)',
    'tablet' '(min-width: 768px) and (max-width: 991px)',
    'desk' '(min-width: 992px) and (max-width: 1381px)',
    'bigdesk' '(min-width: 1382px)'
) !default;
```
### Showing and hiding elements for certain devices based on CSS

Showing and hiding certain elements don't have to be defined in css and media query, it's enough to add a class to the html element.

```html
<div class="grid__item one-whole mobile--hide">
	this content is hidden in mobile, where max-width: 479px
</div>

<div class="grid__item one-whole phablet--hide smart--hide mobile--hide">
	this content is hidden in handheld devices, where max-width: 767px
</div>


<style>
	.my--class {
		display: none;
	}
</style>
<div class="grid__item my--class one-half mobile--showiblock">
	this content is hidden, except mobile devices.
	When we want to show a grid__item we need to use the {breakpoint}--showiblock, 
	which equals to display: inine-block; because the grid items break with d
	isplay: block; property. On any other element we can use the 
	{breakpoint}--showblock class as well.

	<p class="bigdesk--showblock">This paragraph is visible only min-width: 1382px; 
	with display: block; property.</p>
</div>
```

## Custom classes

There are some classes defined to make the formatting easier.

```html

<div class="amq_structure_inner">
	<div class="grid grid--narrow">
		<div class="grid__item one-whole">
			.amq_structure_inner is the main container of any content, add it to align
			content to the middle on big screens and create some padding on the side on 
			small screens. Use it before defining the grid.
		</div>
	</div>
</div>

<div class="clearfix">
	Add .clearfix class to floated elements to be cleared
</div>

<div class="hidden">
	Add .hidden class to hide elements
</div>

<div class="box">
	Add .box class to have an element outlined with grey border
</div>

<div class="fullbox">
	Add .fullbox class to have an element with grey background
</div>

<div class="gutter--top">
	Add .gutter--top class to create some space above an element
</div>

<div class="gutter--bottom">
	Add .gutter--bottom class to create some space below an element
</div>


```