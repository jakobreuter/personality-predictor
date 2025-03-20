// Random Trait Personality Predictor
// This script randomly assigns traits in 4 categories (including hair color) and determines personality

// Define the 4 categories with trait options
const categories = {
    hairColor: ["Blonde", "Dirty Blonde", "Brunette"],
    beverage: ["Coffee", "Tea", "Water", "Soda", "Juice", "Energy Drink"],
    vacationSpot: ["Beach", "Mountains", "City", "Countryside", "Desert", "Forest"],
    hobby: ["Reading", "Gaming", "Sports", "Music", "Art", "Cooking"]
};

// Personality types with descriptions
const personalityTypes = [
    {
        type: "The Adventurer",
        description: "You're bold, spontaneous, and always ready for the next big thing! You love new experiences and aren't afraid to step outside your comfort zone."
    },
    {
        type: "The Thinker",
        description: "You're analytical, thoughtful, and introspective. You love diving deep into interesting topics and often find yourself lost in thought."
    },
    {
        type: "The Socialite",
        description: "You're outgoing, charismatic, and the life of every party! You thrive on social connections and love bringing people together."
    },
    {
        type: "The Creator",
        description: "You're imaginative, artistic, and always seeing the world in unique ways. You love expressing yourself and bringing beauty into the world."
    },
    {
        type: "The Nurturer",
        description: "You're caring, compassionate, and always looking out for others. Your empathy and kindness make you a wonderful friend."
    },
    {
        type: "The Achiever",
        description: "You're ambitious, determined, and focused on your goals. When you set your mind to something, there's no stopping you!"
    }
];

// Function to randomly select a trait from a category
function getRandomTrait(category) {
    const traits = categories[category];
    const randomIndex = Math.floor(Math.random() * traits.length);
    return traits[randomIndex];
}

// Generate random traits for all categories
function generateRandomTraits() {
    return {
        hairColor: getRandomTrait("hairColor"),
        beverage: getRandomTrait("beverage"),
        vacationSpot: getRandomTrait("vacationSpot"),
        hobby: getRandomTrait("hobby")
    };
}

// Logic to determine personality type based on trait combinations
function determinePersonality(traits) {
    // Point system for determining personality type
    let pointsArray = Array(personalityTypes.length).fill(0);
    
    // Hair color logic
    if (traits.hairColor === "Blonde") {
        pointsArray[0] += 2; // Adventurer
        pointsArray[2] += 1; // Socialite
    } else if (traits.hairColor === "Dirty Blonde") {
        pointsArray[3] += 2; // Creator
        pointsArray[4] += 1; // Nurturer
    } else if (traits.hairColor === "Brunette") {
        pointsArray[1] += 2; // Thinker
        pointsArray[5] += 1; // Achiever
    }
    
    // Beverage logic
    if (traits.beverage === "Energy Drink" || traits.beverage === "Soda") {
        pointsArray[0] += 2; // Adventurer
        pointsArray[2] += 1; // Socialite
    } else if (traits.beverage === "Coffee" || traits.beverage === "Juice") {
        pointsArray[3] += 1; // Creator
        pointsArray[5] += 2; // Achiever
    } else if (traits.beverage === "Tea" || traits.beverage === "Water") {
        pointsArray[1] += 2; // Thinker
        pointsArray[4] += 1; // Nurturer
    }
    
    // Vacation spot logic
    if (traits.vacationSpot === "Beach" || traits.vacationSpot === "City") {
        pointsArray[0] += 1; // Adventurer
        pointsArray[2] += 2; // Socialite
    } else if (traits.vacationSpot === "Countryside" || traits.vacationSpot === "Forest") {
        pointsArray[3] += 2; // Creator
        pointsArray[4] += 2; // Nurturer
    } else if (traits.vacationSpot === "Mountains" || traits.vacationSpot === "Desert") {
        pointsArray[1] += 1; // Thinker
        pointsArray[5] += 2; // Achiever
    }
    
    // Hobby logic
    if (traits.hobby === "Sports" || traits.hobby === "Gaming") {
        pointsArray[0] += 2; // Adventurer
        pointsArray[5] += 1; // Achiever
    } else if (traits.hobby === "Music" || traits.hobby === "Art") {
        pointsArray[2] += 1; // Socialite
        pointsArray[3] += 2; // Creator
    } else if (traits.hobby === "Reading" || traits.hobby === "Cooking") {
        pointsArray[1] += 2; // Thinker
        pointsArray[4] += 2; // Nurturer
    }
    
    // Find index of personality with most points
    const maxPoints = Math.max(...pointsArray);
    const personalityIndex = pointsArray.indexOf(maxPoints);
    
    return personalityTypes[personalityIndex];
}

// Display the traits and resulting personality on screen
function displayResults(traits, personality) {
    // This function would be integrated with Effect House to display the results
    
    // For demonstration purposes:
    const results = {
        traits: traits,
        personality: personality
    };
    
    return results;
}

// Main function to run the filter
function runPersonalityPredictor() {
    const traits = generateRandomTraits();
    const personality = determinePersonality(traits);
    return displayResults(traits, personality);
}

// Export functions for Effect House
module.exports = {
    runPersonalityPredictor,
    generateRandomTraits,
    determinePersonality
}; 