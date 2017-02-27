module.exports = Rect
Rect.intersects = intersects

function Rect(x, y, width, height) {

	if (arguments.length === 2) {
    width = x
    height = y
    x = 0
    y = 0
  }

	return {

		x, y, width, height,

		get left() {
			return rect.x
		},
    set left(value) {
			rect.x = value
		},

		get top() {
			return rect.y
		},
		set top(value) {
			rect.y = value
		},

    get right() {
			return rect.x + rect.width
		},
    set right(value) {
			rect.x = value - rect.width
		},

		get bottom() {
			return rect.y + rect.height
		},
		set bottom(value) {
			rect.y = value - rect.height
		}
	}
}

function intersects(a, b) {
	return a.left < b.right && a.top < b.bottom && a.right > b.left && a.bottom > b.top
}
