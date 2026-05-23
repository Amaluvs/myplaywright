
//import {Page,Locator} from '@playwright/test'


export class LoginPage{
    

    constructor(page){//Initialize class
        this.page=page//stores the Playwright page (browser) inside the class so all methods can use it.
        this.username=page.locator("//input[@id='user-name']")//username element stored inside this class”
       // this.username is a class variable (property)
//this.page is a property
//this → current object
//username → variable name
        this.password=page.locator("//input[@id='password']")
        this.loginbutton=page.locator("//input[@id='login-button']")
    }
    async goto()
    {
        await this.page.goto('https://www.saucedemo.com')
       // return this
    }
    async login(user,pass){
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginbutton.click()
    // return new InventoryPage(this.page)

    }
}



    
