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

### `contains(a, b)`
Determines if rectangle `a` contains rectangle `b`.

### `equals(a, b)`
Determines if the four rectangle properties of `a` and `b` are equivalent.

## license
MIT
