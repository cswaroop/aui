AJS.$(document).ready(function(){
    AJS.$(".aui-nav-pagination a[aria-disabled=true]").click( function(){
        alert("Disabled pagination elements should not do anything when activated.");
        return false;
    });
});