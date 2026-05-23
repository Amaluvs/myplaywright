import {test,expect} from '@playwright/test'
test.only('frame in playwright',async({page})=>{
     await page.goto('https://demoqa.com/frames')
     const sampleframe=page.frameLocator("#frame1")//used to identify the iframe
     console.log(await sampleframe.locator("#sampleHeading").textContent())//get text

     //const sampleframe2=page.frameLocator("#frame2")//used to identify the iframe
     //console.log(await sampleframe2.locator("#sampleHeading").textContent())//get text
})






/*const frames = page.frameLocator("#frame1");

for (let i = 0; i < 2; i++) {
    const text = await frames.nth(i).locator("#sampleHeading").textContent();
    console.log(text);
}*/