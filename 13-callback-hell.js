setTimeout(function(){

    console.log(`=== One ===`);

    setTimeout(function(){

        console.log(`=== two ===`);

        setTimeout(function(){

            console.log(`=== three ===`);

            setTimeout(function(){

                console.log(`=== four ===`);

            }, 7000);

        }, 6000);

    }, 5000);

}, 4000); 