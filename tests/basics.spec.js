import {test,expect, chromium} from '@playwright/test'
test('Browser Context Playwright Test',async({browser})=>{
const context=await browser.newContext()
const page=await context.newPage()
await page.goto('https://selenium.qabible.in/')
})

test.only('Page Playwright Test',async({page})=>
{
await page.goto('https://selenium.qabible.in/')
const title=await page.title()
console.log(title)
await expect(page).toHaveTitle("Obsqura Testing")
})