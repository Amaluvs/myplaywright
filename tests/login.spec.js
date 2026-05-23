import {test,expect} from '@playwright/test'
test.beforeEach(async({page})=>{
    await page.goto('https://www.saucedemo.com')
})/*test.beforeEach(...)
This is a Playwright hook
It runs before every test case

👉 If you have 5 tests → this runs 5 times*/
const loginvalidcredentilas=require('../utils/testdatacredentials.json')
test('login using valid credentials',async({page})=>{
     const usernamevalue=loginvalidcredentilas.username
     const passwordvalue=loginvalidcredentilas.password
     const usename=page.locator("//input[@id='user-name']")
     await usename.fill(usernamevalue)
     const password=page.locator("//input[@id='password']")
     await password.fill(passwordvalue)
     const signin=page.locator("//input[@id='login-button']")
     await signin.click()
     //const title=await page.title()
//console.log(title)
//await expect(page).toHaveTitle("Swag Labs")
//await expect(page).toHaveURL("https://www.saucedemo.com/inventory.htmlhttps://www.saucedemo.com/inventory.html")
await expect(page.locator("//span[@data-test='title']")).toHaveText('Products')

})
test.only('login using invalid credentials',async({page})=>{
     const usename=page.locator("//input[@id='user-name']")
     await usename.fill("standard_user")
     const password=page.locator("//input[@id='password']")
     await password.fill("secret_sauce123")
     const signin=page.locator("//input[@id='login-button']")
     await signin.click()
     await expect(page).toHaveURL("https://www.saucedemo.com")
})