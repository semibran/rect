module.exports = Rect
Rect.intersects = intersects
Rect.merge = merge

function Rect(left, top, width, height) {

  if (arguments.length === 2) {
    width = left
    height = top
    left = 0
    top = 0
  }

  var rect =
    { left, top
    , width, height
    , get x() {
        return rect.left + rect.width / 2
      }
    , set x(value) {
        rect.left = value - rect.width / 2
      }
    , get y() {
        return rect.top + rect.height / 2
      }
    , set y(value) {
        rect.top = value - rect.height / 2
      }
    , get right() {
        return rect.left + rect.width
      }
    , set right(value) {
        rect.left = value - rect.width
      }
    , get bottom() {
        return rect.top + rect.height
      }
    , set bottom(value) {
        rect.top = value - rect.height
      }
    }

  return rect

}

function intersects(a, b) {
  return a.left < b.right && a.top < b.bottom && a.right > b.left && a.bottom > b.top
}

function merge(...rects) {

  if (rects.length === 1)
    return rects[0]

  var left, top, right, bottom
  left = top = Infinity
  right = bottom = -Infinity

  for (let rect of rects) {
    if (rect.left < left)
      left = rect.left
    if (rect.top < top)
      top = rect.top
    if (rect.right > right)
      right = rect.right
    if (rect.bottom > bottom)
      bottom = rect.bottom
  }

  var width = right - left + 1
  var height = bottom - top + 1

  return Rect(left, top, width, height)

}
