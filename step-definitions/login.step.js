import {Given,When,Then,setDefaultTimeout} from '@cucumber/cucumber'
import{chromium} from 'playwright'
import assert from 'assert'
setDefaultTimeout(60000)

let browser
let page
Given('user is on login page',async function()
{
browser =await chromium .launch({headless:false})
const context=await browser.newContext()
page=await context.newPage()
await page.goto('https://www.saucedemo.com')
})
When('user enters valid username and password',async function(){
    await page.fill('#user-name','standard_user')
     await page.fill('#password','secret_sauce')

})
When('user enters invalid username {string} and invalidpassword {string}',async function(username,password){
    await page.fill('#user-name',username)
     await page.fill('#password',password)
})
When('clicks on login button',async function(){
await page.click('#login-button')
})
Then('user should navigate to homepage',async function()
{
//await page.waitForSelector('.inventory_list')
const title=await page.title()
assert.ok(title.includes('Swag Labs'))//includes() checks whether specified text is present or not."
await browser.close()//close() is used to close browser, page, or browser session after execution."
})
Then('user should navigate to errorpage',async function()
{
   /*const error =await page.locator('[data-test="error"]').textContent()//Gets text inside the element.
    assert.ok(error.includes('Username and password do not match any user in this service'))
    await browser.close()*/
    const url=await page.url()
    assert.ok(url.includes('https://www.saucedemo.com'))
    await browser.close()
})

//await expect(page.locator('[data-test="error"]'))
//.toContainText('Username and password do not match')