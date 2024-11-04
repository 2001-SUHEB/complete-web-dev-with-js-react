// Open/Closed Principle (OCP)
// The Open/Closed Principle states that software entities (classes, modules, functions, etc.) 
// should be open for extension but closed for modification.
// This allows for new functionality to be added without altering existing code.

// Discount class represents the base structure for discount calculation.
// It adheres to SRP by handling the calculation of the discount amount.
class Discount {
    calculate(customer) {
        // Default calculation returns the full amount with no discount applied.
        return customer.amount; // No discount applied
    }
}

// RegularDiscount class extends the Discount class.
// It applies a 10% discount and adheres to OCP by extending functionality.
class RegularDiscount extends Discount {
    calculate(customer) {
        // Applies a 10% discount to the amount.
        return customer.amount * 0.9; // 10% discount
    }
}

// PremiumDiscount class extends the Discount class.
// It applies a 20% discount and follows the OCP principle.
class PremiumDiscount extends Discount {
    calculate(customer) {
        // Applies a 20% discount to the amount.
        return customer.amount * 0.8; // 20% discount
    }
}

// getDiscount function determines the appropriate discount to apply based on customer type.
// It demonstrates the use of polymorphism through the Discount classes.
function getDiscount(customer) {
    const { type } = customer; // Destructure the type from the customer object
    let discountObj; // Variable to hold the appropriate discount object

    // Select the appropriate discount class based on the customer's type
    if (type === "premium") {
        discountObj = new PremiumDiscount(); // Use PremiumDiscount for premium customers
    } else if (type === "regular") {
        discountObj = new RegularDiscount(); // Use RegularDiscount for regular customers
    } else {
        discountObj = new Discount(); // Default case: no discount
    }

    // Calculate and return the final discounted price
    return discountObj.calculate(customer); 
}

// Example customer object representing a regular customer
const customer = { type: "regular", amount: 1000 };

// Calculate the final price after discount for the customer
const finalPrice = getDiscount(customer);

// Log the final discounted price to the console
console.log(finalPrice); // Outputs: 900 (10% discount applied to 1000)
