function startDictation() {
    
    if (window.hasOwnProperty('webkitSpeechRecognition')) {

      var recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = function(e) {
        document.getElementById('msg').value
                                 = e.results[0][0].transcript;
        recognition.stop();
        document.getElementById('buttons').click();
      };

      recognition.onerror = function(e) {
        recognition.stop();
      }

    }
  }

  function startDictation1() {

    if (window.hasOwnProperty('webkitSpeechRecognition')) {

      var recognition = new webkitSpeechRecognition();

      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.lang = "en-US";
      recognition.start();

      recognition.onresult = function(e) {
        document.getElementById('msg1').value
                                 = e.results[0][0].transcript;
        recognition.stop();
        document.getElementById('buttons1').click();
      };

      recognition.onerror = function(e) {
        recognition.stop();
      }

    }
  }