var arrayExample = ['Alex', 'Ivan', 'Andrey'];

// loop throught the elements of an Array
arrayExample.forEach(function(element) {
    console.log(element)
})

var jsonExample = {
    name: "Alex",
    city: "Plovdiv",
    country: "Bulgaria",
    getName: function() {
        console.log(jsonExample.name);
    },
    interests: ['Sport', 'Books', 'Cooking'],
    information: {
        status: "married",
        wife: "Yoana",
        kid: {
            fname: "Alex",
            lname: "Petrov",
        }
    }
}
// loop through keys in Object
for(key in jsonExample){
    console.log(jsonExample[key])
}

function getFullName(firstName, lastName) {
    console.log('--->', firstName, lastName);
    var fullName = firstName + " " + lastName;
    return fullName;
}

var fullName = getFullName('Alexander', 'Petrov');

var getFullNameInterval = setTimeout(function(){
    var fullName = getFullName('Alexander', 'Petrov');
    console.log('Fullname: ', fullName);
}, 4000);

clearInterval(getFullNameInterval);


var hasName = true;
    hasName = false;
    

