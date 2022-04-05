import React from "react";

const useOutsideEvent = (ref: any, networkOption: any) => {
  const [event, setEvent] = React.useState(true);

  React.useEffect(() => {
    setEvent(networkOption);
  }, [networkOption]);

  React.useEffect(() => {
    function handleClickOutside(event: any) {
        // console.log('outside',ref.current,event.target)
      if (ref.current && !ref.current.contains(event.target)) {
        setEvent(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
  return event;
};

export default useOutsideEvent;