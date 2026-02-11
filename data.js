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
      duration: 290, // duration in seconds (4:50)
    },
    {
      title: "Us and Them - Pink Floyd",
      activity: "sleeping",
      vibe: "relaxing",
      duration: 472, // duration in seconds (7:52)
    },
    // Add more options...
  ],
};

// Note: This file is loaded via a script tag, so `data` becomes a global variable
// that matching.js and app.js can access.
