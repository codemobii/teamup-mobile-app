import React, { createContext, useState, useContext } from "react";
import { Colors, Toast } from "react-native-ui-lib";

export const ToastContext = createContext({
  show: false,
  message: "",
  showLoader: false,
  showDismiss: false,
  onOpen: () => {
    /**/
  },
  onClose: () => {
    /**/
  },
});

export default function Toaster() {
  const [visible, setVisible] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [message, setMessage] = useState("");
  const [showDismiss, setShowDismiss] = useState(false);

  const toastData = useContext(ToastContext);

  const onClose = () => {
    setVisible(false);
  };

  const onOpen = (data) => {
    setVisible(true);
    setMessage(data.message);
    setShowLoader(data.showLoader);
    setShowDismiss(data.showDismiss);
  };

  const data = {
    show: visible,
    message: message,
    onOpen: onOpen,
    onClose: onClose,
    showLoader: showLoader,
    showDismiss: showDismiss,
  };

  return (
    <ToastContext.Provider value={data}>
      <Toast
        visible={toastData.show}
        position={"bottom"}
        backgroundColor={Colors.green40}
        message={toastData.message}
        showLoader={toastData.showLoader}
        showDismiss={toastData.showDismiss}
      />
    </ToastContext.Provider>
  );
}
