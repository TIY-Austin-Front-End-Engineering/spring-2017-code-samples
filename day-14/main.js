// proving we included jquery properly, no need to keep this in the code forever
console.log(jQuery);


// when a user clicks a tab, show only that tab's contents

// on a click of tab element
var $tabs = $('.tab');
$tabs.on('click', function(e) {
	e.preventDefault();
	console.log(e.target.hash);
	var $tabContents = $('.tab-content');
	// remove the selected class from all the tab contents elements
	$tabContents.removeClass('selected');

	var tabId = e.target.hash; //#tab1
	$(tabId).addClass('selected');
	// and then add it to the correct contents element

})
