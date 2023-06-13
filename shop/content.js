let itemList = [
    {
        name: "Intel i9-13900K | RTX 3070 Ti",
        image: "https://cdn.shopify.com/s/files/1/0475/0131/2165/files/2_b887237e-b3fb-4794-b1a3-56205c406803_700x.png?v=1686005860",
        price: "8999",
        description: "Specyfikacja: <br>•Procesor: Intel Core i9-13900K<br>•Karta Graficzna: NVIDIA GeForce RTX 3070 Ti 8GB<br>•RAM: Corsair 64GB RGB (2x32GB) DDR5 6400MHz<br>•Obudowa: NZXT H5 Flow Compact <br>•Pamięć: 1TB M.2 SSD"
    },
    {
        name: "Ryzen 5 5500 | RTX 3060 ",
        image: "https://cdn.shopify.com/s/files/1/0475/0131/2165/files/2_fe45cb39-0f6d-4ced-ab0e-3123b00e35e8_700x.png?v=1685639500",
        price: "4400",
        description: "Specyfikacja: <br>•Procesor: AMD Ryzen 5 5500<br>•Karta Graficzna: NVIDIA GeForce RTX 3060<br>•RAM: 16GB RGB (2x8GB) DDR4<br>•Obudowa: Deepcool 50<br>•Pamięć:1TB M.2 SSD"
    },
    {
        name: "Ryzen 7 5700G",
        image: "https://cdn.shopify.com/s/files/1/0475/0131/2165/files/1_aa05de44-b720-490d-b7c5-f8936b0d3505_700x.png?v=1683995509",
        price: "3300",
        description: "Specyfikacja: <br>•Procesor: AMD Ryzen 7 5700G<br>•RAM: 16GB RGB (2x8GB) DDR4<br>•Obudowa: Deepcool 50<br>•Pamięć: 1TB M.2 SSD"
    },
    {
        name: "Ryzen 7 5800X | RTX 3070",
        image: "https://cdn.shopify.com/s/files/1/0475/0131/2165/files/2_458653bd-e0a6-43cd-a277-21c53fbcc31b_700x.png?v=1684278168",
        price: "6999",
        description: "Specyfikacja: <br>•Procesor: AMD Ryzen 7 5800X<br>•Karta Graficzna: NVIDIA GeForce RTX 3070<br>•RAM: 16GB G.Skill RGB  (2x8GB) DDR4<br>•Obudowa: Deepcool 50<br>•Pamięć: 1TB M.2 SSD"
    },
    {
        name: "Ryzen 5 7600X | RTX 3070",
        image: "https://cdn.shopify.com/s/files/1/0475/0131/2165/files/5_58b1187a-4ac4-4bd1-8349-bcfe7150cdf9_700x.png?v=1684268202",
        price: "7499",
        description: "Specyfikacja: <br>•Procesor: AMD Ryzen 5 7600X <br>•Karta Graficzna: NVIDIA GeForce RTX 3070<br>•RAM: Corsair 32GB RGB (2x16GB) DDR5 5600MHz<br>•Obudowa: Deepcool 50<br>•Pamięć: 1TB M.2 SSD"
    },
    {
        name: "Ryzen 9 7900X3D | RTX 4090 ",
        image: "https://cdn.shopify.com/s/files/1/0475/0131/2165/products/2_593f40b7-9e56-4dff-a03c-fca383c82466_700x.png?v=1678485731",
        price: "16999",
        description: "Specyfikacja: <br>•Procesor: AMD Ryzen 9 7900X3D<br>•Karta Graficzna: Nvidia GeForce RTX 4090<br>•RAM: G.Skill 32GB (2x16GB) DDR5 6000MHz<br>•Obudowa: CORSAIR iCUE 5000D RGB <br>•Pamięć: 1TB M.2 SSD"
    },
    {
        name: "Intel i9-12900K | RTX 3080Ti ",
        image: "https://cdn.shopify.com/s/files/1/0475/0131/2165/files/5_83202fa0-f21a-490d-a918-eee108cbd77d_700x.png?v=1685125891",
        price: "8499",
        description: "Specyfikacja: <br>•Procesor: Intel i9-12900K<br>•Karta Graficzna: NVIDIA ASUS ROG STRIX RTX 3080Ti<br>•RAM: 32GB G.SKILL ROYAL RGB DDR4<br>•Obudowa: LIAN LI MINI<br>•Pamięć: 1TB M.2 SAMSUNG 980 PRO"
    },
    {
        name: "Intel i9-13900K | RTX 4090",
        image: "https://cdn.shopify.com/s/files/1/0475/0131/2165/files/3_78acba95-568c-4006-a7c7-88ae9289e1ff_700x.png?v=1683066525",
        price: "17999",
        description: "Specyfikacja: <br>•Procesor: Intel Core i9-13900K<br>•Karta Graficzna: Nvidia GeForce RTX 4090<br>•RAM: Corsair RGB 32GB (2x16GB) DDR5 5600MHz<br>•Obudowa: HYTE Y40<br>•Pamięć: 1TB M.2 SSD"
    },
    {
        name: "Ryzen 5 5500 | GTX 1650",
        image: "https://cdn.shopify.com/s/files/1/0475/0131/2165/files/2_9b4a6623-d9bc-4728-a230-1795511d0310_700x.png?v=1685659964",
        price: "3499",
        description: "Specyfikacja: <br>•Procesor: AMD Ryzen 5 5500<br>•Karta Graficzna: NVIDIA GeForce GTX 1650<br>•RAM: 16GB (2x8GB) DDR4<br>•Obudowa: COOLER MASTER TD500<br>•Pamięć: 1TB M.2 SSD"
    },
    {
        name: "Intel i9-13900K | RTX 4090",
        image: "https://cdn.shopify.com/s/files/1/0475/0131/2165/files/5_8bd6c4ac-58af-475d-b8fb-823334126711_700x.png?v=1682377641",
        price: "20499",
        description: "Specyfikacja: <br>•Procesor: Intel Core i9-13900K<br>•Karta Graficzna: Nvidia GeForce RTX 4090<br>•RAM: Corsair RGB 32GB (2x16GB) DDR5 6000MHz<br>•Obudowa: Corsair ICUE LC100<br>•Pamięć: 1TB M.2 SSD Gen4"
    },
]
function shop() {
    let con = "";
    for (let i = 0; i < itemList.length; i++) {
        con += '<div class="item" onclick="openItemDetails(' + i + ')">' +
            '<img src="' + itemList[i].image + '" class="item-image">' +
            '<div>' +
            '<h1 class="item-name">' + itemList[i].name + '</h1>' +
            '<h2 class="item-price">' + itemList[i].price + 'zł</h2>' +
            '</div>' +
            '</div>';
    }
    $('#products').html(con);
}
function openItemDetails(index) {
    let item = itemList[index];
    let windowContent = '<div class="item-details-window">' +
        '<span class="close-button" onclick="closeItemDetails()">&times;</span>' +
        '<div class="item-details-content">' +
        '<div class="item-image">' +
        '<img src="' + item.image + '">' +
        '</div>' +
        '<div class="item-info">' +
        '<h1 class="item-name">' + item.name + '</h1>' +
        '<h2 class="item-price">' + item.price + 'zł</h2>' +
        '<div class="item-actions">' +
        '<div class="buy-button">Kup Teraz</div>' +
        '<div class="add-to-cart-button"><img src="../pic/shopping-cart.png" width=28px></div>' +
        '</div>' +
        '<p class="item-description">' + item.description + '</p>' +
        '</div>' +
        '</div>' +
        '</div>';

    itemWindow = document.createElement('div');
    itemWindow.innerHTML = windowContent;
    document.body.appendChild(itemWindow);
}

function closeItemDetails() {
    itemWindow.parentNode.removeChild(itemWindow);
    itemWindow = null;
}