if (!Uint8Array.prototype.slice) {
    Uint8Array.prototype.slice = function() {
        var args = Array.prototype.slice.call(arguments);
        return new Uint8Array(Array.prototype.slice.apply(this, args));
    }
}