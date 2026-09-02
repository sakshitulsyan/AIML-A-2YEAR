let studentData = {
    name: "Sakshi",
    age: 18
};

console.log("Before:", studentData);

// Adding property
studentData.course = "BTech";

// Deleting property
delete studentData.age;

console.log("After:", studentData);