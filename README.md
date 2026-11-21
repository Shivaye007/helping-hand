# Helping Hand: AI Campus Guide for AITD Kanpur

A friendly hand-mascot assistant for first-year **CSE-AIML** students. It finds rooms across both floors, shows today's classes from the real timetable, and answers subject questions.

- **Find a place:** pick start and destination from the list of every room on the two maps. Our own code (`lib/graph.js`) finds the shortest route, including the lift (1st to 2nd floor) and the slope (2nd floor to main lobby). **Gemini** only rewords the steps into friendly directions.
- **My classes:** the AI & ML timetable (w.e.f. 21/09/2026) by day, filtered to your lab group and subjects. "Take me there" jumps to the route for rooms that are on the map.
- **Ask:** pick a subject and a question (teacher, timing, venue, credits and marks). Answers come from the timetable and scheme data.
- Only your **name** is typed. Branch, lab group, subjects, places and questions are all choices.

## Data (edit these to update the app)
- `data/campus.json`: both floor plans, rooms, walking points and links (lift, slope). Schematic, not to scale.
- `data/academics.json`: subjects, teachers and the weekly timetable.

## Run locally
1. Install Node.js 18+.
2. `npm install`
3. Copy `.env.example` to `.env` and paste your Gemini API key (Google AI Studio). Without a key the app still works and shows plain directions and answers.
4. `npm start`, then open http://localhost:3000
5. `npm run check` confirms every place on the map can reach every other place.

## Built with
Google Antigravity, Gemini API (`@google/genai`), Node.js, Express, vanilla JS.
