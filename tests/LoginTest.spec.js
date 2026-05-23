import{LoginPage} from '../pages/LoginPage'
import {test,expect} from '@playwright/test'
import{getData} from '../utils/excelreader'

const credential=getData()
test('login using valid credentials',async({page})=>{
    for(const data of credential){

    
const loginpage=new LoginPage(page)//You are sending page (browser) into the constructor  //pass fixture to constructor
await loginpage.goto()
await loginpage.login(data.username,data.password)
//await loginpage.login('standard_user','secret_sauce')
 //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')//In POM, URL is usually placed in the Page Class for reusability
    }
})