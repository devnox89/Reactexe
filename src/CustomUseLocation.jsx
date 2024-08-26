import { useState } from "react";

export function useCurrenLocation() {
  const [errorPosition, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPosition, setCurrentPosition] = useState({});

  function handleLocation() {
    setLoading(true);
    function success(pos) {
      setCurrentPosition(pos.coords);
      setLoading(false);
    }

    function error(err) {
      setError(err);
      setLoading(false);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }

  return {
    currentPosition: currentPosition,
    errorPosition: errorPosition,
    loadPosition: loading,
    onLocation: handleLocation,
  };
}