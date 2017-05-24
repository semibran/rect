# rect
> Basic helper methods for rectangles

The following methods can work on any objects of the form `{ x, y, width, height }`.

## install
```sh
npm install semibran/rect
```

## usage
```javascript
const { contains, intersects } = require('rect')
```

### `contains(rect, position)`
Determines if `rect` contains `position` (i.e. an object with the properties `x` and `y`).

### `equals(a, b)`
Determines if the four rectangle properties of `a` and `b` are equivalent.

## license
MIT
