this.changeZipPostalCode = function (executionContext)
{
    var formContext = executionContext.getFormContext();
    if (formContext.getAttribute("address1_country").getValue() == "United Kingdom")   
    {
        formContext.getControl("address1_composite_compositionLinkControl_address1_postalcode").setLabel("Postal code");
    } else if (formContext.getAttribute("address1_country").getValue() == null)
    {
        formContext.getControl("address1_composite_compositionLinkControl_address1_postalcode").setLabel("ZIP/Postal code");
    } else
    {
        formContext.getControl("address1_composite_compositionLinkControl_address1_postalcode").setLabel("ZIP code");
    }   
}