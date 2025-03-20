# Personality Predictor Decision Tree

This document explains the if-then logic used to determine personality types in our TikTok filter.

## Point System Overview

Each trait contributes points to different personality types:
- The Adventurer
- The Thinker
- The Socialite
- The Creator
- The Nurturer
- The Achiever

## Decision Tree Logic

```
START → Random Traits Assigned → Calculate Points → Determine Highest Score → END

1. HAIR COLOR
   ├── IF Blonde
   │   ├── +2 points to Adventurer
   │   └── +1 point to Socialite
   ├── IF Dirty Blonde
   │   ├── +2 points to Creator
   │   └── +1 point to Nurturer
   └── IF Brunette
       ├── +2 points to Thinker
       └── +1 point to Achiever

2. BEVERAGE
   ├── IF Energy Drink OR Soda
   │   ├── +2 points to Adventurer
   │   └── +1 point to Socialite
   ├── IF Coffee OR Juice
   │   ├── +1 point to Creator
   │   └── +2 points to Achiever
   └── IF Tea OR Water
       ├── +2 points to Thinker
       └── +1 point to Nurturer

3. VACATION SPOT
   ├── IF Beach OR City
   │   ├── +1 point to Adventurer
   │   └── +2 points to Socialite
   ├── IF Countryside OR Forest
   │   ├── +2 points to Creator
   │   └── +2 points to Nurturer
   └── IF Mountains OR Desert
       ├── +1 point to Thinker
       └── +2 points to Achiever

4. HOBBY
   ├── IF Sports OR Gaming
   │   ├── +2 points to Adventurer
   │   └── +1 point to Achiever
   ├── IF Music OR Art
   │   ├── +1 point to Socialite
   │   └── +2 points to Creator
   └── IF Reading OR Cooking
       ├── +2 points to Thinker
       └── +2 points to Nurturer

5. FINAL DETERMINATION
   └── Find personality type with the highest points
       ├── IF tie, select the first personality type in the list
       └── RETURN personality type and description
```

## Examples

### Example 1:
- Hair Color: Blonde
- Beverage: Soda
- Vacation Spot: Beach
- Hobby: Sports

Points calculation:
- Adventurer: 2 (Hair) + 2 (Beverage) + 1 (Vacation) + 2 (Hobby) = 7
- Thinker: 0
- Socialite: 1 (Hair) + 1 (Beverage) + 2 (Vacation) + 0 (Hobby) = 4
- Creator: 0
- Nurturer: 0
- Achiever: 0 + 0 + 0 + 1 (Hobby) = 1

Result: The Adventurer (7 points)

### Example 2:
- Hair Color: Brunette
- Beverage: Tea
- Vacation Spot: Mountains
- Hobby: Reading

Points calculation:
- Adventurer: 0
- Thinker: 2 (Hair) + 2 (Beverage) + 1 (Vacation) + 2 (Hobby) = 7
- Socialite: 0
- Creator: 0
- Nurturer: 0 + 1 (Beverage) + 0 + 2 (Hobby) = 3
- Achiever: 1 (Hair) + 0 + 2 (Vacation) + 0 = 3

Result: The Thinker (7 points) 