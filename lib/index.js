module.exports = Rect
Rect.intersects = intersects

function Rect(left, top, width, height) {

	if (arguments.length === 2) {
    width = x
    height = y
    left = 0
    top = 0
  }

	var rect = {

		left, top, width, height,

		get x() {
			return rect.left + rect.width / 2
		},
    set x(value) {
			rect.left = value - rect.width / 2
		},

		get y() {
			return rect.top + rect.height / 2
		},
		set y(value) {
			rect.top = value - rect.height / 2
		},

    get right() {
			return rect.left + rect.width
		},
    set right(value) {
			rect.left = value - rect.width
		},

		get bottom() {
			return rect.top + rect.height
		},
		set bottom(value) {
			rect.top = value - rect.height
		}
	}

	return rect

}

function intersects(a, b) {
	return a.left < b.right && a.top < b.bottom && a.right > b.left && a.bottom > b.top
}
