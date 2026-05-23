import {test,expect} from '@playwright/test'
test('Get Request-To get data',async({request})=>{
    const response=await request.get('https://jsonplaceholder.typicode.com/users')
    expect(response.ok()).toBeTruthy()
    const body=await response.json()
    console.log(body)
    expect(body.length).toBeGreaterThan(0)//no of users retured.
})
/*Type of response: object
Raw body: <Buffer 5b 7b 22 69 64 22 ... >

❌ Not readable (raw/buffer format)*/
test('Post Request-create user',async({request})=>{
    const response=await request.post('https://jsonplaceholder.typicode.com/users',{
    data:{// data is a keyword 
        name:'amalu',

        email:'amaluuu@gmail.com'
    }
})
    expect(response.status()).toBe(201)
    const responsebody=await response.json()
    console.log(responsebody)
    expect(responsebody.name).toBe('amalu')//double validation.not manditory
    

})

test('Patch Request-update user',async({request})=>{
    const response=await request.patch('https://jsonplaceholder.typicode.com/users/11',{// id number koodi kodukanum
        data:{// data is a keyword 
        email:'aba@gmail.com'
    }
})
expect(response.status()).toBe(200)
    })




    
test('Put Request-entire user update',async({request})=>{
    const response=await request.put('https://jsonplaceholder.typicode.com/users/10',{
    data:{// data is a keyword 
        "id": 11,
    "name": "amalu",
    "username": "Moriah.Stanton1",
    "email": "Rey.Padberg@karina.biz1",
    "address": {
      "street": "Kattie Turnpike1",
      "suite": "Suite 1986",
      "city": "Lebsackbury91",
      "zipcode": "31428-226182",
      "geo": {
        "lat": "-38.23863",
        "lng": "57.22325"
      }
    },
    "phone": "024-648-38044",
    "website": "ambrose.net1",
    "company": {
      "name": "Hoeger LLC2",
      "catchPhrase": "Centralized empowering task-forcee",
      "bs": "target end-to-end models5"
    }}
})

    expect(response.status()).toBe(200)
    //const responsebody=await response.json()
    //console.log(responsebody)
    

})
test.only('Delete user',async({request})=>{
    const response=await request.patch('https://jsonplaceholder.typicode.com/users/11',{// id number koodi kodukanum
       // data:{
    //}
})
expect(response.status()).toBe(200)
    })