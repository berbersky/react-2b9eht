import React, {
  useState,
  useEffect,
  useCallback,
 // useLayoutEffect,
} from 'react';

export const useFetch = () => {
  console.log('useFetch executed');

  const [data, setData] = useState(null);
  const [url, setUrls] = useState(null);

  //
  const load = useCallback((payload) => {
    setUrls(() => payload);
    console.log('->load useCallback', payload, data);
  }, []);

  // Executed onCompomentDidMount
  // AND IF DEPENDECY CHANGES FORCING THE RERENDERING OF THE COMPONENT
  // useLayoutEffect(() => {
  //   console.log('-> useLayoutEffect', options, data);
  // }, [options.url]);

  // Executed onCompomentDidMount
  // AND IF DEPENDECY CHANGES FORCING THE RERENDERING OF THE COMPONENT
  useEffect(() => {
    let isCancelled = false;
    console.log('-> useEffect');

    // if (options.url) {
    //   console.log('if options.url: ', options.url);
    //   fetch(options.url)
    //     .then((response) => response.json())
    //     .then((json) => {
    //       setData(json);
    //       console.log(
    //         '-> {then setData} - request finished! for getting:',
    //         options.url
    //       );
    //     });
    // return () => {
    //   console.log(
    //     '-> {return} - request finished! for getting:',
    //     options.url
    //   );
    //isCancelled = true;
    // };
    //}
    // console.log('if urls: ', url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (!isCancelled) {
          setData(json);
          console.log(
            '-> {then setData} url - request finished! for getting:',
            url
          );
        }

        return (isCancelled = true);
      })
    .catch(e => console.warn(e));
  }, [url]);

  return {
    data,
    load,
  };
};
