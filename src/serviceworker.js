const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      window.location.hostname === '[]' ||
      window.location.hostname.match()
  );
  
  export function register(config) {
    if (process.env.NODE_ENV === 'production' && 'serviceworker' in navigator) {
   
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
       
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          
          checkValidServiceworker(swUrl, config);
  
         
          navigator.serviceworker.ready.then(() => {
            // console.log("This web app" + "worker");
          });
        } else {
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl, config) {
    navigator.serviceworker
      .register(swUrl)
      .then(registration => {
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceworker.controller) {
                
                // console.log(
                //   'New content' + 'tabs for this page are closed');
  
                // Execute callback
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
               
                // console.log('Content is cached for offline use.');
  
                // Execute callback
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch(error => {
        console.error('Error during service worker registration:', error);
      });
  }
  
  function checkValidServiceworker(swUrl, config) {
    
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' }
    })
      .then(response => {
        // check to see if service worker exists
        const contentType = response.headers.get('content-type');
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
          // No service worker found
          navigator.serviceworker.ready.then(registration => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          // Service worker found
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        // console.log(
        //   'No internet connection'
        // );
      });
  }
  
  export function unregister() {
    if ('serviceworker' in navigator) {
      navigator.serviceworker.ready.then(registration => {
        registration.unregister();
      });
    }
  }