# rect
> Generic rectangle factory

## Installation
```sh
npm install semibran/rect
```

## Usage
```javascript
const Rect = require('rect')
```

### Factory
```javascript
Rect(left, top, width*, height*) // => Object{ left, top, width, height }
```
If `width` and `height` are not provided, the factory will instead take the form of `Rect(width, height)` and `left` and `top` will default to `0`.

### Methods

#### `intersects`
```javascript
Rect.intersects(a, b) // => Boolean
```
Determines if the given rectangles `a` and `b` are intersecting.

#### `merge`
```javascript
Rect.merge(...rects)
```
Finds the smallest possible rectangle that can fit all the provided `rects`

### Properties
For convenience, each `Rect` instance has its own `get` and `set` fields for the properties `x` and `y` (for getting and setting the rectangle center) as well as `right` and `bottom`.

## License
MIT
