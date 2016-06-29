/****************************
Assignment 3, Part 1 
****************************/

//Practice with Arrays
// //#1 --> 1. Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
// var favoriteMovies = ["Dirty Dancing", "Singin' In The Rain", "White Christmas", "A League of Their Own", "Stranger Than Fiction"];

// console.log(favoriteMovies[1]);



// //#2 --> 2. Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
// var movies = [];
// movies[0] = "Dirty Dancing";
// movies[1] = "Singin' In The Rain";
// movies[2] = "White Christmas";
// movies[3] = "A League of Their Own";
// movies[4] = "Stranger Than Fiction";

// console.log(movies[0]);



//#3
// // Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
// var movies = ["Dirty Dancing", "Singin' In the Rain", "White Christmans", "A League of Their Own", "Stranger Than Fiction"];
// movies[2] = "Amelie";
// console.log(movies);

// //#4 --> 4. Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
// var movies = [];
// movies[0] = "Dirty Dancing";
// movies[1] = "Singin' In The Rain";
// movies[2] = "White Christmas";
// movies[3] = "A League of Their Own";
// movies[4] = "Stranger Than Fiction";

// delete movies[0];
// console.log(movies);



// //#5 --> Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window
// var movies = [];
// movies[0] = "Dirty Dancing";
// movies[1] = "Singin' In The Rain";
// movies[2] = "White Christmas";
// movies[3] = "A League of Their Own";
// movies[4] = "Stranger Than Fiction";
// movies[5] = "Amelie";
// movies[6] = "Un Cuento Chino";

// for (var i = 0; i < movies.length; i++){
//     console.log(movies[i]);
// }



// //#6 --> 6. Now, use a for-in loop to iterate through the array and display each movie within the console window.
// var movies = [];
// movies[0] = "Dirty Dancing";
// movies[1] = "Singin' In The Rain";
// movies[2] = "White Christmas";
// movies[3] = "A League of Their Own";
// movies[4] = "Stranger Than Fiction";
// movies[5] = "Amelie";
// movies[6] = "Un Cuento Chino";

// for (var x in movies){
//     console.log(movies[x]);
// }



// //#7 --> 7. Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.
// var movies =["Dirty Dancing", "Singin' in the Rain", "White Christmas", "A League of Their Own", "Stranger Than Fiction","Amelie","Un Cuento Chino"];
// var sortedMovies = movies.sort();

// for (var x in sortedMovies){
//     console.log(sortedMovies[x]);
// }



// //#8 --> 8. Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
            /*Movies I like:
            
            Movie 1
            Movie 2
            Movie 3
            …
            
            Movies I regret watching:
            
            Movie 1
            Movie 2
            Movie 3*/
// var movies =["Dirty Dancing", "Singin' in the Rain", "White Christmas", "A League of Their Own", "Stranger Than Fiction"];
// var badMovies = ["Speed 2", "Jackass 1/2/3", "Avatar"];
// console.log("Movies I like:")
// console.log("\n");
// for (var x in movies){
//     console.log(movies[x]);
// }
// console.log("\n"+"Movies I regret watching:");
// console.log("\n");
// for (x in badMovies){
//     console.log(badMovies[x]);
// }



// //#9 --> 9. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
// var movies =["Dirty Dancing", "Singin' in the Rain", "White Christmas", "A League of Their Own", "Stranger Than Fiction"];
// var badMovies = ["Speed 2", "Jackass 1/2/3", "Avatar"];

// var twoInOne = movies.concat(badMovies);

// console.log(twoInOne.sort().reverse());



// //#10 --> 10. Return just the last item in the array and display it within the console window.
// var movies =["Dirty Dancing", "Singin' in the Rain", "White Christmas", "A League of Their Own", "Stranger Than Fiction"];
// var badMovies = ["Speed 2", "Jackass 1/2/3", "Avatar"];

// var twoInOne = movies.concat(badMovies);
// var reverseSortMovies = twoInOne.sort().reverse();
// var lastReverSortMovies = reverseSortMovies.pop();

// console.log(lastReverSortMovies);



// //#11 --> 11. Remove the previous method and this time return just the first item in the array and display it within the console window.
// var movies =["Dirty Dancing", "Singin' in the Rain", "White Christmas", "A League of Their Own", "Stranger Than Fiction"];
// var badMovies = ["Speed 2", "Jackass 1/2/3", "Avatar"];

