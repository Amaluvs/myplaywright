import {test,expect} from '@playwright/test'
test('simple alert in playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/javascript-alert.php')
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toBe('I am a Javascript alert box!')
        await dialog.accept()
    })
    const clickme=page.locator("//button[@onclick='jsAlert()']")
    await clickme.click()
})
test.only('confirmation alert in playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/javascript-alert.php')
    page.on('dialog',async dialog=>{
       // console.log(dialog.message());//returns the alert text
        expect(dialog.message()).toBe('Press a button!')
       // await dialog.dismiss()
       await dialog.accept()
    })
    const clickme=page.locator("//button[@onclick='jsConfirm()']")
    await clickme.click()
})
test('prompt alert in playwright',async({page})=>{
    await page.goto('https://selenium.qabible.in/javascript-alert.php')
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toBe('Please enter your name')
       await dialog.accept("helooooooooooo")
       //await dialog.dismiss("amaluuu")
    })
    const clickme=page.locator("//button[@onclick='jsPrompt()']")
    await clickme.click()
})