app.controller("userRightsCntr", ["$scope", "$http", "$filter", "sessionService", "loginService", "$interval", function (e, t, n, s, o, l) {
    e.loginId = sessionService.get('user_id'), e.type = sessionService.get('type'), e.Get_activeUsers = function (n) {
        t.get(BASE_URL + "Createdealercontroller/get_userList/" + n).success(function (t, n, s, o) {
            e.studcheck = [], e.userList = t.userList, e.menuList = t.menuList, e.MasterCountries = t.userList
        })
    }, e.studcheck = [], e.SelectedCountries = [], e.View = {selected: {}}, e.insert = {selected: {}}, e.Update = {selected: {}}, e.save_menu = function () {
        e.View.selected, e.insert.selected, e.Update.selected, e.SelectedCountries;
        var n = {
            view: e.View.selected,
            insert: e.insert.selected,
            Update: e.Update.selected,
            userId: e.SelectedCountries
        }, s = BASE_URL + "UserRightsCntr/Save_userRights";
        t.post(s, n).success(function (e) {
            alert("save successfully...")
        })
    }
}]), app.directive("multiselectDropdown", function () {
    return {
        restrict: "E",
        scope: {model: "=", options: "="},
        template: "<div class='btn-group' data-ng-class='{open: open}' style='width: 200px;'><button class='btn btn-small' style='width: 160px;'>---Select---</button><button class='btn btn-small dropdown-toggle' data-ng-click='openDropdown()' style='width: 40px;' ><span class='caret'></span></button><ul class='dropdown-menu' aria-labelledby='dropdownMenu' style='position: relative;'><li style='cursor:pointer;'><a ng-click='selectAll(option)'><span data-ng-class='getClassName(option)' aria-hidden='true'></span> SELECT ALL</a></li><li style='cursor:pointer;' data-ng-repeat='option in options'><a data-ng-click='toggleSelectItem(option)'><span data-ng-class='getClassName(option)' aria-hidden='true'></span> {{option.label}}</a></li></ul></div>",
        controller: ["$scope", function (e) {
            e.openDropdown = function () {
                e.open = !e.open
            }, e.selectAll = function () {
                e.model = [], angular.forEach(e.options, function (t, n) {
                    e.model.push(t)
                })
            }, e.deselectAll = function () {
                e.model = []
            }, e.toggleSelectItem = function (t) {
                var n = -1;
                angular.forEach(e.model, function (e, s) {
                    e.id == t.id && (n = s)
                }), n >= 0 ? e.model.splice(n, 1) : e.model.push(t)
            }, e.getClassName = function (t) {
                var n = "glyphicon glyphicon-remove-circle";
                return angular.forEach(e.model, function (e, s) {
                    t != angular.isUndefinedOrNull && e.id == t.id && (n = "glyphicon glyphicon-ok-circle")
                }), n
            }
        }]
    }
});