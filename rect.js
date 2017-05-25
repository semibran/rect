exports.contains = contains
exports.equals = equals

function contains(a, b) {
	return a.x < b.x + b.width && a.y < b.y + b.height && a.x + a.width > b.x && a.y + a.height > b.y
}

function equals(a, b) {
	return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height
}
