// var yaer = 2001;
// var test = yaer%4;
// console.log(test);

//  if (test === 0) {
//      console.log ('год висакосный');
//  } else  {
//     console.log ('год не висакосный');
//  }

//  function yaerFunc (myYaer){
//     console.log (myYaer)
//  }

function yr (myYaer) {
    // var yaer = 2000;
    var yaer = myYaer;
    var del = yaer%4;

    if (del === 0) {
        console.log ('год висакосный ', yaer);

     } //else {
    //     console.log ('год не висакосный', yaer);
    // }
    
}

for (var i=1990; i<2100; i++) {
    // console.log('number:');
    // console.log(i);
    yr(i)
  }
  

// yr(1000);

// yr(1001);