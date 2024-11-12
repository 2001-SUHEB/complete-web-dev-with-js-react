var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// **Static Typing**
// Variables and function parameters are strictly typed, ensuring compile-time type checking.
var message = "hello hi there hw are you";
console.log(message);
// **Type Annotation**
// Types are explicitly defined for parameters and return values, catching type mismatches early.
function sayHello(name) {
    console.log("hi ".concat(name));
    return "hi ".concat(name);
}
sayHello("suheb");
var obj = {
    height: 10,
    width: 80,
};
// **Generics**
// Generics allow creating reusable functions with type placeholders that can be specified when used.
function getNum(num) {
    return num;
}
var output = getNum(45);
// **Enums**
// Enums define named constants, making the code more readable and ensuring limited possible values.
var Directions;
(function (Directions) {
    Directions[Directions["First"] = 1] = "First";
    Directions[Directions["Second"] = 2] = "Second";
    Directions[Directions["Third"] = 3] = "Third";
    Directions[Directions["Fourth"] = 4] = "Fourth";
})(Directions || (Directions = {}));
console.log(Directions.Second); // Output: 2
// **Tuples**
// Tuples are arrays with fixed types and lengths for each element, providing more control over arrays.
var tuple;
tuple = [1, "first", true];
var value = "suheb";
value = 88;
value = true;
var mixObject = {
    name: "suheb",
    age: 22,
};
// **Decorators**
// Decorators are functions that can modify classes, methods, and properties at design time.
function logger(target) {
    console.log("Class ".concat(target.name, " is created"));
}
var User = function () {
    var _classDecorators = [logger];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var User = _classThis = /** @class */ (function () {
        function User_1(name) {
            this.name = name;
        }
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
var user = new User("syed");
// **Access Modifiers**
// Access modifiers control the visibility of properties and methods in a class.
// - `public`: accessible from anywhere
// - `private`: accessible only within the class
// - `protected`: accessible within the class and its subclasses
var MyClass = /** @class */ (function () {
    function MyClass(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    return MyClass;
}());
var person = new MyClass("John", 30, "123 Main St");
console.log(person.name); // Valid (public)
// console.log(person.age); // Error: 'age' is private
// console.log(person.address); // Error: 'address' is protected