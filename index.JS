// Make a function that can calculate the area of a rectangle.

function areaOfRectangle(length, width) {
    return length * width;
}   
console.log(areaOfRectangle(5, 6));

// If area of rectangle is greater than 20, display "Bigger than 20" otherwise display "Smaller than 20"

if (areaOfRectangle(5, 6) > 20) {
    console.log("Bigger than 20");
} else {
    console.log("Smaller than 20");
}