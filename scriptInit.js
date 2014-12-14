function modulesController($scope){
	$scope.modules=[
		{name:"Movimiento Rectilíneo de los Cuerpos"},
		{name: "Dinámica"}
	];
	$scope.Save = function (){
		$scope.modules.push({name:$scope.newModule.name});
		$scope.formVisibility=false;
		console.log($scope.formVisibility);
	};

	$scope.formVisibility=false;
	$scope.ShowForm=function(){
		$scope.formVisibility=true;
		console.log($scope.formVisibility);
	};
}