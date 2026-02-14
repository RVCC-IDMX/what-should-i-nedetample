# Copilot instructions

Instructions for GitHub Copilot when working on this project.

## Project context

This is a "What should I listen to?" recommendation tool.

**Domain:** Music

**Purpose:** Help users find song recommendations based on their preferences.

## Code style

- Use `const` and `let`, never `var`
- Use meaningful variable names
- Add JSDoc comments to functions
- Use strict equality (`===`) for comparisons

## Data structure

The data lives in `data.js` as a JavaScript object:

```javascript
const data = {
  domain: "Music",
  description: "What this recommender does",
  options: [
    // Array of items to recommend
  ],
};
```
Each object is going to have the following properties: activity, vibe, genre, duration (in seconds), and title.

## Matching functions

Functions in `matching.js` should:

- Return `true` or `false` for matching functions
- Handle empty/null preferences (return `true` if no preference)
- Use descriptive parameter names

## Customization

Update this file as you work! Add notes about:

- Your specific data properties
- Naming conventions you're using
- Edge cases to watch for
