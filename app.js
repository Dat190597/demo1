var app = angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/one',{
        tempaleUrl: 'pages/one.html',
        controller: 'Ctr1'
    })
    .when('/two',{
        tempaleUrl: 'pages/two.html',
        controller: 'Ctr2'
    }) 
});

app.controller("Ctr1",
    function($scope){
        $scope.name='one.html'
        console.log('one');
    }
);

app.controller("Ctr2",
    function($scope){
        $scope.name='two.html'
        console.log('two');
    }
);