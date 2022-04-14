     var field = document.querySelector('[type="text"]');
      field.addEventListener('keypress', function ( event ) {  
         var key = event.keyCode;
          if (key === 32) {
            event.preventDefault();
          }
      });