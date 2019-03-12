// Challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for(var i=0; i<students.length; i++){
    console.log('name:' + students[i].name +', '+ 'cohort:' + students[i].cohort);
}


// Challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };
for(var x in users){
  console.log(xtoUpperCase());
  for(var i=0; i<users[x].length; i++){
    console.log(i+1 +' - '+ users[x][i].last_name + ', ' + users[x][i].first_name +' - ' + (users[x][i].last_name.length + users[x][i].first_name.length));
  }
}