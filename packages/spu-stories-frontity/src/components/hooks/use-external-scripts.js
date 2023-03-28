import { useEffect } from 'react';

const useExternalScripts = (url) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    script.setAttribute("src", url);
    head.appendChild(script);

  }, [url]);
};

export default useExternalScripts;
