# TikTok Effect House Implementation Guide

## Overview

This guide shows how to implement the personality predictor in TikTok Effect House using the decision tree logic with our 16 empowering female personas.

## Step 1: Set Up Variables

```javascript
// Define arrays for trait options
const hiddenTalents = ["Fast Learning", "Conflict Defusing", "Empath", "Remembering Names", "Reading the Room"];
const loveLanguages = ["Receiving Gifts", "Physical Touch", "Words of Affirmation", "Quality Time", "Acts of Service", "Undivided Attention"];
const personalityTypes = ["Introvert", "Extrovert", "Ambivert", "Logical", "Emotional", "Intuitive"];
const toxicTraits = ["Main Character Energy", "Phone Addiction", "Overthinking Texts", "TikTok-ing Instead of Sleeping", "Online Shopping Therapy", "Cancel Plans Last Minute"];

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

// Hair colors for each personality
const personalityHairColors = {
  // Dark Blonde personalities
  "Powerhouse": "Dark Blonde",
  "Rule Breaker": "Dark Blonde",
  "Game Changer": "Dark Blonde",
  "Firecracker": "Dark Blonde",
  "Party Animal": "Dark Blonde",
  
  // Golden Blonde personalities
  "Brainiac Baddie": "Golden Blonde",
  "Savage Thinker": "Golden Blonde",
  "Mastermind": "Golden Blonde",
  "Boss Lady": "Golden Blonde",
  "Visionary Vixen": "Golden Blonde",
  
  // Light Brown personalities
  "Chill Queen": "Light Brown",
  "Charmer Extraordinaire": "Light Brown",
  "Rock Solid Bae": "Light Brown",
  "Watchdog": "Light Brown",
  "Socialite": "Light Brown",
  "Globetrotter": "Light Brown"
};

// Store current trait values
let currentTraits = {
  hiddenTalent: null,
  loveLanguage: null,
  personalityType: null,
  toxicTrait: null
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
  currentTraits.hiddenTalent = getRandomItem(hiddenTalents);
  currentTraits.loveLanguage = getRandomItem(loveLanguages);
  currentTraits.personalityType = getRandomItem(personalityTypes);
  currentTraits.toxicTrait = getRandomItem(toxicTraits);
  
  // Reset points
  personalityPoints = Array(16).fill(0);
}
```

## Step 3: Implement Scoring Logic

