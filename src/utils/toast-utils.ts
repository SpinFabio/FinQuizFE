import { toast } from "react-toastify";

export function showUniqueToastWarning(
  message: string,
  toast_id: string,
): void {
  if (!toast.isActive(toast_id)) {
    toast.warning(message, { toastId: toast_id });
  }
}
