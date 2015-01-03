chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    resizable: false,
    bounds: {
      width: 400,
      height: 500
    }
  });
});