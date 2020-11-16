"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateTaskComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CreateTaskComponent = /** @class */ (function () {
    function CreateTaskComponent(toastr, tasksService, dialogRef) {
        this.toastr = toastr;
        this.tasksService = tasksService;
        this.dialogRef = dialogRef;
        this.formG = new forms_1.FormGroup({
            title: new forms_1.FormControl(null, [
                forms_1.Validators.required
            ]),
            description: new forms_1.FormControl(null, []),
            dateEnd: new forms_1.FormControl(null, [
                forms_1.Validators.required
            ])
        });
    }
    CreateTaskComponent.prototype.ngOnInit = function () {
    };
    CreateTaskComponent.prototype.insertTask = function () {
        var _this = this;
        if (!this.formG.valid) {
            return;
        }
        this.tasksService.createTask(this.formG.value).subscribe(function (data) {
            _this.toastr.success(data.message);
            _this.dialogRef.close();
        }, function (err) {
            _this.toastr.error(err.error.message);
        });
    };
    Object.defineProperty(CreateTaskComponent.prototype, "title", {
        get: function () {
            return this.formG.get('title');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateTaskComponent.prototype, "description", {
        get: function () {
            return this.formG.get('description');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreateTaskComponent.prototype, "dateEnd", {
        get: function () {
            return this.formG.get('dateEnd');
        },
        enumerable: false,
        configurable: true
    });
    CreateTaskComponent = __decorate([
        core_1.Component({
            selector: 'app-create-task',
            templateUrl: './create-task.component.html',
            styleUrls: ['./create-task.component.css']
        })
    ], CreateTaskComponent);
    return CreateTaskComponent;
}());
exports.CreateTaskComponent = CreateTaskComponent;
