var settings = {
	type: 'GET',
	url: 'https://api.github.com/users/teambekbek',
	dataType: 'json'
};

function render(data, status, xhr) {
	var username = data.login;
	var $h3 = $('<h3>');
	$h3.text(username);
	$('#container').html($h3);
}

render({login: 'wait a sec'})

$.ajax(settings).then(render);
