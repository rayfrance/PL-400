this.formOnLoad = function(executionContext)
{
    var formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification("Hello World v3", "INFO", "IDUnique12345");
    if (formContext.getAttribute("fax").getValue() == null) 
    {
        formContext.getAttribute("fax").getValue("123-4567");
        formContext.getControl("fax").addNotification({
            messages: ['Fax number set to default.'],
            notificationLevel: 'RECOMMENDATION',
            uniqueID: "IDUnique12345-6"
        })
    }
}