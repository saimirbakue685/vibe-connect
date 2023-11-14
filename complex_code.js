/**
 * Filename: complex_code.js
 * 
 * Description: This JavaScript code demonstrates a complex system for managing a restaurant's operations, including handling reservations, menu management, order processing, and feedback collection.
 *
 * Author: Your Name
 */

// Class representing a Restaurant
class Restaurant {
  constructor(name, address, contact) {
    this.name = name;
    this.address = address;
    this.contact = contact;
    this.menu = new Menu();
    this.reservations = new Reservations();
  }

  // Add a new dish to the menu
  addDish(dish) {
    this.menu.addDish(dish);
  }

  // Remove a dish from the menu
  removeDish(dishName) {
    this.menu.removeDish(dishName);
  }

  // Make a reservation
  makeReservation(customer, date, time, tableSize) {
    return this.reservations.makeReservation(customer, date, time, tableSize);
  }

  // Get all reservations for a specific date
  getReservationsByDate(date) {
    return this.reservations.getReservationsByDate(date);
  }

  // Process an order
  processOrder(order) {
    // Order processing logic goes here
  }

  // Collect feedback from a customer
  collectFeedback(feedback) {
    // Feedback collection logic goes here
  }
}

// Class representing the Menu
class Menu {
  constructor() {
    this.dishes = [];
  }

  // Add a new dish to the menu
  addDish(dish) {
    this.dishes.push(dish);
  }

  // Remove a dish from the menu
  removeDish(dishName) {
    this.dishes = this.dishes.filter((dish) => dish.name !== dishName);
  }
}

// Class representing a Dish
class Dish {
  constructor(name, price, ingredients, description) {
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
    this.description = description;
  }
}

// Class representing the Reservations
class Reservations {
  constructor() {
    this.reservations = [];
  }

  // Make a reservation
  makeReservation(customer, date, time, tableSize) {
    const reservation = {
      customer,
      date,
      time,
      tableSize,
    };

    this.reservations.push(reservation);
    return reservation;
  }

  // Get all reservations for a specific date
  getReservationsByDate(date) {
    return this.reservations.filter((reservation) => reservation.date === date);
  }
}

// Usage example
const restaurant = new Restaurant("The Elegant Bite", "123 Main St, City", "555-1234");

// Adding dishes to the menu
const dish1 = new Dish("Pasta Carbonara", 12.99, ["Pasta", "Bacon", "Parmesan"], "Classic Italian dish");
const dish2 = new Dish("Grilled Salmon", 15.99, ["Salmon", "Asparagus", "Lemon"], "Healthy and delicious");
restaurant.addDish(dish1);
restaurant.addDish(dish2);

// Making a reservation
const reservation = restaurant.makeReservation("John Doe", "2022-12-25", "18:00", 4);
console.log("Reservation:", reservation);

// Retrieving reservations for a specific date
const reservations = restaurant.getReservationsByDate("2022-12-25");
console.log("Reservations for 2022-12-25:", reservations);

// Processing an order
const order = {
  customer: "Jane Smith",
  date: "2022-12-26",
  time: "19:30",
  tableSize: 2,
  dishes: [dish1, dish2],
};
restaurant.processOrder(order);

// Collecting feedback
const feedback = {
  customer: "John Doe",
  date: "2022-12-25",
  rating: 4,
  comment: "Great food and service!",
};
restaurant.collectFeedback(feedback);
