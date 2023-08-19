this.formOnLoad = function(executionContext){
    
    var formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification("Hello World v2", "INFO", "IDUnique12345");
    formContext.getAttribute("fax").setValue("123-4567");
}