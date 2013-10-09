/* This file runs in the output window, this is special javascript that needs to run
for the component demo's to work but only in the sandbox as normally it would be run on load
*/
function runSandboxJavasript() {
    AJS.messages.setup();
    AJS.tabs.setup();
    AJS.tablessortable.setup();
    AJS.responsiveheader.setup();
}