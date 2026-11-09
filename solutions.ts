//PROBLEM 1: 

const multiplyvalue = (value: number, multiplier?: number): number => {
    if (multiplier === undefined) {
        multiplier = 2;
    }
    return value * multiplier;
}

console.log(multiplyvalue(5,3)); 
console.log(multiplyvalue(5)); 
console.log(multiplyvalue(5,0)); 
console.log(multiplyvalue(500,3)); 
console.log(multiplyvalue(1234)); 
console.log(multiplyvalue(1234,0)); 



//PROBLEM 2:


const processInput = (input: string | number | boolean) => {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }

    if (typeof input === "number") {
        return input * 10;
    }

    if (typeof input === "boolean") {
        return input ? "Active" : "Inactive";
}

};

console.log(processInput("  Hello Ismail  "));
console.log(processInput(5));
console.log(processInput(true));
console.log(processInput(false));
console.log(processInput("Hello Rahim   "));
console.log(processInput("  Hello Karim"));
console.log(processInput("Hello Ismail"));
console.log(processInput(1234));
console.log(processInput(4567));
console.log(processInput(10));



//PROBLEM 3:


const formatCoordinate: readonly[ latitude: number, longitude: number, locationName: string] = [40.7128, -74.0060, "New York City"]; 

console.log(`Location: ${formatCoordinate[2]}, Latitude: ${formatCoordinate[0]}, Longitude: ${formatCoordinate[1]}`);
