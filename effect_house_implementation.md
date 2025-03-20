# TikTok Effect House Implementation Guide

## Overview

This guide shows how to implement the personality predictor in TikTok Effect House using the decision tree logic with our 16 empowering female personas.

## Step 1: Set Up Variables

```javascript
// Define arrays for trait options
const hairColors = ["Blonde", "Dirty Blonde", "Brunette"];
const beverages = ["Coffee", "Tea", "Water", "Soda", "Juice", "Energy Drink"];
const vacationSpots = ["Beach", "Mountains", "City", "Countryside", "Desert", "Forest"];
const hobbies = ["Reading", "Gaming", "Sports", "Music", "Art", "Cooking"];

// Personality types with descriptions
const personalities = [
  {
    type: "Powerhouse",
    description: "A total boss who runs the game with a lethal combo of brains and style."
  },
  {
    type: "Brainiac Baddie",
    description: "A genius wrapped in confidence who breaks all the rules and redefines the game."
  },
  {
    type: "Rule Breaker",
    description: "Bold, daring, and never afraid to stir things up with guts to turn the world upside down."
  },
  {
    type: "Savage Thinker",
    description: "Quick-witted and sharp, wins every intellectual battle with shade and sass."
  },
  {
    type: "Visionary Vixen",
    description: "Doesn't just dream, makes vision reality with unstoppable determination."
  },
  {
    type: "Chill Queen",
    description: "Keeps it cool no matter the drama with a relaxed confidence everyone envies."
  },
  {
    type: "Charmer Extraordinaire",
    description: "Has everyone eating out of her hand with just the right flirt and finesse."
  },
  {
    type: "Firecracker",
    description: "All spark, no filter, with explosive energy that turns boring to unforgettable."
  },
  {
    type: "Rock Solid Bae",
    description: "Steady, unshakable, and keeps it real at all times with zero drama."
  },
  {
    type: "Watchdog",
    description: "Loyal to the core and fiercely protective of her people."
  },
  {
    type: "Boss Lady",
    description: "Takes control with precision and handles everything with power and poise."
  },
  {
    type: "Socialite",
    description: "Always at the center of the action, making every event the hottest spot in town."
  },
  {
    type: "Mastermind",
    description: "Always three steps ahead, making moves while everyone else is catching up."
  },
  {
    type: "Globetrotter",
    description: "A wanderer with taste for the extraordinary who explores the world in style."
  },
  {
    type: "Game Changer",
    description: "Doesn't follow trends, she sets them and shows everyone how it's done."
  },
  {
    type: "Party Animal",
    description: "The life of the scene, bringing chaos and good vibes wherever she goes."
  }
];

// Store current trait values
let currentTraits = {
  hairColor: null,
  beverage: null,
  vacationSpot: null,
  hobby: null
};

// Store points for each personality
let personalityPoints = Array(16).fill(0);
```

## Step 2: Create Random Selection Function

```javascript
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function generateRandomTraits() {
  currentTraits.hairColor = getRandomItem(hairColors);
  currentTraits.beverage = getRandomItem(beverages);
  currentTraits.vacationSpot = getRandomItem(vacationSpots);
  currentTraits.hobby = getRandomItem(hobbies);
  
  // Reset points
  personalityPoints = Array(16).fill(0);
}
```

## Step 3: Implement Scoring Logic

