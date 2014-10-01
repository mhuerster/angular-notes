app.controller('myNoteController', function($scope) {
	$scope.message = 'Your note here';
	$scope.left = function() { return 100 - $scope.message.length;};
	$scope.clear = function() { $scope.message = ''; };
	$scope.save = function() { alert('Note saved'); };
});