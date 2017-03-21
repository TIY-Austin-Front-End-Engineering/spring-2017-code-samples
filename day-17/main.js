$('button').on('click', function(evt) {
	var settings = {
		type: 'POST',
		contentType: 'application/json',
		url: 'http://tiny-za-server.herokuapp.com/collections/unicorns',
		data: JSON.stringify({
			name: 'Betty',
			type: 'magical',
			color: 'white'
		})
	}

	$.ajax(settings).then(function(data, status, xhr) {
		console.log(status);
	});
});

var settings = {
	type: 'GET',
	dataType: 'json',
	url: 'http://tiny-za-server.herokuapp.com/collections/unicorns',
}

function deleteUnicorn(unicorn, i, arr) {
	var id = unicorn._id;
	var url = 'http://tiny-za-server.herokuapp.com/collections/unicorns/' + id;
	var deleteSetting = {
		type: 'DELETE',
		url: url
	};
	$.ajax(deleteSetting)
}

$.ajax(settings).then(function(data, status, xhr) {
	data.forEach(deleteUnicorn)
})
