angular
    .module('myApp', [])
    .factory("countries", countries)
    .controller("appCont", appCont);

//Defining Countries Factory 
countries.$inject=['$http'];
function countries($http) {
    
    var service = {
        getCountries:getCountries,
        getCountry:getCountry
    }
    return service;
    
    function getCountries() {
        return $http.get("http://restcountries.eu/rest/v1/all");
    }
    
    function getCountry(country) {
        return $http.get("http://restcountries.eu/rest/v1/name/"+ country);
    }
    
}

//Defining Controller
function appCont($scope, countries) {
 
    $scope.do=function(){
        countries.getCountries()
            .success(function(data) {
                $scope.counts=data;
                console.log(data);
            })
    };
    $scope.do();
    $scope.run=function(thing){
        countries.getCountry(thing)
            .success(function(data) {
                $scope.country=data;
                console.log(data);
            })
    };
    
}
