import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authorizationGuard: CanActivateFn = (route, state) => {
  const router =new Router();
  const taostr:ToastrService=inject(ToastrService);
const token =localStorage.getItem('token');
if (token) 
  {

  if (state.url.indexOf('admin')>0) 
    {

    let user:any=localStorage.getItem('user');
    user=JSON.parse(user);

    if (user.RoleId=="1") 
    {
     // taostr.success('Welcome to admin dashboard')
      return true;
    }

    else
    {
      taostr.warning('This page is for Admins !');
      router.navigate(['home'])
      return false;
    }

  }
  else
  {
    return false;
  }
}
else
{
  taostr.warning('Please Sign In !');
  router.navigate(['account/login'])
  return false;
}
};