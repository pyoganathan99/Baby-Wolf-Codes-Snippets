Array.prototype.map = Array.prototype.map || function (callback) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        res[i] = callback(this[i]);
    }
    return res;
}