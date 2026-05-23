//import{LoginPageMain} from '../pages/LoginPageMain'
import {LoginPageMain} from '../pages/LoginPageMain'
import {test,expect} from '@playwright/test'
import validlogindata from'../utils/testdatacredentials.json'


test('login using valid credentials',async({page})=>{
    
    
const loginpage=new LoginPageMain(page)//You are sending page (browser) into the constructor  //pass fixture to constructor
await loginpage.goto()
    const user=validlogindata.username
    const pass=validlogindata.password
await loginpage.login(user,pass)
//await loginpage.login('standard_user','secret_sauce')
 //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')//In POM, URL is usually placed in the Page Class for reusability
    
})