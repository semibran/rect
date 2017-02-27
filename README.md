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
Rect(x, y, width*, height*) // => Object{ x, y, width, height }
```

If `width` and `height` are not provided, the factory will instead take the form of `Rect(width, height)` and `x` and `y` will default to `0`.

### Methods

#### `intersects`
```javascript
Rect.intersects(a, b) // => Boolean
```

Determines if the given rectangles are intersecting.

### Properties
For convenience, each `Rect` instance has its own `get` and `set` fields for the properties `left`, `top`, `right` and `bottom`.

## License
MIT
