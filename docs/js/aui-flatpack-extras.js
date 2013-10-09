AJS.$(document).ready(function(){

    /**
     * Flat Pack Tweaks
     * Version type detection is naive, just supports prod, milestone and snapshot.
     */
    var version = AJS.version,
        versionLozenge = AJS.$('<span id="header-version" class="aui-lozenge">' + version + '</span>'),
        versionListItem = AJS.$('<li>Version: ' + version + '</li>'),
        isLocal = (window.location.protocol == 'file:'),
        isSnapshot = (version.toLowerCase().indexOf("snapshot") >= 0),
        isMilestone = (version.toLowerCase().indexOf("m") >= 0),
        downloadURL = 'https://maven.atlassian.com/content/groups/public/com/atlassian/aui/aui-flat-pack/' + version + '/aui-flat-pack-' + version + '.zip',
        downloadLinkText = 'Download Flat Pack v' + version;

    // Adjust version lozenge according to version type
    if ( isSnapshot ) {
        versionLozenge.addClass("aui-lozenge-error");
    } else if ( isMilestone ) {
        versionLozenge.addClass("aui-lozenge-current");
    } else {
        versionLozenge.addClass("aui-lozenge-success");
    }

    // Quick version awareness, to avoid having to double-process the soy.
    AJS.$("#indexheader").append(versionLozenge);
    AJS.$("#aui-footer-list").append(versionListItem);

    // Set download link when hosted on server and not a snapshot
    if ( !isSnapshot && !isLocal ) {
        AJS.$("#flatpack-download").attr("href", downloadURL).text(downloadLinkText);
    }

    // Hide prototype link on server
    if ( !isLocal ) {
        AJS.$("#nav-item-prototype").hide();
    }

    // Consolepeek promo
    AJS.log("Like great design and digging into the code? We're hiring! http://bit.ly/Y9xoQu");

    //flatpack download link

    var isReleased = AJS.version.match("SNAPSHOT") === null;
    var $getFlatpackButton = AJS.$("#get-flatpack-button");
    if(isReleased) {
       $getFlatpackButton.attr("href", "https://maven.atlassian.com/content/groups/public/com/atlassian/aui/aui-flat-pack/" + AJS.version + "/aui-flat-pack-" + AJS.version + ".zip");
    } else {
        $getFlatpackButton.remove();
    }

    // Standard sizes are 400, 600 and 840 pixels wide
    var cdnDialog = new AJS.Dialog({
        width: 960, 
        height: 600, 
        id: "cdn-dialog", 
        closeOnOutsideClick: true
    });
    var cdnDialogContent = AJS.$(".cdn-dialog-content").html();
    cdnDialog.addPanel("Panel 1", cdnDialogContent, "panel-body");
    cdnDialog.addHeader("Using the flat pack from CDN");
    cdnDialog.addLink("Close", function(){
        cdnDialog.hide();
    })
   
    AJS.$("#cdn-button").click(function() {
        cdnDialog.show();
    });


    var flatpackDialog = new AJS.Dialog({
        width: 960, 
        height: 600, 
        id: "flatpack-dialog", 
        closeOnOutsideClick: true
    });
    var flatpackDialogContent = AJS.$(".flatpack-dialog-content").html();
    console.log(flatpackDialogContent);
    flatpackDialog.addPanel("Panel 1", flatpackDialogContent, "panel-body");
    flatpackDialog.addHeader("Loading the flat pack");
    flatpackDialog.addLink("Close", function(){
        flatpackDialog.hide();
    })
   
    AJS.$("#load-flatpack-link").click(function() {
        flatpackDialog.show();
    });
    
});