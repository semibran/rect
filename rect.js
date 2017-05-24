exports.contains = contains
exports.equals = equals

function contains(rect, position) {
	return position.x >= rect.x && position.y >= rect.y && position.x < rect.x + rect.width && position.y < rect.y + rect.height
}

function equals(rect, other) {
	return rect.x === other.x && rect.y === other.y && rect.width === other.width && rect.height === other.height
}
