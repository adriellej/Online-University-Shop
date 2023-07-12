import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'allprod',
    loadChildren: () => import('./allprod/allprod.module').then( m => m.AllprodPageModule)
  },
  {
    path: 'uniform',
    loadChildren: () => import('./uniform/uniform.module').then( m => m.UniformPageModule)
  },
  {
    path: 'jackets',
    loadChildren: () => import('./jackets/jackets.module').then( m => m.JacketsPageModule)
  },
  {
    path: 'shirts',
    loadChildren: () => import('./shirts/shirts.module').then( m => m.ShirtsPageModule)
  },
  {
    path: 'accessories',
    loadChildren: () => import('./accessories/accessories.module').then( m => m.AccessoriesPageModule)
  },
  {
    path: 'rgoprod',
    loadChildren: () => import('./rgoprod/rgoprod.module').then( m => m.RgoprodPageModule)
  },
  {
    path: 'casual',
    loadChildren: () => import('./casual/casual.module').then( m => m.CasualPageModule)
  },
  {
    path: 'classic',
    loadChildren: () => import('./classic/classic.module').then( m => m.ClassicPageModule)
  },
  {
    path: 'addons',
    loadChildren: () => import('./addons/addons.module').then( m => m.AddonsPageModule)
  },
  {
    path: 'pv-college-barong',
    loadChildren: () => import('./pv-college-barong/pv-college-barong.module').then( m => m.PVCollegeBarongPageModule)
  },
  {
    path: 'pv-college-shirt',
    loadChildren: () => import('./pv-college-shirt/pv-college-shirt.module').then( m => m.PvCollegeShirtPageModule)
  },
  {
    path: 'pv-college-pants',
    loadChildren: () => import('./pv-college-pants/pv-college-pants.module').then( m => m.PvCollegePantsPageModule)
  },
  {
    path: 'pv-college-skirt',
    loadChildren: () => import('./pv-college-skirt/pv-college-skirt.module').then( m => m.PvCollegeSkirtPageModule)
  },
  {
    path: 'pv-college-blouse',
    loadChildren: () => import('./pv-college-blouse/pv-college-blouse.module').then( m => m.PvCollegeBlousePageModule)
  },
  {
    path: 'pv-jogging-pants',
    loadChildren: () => import('./pv-jogging-pants/pv-jogging-pants.module').then( m => m.PvJoggingPantsPageModule)
  },
  {
    path: 'pv-id-lace',
    loadChildren: () => import('./pv-id-lace/pv-id-lace.module').then( m => m.PvIdLacePageModule)
  },
  {
    path: 'pv-pin',
    loadChildren: () => import('./pv-pin/pv-pin.module').then( m => m.PvPinPageModule)
  },
  {
    path: 'pv-spartan-pin',
    loadChildren: () => import('./pv-spartan-pin/pv-spartan-pin.module').then( m => m.PvSpartanPinPageModule)
  },
  {
    path: 'pv-laptop-bag',
    loadChildren: () => import('./pv-laptop-bag/pv-laptop-bag.module').then( m => m.PvLaptopBagPageModule)
  },
  {
    path: 'pv-tshirt-a',
    loadChildren: () => import('./pv-tshirt-a/pv-tshirt-a.module').then( m => m.PvTshirtAPageModule)
  },
  {
    path: 'pv-tshirt-b',
    loadChildren: () => import('./pv-tshirt-b/pv-tshirt-b.module').then( m => m.PvTshirtBPageModule)
  },
  {
    path: 'pv-hoodie',
    loadChildren: () => import('./pv-hoodie/pv-hoodie.module').then( m => m.PvHoodiePageModule)
  },
  {
    path: 'pv-wind-breaker',
    loadChildren: () => import('./pv-wind-breaker/pv-wind-breaker.module').then( m => m.PvWindBreakerPageModule)
  },
  {
    path: 'pv-varsity',
    loadChildren: () => import('./pv-varsity/pv-varsity.module').then( m => m.PvVarsityPageModule)
  },
  {
    path: 'pv-spartan-mug',
    loadChildren: () => import('./pv-spartan-mug/pv-spartan-mug.module').then( m => m.PvSpartanMugPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'nocart',
    loadChildren: () => import('./nocart/nocart.module').then( m => m.NocartPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'sizechart',
    loadChildren: () => import('./sizechart/sizechart.module').then( m => m.SizechartPageModule)
  },
  {
    path: 'faqs',
    loadChildren: () => import('./faqs/faqs.module').then( m => m.FaqsPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'contacts',
    loadChildren: () => import('./contacts/contacts.module').then( m => m.ContactsPageModule)
  },
  {
    path: 'reservationform',
    loadChildren: () => import('./reservationform/reservationform.module').then( m => m.ReservationformPageModule)
  },
  {
    path: 'dresscode',
    loadChildren: () => import('./dresscode/dresscode.module').then( m => m.DresscodePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
