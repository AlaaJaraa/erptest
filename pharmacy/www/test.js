
$(document).ready(function () {

    gettodo();
});

var gettodo = function(){
    
    frappe.call({
       method: 'pharmacy.www.test.get_todolist_html',
       args: {

       },
       callback: function(r) {
           if (!r.exc) {
               jQuery('#placeholdersection1').html('');
   
               if(typeof r.message != 'undefined'){ 
   
                   $(r.message).appendTo('#placeholdersection1');
               }
           }
       }
   });
   
}
