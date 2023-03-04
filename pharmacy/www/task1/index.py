import frappe
from erpnext.e_commerce.shopping_cart.product_info import get_product_info_for_website

def get_context(context):
    productlist0 = frappe.db.sql("""

        SELECT tabItem.item_code, i.item_code  , i.item_name
        FROM `tabWebsite Item` as i
        INNER JOIN tabItem on tabItem.item_code = i.item_code 
        WHERE  i.published = 1

        """
        , as_dict=True)
    for  item in productlist0:
        productinfo = get_product_info_for_website(item.item_code, True ).get('product_info').get('price')
        if productinfo:
            item.update(productinfo) 

    context.productlist = productlist0
    context.customers = frappe.db.sql("""

        SELECT  c.name as customer_name , c.customer_group
        FROM `tabCustomer` as c 
        """
        , as_dict=True)