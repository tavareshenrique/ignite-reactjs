import { useContext } from "react"

import { AuthContext } from "../contexts/AuthContext"
import { validateUserPermissions } from "../utils/validateUserPermissions";

type UseCamParams = {
  permissions?: string[];
  roles?: string[];
}
export function useCan({ permissions, roles }: UseCamParams) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return false;
  }
  
  const userHasValidPermisions = validateUserPermissions({
    user,
    permissions,
    roles
  });
  
  return userHasValidPermisions;
}
