var rutgers = require('nextbusjs').client();

function refreshData() {
  x = 30;  // 30 Seconds
  // Do your thing here
  rutgers.cacheAgency('rutgers', function (err) {
    if (err) {
      throw err;
    } else {

      function loop(){
        rutgers.stopPredict('Hill Center', null, function (err, data) {
          // data will contain:
          //console.log(data);
          console.clear();

          for (var bus in data){

            if(data[bus]["predictions"] != null){

              console.log(data[bus]["title"]);
              console.log(data[bus]["direction"]);
              //console.console.log(data[bus]["predictions"]);
              var time = "";
              for(var min in data[bus]["predictions"]){
                time += (data[bus]["predictions"][min] + ' min, ')

              }
              //console.log(data[bus]["predictions"]);
              console.log(time);

              console.log("");

            }
          }
          console.log("");
          console.log("Club meetings:");
          console.log("FizzBuzz Interview Prep: Wed at 9pm");
          console.log("RUMAD Mobile Dev: Wed at 8:30pm in Meltdown");
          console.log("QFC Quantitative Finance: Tues and Thurs at 9:45pm on Livi");
          console.log("COGS Creation of Games: Tues at 7pm");
          console.log("WiCS Women in CS: Every other Wed at 9pm in Command Center");
          console.log("IEEE Engineering Society: Wed at 8pm in BCC 116bc");
          console.log("SWE Society of Women Engineers: Tues at 7pm in BCC 174");


        }, 'minutes');

	      
        setTimeout(loop, x*1000);
      }


      loop();
    }
  });
}

refreshData(); // execute function
