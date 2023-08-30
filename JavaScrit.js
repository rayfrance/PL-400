//Section 2: Apply business logic using client scripting
this.formOnLoad = function(executionContext)
{
    var formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification("Hello World v8", "INFO", "IDUnique12345");
    if (formContext.getAttribute("fax").getValue() == null) 
    {
        formContext.getAttribute("fax").setValue("123-4567");
        formContext.getControl("fax").addNotification({
            messages: ['Fax number set to default.'],
            notificationLevel: 'RECOMMENDATION',
            uniqueID: "IDUnique12345-6"
        })
    }
}
this.addressStreet3Hide = function (executionContext)
{
    var formContext = executionContext.getFormContext();
    if (formContext.getAttribute("address1_line2").getValue() == null) {
        formContext.getControl("address1_composite_compositionLinkControl_address1_line3").setVisible(false);
    } else {
        formContext.getControl("address1_composite_compositionLinkControl_address1_line3").setVisible(true);
    }
}

// Section 3: Create a command button function
function ButtonPress(primaryControl)
{
    var formContext = primaryControl;
    Xrm.Navigation.openAlertDialog({
        text: "Click!",
        confirmButtonLabel: "Button Label",
        title: "Dialog box for ".concat(formContext.getAttribute("name").getValue())
    }).then(function (success) 
    {
        Xrm.Navigation.openConfirmDialog({
            text: "You have successfully clicked."
        })
    });
    formContext.getControl("name").setLabel("name");
}