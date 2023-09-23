const fs = require("fs");

// Function to read data from the data.js file
const readDataFromFile = () => {
  try {
    const data = fs.readFileSync("./src/data.json", "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading data from file:", err);
    return [];
  }
};

// Function to write data to the data.js file
const writeDataToFile = (data) => {
  try {
    fs.writeFileSync(
      "./src/data.json",
      JSON.stringify(data, null, 2)
      );
  } catch (err) {
    console.error("Error writing data to file:", err);
  }
};

class Controller {
  // getting all meetups
  async getMeetups() {
    let data = readDataFromFile()
    // return all meetups
    return new Promise((resolve, _) => resolve(data));
  }

  // getting a single meetup
  async getMeetup(id) {
    return new Promise((resolve, reject) => {
      // get the meetup
      let data = readDataFromFile()
      let meetup = data.find((meetup) => meetup.id === parseInt(id));
      if (meetup) {
        // return the meetup
        resolve(meetup);
      } else {
        // return an error
        reject(`Meetup with id ${id} not found `);
      }
    });
  }

  // creating a meetup
  async createMeetup(meetup) {
    // Get the data sent along
    let newMeetup = JSON.parse(meetup);
    // Read the existing data from the file
    let meetups = readDataFromFile();
    // Set the id for the new meetup
    newMeetup.id = meetups.length + 1;
    // Append the new meetup to the existing data
    meetups.push(newMeetup);
    // Write the updated data back to the file
    writeDataToFile(meetups);

    return new Promise((resolve, _) => {
      // create a meetup, with random id and data sent
      // let newMeetup = {
      //   ...meetup,
      // };

      // return the new created meetup
      resolve(newMeetup);
    });
  }

  // updating a meetup
  async updateMeetup(id, field, data) {
    return new Promise((resolve, reject) => {
      // get meetup with required id
      meetup = readDataFromFile()[id]
      // set meetup field as new updated data
      meetup[field] = data
      // push the new data back to the JSON
      
      resolve(meetup);
    });
  }

  // deleting a meetup
  async deleteMeetup(id) {
    return new Promise((resolve, reject) => {
      // get the meetup
      let meetup = data.find((meetup) => meetup.id === parseInt(id));
      // if no meetup, return an error
      if (!meetup) {
        reject(`No meetup with id ${id} found`);
      }
      // else, return a success message
      resolve(`Meetup deleted successfully`);
    });
  }
}
module.exports = Controller;
