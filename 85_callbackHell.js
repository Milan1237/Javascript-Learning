/**
 * callback hell / pyramid of doom
 * inversion control 
 */

// In javascript, when nested callback are overused then it becomes hard to maintain and modify the code. this scenario is called callback hell.
//and while using callback hell, the code actually grow horizontally and it looks like a pyramid. and it called pyramid of doom .

// when a function execution is depends on a certain function in which we have passed the callback function. it is called inversion of controll .

//demo example of callback hell/ pyramid of dooms

bookHotel(hotelId,function(){
    if(err){
        errorHandler();
     }else{
        proceedToPayment(hotelId,function(){
           if(err){
             erroHandler();
           }else{
             showBookingStatus(hotelId,function(){
                if(err){
                  errorHandler();
                }else{
                  updateBookingHistroy(hotelId,function(){
                    success();
                  })
                 }
             })
            }
        })
      }
})


//in these scenarios, to remove all this cons we use promises to fetch data or etc.