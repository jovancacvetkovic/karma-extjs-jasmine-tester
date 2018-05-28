(function(){
    var karmaLoadedFunction = window.__karma__.loaded,
        ExtReady = false;
    
    window.__karma__.loaded = function(){
    };
    
    if (typeof Ext !== 'undefined') {
        Ext.onReady(function(){
            ExtReady = true;
        });
    }
    
    function launchTests(){
        // Wait for Ext to get ready
        if (Ext6Ready) {
            window.__karma__.loaded = karmaLoadedFunction;
            window.__karma__.loaded();
        }
        else {
            setTimeout(function(){
                // Re-try for Ext to get ready
                launchTests();
            }, 200);
        }
    }
    
    launchTests();
}());