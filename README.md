# aligner-scss

[Aligner](https://github.com/adrianlee44/atom-aligner) add-on to support SASS and SCSS.

## Supported operators
`:`:
```scss
body {
  font:  100% Helvetica, sans-serif;
  color: #333;
}
```
`{`:
```scss
li { display: inline-block; }
a  { display: block; }
```
`!`:
```scss
$tabs-bg:        red        !default;
$tabs-color:     dodgerblue !default;
$tabs-font-size: 16px       !default;
```

## Installation
Aligner must be installed along with this package. For more information, please check out [Aligner](https://github.com/adrianlee44/atom-aligner)

## Changelog
- 2017-06-22   v1.3.1   Update all alignment options to have a dropdown
- 2017-05-17   v1.3.0   Add support for embedded scss and sass
- 2017-05-16   v1.2.1   Fix scss code in html not aligning
- 2017-05-13   v1.2.0   Add support for !. Update documentation .
- 2015-09-13   v1.1.0   Add support for `{` (disabled by default)
- 2015-07-28   v1.0.2   Add operator scope to `:`
- 2015-03-26   v1.0.1   Fixed invalid main script
- 2015-03-26   v1.0.0   Initial release
