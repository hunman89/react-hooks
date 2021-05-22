import { useEffect, useState } from "react";
import defaultAxious from "axios";

const useAxious = (opts, axiousInstance = defaultAxious) => {
  const [state, setstate] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setstate({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  useEffect(() => {
    axiousInstance(opts)
      .then((data) => {
        setstate({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setstate({ ...state, loading: false, error });
      });
    // eslint-disable-next-line
  }, [trigger]);

  if (!opts.url) {
    return;
  }
  return { ...state, refetch };
};

export default useAxious;
