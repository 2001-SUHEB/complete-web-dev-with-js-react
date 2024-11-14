// The Observer Pattern is a behavioral design pattern where one object, called the Subject (also known as the Observable), maintains a list of dependents, called Observers. When the state of the Subject changes, it automatically notifies all registered Observers, ensuring they stay in sync with the Subject's state.
class Observer {
    // This method will be called when the subject's state changes
    update(temp) {
      console.log(`Temperature updated to : ${temp}°C `);
    }
  }
  
  // Concrete Observer: Phone
  // This class represents a concrete observer, which reacts to temperature updates.
  class Phone extends Observer {
    // Overriding the update method to specify how a Phone should react to a temperature change
    update(temp) {
      console.log(`Phone : Temperature updated to : ${temp}°C `);
    }
  }
  
  // Concrete Observer: Thermostat
  // This class represents another concrete observer, which reacts to temperature updates.
  class Thermostat extends Observer {
    // Overriding the update method to specify how a Thermostat should react to a temperature change
    update(temp) {
      console.log(`Thermostat : Temperature updated to : ${temp}°C `);
    }
  }
  
  // Subject: Temperature Sensor
  // The TemperatureSensor acts as the subject (observable object), and it holds the state (temperature)
  class TempertaureSensor {
    constructor(temp) {
      // Initializing the sensor with a starting temperature and setting up an empty devices list
      console.log(`Initially temperature is set to ${temp}`);
      this.temp = temp;  // Store the current temperature
      this.devices = [];  // List of observers (devices)
    }
  
    // Method to add a device (observer) to the list of devices
    addDevice(device) {
      this.devices.push(device);
    }
  
    // Method to remove a device (observer) from the list of devices
    removeDevice(device) {
      // Filter out the device that needs to be removed from the list
      this.devices = this.devices.filter((dev) => dev !== device);
    }
  
    // Method to update the temperature, and notify all registered observers about the change
    updateTemp(temp) {
      // Updating the temperature and notifying all observers
      console.log(`Temperature updated to ${temp}`);
      this.temp = temp;  // Update the temperature
      this.notify();  // Notify all observers
    }
  
    // Method to notify all registered devices (observers) about the temperature update
    notify() {
      this.devices.forEach((device) => {
        // Call the update method of each observer to notify them of the change
        device.update(this.temp);
      });
    }
  }
  
  // Example usage:
  const oneplus = new Phone();  // Create an instance of the Phone observer
  const hospital = new Thermostat();  // Create an instance of the Thermostat observer
  
  // Create a Temperature Sensor (Subject) and set its initial temperature to 34°C
  const sensor = new TempertaureSensor(34);
  
  // Add both devices (observers) to the sensor (subject)
  sensor.addDevice(oneplus);
  sensor.addDevice(hospital);
  
  // Update the temperature to 45°C, which will trigger notifications to all observers
  sensor.updateTemp(45);
  