// Function to calculate the area of a trapezium
function trapeziumArea(a, b, h) {
    // Check if the inputs are numbers and are positive
    if (typeof a !== 'number' || typeof b !== 'number' || typeof h !== 'number') {
        throw new Error("All inputs must be numbers.");
    }
    if (a <= 0 || b <= 0 || h <= 0) {
        throw new Error("All inputs must be positive numbers.");
    }

    // Calculate the area using the formula: Area = 1/2 * (a + b) * h
    const area = 0.5 * (a + b) * h;
    
    // Return the calculated area
    return area;
}

// Example usage:
const a = 5; // Length of first parallel side
const b = 7; // Length of second parallel side
const h = 10; // Height

try {
    const area = trapeziumArea(a, b, h);
    console.log(`The area of the trapezium is: ${area}`);
} catch (error) {
    console.error(error.message);
}
