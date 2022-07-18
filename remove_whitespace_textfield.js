     var field = document.querySelector('[type="text"]');
      field.addEventListener('keypress', function ( event ) {  
         var key = event.keyCode;
          if (key === 32) {
            event.preventDefault();
          }
      });

//Inline removeWiteSpacesFromTextFields
//js
function removeSpaces(string) {
  return string.trim();
 }
//html 
<input type="text" onblur="this.value=removeSpaces(this.value);">
//Inline removeWiteSpacesFromTextFields     
