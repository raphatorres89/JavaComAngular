var professoresModulo = angular.module('professoresModulo',[]);

professoresModulo.controller("professoresController", function ($scope, $http) {
    $http.get('rest/professores').then(function(response) {
    	$scope.professores = response.data;
	});

    $scope.selecionar = function(professorSelecionado) {
        $scope.professor = professorSelecionado;
    };

    $scope.limpar = function() {
        $scope.professor = "";
    }

    $scope.salvar = function() {
        $scope.professores.push($scope.professor);
        $scope.limpar();
    }

    $scope.excluir = function() {
        $scope.professores.splice($scope.professores.indexOf($scope.professor),1)
        $scope.limpar();
    }
});