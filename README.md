Conditional Media Queries
=========================

Create separate stylesheets for browsers that support media queries and browsers that don't, with Grunt and Sass.


## Usage

### Install

- If you haven't done so before, install [node.js](http://nodejs.org)

- Browse to folder "source" in your terminal, then type

	      npm install

	This will install grunt and sass in a folder called "node_modules"


### Compile

Browse to folder "source" in your terminal, then type

	grunt

This will create or overwrite the following files:

	- build/css/styles-mqoff.css
	- build/css/styles.css


### Import

the stylesheets into your HTML

	<!-- Stylesheets without Media Queries for IE 8 and below -->
		<!--[if lte IE 8]>
			<link rel="stylesheet" media="all" href="css/styles-mqoff.css">
		<![endif]-->
	<!-- Stylesheets with Media Queries for modern browsers -->
		<!--[if gt IE 8]><!-->
			<link rel="stylesheet" media="only screen and (color)" href="css/styles.css">
		<!--<![endif]-->



#### Example:

		@include media-query(md) {
			foo {
				bar: baz;
			}
		}

##### outputs:

- in file build/css/styles-mqoff.css

		foo {
			bar: baz;
		}


- in file build/css/styles.css

		@media only screen and (min-width: 769px) {
			foo {
				bar: baz;
			}
		}



