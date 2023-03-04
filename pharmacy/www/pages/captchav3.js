
// version 3
// frappe.require("https://www.google.com/recaptcha/api.js?render=6Lcnw-IiAAAAAD0HQsBWDm7EnkhHsTT2K6z6OskT")


// site key 6Lcnw-IiAAAAAD0HQsBWDm7EnkhHsTT2K6z6OskT
//secret key 6Lcnw-IiAAAAAF482wg4pt0iPvfbIjpnGQf8Rqa3

function onSubmit() {
    console.log("0000");
    // $("#form0").submit(function(e){
    //     return false;
    // });
    // this.preventDefault();
    grecaptcha.ready(function() {
        console.log("00002");
      grecaptcha.execute('6Lcnw-IiAAAAAD0HQsBWDm7EnkhHsTT2K6z6OskT', {action: 'submit'}).then(function(token) {
          // Add your logic to submit to your backend server here.
          console.log("111111111");
          onClick1(token);
      });
    });
  }

function onClick1(token) {
    console.log("ggggg");

    console.log(token);
    //verify captcha and perform your desired action
    frappe.call({
        "method": "pharmacy.www.pages.captcha.verify_v3_captcha",
        "args": {
            'token': token
        },
        freeze: true,
        callback: (r) => {
            let verified = r.message; //result is score 0.1 - 1 or false
            console.log(verified);
            if (verified){
                if (parseFloat(verified) > 0.3){
                    // finally, perform your desired action
                    // e.g submit your form with frappe.call() or similar
                    msgprint("All done!");

                    
                }
                else {
                    msgprint("Looks like you're a robot 🤖", "Wait a minute...");
                }
            }
            else {
                msgprint("Something's wrong with robot checker 🤖, the developers will be notified");
            }
            
        }
    });
    
}