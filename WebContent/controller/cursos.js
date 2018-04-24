var cursosModulo = angular.module('cursosModulo',[]);

cursosModulo.controller("cursosController", function ($scope) {
    $scope.professores = [
        {codigo:1, nome:'Raphael Torres', email:'rapha.oo.torres@gmail.com', telefone:'51993344415'},
        {codigo:2, nome:'Fernanda Torres', email:'fernanda.torres@gmail.com', telefone:'51993344416'},
        {codigo:3, nome:'Leonardo Torres', email:'leonardo.torres@gmail.com', telefone:'51993344417'},
        {codigo:4, nome:'Jader Torres', email:'jader.torres@gmail.com', telefone:'51993344418'}
    ];
    
    $scope.cursos = [
        {codigo:1, nome:'Java Web I', dias:'Segunda a Sexta', professor:{codigo:1, nome:'Raphael Torres', email:'rapha.oo.torres@gmail.com', telefone:'51993344415'}},
        {codigo:1, nome:'Java Web II', dias:'Terça a Quinta', professor:{codigo:2, nome:'Fernanda Torres', email:'fernanda.torres@gmail.com', telefone:'51993344416'}},
        {codigo:1, nome:'Java Web III', dias:'Segunda a Quinta', professor:{codigo:3, nome:'Leonardo Torres', email:'leonardo.torres@gmail.com', telefone:'51993344417'}},
        {codigo:1, nome:'Java Web IV', dias:'Quarta a Sexta', professor:{codigo:4, nome:'Jader Torres', email:'jader.torres@gmail.com', telefone:'51993344418'}}
    ];

    $scope.selecionar = function(cursoSelecionado) {
        $scope.curso = cursoSelecionado;
    };

    $scope.limpar = function() {
        $scope.curso = "";
    }

    $scope.salvar = function() {
        $scope.cursos.push($scope.curso);
        $scope.limpar();
    }

    $scope.excluir = function() {
        $scope.cursos.splice($scope.cursos.indexOf($scope.curso),1)
        $scope.limpar();
    }
});