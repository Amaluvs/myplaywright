import {test,expect} from '@playwright/test'
test.only('calender validation',async({page})=>{
     await page.goto('https://selenium.qabible.in/date-picker.php')
     const enterdate=page.locator('#single-input-field')
     await enterdate.click()
     const targetyear=1997
    // await expect(page.locator('.datepicker-dropdown')).toBeVisible()//waiting period for the popup
    await expect(page.locator('.dropdown-menu')).toBeVisible()
    //ethu view cheyyan visible yennum koodi kodukuka
     await switchbutton.click()//eppo days ill ninu month lae view ill mari
     await switchbutton.click()
     //endless aayitu work aakatae erikan limit veykuka
     let attempts=10//avoid infinite loop
     while(attempts--){//multiple time attempt work cheyyan aanu loop ill edunnae
     
     const decades=await switchbutton.innerText()//user inferface ill ulla decade fetch cheyyan aanu.nammal text aayitu aanu fetch cheyyunnae 2020-2029
     const startyear=parseInt(decades.split('-')[0].trim())//["2020",2029]//number ill convert cheyyan aanu parsenInt method use cheyyunnae
if(targetyear>=startyear && targetyear<=startyear+9)//one decade ill 10 years aanu ullathu.nammal start year +9 koodi aanu yadukunnae
break
await page.locator('.prev:visible').click()
     }
     await page.locator('.year:visible').filter({hasText:'1997'}).click()
     await page.locator('.month:visible').filter({hasText:'Mar'}).click()
     await page.locator('.day:visible').filter({hasText:'20'}).click()
     await page.locator('#button-one').click()
})