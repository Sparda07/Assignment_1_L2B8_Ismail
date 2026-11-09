// //PROBLEM 1: 

const multiplyValue = (value: number, multiplier?: number): number => {
    if (multiplier === undefined) {
        multiplier = 2;
    }
    return value * multiplier;
}

console.log(multiplyValue(5,3)); 
console.log(multiplyValue(5)); 
console.log(multiplyValue(5,0)); 
console.log(multiplyValue(500,3)); 
console.log(multiplyValue(1234)); 
console.log(multiplyValue(1234,0)); 



// //PROBLEM 2:


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


const formatCoordinate =  (longtitude: number, latitude: number, locationName:string): [number, number, string] => {
        return [latitude, longtitude, locationName];

}

const data = formatCoordinate(74.0060, 40.7128, "New York City");

console.log(`Location: ${data[2]}, Latitude: ${data[0]}, Longitude: ${data[1]}`);




//PROBLEM 4:


const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    return arrays.flat();
}

console.log(concatenateArrays([1, 2, 3], [4, 5, 6]));
console.log(concatenateArrays(["a", "b", "c"], ["A", "B", "C"]));


//PROBLEM 5:

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const courses: Course[] = [
    { title: "Nodejs", students: 100, isPublished: true },
    { title: "React", students: 200, isPublished: false },
    { title: "Angular", students: 150, isPublished: true },
    { title: "Vue", students: 50, isPublished: false },
];

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    return courses.filter((course) => course.students > minStudents && course.isPublished === true);
};

console.log(getPopularCourses(courses, 100));