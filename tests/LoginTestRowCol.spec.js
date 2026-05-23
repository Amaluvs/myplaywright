import {test,expect} from '@playwright/test'
import{getCellData} from '../utils/excelreader2'
test('login using row and column with excel',async({page})=>{
    const username=getCellData(3,1)
    const password=getCellData(3,2)
    await page.goto('https://www.saucedemo.com/')
    const userfieldpage=page.locator('#user-name')
    await userfieldpage.fill(username)
    const passwordfieldpage=page.locator('#password')
    await passwordfieldpage.fill(password)
    const loginbutton=page.locator('#login-button')
    await loginbutton.click()
    

})