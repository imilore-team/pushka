import {useMemo} from "react";

export const useIsMobile = () => {
  return useMemo(() => {
    return window.innerWidth <= 800;
  }, []);
}