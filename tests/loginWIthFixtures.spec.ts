import{test,expect} from '../fixtures/pages.fixture'
import { getUserData} from '../Data/user.data';


test("Login test using custom fixtures",async({loginPage})=>{
  const userData=getUserData();
  await loginPage.goTo();
  await loginPage.doLoginWith(userData.email,userData.password);
})