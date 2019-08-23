// function test() {
//     var person = {
//         name: "Bobby",
//         age: 12
//       }
// }
//     console.log(test())

for (i=0; i <= 100; i++) {
    if (i % 2){
        console.log('even')
    } else {
        console.log('odd')
    }  
    console.log(i)
}

// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]; 

// for (i=0; i<officeItems.length; i++) {
//     if (officeItems[i]==='computer'; i++);

//     console.log(officeItems[i])
// }

// if blank is blank ? value-if-true : value-if-false
        // Think of the ? as "then" and : as "else". the if is always first and the if statement is always set to look if something is truthy. the else checks if its falsey.

        var person = {
            name: "Bobby",
            age: 12
          }
        
          if (person.name === "Bobby") {
            console.log('Not allowed to go to the movie')
        } else  
         console.log('Is allowed to go to the movie')
        
        
        
        //   if (person.age < 18) {
        //       console.log('Not allowed to go to the movie')
        //   } else
        //    console.log('Is allowed to go to the movie')
        
        // var age = 10
        
        // if (age > 9) {
        //     console.log('Allow the user in')
        // } else {
        //     console.log('Do Not Allow the user in')
        // }