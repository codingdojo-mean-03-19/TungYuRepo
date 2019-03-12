1.
console.log(hello);                                   
var hello = 'world';    

// Rewrite the given code as it is seen by the interpreter

var hello;
console.log(hello);
hello = 'world'

// output: undefined

2. 
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}

// Rewrite the given code as it is seen by the interpreter

var needle;
test();
function test(){
  var needle;
  needle = 'magnet';
  console.log(needle);
}
needle = 'haystack'

// output: magnet

3.
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

// Rewrite the given code as it is seen by the interpreter

var brendan;
function print(){
  var brendan;
	brendan = 'only okay';
	console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);

// output: super cool

4. 
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

// Rewrite the given code as it is seen by the interpreter

var food;
food = 'chicken';
console.log(food);
eat();
function eat(){
  var food
	food = 'half-chicken';
	console.log(food);
	food = 'gone';
}

// output: chicken, half-chicken

5. 
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

// Rewrite the given code as it is seen by the interpreter

mean();
console.log(food);
var mean = function() {
  var food;
	food = "chicken";
	console.log(food);
	food = "fish";
	console.log(food);
}
console.log(food);

// output: "TypeError: mean is not a function"

6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);

// Rewrite the given code as it is seen by the interpreter

console.log(genre);
var genre;
genre = "disco";
rewind();
function rewind() {
  var genre;
	genre = "rock";
	console.log(genre);
	genre = "r&b";
	console.log(genre);
}
console.log(genre);

// output: undefined, rock, r&b, disco

7. 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

// Rewrite the given code as it is seen by the interpreter

var dojo;
dojo = "san jose"
console.log(dojo);
learn();
function learn() {
  var dojo;
	dojo = "seattle";
	console.log(dojo);
	dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);

// output: san jose, seattle, burbank, san jose

8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}

// Rewrite the given code as it is seen by the interpreter

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
  
        var name;
        var students;
        var hiring;

        const dojo = {
          'name': name,
          'students': students,
          'hiring': hiring
        };
        
        dojo.name = name;
        dojo.students = students;
        dojo.hiring = false;

        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}

 /* output:
 [object Object] {
  hiring: true,
  name: "Chicago",
  students: 65
}

"closed for now"*/