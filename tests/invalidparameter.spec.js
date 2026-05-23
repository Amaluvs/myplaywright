import {test,expect} from '@playwright/test'
const dataset=require('../utils/parameterizedtestdata.json')
test.beforeEach(async({page})=>{
    await page.goto('https://www.saucedemo.com')
})
for(const  data of dataset){

test(`login with invalid credentials ${data.username} ${data.password}`,async({page})=>{
     const usename=page.locator("//input[@id='user-name']")
     await usename.fill(data.username)
     const password=page.locator("//input[@id='password']")
     await password.fill(data.password)
     const signin=page.locator("//input[@id='login-button']")
     await signin.click()
    // await expect(page).toHaveURL("https://www.saucedemo.com")
   /* if (data.isValid) {
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
} else {
    await expect(page).toHaveURL('https://www.saucedemo.com')
}*/
})
}