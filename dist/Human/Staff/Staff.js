"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Staff = exports.StaffCategory = void 0;
var Person_1 = require("../Person");
var StaffCategory;
(function (StaffCategory) {
    StaffCategory["Chef"] = "Chef";
    StaffCategory["Waiter"] = "Waiter";
    StaffCategory["Waitress"] = "Waitress";
    StaffCategory["Cleaner"] = "Cleaner";
    StaffCategory["Chashier"] = "Chashier";
    StaffCategory["SecurityMeasures"] = "SecurityMeasures";
})(StaffCategory = exports.StaffCategory || (exports.StaffCategory = {}));
/**
 * A staff is a person of the restuarant with a salary
 */
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(category, name, age, gender, phone, salary) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.category = category;
        _this.phone = phone;
        _this.salary = salary;
        return _this;
    }
    Staff.prototype.getSalary = function () {
        return this.salary;
    };
    Staff.prototype.getPhone = function () {
        return this.phone;
    };
    Staff.prototype.getPosition = function () {
        return this.category;
    };
    Staff.prototype.setSalary = function (numSalary) {
        return this.salary = numSalary;
    };
    return Staff;
}(Person_1.Person));
exports.Staff = Staff;
