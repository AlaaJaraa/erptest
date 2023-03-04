
// $( "body" ).append( '<script>var correctCaptcha = function() {var response = grecaptcha.getResponse();console.log("zzzzzzz");console.log(response);frappe.call({"method": "pharmacy.www.pages.captcha.verify_v2_captcha","args": {"token": response},freeze: true,callback: (r) => {let verified = r.message; console.log(verified);if (verified){msgprint("All done!");}else {msgprint("Somethings wrong with robot checker 🤖, the developers will be notified");}}});};</script>');

$(document).ready(function () {
    $( "head" ).append( '<script src="https://www.google.com/recaptcha/api.js">');
    // $('<h1>Version 2 Invisiable example</h1><form action="?" method="POST" id="form1"><div class="g-recaptcha" data-sitekey="6LfHheMiAAAAAJ4wHphQCaps5dwn8GPN9mnO_1FJ" id="html_element"></div><br><input id="mySubmit" type="submit" value="Submit" disabled></form><script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>').insertBefore(".page-body");
    $('<h1>Version 2 Invisiable example</h1><div id="recaptcha" class="g-recaptcha" data-callback="correctCaptcha" data-sitekey="6LfHheMiAAAAAJ4wHphQCaps5dwn8GPN9mnO_1FJ" ></div>').insertBefore(".page-body");
    // var onloadCallback = function() {
     
    //  grecaptcha.render('html_element', {
    //    'sitekey' : '6LfHheMiAAAAAJ4wHphQCaps5dwn8GPN9mnO_1FJ',
    //    'callback' : correctCaptcha
    //  });
     
    // };
    
    // var correctCaptcha = function() {
    //     var response = grecaptcha.getResponse();
    //     console.log("zzzzzzz");
    //     console.log(response);
    //     frappe.call({
    //         "method": "pharmacy.www.pages.captcha.verify_v2_captcha",
    //         "args": {
    //             'token': response
    //         },
    //         freeze: true,
    //         callback: (r) => {
    //             let verified = r.message; 
    //             console.log(verified);
    //             if (verified){
    //                 // finally, perform your desired action
    //                 // e.g submit your form with frappe.call() or similar
    //                 document.getElementById("mySubmit").disabled = false;
    //                 msgprint("All done!");
    //             }
    //             else {
    //                 msgprint("Something's wrong with robot checker 🤖, the developers will be notified");
    //             }
    //         }
    //     });
    // };
});



frappe.ui.form.on('Item', {
	refresh(frm) {
		// your code here
        frm.remove_custom_button('Publish in Website','Actions');
        if (!frm.doc.published_in_website) {
            $( "body" ).append( '<script>var correctCaptcha = function() {var response = grecaptcha.getResponse();console.log("zzzzzzz");console.log(response);frappe.call({"method": "pharmacy.www.pages.captcha.verify_v2_captcha","args": {"token": response},freeze: true,callback: (r) => {let verified = r.message; console.log(verified);if (verified){msgprint("All done!");}else {msgprint("Somethings wrong with robot checker 🤖, the developers will be notified");}}});};</script>');
			frm.add_custom_button(__("Publish in Website with captch check"), function() {
				frappe.call({
					method: "erpnext.e_commerce.doctype.website_item.website_item.make_website_item1",
					args: {doc: frm.doc},
					freeze: true,
					freeze_message: __("Publishing Item ..."),
					callback: function(result) {
						frappe.msgprint({
							message: __("Website Item {0} has been created.",
								[repl('<a href="/app/website-item/%(item_encoded)s" class="strong">%(item)s</a>', {
									item_encoded: encodeURIComponent(result.message[0]),
									item: result.message[1]
								})]
							),
							title: __("Published"),
							indicator: "green"
						});
					}
				});
			}, __('Actions'));
		}
        console.log("zzzzzzzdddddddddd");
	}
})




// frm.add_custom_button 
// Add a custom button in the inner toolbar of the page. Alias to page.add_inner_button.

// // Custom buttons
// frm.add_custom_button('Open Reference form', () => {
//     frappe.set_route('Form', frm.doc.reference_type, frm.doc.reference_name);
// })

// // Custom buttons in groups
// frm.add_custom_button('Closed', () => {
//     frm.doc.status = 'Closed'
// }, 'Set Status');
// frm.change_custom_button_type 
// Change a specific custom button type by label (and group).

// // change type of ungrouped button
// frm.change_custom_button_type('Open Reference form', null, 'primary');

// // change type of a button in a group
// frm.change_custom_button_type('Closed', 'Set Status', 'danger');
// frm.remove_custom_button 
// Remove a specific custom button by label (and group).

// // remove custom button
// frm.remove_custom_button('Open Reference form');

// // remove custom button in a group
// frm.remove_custom_button('Closed', 'Set Status');
// frm.clear_custom_buttons 
// Remove all custom buttons from the inner toolbar.

// frm.clear_custom_buttons();