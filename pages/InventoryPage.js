export class InventoryPage
{
    constructor(page)
    {
        this.page=page
        this.backpacktocard=page.locator("//button[@id='add-to-cart-sauce-labs-backpack']")
        this.backpacktocard=page.locator("//a[@class='shopping_cart_link']")

    }
    async addBackPackToCards()
    {
        await this.backpacktocard()
    }
    async gotocard()
    {
        await this.backpacktocard()
    }
}