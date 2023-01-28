import { useState, useEffect, useMemo } from "react";
import {useGetParams} from "./useGetParams";
import {getParams} from "../helpers/getParams";

let timeout;

export const useGetPopup = () => {
  const popupName = useGetParams(getParams.popup);
  const [mountedPopup, setMountedPopup] = useState(popupName);

  useEffect(() => {
    if (popupName) {
      timeout && clearTimeout(timeout);
      setMountedPopup(popupName);
    } else {
      timeout = setTimeout(() => {
        setMountedPopup(null);
      }, 300);
    }
  }, [popupName]);

  useEffect(() => {
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, []);

  const isOpened = useMemo(() => Boolean(popupName), [popupName]);

  return {
    mountedPopup,
    isOpened
  };
};