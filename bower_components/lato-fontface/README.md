# Lato @font-face kit 

This is a Bower package `lato-fontface` with [Lato](http://www.latofonts.com/lato-free-fonts/), open-source Open Font License by his foundry tyPoland, with support from Google. You can preview the font on [Adobe Typekit](https://typekit.com/fonts/lato).

## Usage

Search [Bower.io]() for `lato-fontface`.    
```
bower install --save lato-fontface
```

#### Usage with Sass

Override `$lato-path` variable in your .sass files:  
```
$lato-path: "/path/to/directory/with/font/files";
```

Then simply import the file:  
```
@import "bower_components/lato-fontface/scss/lato";
```

Or import file by file:  
```
/* Required */
@import "bower_components/lato-fontface/scss/variables";
@import "bower_components/lato-fontface/scss/mixins";

/* Fonts files */
@import "bower_components/lato-fontface/scss/regular";
@import "bower_components/lato-fontface/scss/italic";
...
```

#### Usage with Less

Override `@lato-path` variable in your .less files:  
```
@lato-path: "/path/to/directory/with/font/files";
```

Then simply import the file:  
```
@import "bower_components/lato-fontface/less/lato";
```

Or import file by file:  
```
/* Required */
@import "bower_components/lato-fontface/less/variables";
@import "bower_components/lato-fontface/less/mixins";

/* Fonts files */
@import "bower_components/lato-fontface/less/regular";
@import "bower_components/lato-fontface/less/italic";
...
```

## Further information

See [Lato](http://www.latofonts.com/lato-free-fonts/) website.

## Inspired by

* [Lato @font-face kit](https://github.com/FontFaceKit/lato)
