function discoverOriginalPrice(discountedPrice, salePercentage){
    let res = (discountedPrice * 100) / ( 100 - salePercentage)
    let res1 = res.toFixed(2)
    return +res1
   }