
import frappe
from urllib.parse import urlencode
from urllib.request import urlopen
import json


@frappe.whitelist(allow_guest=True)
def verify_v3_captcha(token):
    URL = 'https://www.google.com/recaptcha/api/siteverify'
    private_key = '6Lcnw-IiAAAAAF482wg4pt0iPvfbIjpnGQf8Rqa3'
    params = urlencode({
        'secret': private_key,
        'response': token,
    })

    data = urlopen(URL, params.encode('utf-8')).read()
    result = json.loads(data)
    success = result.get('success', None)

    # frappe.errprint( float(result.get('score', 1)) )

    if success == True:
        # return the score if verification was successful
        # frappe.errprint( 'reCaptcha success ' + str(result) )
        # print("the score is?: ")
        # print(float( result.get('score', 1) ))
        return float( result.get('score', 1) ) 
    else:
        frappe.errprint( 'reCaptcha failed ' + str(result) )
        return False


@frappe.whitelist(allow_guest=True)
def verify_v2_captcha(token):
    URL = 'https://www.google.com/recaptcha/api/siteverify'
    private_key = '6LfHheMiAAAAAGdqmyvKPtHmOqV933JrGIOLaGfM'
    params = urlencode({
        'secret': private_key,
        'response': token,
    })

    data = urlopen(URL, params.encode('utf-8')).read()
    result = json.loads(data)
    success = result.get('success', None)

    # frappe.errprint( float(result.get('score', 1)) )

    if success == True: 
        return True
    else:
        frappe.errprint( 'reCaptcha failed ' + str(result) )
        return False