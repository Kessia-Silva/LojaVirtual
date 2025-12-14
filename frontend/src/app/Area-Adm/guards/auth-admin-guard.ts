import { CanActivateFn } from '@angular/router';

export const authAdminGuard: CanActivateFn = (route, state) => {
  return true;
};
