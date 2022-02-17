function createDog(){
    // This function should return an object
    // It should have an "age" property set to 1
    // It should have a "name" property set to "Rosie"
    // It should have a "toys" property set to an array containing the strings "kong" and "stuffed animal"
}

function createBarkingDog(dogName){
    // This function should return an object
    // It should have a "name" property set to the dogName input
    // It should have a "bark" method that returns a string message
    // The message should say "bark bark I am ______", putting the dogName property inside the message
    // So, if the dogName were "Rosie", it would say "bark bark I am Rosie"
}

module.exports = {
    createDog,
    createBarkingDog
}