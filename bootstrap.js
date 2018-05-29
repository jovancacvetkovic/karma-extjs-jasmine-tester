(function(){
    let onKarmaLoaded = window.__karma__.loaded;
    let isExtReady = false;
    
    window.__karma__.loaded = function(){
    };
    
    //noinspection JSUnresolvedVariable
    if (typeof Ext !== 'undefined') {
        //noinspection JSUnresolvedVariable
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