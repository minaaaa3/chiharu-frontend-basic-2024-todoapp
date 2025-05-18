// Organisms/AlertManager.tsx
import React from "react";
import { useEffect } from "react";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import { Alert } from "../../Atoms/Alert";

const AlertManager = () => {
  const alertHandler = useAlertHandlerContext();

  useEffect(() => {
    if (alertHandler.visible) {
      const timer = setTimeout(() => {
        alertHandler.setVisible(false);
      }, 5000);

      return () => clearTimeout(timer); // Cleanup on unmount or re-trigger
    }
  }, [alertHandler.visible]);

  if (!alertHandler.visible) return null;

  return <Alert variant="destructive">text</Alert>;
};

export default AlertManager;
