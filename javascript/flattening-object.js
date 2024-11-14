function flatten(obj, parent = "", result = {}) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      // If the current value is an object (and not null or an array)
      if (
        typeof obj[key] === "object" &&
        obj[key] !== null &&
        !Array.isArray(obj[key])
      ) {
        // Update the parent key for nested objects and recurse
        let newParent = parent ? `${parent}.${key}` : key;
        flatten(obj[key], newParent, result);
      } else {
        let newParent = parent ? `${parent}.${key}` : key;
        // If it's not an object, add the value to result with the flattened key
        result[newParent] = obj[key];
      }
    }
  }
  return result;
}

const userData = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: {
      code: "CA",
      full: "California",
    },
  },
  contact: {
    phone: {
      home: "555-555-5555",
      work: "555-555-5556",
    },
    email: "john@example.com",
  },
  preferences: {
    notifications: {
      email: true,
      sms: false,
    },
    theme: "dark",
  },
};

console.log(flatten(userData));
