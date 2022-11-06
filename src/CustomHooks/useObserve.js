import { useEffect, useState } from "react";

export const useObserve = (ref) => {
  const [offset, setOffset] = useState(0);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  useEffect(() => {
    const observe = new IntersectionObserver(() => {
      setOffset((prev) => prev + 5);
    }, options);

    if (ref.current) observe.observe(ref.current);
    return () => {
      if (ref.current) observe.unobserve(ref.current);
    };
  }, [ref]);

  return [offset];
};