// var twoInOne = movies.concat(badMovies);
// var reverseSortMovies = twoInOne.sort().reverse();
// var firstReverseSortMovies = reverseSortMovies[0];

// console.log(firstReverseSortMovies);



// //#12-->12. Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 
// var movies =["Dirty Dancing", "Singin' in the Rain", "White Christmas", "A League of Their Own", "Stranger Than Fiction"];
// var badMovies = ["Speed 2", "Jackass 1/2/3", "Avatar"];

// var twoInOne = movies.concat(badMovies);
// var reverseSortMovies = twoInOne.sort().reverse();

// console.log(reverseSortMovies.indexOf("Speed 2") + ", " + reverseSortMovies.indexOf("Jackass 1/2/3") + ", " + reverseSortMovies.indexOf("Avatar"));

// reverseSortMovies[2] = "Sin City";
// reverseSortMovies[4] = "The Avengers";
// reverseSortMovies[6] = "Tucker and Dale vs. Evil";

// console.log(reverseSortMovies);



// //#13 --> 13. Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 
// var employee1 = [];
//     employee1["employeeid"] = "85";
//     employee1["name"] = "Luke";
//     employee1["title"] = "Assistant Professor";
//     employee1["department"] = "Philosophy";
//     employee1["current?"] = true;
// var employee2 = [];
//     employee2["employeeid"] = "98";
//     employee2["name"] = "Maria";
//     employee2["title"] = "Dean";
//     employee2["department"] = "Student Affairs";
//     employee2["current?"] = true;
// var employees = [employee1, employee2];

// console.log(employees[1]["name"]);



//#14 --> 14. Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.
// var employee1 = [];
//     employee1["employeeid"] = "85";
//     employee1["name"] = "Luke";
//     employee1["title"] = "Assistant Professor";
//     employee1["department"] = "Philosophy";
//     employee1["current?"] = true;
// var employee2 = [];
//     employee2["employeeid"] = "98";
//     employee2["name"] = "Maria";
//     employee2["title"] = "Dean";
//     employee2["department"] = "Student Affairs";
//     employee2["current?"] = true;
// var employees = [employee1, employee2];

// for (var i=0; i<employees.length;i++){
//     console.log(employees[i]["name"]);
// }



// //#15 --> 15. And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.
// var employee1 = [];
//     employee1["employeeid"] = "85";
//     employee1["name"] = "Luke";
//     employee1["title"] = "Assistant Professor";
//     employee1["department"] = "Philosophy";
//     employee1["current"] = true;
// var employee2 = [];
//     employee2["employeeid"] = "98";
//     employee2["name"] = "Maria";
//     employee2["title"] = "Dean";
//     employee2["department"] = "Student Affairs";
//     employee2["current"] = true;
// var employee3 = [];
//     employee3["employeeid"] = "33";
//     employee3["name"] = "Lars";
//     employee3["title"] = "Adjunct Professor";
//     employee3["department"] = "History";
//     employee3["current"] = false;
// var employees = [employee1, employee2, employee3];
// var i;

// for (i=0; i<employees.length;i++){
//     if (employees[i]["current"] == true){
//         console.log(employees[i]["name"]);
//     };
// }



// //#16 --> 16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
// /*
//         movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
//         Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.*/
//var movies = new Array();
// var movies = [
//     ["Stranger Than Fiction",5],
//     ["White Christmas",4],
//     ["Dirty Dancing",3],
//     ["A League of Their Own",2],
//     ["Singin' In the Rain",1]];
// var i;

// for (i=0;i<movies.length;i++){
//     var getMovies = movies[i].filter(function(item){
//         return typeof item == "string";
//      });
//     console.log(getMovies);
// }

/*********************************
Practice with Functions
**********************************/
// //#1 --> 1.	Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.
// var displayMessage = function(x){
//     console.log(x);
// }

// displayMessage("Hello World!");



// //#2 --> 2.	Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.
// function calculate(x,y){
//     return x%y
// }
// console.log(calculate(20,4));



//#3 --> 3.	Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:
            /*Employees: 
            
            ZAK 
            JESSICA 
            MARK 
            FRED 
            SALLY*/
// var employees = ["Zak","Jessica","Mark","Fred","Sally"];
// var showEmployee = function(x){
//     for (var i=0;i<x.length;i++){
//         console.log(x[i]);
//     }
// };
// showEmployee(employees);
