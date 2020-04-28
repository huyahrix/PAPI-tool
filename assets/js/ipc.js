const {ipcRenderer} = require('electron')

window.ipc = window.ipc || {},
function(n) {
    ipc.messaging = {

      sendOpenSecondWindowEvent: function() {
        ipcRenderer.send('open-second-window', 'an-argument')
      },

      sendCloseSecondWindowEvent: function() {
        ipcRenderer.send('close-second-window', 'an-argument')
      },

      sendOpenCopiedWindowEvent: function() {
        ipcRenderer.send('open-copied-window', 'an-argument')
      },

      sendCloseCopiedWindowEvent: function() {
        ipcRenderer.send('close-copied-window', 'an-argument')
      },

      init: function() {
        $('#open-secondwindow-button').click( function () {
          ipc.messaging.sendOpenSecondWindowEvent()
        })

        $('#close-me-button').click( function () {
          ipc.messaging.sendCloseSecondWindowEvent()
        })

        $('#open-copied-window').click( function () {
          ipc.messaging.sendOpenCopiedWindowEvent()
        })

        $('#close-copied-window').click( function () {
          console.log('what  ttt');
          ipc.messaging.sendCloseCopiedWindowEvent()
        })

      }
    };

    n(function() {
        ipc.messaging.init();
    })

}(jQuery);
