var app=angular.module('mainApp',['ngRoute']);

app.config(function($routeProvider){
$routeProvider
.when('/',{
template:"welcome"
})
.when("/anotherpage",{
    template:"welcome user, again!"
})
.otherwise({
    redirectTo: '/'
});
});