```javascript
function calculatePersonalityPoints() {
  // Hair color logic
  if (currentTraits.hairColor === "Blonde") {
    personalityPoints[0] += 2; // Powerhouse
    personalityPoints[6] += 1; // Charmer Extraordinaire
    personalityPoints[14] += 2; // Game Changer
  } else if (currentTraits.hairColor === "Dirty Blonde") {
    personalityPoints[2] += 2; // Rule Breaker
    personalityPoints[7] += 2; // Firecracker
    personalityPoints[15] += 1; // Party Animal
  } else if (currentTraits.hairColor === "Brunette") {
    personalityPoints[1] += 2; // Brainiac Baddie
    personalityPoints[3] += 1; // Savage Thinker
    personalityPoints[12] += 2; // Mastermind
  }
  
  // Beverage logic
  if (currentTraits.beverage === "Energy Drink" || currentTraits.beverage === "Soda") {
    personalityPoints[7] += 2; // Firecracker
    personalityPoints[15] += 2; // Party Animal
    personalityPoints[2] += 1; // Rule Breaker
  } else if (currentTraits.beverage === "Coffee" || currentTraits.beverage === "Juice") {
    personalityPoints[0] += 1; // Powerhouse
    personalityPoints[10] += 2; // Boss Lady
    personalityPoints[4] += 2; // Visionary Vixen
  } else if (currentTraits.beverage === "Tea" || currentTraits.beverage === "Water") {
    personalityPoints[5] += 2; // Chill Queen
    personalityPoints[3] += 2; // Savage Thinker
    personalityPoints[1] += 1; // Brainiac Baddie
  }
  
  // Vacation spot logic
  if (currentTraits.vacationSpot === "Beach" || currentTraits.vacationSpot === "City") {
    personalityPoints[11] += 2; // Socialite
    personalityPoints[6] += 2; // Charmer Extraordinaire
    personalityPoints[15] += 1; // Party Animal
  } else if (currentTraits.vacationSpot === "Countryside" || currentTraits.vacationSpot === "Forest") {
    personalityPoints[5] += 2; // Chill Queen
    personalityPoints[8] += 2; // Rock Solid Bae
    personalityPoints[9] += 1; // Watchdog
  } else if (currentTraits.vacationSpot === "Mountains" || currentTraits.vacationSpot === "Desert") {
    personalityPoints[13] += 2; // Globetrotter
    personalityPoints[4] += 1; // Visionary Vixen
    personalityPoints[14] += 2; // Game Changer
  }
  
  // Hobby logic
  if (currentTraits.hobby === "Sports" || currentTraits.hobby === "Gaming") {
    personalityPoints[2] += 2; // Rule Breaker
    personalityPoints[10] += 1; // Boss Lady
    personalityPoints[14] += 2; // Game Changer
  } else if (currentTraits.hobby === "Music" || currentTraits.hobby === "Art") {
    personalityPoints[4] += 2; // Visionary Vixen
    personalityPoints[12] += 2; // Mastermind
    personalityPoints[7] += 1; // Firecracker
  } else if (currentTraits.hobby === "Reading" || currentTraits.hobby === "Cooking") {
    personalityPoints[1] += 2; // Brainiac Baddie
    personalityPoints[3] += 2; // Savage Thinker
    personalityPoints[9] += 1; // Watchdog
  }
}
```

## Step 4: Determine Final Personality

```javascript
function getPersonalityResult() {
  // Find index of personality with highest points
  let maxPoints = Math.max(...personalityPoints);
  let personalityIndex = personalityPoints.indexOf(maxPoints);
  
  return personalities[personalityIndex];
}
```

## Step 5: Main Filter Logic

```javascript
// This function would be triggered by a user action (tap, timer, etc.)
function runPersonalityFilter() {
  // Step 1: Generate random traits
  generateRandomTraits();
  
  // Step 2: Calculate points based on traits
  calculatePersonalityPoints();
  
  // Step 3: Get final personality result
  const result = getPersonalityResult();
  
  // Step 4: Display results on screen
  displayResults(currentTraits, result);
}
```

## Step 6: Visual Implementation in Effect House

1. Create text elements to display:
   - The trait values (hair color, beverage, vacation spot, hobby)
   - The personality type name
   - The personality description

2. Create visual effects for each step:
   - Animation for the random trait selection
   - Transition effects between traits
   - Highlight effect for the final personality result

3. Set up sequencing:
   - Show traits one by one with a small delay between each
   - Show the personality result after all traits are revealed
   - Add a restart button to generate a new result

## Effect House Tips

- Use the **Patch Editor** to implement the logic flow
- Use **Text Components** for displaying traits and results
- Use **Animation Sequences** to control timing
- Add **Interactive Elements** like buttons for user triggering
- Consider using **3D Text** for more visual impact
- Add **Sound Effects** for each trait reveal
- Create unique visuals or stickers for each of the 16 personality types

This implementation focuses on optimizing for TikTok Effect House's capabilities while preserving the personality prediction logic from the web version. 