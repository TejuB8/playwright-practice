import{test,expect} from '../fixtures/pages.fixture';
import { ProductPage } from '../pages/ProductPage';
import{getUserData} from '../Data/user.data';

test('add product to cart', {tag:'@regression'}, async({loginPage,page})=>{
    const user=getUserData();
    await loginPage.goTo();
    await loginPage.doLoginWith(user.email,user.password);

    const productPage=new ProductPage(page);
    await productPage.searchProduct('Printed Chiffon Dress');
    await expect(productPage.itemTextLocator).toBeVisible();

    const orderPage=await productPage.addToCart();
    await expect(orderPage.page).toHaveURL('/order');

    await expect(orderPage.productLocator).toHaveAttribute('title','Printed Chiffon Dress');
    await expect(orderPage.priceLocator).toBeVisible();
    const addressPage=await orderPage.goToAdressConfirmationPage();
    const shippingPage=await addressPage.goToShiPPingPage();
    const paymentPage=await shippingPage.goToPayementPage();
    await expect(paymentPage.page).toHaveURL('/order');



})