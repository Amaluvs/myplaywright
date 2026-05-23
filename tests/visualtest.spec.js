import {test,expect, chromium} from '@playwright/test'
test.only('visual testing in playwright',async({page})=>{
await page.goto("https://www.saucedemo.com")
//await page.goto('https://www.theknowledgeacademy.com/blog/demo-website-for-automation-testing/')
await page.waitForLoadState('networkidle')
await expect(page).toHaveScreenshot('loginpage.png',{threshold:0.2,maxDiffPixels:6700})
})