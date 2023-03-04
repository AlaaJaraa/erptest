import frappe
from frappe.utils import add_months, add_to_date, now_datetime, nowdate,  time_diff_in_hours



@frappe.whitelist()
def get_todolist_html():
    
    return frappe.render_template('pharmacy/templates/includes/testtemp.html', {
        "todolist": get_todolist()
    })
def get_todolist():
    user = frappe.session.user
    strQuery = """
        select 
            td.reference_type, td.reference_name, td.owner 
        from 
            `tabToDo` as td 
        where 
            td.owner = '""" +user+ """'
            And  td.reference_type ='Task' 
            ORDER BY td.reference_name ASC 
        """ 
    return  frappe.db.sql(  strQuery , as_dict=1)


@frappe.whitelist()
def get_timelist(task):
    user = frappe.session.user
    print(user)
    taskproject = frappe.db.get_value('Task', task,'project')
    project_name = frappe.db.get_value('Project', taskproject,'project_name')
    employee = frappe.db.get_value('Employee', filters={'user_id': user})
    employee_name = frappe.db.get_value('Employee', employee,'employee_name')
    timesheet = frappe.db.get_value('Timesheet', filters={'status': 'Draft','employee': employee,'parent_project': taskproject})
    if timesheet:
        parent = frappe.get_doc('Timesheet', timesheet)
        child = frappe.new_doc("Timesheet Detail")
        child.update({
            'activity_type': 'Execution',
            'task': task,
            'from_time': now_datetime(),
            'completed': 0
            })
        parent.append('time_logs',child)
        parent.save(ignore_permissions=True, ignore_version=True)
        print("task added to existing timesheet")
    else:
        timesheet1 = frappe.new_doc("Timesheet")
        timesheet1.title = employee_name+'-'+project_name
        timesheet1.employee = employee
        timesheet1.parent_project = taskproject
        timesheet1.append(
            'time_logs',
            {
                'task': task,
                "activity_type": "Execution",
                "from_time": now_datetime(),
                'completed': 0
                }
        )
        timesheet1.save()  
        print("task added to new created timesheet")
    # return (child.name)
    # return frappe.render_template('pharmacy/templates/includes/testtemp.html', {
    #     "childs": child.name
    # })

# close older tasks
@frappe.whitelist()
def get_timelist1():
    user = frappe.session.user
    employee = frappe.db.get_value('Employee', filters={'user_id': user})
    timesheets = frappe.db.get_list('Timesheet', filters={'status': 'Draft','employee': employee},fields ={'name','employee'})
    # print(timesheets)
    for timesheet in timesheets:
        if timesheet.employee == employee:
            parent = frappe.get_doc('Timesheet', timesheet.name)
            print("222aa2:")
            # print(parent.time_logs[0])
            child = parent.time_logs
            for row in child:
                if row.to_time is None:
                    row.to_time = now_datetime()
                    row.completed = 1
                    row.hours = time_diff_in_hours(row.to_time, row.from_time)
                    parent.save(ignore_permissions=True,ignore_version=True)
                    parent.reload()
                # else:
                #     parent.reload()
                #     parent.save(ignore_permissions=True,ignore_version=True)