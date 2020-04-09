const helpers = require('./helpers');

//
const GAME = {};

/**
 *
 * @param room
 * @param type
 * @param items
 * @private
 */
function _initEnergySources(room, type, items) {
  for (let j = 0; j < items.length; j++) {
    const item = items[j];
    item.availableSeats = helpers.getSourceAvailableSeats(room, item);

    switch (type) {
      case 'source':
        GAME.sources.set(item.id, item);
        break;
      case 'resource':
        GAME.resources.set(item.id, item);
        break;
    }
  }
}

/**
 *
 * @private
 */
function _clearDiedCreeps() {
  const creepIds = Object.keys(Memory.creeps);

  for (let k = 0; k < creepIds.length; k++) {
    const creepId = creepIds[k];
    if (!Game.creeps[creepId]) {
      delete Memory.creeps[creepId];
    }

    if (GAME.creeps.has(creepId)) {
      GAME.creeps.delete(creepId);
    }
  }
}

/**
 *
 */
function init() {
  GAME.sources = new Map();
  GAME.resources = new Map();
  GAME.creeps = new Map();

  const roomIds = Object.keys(Game.rooms);
  for (let i = 0; i < roomIds.length; i++) {
    const roomId = roomIds[i];
    const room = Game.rooms[roomId];

    _initEnergySources(room, 'source', room.find(FIND_SOURCES));
    _initEnergySources(room, 'resource', room.find(FIND_DROPPED_RESOURCES));
  }

  _clearDiedCreeps();

  console.log(GAME);
}

module.exports = {
  init,
  GAME
};
