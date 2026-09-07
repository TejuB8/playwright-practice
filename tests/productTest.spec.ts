import{test,expect} from '../fixtures/pages.fixture'
import { ProductPage} from '../pages/ProductPage';
import { LoginPage } from '../pages/LoginPage';
import { getUserData } from '../Data/user.data';

test("product page test" ,async({loginPage,page})=>{
    const userData=getUserData();
    await loginPage.goTo();
    const accountPage=await loginPage.doLoginWith(userData.email,userData.password);
    const productPage=await accountPage.chooseCategory();
    await expect(productPage.page).toHaveURL('/3-women')
    await productPage.addToCart();

    


  
   


})
