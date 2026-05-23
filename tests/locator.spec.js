import {test,expect, chromium} from '@playwright/test'
test('Browser Context Playwright Test',async({page})=>{
 await page.goto('https://selenium.qabible.in/simple-form-demo.php')
 const messagebox=page.locator('#single-input-field')
 const button=page.locator('#button-one')
 await messagebox.fill("hello")
 await button.click()

    })

    test.only('special locators in playwright',async({page})=>{
    await page.goto('https://groceryapp.uniqassosiates.com/admin')
    const username=page.locator("//input[@name='username']")
    await username.fill("admin")
     const password=page.locator("//input[@name='username']")
     await password.fill("admin")
     const submit=page.locator("//button[@type='submit']")
   await submit.click()
    })