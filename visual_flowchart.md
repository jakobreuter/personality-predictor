# Personality Predictor Visual Flowchart

```
┌─────────────────┐
│                 │
│      START      │
│                 │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Generate Random │
│     Traits      │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────────┐
│              Hair Color                 │
├───────────────┬───────────┬─────────────┤
│               │           │             │
▼               ▼           ▼             ▼
Blonde      Dirty Blonde   Brunette
  │              │           │
  │              │           │
  ▼              ▼           ▼
┌───────────────────────────────────────┐
│         Add Points to Personalities   │
└───────────────────┬───────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│              Beverage                   │
├───────────────┬───────────┬─────────────┤
│               │           │             │
▼               ▼           ▼             ▼
Energy Drink/  Coffee/     Tea/Water
Soda           Juice
  │              │           │
  │              │           │
  ▼              ▼           ▼
┌───────────────────────────────────────┐
│         Add Points to Personalities   │
└───────────────────┬───────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│           Vacation Spot                 │
├───────────────┬───────────┬─────────────┤
│               │           │             │
▼               ▼           ▼             ▼
Beach/City    Countryside/  Mountains/
              Forest        Desert
  │              │           │
  │              │           │
  ▼              ▼           ▼
┌───────────────────────────────────────┐
│         Add Points to Personalities   │
└───────────────────┬───────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────┐
│                 Hobby                   │
├───────────────┬───────────┬─────────────┤
│               │           │             │
▼               ▼           ▼             ▼
Sports/Gaming  Music/Art   Reading/Cooking
  │              │           │
  │              │           │
  ▼              ▼           ▼
┌───────────────────────────────────────┐
│         Add Points to Personalities   │
└───────────────────┬───────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────┐
│          Calculate Total Points                 │
│                                                 │
│  ┌─────────────┐  ┌─────────┐  ┌────────────┐   │
│  │ Adventurer  │  │ Thinker │  │ Socialite  │   │
│  └─────────────┘  └─────────┘  └────────────┘   │
│                                                 │
│  ┌─────────────┐  ┌─────────┐  ┌────────────┐   │
│  │ Creator     │  │ Nurturer│  │ Achiever   │   │
│  └─────────────┘  └─────────┘  └────────────┘   │
│                                                 │
└────────────────────────┬────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────┐
│      Find Personality with Highest Points       │
└────────────────────────┬────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────┐
│                                                 │
│               FINAL RESULT                      │
│                                                 │
│        Personality Type + Description           │
│                                                 │
└────────────────────────┬────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────┐
│                                                 │
│                   END                           │
│                                                 │
└─────────────────────────────────────────────────┘
```

## Point Distribution Table

| Trait Category | Trait Value | Adventurer | Thinker | Socialite | Creator | Nurturer | Achiever |
|----------------|-------------|------------|---------|-----------|---------|----------|----------|
| **Hair Color** | Blonde | +2 | 0 | +1 | 0 | 0 | 0 |
|  | Dirty Blonde | 0 | 0 | 0 | +2 | +1 | 0 |
|  | Brunette | 0 | +2 | 0 | 0 | 0 | +1 |
| **Beverage** | Energy Drink/Soda | +2 | 0 | +1 | 0 | 0 | 0 |
|  | Coffee/Juice | 0 | 0 | 0 | +1 | 0 | +2 |
|  | Tea/Water | 0 | +2 | 0 | 0 | +1 | 0 |
| **Vacation** | Beach/City | +1 | 0 | +2 | 0 | 0 | 0 |
|  | Countryside/Forest | 0 | 0 | 0 | +2 | +2 | 0 |
|  | Mountains/Desert | 0 | +1 | 0 | 0 | 0 | +2 |
| **Hobby** | Sports/Gaming | +2 | 0 | 0 | 0 | 0 | +1 |
|  | Music/Art | 0 | 0 | +1 | +2 | 0 | 0 |
|  | Reading/Cooking | 0 | +2 | 0 | 0 | +2 | 0 |

## Personality Maximum Points

Each personality type can receive a maximum of:

- **Adventurer**: 7 points (2+2+1+2)
- **Thinker**: 7 points (2+2+1+2)
- **Socialite**: 5 points (1+1+2+1)
- **Creator**: 7 points (2+1+2+2)
- **Nurturer**: 6 points (1+1+2+2)
- **Achiever**: 6 points (1+2+2+1) 