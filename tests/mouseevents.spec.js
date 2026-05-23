import {test,expect} from '@playwright/test'
test.only('frame in playwright',async({page})=>{
     await page.goto('https://selenium.qabible.in/')
const mousehover=page.locator("#others").hover()
//mousehover.hover()
await page.goto('https://selenium.qabible.in/drag-drop.php')
 //const rightclick=page.locator("//span[text()='Draggable n°1']").click({ button: 'right' })
 //const righ=page.locator("//span[text()='Draggable n°4']").dblclick()
const draganddrop=await page.locator("//span[text()='Draggable n°3']").dragTo(page.locator("#mydropzone"));
})