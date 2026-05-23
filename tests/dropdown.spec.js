import {test,expect, chromium} from '@playwright/test'
test.only('dropdown in playwright',async({page})=>{
    //await page.goto('https://webdriveruniversity
    // .com/Dropdown-Checkboxes-RadioButtons/index.html')
   
    //const drop=page.locator("//select[@id='dropdowm-menu-1']")
    //const drop=page.locator("//select[@id='dropdowm-menu-1']")
    const drop=page.locator("//select[@id='single-input-field']")
    //Select by index
  await drop.selectOption({index:1})//index just a property
  //Select by value
//await drop.selectOption({value:'Yellow'})
//Select by visibletext
//await drop.selectOption({label:'Red'})
    })
    //index is not a JavaScript keyword; it is a property used by Playwright inside the selectOption() method.”
    /*“In Playwright, dropdowns are automated using selectOption() for standard <select> elements,
      and for custom dropdowns, we use click actions to select options.”*/