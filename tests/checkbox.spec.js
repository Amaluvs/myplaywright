import {test,expect} from '@playwright/test'
test.only('checkbox in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const check=page.locator("//input[@value='option-1']")
   //const check=page.locator("//input[@value='option-3']")
  // await check.click();
   await check.check();
   await check.uncheck()
   const status=await check.isChecked()
    console.log(status)

    })