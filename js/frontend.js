(function($) {

$(document).ready( function() {
	var file_frame;
	$( '#frontend-button' ).on( 'click', function( event ) {
		event.preventDefault();

		if ( file_frame ) {
			file_frame.open();
			return;
		}

		file_frame = wp.media.frames.file_frame = wp.media({
			title: $( this ).data( 'uploader_title' ),
			button: {
				text: $( this ).data( 'uploader_button_text' ),
			},
			multiple: false // set this to true for multiple file selection
		});

		file_frame.on( 'select', function() {
			attachment = file_frame.state().get('selection').first().toJSON();

			// do something with the file here
			$( '#frontend-button' ).hide();
			$( '#frontend-image' ).attr('src', attachment.url);
		});

		file_frame.open();
	});
});

})(jQuery);
