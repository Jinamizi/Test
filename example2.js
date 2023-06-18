$(document).ready(function(){
	$("#example p").hover(function(){
		$(this).css("background-color","#90EE90");
	},
	function(){
		$(this).css("background-color","white");
	});
	
	/*$("#example p").focus(function(){
		$(this).css("background-color","#90EE90");
	});*/


  if ('wakeLock' in navigator) {
    $('#example').hover(function() {
      // Request a screen wake lock
      navigator.wakeLock.request('screen')
        .then(function(wakeLock) {
          // The wake lock has been successfully acquired
          console.log('Screen wake lock activated!');

          // Add an event listener to release the wake lock
          wakeLock.addEventListener('release', function() {
            console.log('Screen wake lock released!');
          });
        })
        .catch(function(error) {
          // Failed to acquire the wake lock
          console.error('Failed to activate screen wake lock:', error);
        });
    });
  } else {
    // Wake Lock API is not supported
    console.warn('Screen wake lock is not supported by this browser.');
  }

  
  if ('wakeLock' in navigator) {
    // Request a screen wake lock
    navigator.wakeLock.request('screen')
      
}



	
});