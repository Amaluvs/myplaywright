import {test,expect, chromium} from '@playwright/test'

test.only('visual testing in playwright',async({page})=>{
await page.goto('https://selenium.qabible.in/')
await page.waitForLoadState('networkidle')
await page.locator("//div[@id='carouselExampleIndicators']").evaluate((element)=>{
    //evalutae-code run cheyyan aanu evaluate kodutae
    //evaluate is used to remove unwanted UI changes before taking screenshot.”
    element.style.display='none'//Hide the element from the page”
    //element-The HTML element you selected
    //style- Used to change CSS style
    //display-CSS property that controls visibility
    //none-Means do not show
    //Take that element and hide it (make it invisible)”
}
)
await expect(page).toHaveScreenshot('obsqura.png',{threshold:0.02,maxDiffPixels:8000})
})