console.log('index.js');

if ('serviceWorker' in window.navigator) {
  console.log('serviceWorker is available');
  window.navigator.serviceWorker.register('/serviceWorker.js');
}
