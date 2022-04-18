import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BusinessacctComponent } from './businessacct/businessacct.component';
import { ChefeditprofileComponent } from './chefeditprofile/chefeditprofile.component';
import { ChefemailcompleteComponent } from './chefemailcomplete/chefemailcomplete.component';
import { ChefloginsetupComponent } from './chefloginsetup/chefloginsetup.component';
import { ChefprofilesetupComponent } from './chefprofilesetup/chefprofilesetup.component';
import { Chefsignup1Component } from './chefsignup1/chefsignup1.component';
import { ChefviewprofileComponent } from './chefviewprofile/chefviewprofile.component';
import { ContactComponent } from './contact/contact.component';
import { CreatemenuComponent } from './createmenu/createmenu.component';
import { CustomerprofileComponent } from './customerprofile/customerprofile.component';
import { FAQsComponent } from './faqs/faqs.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CancelOrderComponent } from './cancel-order/cancel-order.component';
import { EnterZipCodeComponent } from './enter-zip-code/enter-zip-code.component';
import { FindChefComponent } from './find-chef/find-chef.component';
import { HomeComponent } from './home/home.component';
import { HomecookedfoodComponent } from './homecookedfood/homecookedfood.component';
import { LoginComponent } from './login/login.component';
import { PersonalacctComponent } from './personalacct/personalacct.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { TermsComponent } from './terms/terms.component';
import { OrderCancelledComponent } from './order-cancelled/order-cancelled.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SelectCuisineComponent } from './select-cuisine/select-cuisine.component';
import { SelectMenuComponent } from './select-menu/select-menu.component';
import { ThankYouForOrderComponent } from './thank-you-for-order/thank-you-for-order.component';
import { PersonalsignComponent } from './personalsign/personalsign.component';
import { PersonalemailcompleteComponent } from './personalemailcomplete/personalemailcomplete.component';
import { PersonalloginComponent } from './personallogin/personallogin.component';
import { AuthGuard } from './auth/auth.gaurd';
import { ChefAuthGuard } from './auth/chefAuth.gaurd';

import { ReserpwdemailcompleteComponent } from './reserpwdemailcomplete/reserpwdemailcomplete.component';
import { ChefReviewsComponent } from './chef-reviews/chef-reviews.component';
import { CustomereditprofileComponent } from './customereditprofile/customereditprofile.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { CustomerwitechefreviewComponent } from './customerwitechefreview/customerwitechefreview.component';
import { CustomerviewchefpageComponent } from './customerviewchefpage/customerviewchefpage.component';
import { CustomerreviewsuccessComponent } from './customerreviewsuccess/customerreviewsuccess.component';
import { FormsuccessComponent } from './formsuccess/formsuccess.component';



const routes: Routes = [

 {component:HomeComponent,path:""},
//  {component:ServicesComponent,path:"Services"},
 {component:AboutComponent,path:"About"},
 {component:ContactComponent,path:"Contact"},
 {component:LoginComponent,path:"Login"},
 {component:SignupComponent,path:"Signup"},
 {component:FAQsComponent,path:"FAQs"},
 {component:PrivacypolicyComponent,path:"Privacypolicy"},
 {component:TermsComponent, path:"Terms"},
 {component:PersonalacctComponent, path:"personalacct"},
//  {component:BusinessacctComponent, path:"businessacct"},
 {component:Chefsignup1Component, path: "chefsignup1"},
 {component:ChefemailcompleteComponent, path: "chefemailcomplete"},
 {component:ChefloginsetupComponent, path:"chefloginsetup"},
 {component:ChefprofilesetupComponent, path:"chefprofilesetup", canActivate:[AuthGuard,ChefAuthGuard] },
 {component:CreatemenuComponent, path:"createmenu", canActivate:[AuthGuard,ChefAuthGuard] },
 {component:ChefviewprofileComponent, path:"chefviewprofile", canActivate:[AuthGuard,ChefAuthGuard] },
 {component:ChefeditprofileComponent, path:"chefeditprofile", canActivate:[AuthGuard,ChefAuthGuard] },
 {component:ForgotpasswordComponent, path:"forgotpassword"},
 {component:ResetpasswordComponent, path:"resetpassword"},
 {component:CustomerprofileComponent, path: "customerprofile", canActivate:[AuthGuard,] },
 {component:HomecookedfoodComponent, path:"homecookedfood"},
 {component:EnterZipCodeComponent,path:"EnterZipCode"},
 {component:SelectCuisineComponent,path:"SelectCuisine/:zipCode"},
 {component:ThankYouForOrderComponent,path:"ThankYouForOrder", canActivate:[AuthGuard] },
 {component:CancelOrderComponent,path:"CancelOrder", canActivate:[AuthGuard] },
 {component:OrderCancelledComponent,path:"OrderCancelled", canActivate:[AuthGuard] },
 {component:FindChefComponent,path:"FindChef/:zipCode/:cuisineId/:selectedcuisineCategory"},
 {component:SelectMenuComponent,path:"SelectMenu/:chefId/:selectedcuisineCategory"},
 {component:OrderSummaryComponent,path:"OrderSummary"},
 {component:PersonalsignComponent,path:"personalsign"},
 {component:PersonalemailcompleteComponent, path: "personalemailcomplete"},
 {component:ReserpwdemailcompleteComponent, path: "resetpwdemailcomplete"},
//  {component:PersonalloginComponent, path: "peronallogin"}

{component:OrderHistoryComponent, path: "OrderHistory"},
{component:ChefReviewsComponent, path:"Reviews"},
{component:CustomereditprofileComponent, path:"CustomerEditProfile"},
{component:CustomerwitechefreviewComponent, path:"WriteReview"},
{component:CustomerviewchefpageComponent, path: "ViewChef"},
{component:CustomerreviewsuccessComponent, path: "ReviewSuccess"},
{component:FormsuccessComponent, path: "FormSubmitted"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
