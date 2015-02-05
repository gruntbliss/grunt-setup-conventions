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

    return {
        gruntTarget: gruntTarget
    }

})();
