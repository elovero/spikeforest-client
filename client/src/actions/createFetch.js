import fetch from 'node-fetch';

/**
 * Creates a wrapper function around the HTML5 Fetch API that provides
 * default arguments to fetch(...) and is intended to reduce the amount
 * of boilerplate code in the application.
 * https://developer.mozilla.org/docs/Web/API/Fetch_API/Using_Fetch
 */
function createFetch({ url }) {
  const baseUrl = '/api';
  const defaults = {
    method: 'GET',
    mode: 'same-origin',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  return (url: string) => {
    fetch(`${baseUrl}${url}`, {
      ...defaults,
      headers: {
        ...defaults.headers,
      },
    });
  };
}

export default createFetch;
