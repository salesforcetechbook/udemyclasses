({
    myAction : function(component, event, helper) {
        var action = component.get("c.getAccounts");
        action.setCallback(this,function(response){
            var accountRecs = response.getReturnValue();
            component.set("v.accoultList",accountRecs);
        });
        $A.enqueueAction(action);
    },
    handleClick: function(component, event, helper) {
        event.preventDefault();
        var message = {
            recordId: event.target.dataset.actid,
            recordData: {value: "Message from Aura Component"}
        };
        component.find("sampleMessageChannel").publish(message);
    }

})