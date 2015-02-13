module.exports = (function helpers() {

    // Builds a String which:
    //   - is empty if target is null
    //   - looks like `:target` if target is not null
    //
    // This string is used for grunt task targets:
    // e.g.: grunt copy, grunt copy:dist
    function gruntTarget(target) {
        var targetString = '';

        if (target != null) {
            targetString = ':' + target;
        }

        return targetString;
    }

    // Merges two JSON Objects into one recursively
    // Overwrites same name attributes as long as they are not objects with more childs
    // Overwrites obj1 with obj2
    // Objects with the name of "overwriteAt" won't be merged but used from obj1 without checks (can be null)
    function mergeJSON(obj1, obj2, overwriteAt){
        var obj2copy = JSON.parse(JSON.stringify(obj2));

        for (var attrname in obj1) {
            if(obj2copy.hasOwnProperty(attrname)) {
                if( attrname == overwriteAt ) {
                    obj2copy[attrname] = obj1[attrname];
                } else if ( obj1[attrname]!=null && (typeof obj1[attrname])!==undefined && obj1[attrname].constructor==Object ) {
                    obj2copy[attrname] = mergeJSON(obj1[attrname], obj2copy[attrname], overwriteAt);
                } else {
                    obj2copy[attrname] = obj1[attrname];
                }
            } else {
                obj2copy[attrname] = obj1[attrname];
            }
        }
        return obj2copy;
    }

    return {
        gruntTarget: gruntTarget,
        mergeJSON: mergeJSON
    }
})();
