



// v2 invisable
// site key: 6LfHheMiAAAAAJ4wHphQCaps5dwn8GPN9mnO_1FJ
// secret key: 6LfHheMiAAAAAGdqmyvKPtHmOqV933JrGIOLaGfM

frappe.require("https://www.google.com/recaptcha/api.js")

var onloadCallback = function() {
    
    grecaptcha.render('html_element', {
      'sitekey' : '6LfHheMiAAAAAJ4wHphQCaps5dwn8GPN9mnO_1FJ',
      'callback' : correctCaptcha
    });
    
};


var correctCaptcha = function(response) {
    // alert(response);
    // console.log(response);
    // if(response.lenght !== 0){
    //     document.getElementById("mySubmit").disabled = false;
    // }
    console.log("zzzzzzz");
    console.log(response);

    
    //verify captcha and perform your desired action
    frappe.call({
        "method": "pharmacy.www.pages.captcha.verify_v2_captcha",
        "args": {
            'token': response
        },
        freeze: true,
        callback: (r) => {
            let verified = r.message; 
            console.log(verified);
            if (verified){
                // finally, perform your desired action
                // e.g submit your form with frappe.call() or similar
                document.getElementById("mySubmit").disabled = false;
                msgprint("All done!");
            }
            else {
                msgprint("Something's wrong with robot checker 🤖, the developers will be notified");
            }
        }
    });
};

