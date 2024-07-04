
//to fetch products from the database

async function getProduct() {

    try {
        
        const response = await fetch('https://fakestoreapi.com/products')

        console.log(response);

        //convert the returned promise to a javascript object
        const productData = await response.json();
        console.log(productData);

        //grab an empty container from the DOM
        const productCard = document.getElementById('product-card');

        //create an undefined variable
        let myCards = "";

        //Map through the array of products fetched
        productData.map((product) => {
                myCards += `
                            <div class="card">
                                <img src=${product.image} alt="photo" />
                                <h3>${product.title}</h3>
                                <div class="amount">
                                    <h5>Price:</h5>
                                    <p>${product.price}</p>
                                </div>
                                <div class="category">
                                    <h5>Category:</h5>
                                    <p>${product.category}</p>
                                </div>
                                <p>${product.description}</p>
                            </div>
                        `
        });

        productCard.innerHTML = myCards;
    } 
    
    catch (error) {
        alert(" Not today!");
    }
};

getProduct();


//testing the end point

async function callProducts(){
    try {
        const answer = await fetch('https://fakestoreapi.com/products')
    
        //convert the returned promise to an object
        const Data = await answer.json();

        console.log(Data);

        //grab an empty container from the DOM
        const myTest = document.getElementById('canny');

        myTest.innerHTML = `
                            <img src=${Data[2].image} alt="photo" />
                            `    
    
    } catch (error) {
        alert("get out!");
    }
};

callProducts()

