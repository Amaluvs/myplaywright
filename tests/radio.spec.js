import {test,expect, chromium} from '@playwright/test'
test.only('radiobutton in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const radio=page.locator("//input[@value='green']")
   // await radio.click();
   await radio.check();
    const status=await radio.isChecked()
    console.log(status)
    })