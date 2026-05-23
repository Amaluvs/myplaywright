import {test,expect, chromium} from '@playwright/test'
test.only('multiple window in playwright',async({page,context})=>{
await page.goto('https://demo.guru99.com/popup.php')
//page → current tab
//newpopup → newly opened tab//newly opened browser window (Page object)
//newpopup = instance of Page class
//✔ Both are same type → Page
const popup=context.waitForEvent('page')
const clickbutton=page.locator("//a[text()='Click Here']")
await clickbutton.click()

const newpopup=await popup
//const newpopup=context.waitForEvent('page')
await newpopup.waitForLoadState()

const email=newpopup.locator("//input[@name='emailid']")
await email.fill("am123@gmail.com")

const submit=newpopup.locator("//input[@value='Submit']")
await submit.click()
})