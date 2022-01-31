var Class2 = {};

Class2.init = function() {
	console.log('iniciado');
}

Class2.add = function(element) {
	/*var that = element;

	jQuery(body).append(that);*/
	console.log('add');
}

Class2.remove = function(element) {
	// var that = element;

	// jQuery(that).remove();

	console.log('remove');
}

window.class2 = Object.create(Class2);