$(document).ready(function () {
    $('#customerTable').DataTable( {
        paging: false
    });
    
    $(".customersvalues").dblclick(function() {
        let value = $(this).children(".customername").text();
        console.log(value);
        $("#customer").val( value );
        $('#customer_modal').modal('hide');
    });

    
    $('#productTable').DataTable( {
        paging: false
    });
    $('.dataTables_length').addClass('bs-select');
    $('input[type=search]').attr("placeholder", "Enter Text");
    $(".productsvalues").dblclick(function() {
        let value1 = $(this).children(".productname").text();
        let n = $('#indexvalueforproducts').html();
        let selector = ".productss:eq("+n+")";
        $( selector ).val( value1 );
        $( selector ).removeClass( "hidden" );
        $('#product_modal').modal('hide');
    });
    
});

