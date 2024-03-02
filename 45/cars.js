var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function carGenerator(manufacturer, model, properties) {
    var newCar = __assign({ manufacturer: "".concat(manufacturer), model: "".concat(model) }, properties);
    return newCar;
}
var myCar = carGenerator("Toyota", "Camry", { color: "Blue", mileage: "17" });
console.log(myCar);
