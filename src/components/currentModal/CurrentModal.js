import {getEnums} from "../../helpers/getParams";
import AuthModal from "../authModal/AuthModal";
import ContactUsModal from "../contactUsModal/ContactUsModal";
import { useNavigate } from 'react-router-dom';
import {useGetPopup} from "../../hooks/useGetPopup";


const modals = {
  [getEnums.popup.auth]: AuthModal,
  [getEnums.popup.contact]: ContactUsModal
}

const CurrentModal = () => {
  const { mountedPopup, isOpened } = useGetPopup();
  const Component = modals[mountedPopup];
  const navigate = useNavigate();

  if (!Component) {
    return null;
  }

  return <Component isOpen={isOpened} close={() => navigate(-1)} />
}

export default CurrentModal;