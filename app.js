(function() {

	var module = angular.module("App", []);

	module.controller('MainController', function($scope) {
		$scope.expressions1 = [
			'8 * null',
			'"5" - 1',
			'"5" + 1',
			'"five" * 2',
			'3 / 0',
			'false == 0',
			'false === 0',
			'true != 1',
			'true !== 1',
			'null == undefined',
			'null == 0',
			'null === undefined'
		];

		$scope.expressions2 = [
			'true || false',
			'true && false',
			'!true',
			'0 || 1',
			'1 || 2',
			'0 && 1',
			'1 && 2',
			'!1',
			'!null'
		];

		$scope.obj = {
			numValue: 1,
			strValue: "String",
			objValue: {
				value: "Value"
			},
			"0000": "Its possible!"
		};

		$scope.array = [ 1, 2, 3, 4 ];

		$scope.expressions3 = [
			'obj.numValue',
			'obj["numValue"]',
			'obj.strValue',
			'obj["strValue"]',
			'obj.objValue.value',
			'array[1]',
			'array["1"]'
		];

		$scope.expressions4 = [
			{ value:'obj.0000', result: 'Error: Unexpected token 0' },
			{ value:'obj["0000"]', result: 'Its possible!' },
			{ value:'obj.noValue', result: 'undefined' },
			{ value:'obj["noValue"]', result: 'undefined' },
			{ value:'obj.noValue.Value', result: 'ReferenceError: obj.noValue is not defined' }
		];

	});
}());
