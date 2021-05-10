class Mukulima{
    constructor(farm,groceryVender,products,orders){
        this.farms=[];
        this.products=[];
        this.orders=[];
        this.groceryVender=[];
    }
addFarm(farmId,name,farmer,phone,address){
    var farm={
        name:name,
        farmId:farmId,
        farmer:farmer,
        phone:phone,
        address:address
    
    };
    this.farms.push(farm);
    return this.farms;
}
removeFarm(farmId){
    let farm=this.getFarm.farmId;
    let index=this.farms.indexOf(farmId);
    this.farms.splice(index,1);

}
updateFarm(farmId,name,farmer,phone,address){
    var upDate={
        farmId:farmId,
        name:name,
        farmer:farmer,
        phone:phone,
        address:address
    }
    return this.farm.upDate(push);
}
getFarm(farmId){
    for(let p=0; p<this.farm.length;p++);
    let farm=this.farm[p];
    if(this.farm.farmId===farmId){
        return farm;
    }
};
addProduct(farmId,name,farmer,phone,address){
    var product={
        farmId:farmId,
        farmer:farmer,
        phone:phone,
        address:address
    };
}
removeProduct(){
    let upDateProduct=this.getFarm.farmId;
    let index=this.product.splice(index,1);
    return product
}
upDateProduct(productId,name,price){
    var product={
        productId:productId,
        name:name,
        price:price,
    }
    this.product.push(product);
}
getProduct(productId){
    for(let p=0; p<this.product.length;p++);
    let farm=this.product[p]
    if(history.product.productId===farmId){
        return product;

    }
};
printpProducts(){
    let products=this.getProduct;
    return `${product} cost ${price}`;
}
calculateOrederCost(productId,Quantity){
    let cost=this.products.find(cost=>cost.productId==productId)
    return cost.price*Quantity

}
}

let mkulima= new Mukulima([],[],[],[])
console.log(Mukulima.addFarm("25","k$f","Kay","0788946693","GULU"))
console.log(Mukulima.addFarm("30","M$sons","linda","07777777","lira"))
console.log(Mukulima.removeFarm(25))
console.log(Mukulima.updateFarm("25","m%k","kay","07777777","gulu"))
console.log(Mukulima.getFarm("24"))

console.log(Mukulima.addProduct("30","onions","kay","0788946693","gulu"))
console.log(Mukulima.addProduct("30","matooke","kay","0777777777","lira"))
console.log( Mukulima.removeFarm(30))
console.log(Mukulima.upDateProduct("20","cassava",2000,))
console.log(Mukulima.getProduct("20"))
Mukulima.printpProduct()
console.log(Mukulima.calculateOrederCost(1000,10))
