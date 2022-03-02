({
    getRecentlyViewed : function(component, event, helper) {
        var action = component.get("c.returnRecentId");

        action.setCallback(this, function(Response) {
            var state = Response.getState();
            if (state === "SUCCESS"){
                component.set("v.objectId", Response.getReturnValue().Id);
                component.set("v.objectType", Response.getReturnValue().Type);
            }
            else if (state === "INCOMPLETE"){

            }
            else if (state === "ERROR"){

            }
        });

        $A.enqueueAction(action);
    },
})
