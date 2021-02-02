var Product=require('../models/product');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/shoppingcart?readPreference=primary&appname=MongoDB%20Compass&ssl=false',{ useNewUrlParser: true, useUnifiedTopology:true });
var products=[
    new Product({
    imagePath:'https://i5.walmartimages.com/asr/cb85b1c2-d68b-4ea9-a1cd-e0f447415cd3.3b2a96c4b9ddddde954063e120336cb2.jpeg',
    title:'smart iwatch',
    description:'This glass screen protector is custom-designed Compatible With Apple Smart iWatch.',
    price:23999
    }),
    new Product({
    imagePath:'https://cdn.mos.cms.futurecdn.net/4fxJtRFSxRMGs6yUsjhrkS.jpg',
    title:'iphone 13',
    description:'Apple will announce the "iPhone 13" in September or October 2021. The pandemic drove the iPhone 12 to be announced and released later than normal, but usual iPhone announcements take place in early to mid September.',
    price:71900
    }),
    new Product({
    imagePath:'https://i5.walmartimages.com/asr/cb85b1c2-d68b-4ea9-a1cd-e0f447415cd3.3b2a96c4b9ddddde954063e120336cb2.jpeg',
    title:'smart iwatch',
    description:'This glass screen protector is custom-designed Compatible With Apple Smart iWatch.',
    price:23999
    }),
    new Product({
    imagePath:'https://i.ytimg.com/vi/CbskF8PJvJo/maxresdefault.jpg',
    title:'MacBook pro',
    description:'Macbook give you wide screen',
    price:175000
    })
    
];
var done=0;
for(var i=0;i<products.length;i++)
{
    products[i].save(function(err,result){
        done++;
        if(done===products.length)
        {
            exit();
        }
    });
}
function exit()
{
    mongoose.disconnect();
}