```javascript
function calculatePersonalityPoints() {
  // Hidden Talent logic
  if (currentTraits.hiddenTalent === "Reading the Room" || currentTraits.hiddenTalent === "Empath") {
    personalityPoints[4] += 3; // Visionary Vixen
    personalityPoints[5] += 2; // Chill Queen
  } else if (currentTraits.hiddenTalent === "Fast Learning" || currentTraits.hiddenTalent === "Remembering Names") {
    personalityPoints[1] += 3; // Brainiac Baddie
    personalityPoints[12] += 2; // Mastermind
  } else if (currentTraits.hiddenTalent === "Conflict Defusing") {
    personalityPoints[8] += 3; // Rock Solid Bae
    personalityPoints[6] += 2; // Charmer Extraordinaire
  }
  
  // Love Language logic
  if (currentTraits.loveLanguage === "Receiving Gifts" || currentTraits.loveLanguage === "Undivided Attention") {
    personalityPoints[15] += 3; // Party Animal
    personalityPoints[11] += 2; // Socialite
  } else if (currentTraits.loveLanguage === "Physical Touch" || currentTraits.loveLanguage === "Words of Affirmation") {
    personalityPoints[6] += 3; // Charmer Extraordinaire
    personalityPoints[7] += 2; // Firecracker
  } else if (currentTraits.loveLanguage === "Quality Time") {
    personalityPoints[8] += 3; // Rock Solid Bae
    personalityPoints[9] += 2; // Watchdog
  } else if (currentTraits.loveLanguage === "Acts of Service") {
    personalityPoints[10] += 3; // Boss Lady
    personalityPoints[12] += 2; // Mastermind
  }
  
  // Personality Type logic
  if (currentTraits.personalityType === "Extrovert") {
    personalityPoints[15] += 3; // Party Animal
    personalityPoints[11] += 2; // Socialite
    personalityPoints[7] += 1; // Firecracker
  } else if (currentTraits.personalityType === "Introvert") {
    personalityPoints[5] += 3; // Chill Queen
    personalityPoints[9] += 2; // Watchdog
    personalityPoints[12] += 1; // Mastermind
  } else if (currentTraits.personalityType === "Ambivert") {
    personalityPoints[14] += 3; // Game Changer
    personalityPoints[8] += 2; // Rock Solid Bae
  } else if (currentTraits.personalityType === "Logical") {
    personalityPoints[1] += 3; // Brainiac Baddie
    personalityPoints[3] += 2; // Savage Thinker
  } else if (currentTraits.personalityType === "Emotional") {
    personalityPoints[6] += 3; // Charmer Extraordinaire
    personalityPoints[7] += 2; // Firecracker
  } else if (currentTraits.personalityType === "Intuitive") {
    personalityPoints[4] += 3; // Visionary Vixen
    personalityPoints[2] += 2; // Rule Breaker
  }
  
  // Toxic Trait logic
  if (currentTraits.toxicTrait === "Main Character Energy") {
    personalityPoints[0] += 3; // Powerhouse
    personalityPoints[15] += 2; // Party Animal
  } else if (currentTraits.toxicTrait === "Phone Addiction") {
    personalityPoints[11] += 3; // Socialite
    personalityPoints[12] += 1; // Mastermind
  } else if (currentTraits.toxicTrait === "Overthinking Texts") {
    personalityPoints[1] += 2; // Brainiac Baddie
    personalityPoints[5] += 1; // Chill Queen
  } else if (currentTraits.toxicTrait === "TikTok-ing Instead of Sleeping") {
    personalityPoints[7] += 3; // Firecracker
    personalityPoints[14] += 2; // Game Changer
  } else if (currentTraits.toxicTrait === "Online Shopping Therapy") {
    personalityPoints[4] += 2; // Visionary Vixen
    personalityPoints[10] += 2; // Boss Lady
  } else if (currentTraits.toxicTrait === "Cancel Plans Last Minute") {
    personalityPoints[3] += 2; // Savage Thinker
    personalityPoints[2] += 3; // Rule Breaker
  }
}
```

## Step 4: Determine Final Personality and Hair Color

```javascript
function getPersonalityResult() {
  // Find index of personality with highest points
  let maxPoints = Math.max(...personalityPoints);
  let maxIndices = [];
  
  // Get all personalities with the max points (in case of a tie)
  personalityPoints.forEach((points, index) => {
    if (points === maxPoints) {
      maxIndices.push(index);
    }
  });
  
  // Choose randomly in case of a tie
  const personalityIndex = maxIndices[Math.floor(Math.random() * maxIndices.length)];
  const personality = personalities[personalityIndex];
  
  // Get the hair color associated with this personality
  const hairColor = personalityHairColors[personality.type];
  
  return {
    personality: personality.type,
    description: personality.description,
    hairColor: hairColor
  };
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

function displayResults(traits, result) {
  // Display the traits selected
  showTraitSelection(traits);
  
  // Show the final result in the format: "You are a [Hair Color] [Personality Type]"
  showPersonalityResult(result.hairColor, result.personality, result.description);
}
```

## Step 6: Visual Implementation in Effect House

1. Create text elements to display:
   - The trait values (hidden talent, love language, personality type, toxic trait)
   - The final result in the format: "You are a [Hair Color] [Personality Type]"
   - The personality description

2. Create visual effects for each step:
   - Animation for the random trait selection
   - Transition effects between traits
   - A reveal effect for the final personality and hair color result

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
- Include hair color visuals or overlays that match the three hair colors

This implementation focuses on optimizing for TikTok Effect House's capabilities while preserving the personality prediction logic from the web version. 