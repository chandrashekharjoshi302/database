//-----------------------------------
For SIGIN/LOGIN
PATCH

https://harlequin-deer-kilt.cyclic.app/login/loginUser
header token – Authorization
Body{
email
password
}

//-----------------------------------


registration/signup 
POST

https://harlequin-deer-kilt.cyclic.app/login/adddetails

model – all DATA

 //-----------------------------------

for all data
all Products
GET

https://harlequin-deer-kilt.cyclic.app/product/get




//-----------------------------------


FOR SINGLE PRODUCTS
https://harlequin-deer-kilt.cyclic.app/product/get/:id

//-----------------------------------
TO POST DATA

https://harlequin-deer-kilt.cyclic.app/product/post


//-----------------------------------
FOR DELETE 

https://harlequin-deer-kilt.cyclic.app/delete/:id


//-----------------------------------

CART
GET pass Authorazation token in header
https://harlequin-deer-kilt.cyclic.app/cart




//-----------------------------------
Post request ADD Product to Cart

https://harlequin-deer-kilt.cyclic.app/cart/create 


//-----------------------------------
PATCH REQUEST
https://harlequin-deer-kilt.cyclic.app/modify/:id 



//-----------------------------------
DELETE REQUEST




https://harlequin-deer-kilt.cyclic.app/cart/delete/:id 

 https://harlequin-deer-kilt.cyclic.app/product/get?gender=mens

 http://localhost:9876/product/get?gender=Women



 //...............................

 http://localhost:9876/product/get?gender=Womens&category=tops

 http://localhost:9876/product/get?gender=mens&category=hoodies

 http://localhost:9876/product/get?gender=mens&category=tops

 http://localhost:9876/product/get?gender=mens&category=bottom

 http://localhost:9876/product/get?category=tops&gender=mens