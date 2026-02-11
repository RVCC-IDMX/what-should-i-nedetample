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

  // Your options array - aim for 15-25 items
  options: [
    {
      title: "The World is Yours - Nas",
      activity: "workout",
      vibe: "focused",
      genre: "hip-hop",
      duration: 290, // duration in seconds (4:50)
    },
    {
      title: "Us and Them - Pink Floyd",
      activity: "sleeping",
      vibe: "chill",
      genre: "progressive rock",
      duration: 472, // duration in seconds (7:52)
    },
    {
      title: "Midnight City - M83",
      activity: "driving",
      vibe: "energized",
      genre: "synth-pop",
      duration: 244, // duration in seconds (4:04)
    },
    {
      title: "Sunflower - Rex Orange County",
      activity: "studying",
      vibe: "chill",
      genre: "indie pop",
      duration: 252, // duration in seconds (4:12)
    },
    {
      title: "Titanium - David Guetta",
      activity: "workout",
      vibe: "hyped",
      genre: "dance",
      duration: 245, // duration in seconds (4:05)
    },
    {
      title: "Rivers and Roads - The Head and the Heart",
      activity: "driving",
      vibe: "nostalgic",
      genre: "folk rock",
      duration: 273, // duration in seconds (4:33)
    },
    {
      title: "Get Lucky - Daft Punk",
      activity: "party",
      vibe: "upbeat",
      genre: "funk",
      duration: 369, // duration in seconds (6:09)
    },
    {
      title: "Clair de Lune - Debussy",
      activity: "reading",
      vibe: "peaceful",
      genre: "classical",
      duration: 300, // duration in seconds (5:00)
    },
    {
      title: "Lovely Day - Bill Withers",
      activity: "cleaning",
      vibe: "positive",
      genre: "soul",
      duration: 255, // duration in seconds (4:15)
    },
    {
      title: "Blinding Lights - The Weeknd",
      activity: "driving",
      vibe: "hyped",
      genre: "pop",
      duration: 200, // duration in seconds (3:20)
    },
    {
      title: "Holocene - Bon Iver",
      activity: "relaxing",
      vibe: "reflective",
      genre: "indie folk",
      duration: 339, // duration in seconds (5:39)
    },
    {
      title: "Lose Yourself - Eminem",
      activity: "workout",
      vibe: "intense",
      genre: "hip-hop",
      duration: 326, // duration in seconds (5:26)
    },
    {
      title: "Ocean Eyes - Billie Eilish",
      activity: "relaxing",
      vibe: "dreamy",
      genre: "alternative pop",
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
      vibe: "laid-back",
      genre: "rock",
      duration: 257, // duration in seconds (4:17)
    },
  ],
};

// Note: This file is loaded via a script tag, so `data` becomes a global variable
// that matching.js and app.js can access.
