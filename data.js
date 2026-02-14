/**
 * Your recommendation data goes here!
 *
 * Replace this example with your own domain (movies, restaurants, games, etc.)
 * Keep the same structure: an object with an "options" array.
 *
 * Each option should have properties that help you make recommendations.
 * Think about: What information do I need to match user preferences?
 */

const data = {
  // Describe your domain
  domain: "What to Listen To",
  description: "What songs to listen to based on the vibe and activity.",

  options: [
    {
      title: "The World is Yours - Nas",
      activity: "workout",
      vibe: "focused",
      genre: "rap",
      duration: 290, // duration in seconds (4:50)
    },
    {
      title: "Us and Them - Pink Floyd",
      activity: "sleeping",
      vibe: "chill",
      genre: "rock",
      duration: 472, // duration in seconds (7:52)
    },
    {
      title: "Midnight City - M83",
      activity: "driving",
      vibe: "hyped",
      genre: "pop",
      duration: 244, // duration in seconds (4:04)
    },
    {
      title: "Sunflower - Rex Orange County",
      activity: "studying",
      vibe: "chill",
      genre: "pop",
      duration: 252, // duration in seconds (4:12)
    },
    {
      title: "Titanium - David Guetta",
      activity: "workout",
      vibe: "hyped",
      genre: "pop",
      duration: 245, // duration in seconds (4:05)
    },
    {
      title: "Rivers and Roads - The Head and the Heart",
      activity: "driving",
      vibe: "chill",
      genre: "rock",
      duration: 273, // duration in seconds (4:33)
    },
    {
      title: "Get Lucky - Daft Punk",
      activity: "party",
      vibe: "upbeat",
      genre: "pop",
      duration: 369, // duration in seconds (6:09)
    },
    {
      title: "Clair de Lune - Debussy",
      activity: "studying",
      vibe: "chill",
      genre: "classical",
      duration: 300, // duration in seconds (5:00)
    },
    {
      title: "Lovely Day - Bill Withers",
      activity: "party",
      vibe: "upbeat",
      genre: "rock",
      duration: 255, // duration in seconds (4:15)
    },
    {
      title: "Blinding Lights - The Weeknd",
      activity: "party",
      vibe: "hyped",
      genre: "pop",
      duration: 200, // duration in seconds (3:20)
    },
    {
      title: "Holocene - Bon Iver",
      activity: "relaxing",
      vibe: "chill",
      genre: "indie",
      duration: 339, // duration in seconds (5:39)
    },
    {
      title: "Lose Yourself - Eminem",
      activity: "workout",
      vibe: "hyped",
      genre: "rap",
      duration: 326, // duration in seconds (5:26)
    },
    {
      title: "Ocean Eyes - Billie Eilish",
      activity: "relaxing",
      vibe: "chill",
      genre: "pop",
      duration: 200, // duration in seconds (3:20)
    },
    {
      title: "Take Five - Dave Brubeck",
      activity: "studying",
      vibe: "focused",
      genre: "jazz",
      duration: 324, // duration in seconds (5:24)
    },
    {
      title: "Dreams - Fleetwood Mac",
      activity: "driving",
      vibe: "chill",
      genre: "rock",
      duration: 257, // duration in seconds (4:17)
    },
    {
      title: "Happy - Pharrell Williams",
      activity: "party",
      vibe: "upbeat",
      genre: "pop",
      duration: 200, // duration in seconds (3:20)
    },
    {
      title: "Stairway to Heaven - Led Zeppelin",
      activity: "driving",
      vibe: "hyped",
      genre: "rock",
      duration: 482, // duration in seconds (8:02)
    }
  ],
};

// Note: This file is loaded via a script tag, so `data` becomes a global variable
// that matching.js and app.js can access.
