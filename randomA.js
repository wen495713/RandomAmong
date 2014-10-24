function RanAmong(weights) {
      var luckNo = parseInt(Math.random() * 100000000000000);
        console.log('lukNo = '+luckNo);
          var total = 0;
            for (var i in weights) {
                    total += weights[i];
                      }
                        console.log('total = '+total);
                          var index = luckNo % total + 1;
                            console.log('indx = '+index);
                              total = 0;
                                for (var i in weights) {
                                        total += weights[i];
                                            if (index <= total)
                                                      return i;
                                                        }
                                                          return -1;
} 
