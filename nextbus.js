function refreshData()
    {
        x = 60;  // 5 Seconds
        console.clear();
        // Do your thing here
        var rutgers = require('nextbusjs').client();
            rutgers.cacheAgency('rutgers', function (err) {
               if (err) {
                  throw err;
               } else {
                  rutgers.routePredict('a', null, function (err, data) {
                     // data will contain:

                  }, 'minutes');
                  rutgers.stopPredict('Hill Center', null, function (err, data) {
                     // data will contain:
                     //console.log(data);
                     console.log(data);

                     for (var bus in data){

                       if(data[bus]["predictions"] == null){

                       }else{


                        console.log(data[bus]["title"]);
                        console.log(data[bus]["direction"]);
                        //console.console.log(data[bus]["predictions"]);
                        var time = "";
                        for(var min in data[bus]["predictions"]){
                            time += (data[bus]["predictions"][min] + ' min, ')

                        }
                        //console.log(data[bus]["predictions"]);
                        console.log(time);

                        console.log("\n\n")

                      }
                     }

                  }, 'minutes');
                  var nearest = rutgers.closestStops(40.40264, -74.3840120);
                  //{ 'Rutgers Student Center': 7,
                  //  'Student Activities Center': 6,
                  //  'Scott Hall': 5 }
               }
            });
        setTimeout(refreshData, x*1000);
    }
refreshData(); // execute function
