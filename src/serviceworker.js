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
  
      window.addEventListener('Load', () => {
        const serviceworkerUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          
          checkServiceworker(serviceworkerUrl, config);
  
         
          navigator.serviceworker.ready.then(() => {
            // console.log("This web app" + "worker");
          });
        } else {
          registerServiceWorker(serviceworkerUrl, config);
        }
      });
    }
  }
  
  function registerServiceWorker(serviceworkerUrl, config) {
    navigator.serviceworker
      .register(serviceworkerUrl)
      .then(registration => {
        registration.updatefound = () => {
          const installWorker = registration.installing;
          if (installWorker == null) {
            return;
          }
          installWorker.statechange = () => {
            if (installWorker.state === 'installed') {
              if (navigator.serviceworker.controller) {
                
                // console.log('New content' + 'tabs for this page are closed');
  
                // Execute callback
                if (config && config.Update) {
                  config.Update(registration);
                }
              } else {
                // console.log('Content is cached for offline use.');
  
                // Execute callback
                if (config && config.Success) {
                  config.Success(registration);
                }
              }
            }
          };
        };
      })
      .catch(error => {});
  }
  
  function checkServiceworker(serviceworkerUrl, config) {
    
    fetch(serviceworkerUrl, {})
      .then(response => {
        // check to see if service worker exists
        const contentType = response.headers.get();
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf() === -1)
        ) {
          // No service worker found
          navigator.serviceworker.ready.then(registration => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          // Service worker found
          registerServiceWorker(serviceworkerUrl, config);
        }
      })
      .catch(() => {
        // console.log("No internet connection");
      });
  }
  
  export function unregister() {
    if ('serviceworker' in navigator) {
      navigator.serviceworker.ready.then(registration => {
        registration.unregister();
      });
    }
  }