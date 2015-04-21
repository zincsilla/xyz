# XYZ documentation

## Sass Processor to use

[Mixture](http://mixture.io/) with [Sassaparilla](http://sass.fffunction.co/) boilerplate, the grid optimised and modified to match the Grid System


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
		display: hidden;
	}
</style>
<div class="grid__item my--class one-half mobile--showiblock">
	this content is hidden, except mobile devices.
	When we want to show a grid__item we need to use the {breakpoint}--showiblock, which equals to display: inine-block; because the grid items break with display: block; property. On any other element we can use the {breakpoint}--showblock class as well.

	<p class="bigdesk--showblock">This paragraph is visible only min-width: 1382px; with display: block; property.</p>
</div>
```
