angular.module("meuModulo")

.controller("indexController", function($scope) {
	$scope.titulo = "Home";

	$scope.alunos = [
		{nome: 'Camila', email: 'camila@mail.com', nota1: 65, nota2: 80, nota3: 55},
		{nome: 'Pedro', email: 'pedro@mail.com', nota1: 75, nota2: 80, nota3: 55},
		{nome: 'Murilo', email: 'murilo@mail.com', nota1: 65, nota2: 60, nota3: 55},
		{nome: 'João', email: 'joao@mail.com', nota1: 95, nota2: 80, nota3: 55},
		{nome: 'Ana', email: 'ana@mail.com', nota1: 65, nota2: 30, nota3: 55}
	];

	var init = function() {
		$scope.alunos.forEach(function(aluno) {
			aluno.media = media(aluno);
		});

		limpaForm();
	};

	var media = function(aluno) {
		var media = (parseFloat(aluno.nota1) + parseFloat(aluno.nota2) + parseFloat(aluno.nota3)) / 3;

		return media.toFixed(2);
	};

	/*$scope.media = function(aluno) {
		var media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;

		return media.toFixed(2);
	};*/

	$scope.abreAddAluno = function() {
		$scope.editando = false;

		limpaForm();

		$('#modal1').openModal();
	}

	$scope.addAluno = function(aluno) {
		aluno.media = media(aluno);

		$scope.alunos.push(aluno);

		$('#modal1').closeModal();

		limpaForm();
	};

	$scope.editando = false;

	var alunoEditar;

	$scope.editarAluno = function(aluno) {
		$scope.editando = true;

		angular.copy(aluno, $scope.aluno);
		alunoEditar = aluno;

		$('#modal1').openModal();
	};

	$scope.salvarAluno = function(aluno) {
		alunoEditar.nome = aluno.nome;
		alunoEditar.email = aluno.email;
		alunoEditar.nota1 = aluno.nota1;
		alunoEditar.nota2 = aluno.nota2;
		alunoEditar.nota3 = aluno.nota3;
		alunoEditar.media = media(aluno);

		$('#modal1').closeModal();
	};

	$scope.deletarAluno = function(aluno) {
		for(var index in $scope.alunos) {
			var aux = $scope.alunos[index];

			if(aluno === aux) {
				$scope.alunos.splice(index, 1);
			}
		} 
	};

	var limpaForm = function() {
		$scope.aluno = {nome: '', email: '', nota1: '', nota2: '', nota3: '', media: ''};
	};

	init();
})

.controller("contatoController", function($scope) {
	$scope.titulo = "Contato";
})