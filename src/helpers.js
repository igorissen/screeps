/**
 *
 * @param room
 * @param x
 * @param y
 * @returns {boolean}
 * @private
 */
function _isRoomPositionEmpty(room, x, y) {
  const elements = room.lookAt(x, y);
  return room.getTerrain().get(x, y) === 0 && elements.length === 1 && elements[0].type === 'terrain';
}

/**
 *
 * @param room
 * @param source
 * @returns {number}
 */
function getSourceAvailableSeats(room, source) {
  let availableSeats = 0;

  // look up
  if (_isRoomPositionEmpty(room, source.pos.x, source.pos.y - 1)) {
    availableSeats += 1;
  }
  // look up and right
  if (_isRoomPositionEmpty(room, source.pos.x + 1, source.pos.y - 1)) {
    availableSeats += 1;
  }
  // look up and left
  if (_isRoomPositionEmpty(room, source.pos.x - 1, source.pos.y - 1)) {
    availableSeats += 1;
  }

  // look right
  if (_isRoomPositionEmpty(room, source.pos.x + 1, source.pos.y)) {
    availableSeats += 1;
  }
  // look left
  if (_isRoomPositionEmpty(room, source.pos.x - 1, source.pos.y)) {
    availableSeats += 1;
  }

  // look down
  if (_isRoomPositionEmpty(room, source.pos.x, source.pos.y + 1)) {
    availableSeats += 1;
  }
  // look down and right
  if (_isRoomPositionEmpty(room, source.pos.x + 1, source.pos.y + 1)) {
    availableSeats += 1;
  }
  // look down and left
  if (_isRoomPositionEmpty(room, source.pos.x - 1, source.pos.y + 1)) {
    availableSeats += 1;
  }

  return availableSeats;
}

module.exports = {
  getSourceAvailableSeats
};
