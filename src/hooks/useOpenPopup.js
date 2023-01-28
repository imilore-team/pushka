import {useSearchParams} from "react-router-dom";
import {getParams} from "../helpers/getParams";
import {useCallback} from "react";

export const useOpenPopup = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return useCallback((popupName) => {
    setSearchParams({[getParams.popup]: popupName});
  }, [searchParams])
}