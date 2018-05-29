(function(){
    //noinspection JSUnresolvedVariable
    let Ext = Ext ? Ext : {};
    
    let onKarmaLoaded = window.__karma__.loaded;
    let isExtReady = false;
    
    window.__karma__.loaded = function(){
    };
    
    if (typeof Ext !== 'undefined') {
        Ext.onReady(function(){
            isExtReady = true;
        });
    }
    
    function runTests(){
        // Wait for Ext to get ready
        if (isExtReady) {
            window.__karma__.loaded = onKarmaLoaded;
            window.__karma__.loaded();
        }
        else {
            setTimeout(function(){
                // Re-try for Ext until is ready
                runTests();
            }, 200);
        }
    }
    
    runTests();
}());