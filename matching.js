/**
 * Matching functions for your recommendation system
 *
 * Write functions that check if an item matches user preferences.
 * You need at least 4 functions using different JS concepts:
 *
 * 1. Single criteria match (simple conditional)
 * 2. Range check (comparison operators)
 * 3. Multiple criteria match (logical operators: &&)
 * 4. Classification function (if/else chain)
 */

// ============================================================
// YOUR FUNCTIONS GO HERE
// ============================================================

/**
 * Checks if an item matches the desired vibe
 * @param {Object} item - An item from your data
 * @param {string} desiredVibe - The vibe the user wants
 * @returns {boolean} - True if the item matches the vibe
 */
function matchesVibe(item, desiredVibe) {
  // If no vibe preference, everything matches
  if (!desiredVibe) {
    return true;
  }

  // Check if the item's vibe matches the desired vibe
  return item.vibe === desiredVibe;
}

/**
 * Checks if an item matches the desired activity
 * @param {Object} item - An item from your data
 * @param {string} desiredActivity - The activity the user wants
 * @returns {boolean} - True if the item matches the activity
 */
function matchesActivity(item, desiredActivity) {
  // If no activity preference, everything matches
  if (!desiredActivity) {
    return true;
  }

  // Check if the item's activity matches the desired activity
  return item.activity === desiredActivity;
}

/**
 * Checks if an item matches the desired genre
 * @param {Object} item - An item from your data
 * @param {string} desiredGenre - The genre the user wants
 * @returns {boolean} - True if the item matches the genre
 */
function matchesGenre(item, desiredGenre) {
  // If no genre preference, everything matches
  if (!desiredGenre) {
    return true;
  }

  // Check if the item's genre matches the desired genre
  return item.genre === desiredGenre;
}

/**
 * Checks if an item fits within the available time
 * @param {Object} item - An item from your data
 * @param {number} availableMinutes - Maximum time available
 * @returns {boolean} - True if the item fits in the time
 */
function fitsTimeAvailable(item, availableMinutes) {
  // If no time constraint, everything fits
  if (!availableMinutes) {
    return true;
  }

  // Check if item's duration is within available time
  return item.duration <= availableMinutes;
}

/**
 * Checks if an item matches multiple criteria at once
 * @param {Object} item - An item from your data
 * @param {Object} preferences - Object with user preferences
 * @returns {boolean} - True if item matches ALL criteria
 */
function meetsAllCriteria(item, preferences) {
  return (
    matchesVibe(item, preferences.vibe) &&
    fitsTimeAvailable(item, preferences.duration) &&
    matchesActivity(item, preferences.activity) &&
    matchesGenre(item, preferences.genre)
  );
}

/**
 * Returns a message based on how well an item matches
 * @param {number} matchScore - How many criteria matched (0-3)
 * @returns {string} - A recommendation message
 */
function getMatchMessage(matchScore) {
  if (matchScore === 4) {
    return "Perfect match!";
  } else if (matchScore === 3) {
    return "Great match!";
  } else if (matchScore === 2) {
    return "Good option!";
  } else if (matchScore === 1) {
    return "Worth considering!";
  } else {
    return "Might work";
  }
}