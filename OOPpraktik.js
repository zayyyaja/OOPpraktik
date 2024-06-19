class Furniture {
    constructor (nameFurniture,harga , bahan) {
    this.nameFurniture = nameFurniture;
    this.harga = harga;
    this.bahan = bahan;
    }
    }
    
    class Interior extends Furniture {
    constructor (nameFurniture, harga) {
    super(nameFurniture, harga, true); 
    }
    mahal() {
    return '${this.nameFurniture} sangat mahal!';
    }
    }
    
    class Outdoor extends Furniture {
    constructor (nameFurniture, harga) {
    super(nameFurniture, harga, false); 
    }
    murah() {
    return '${this.nameFurniture} sangat murah!';
    }
    }
    
    
    const myInterior = new Interior("Interior mahal", 3000000000);
    
    const myOutdoor = new Outdoor("Outdoor murah", 2000000);
    
   
    console.log(myInterior.mahal()); 
    console.log(myOutdoor.murah()); 
    console.log(myInterior);
    console.log(myOutdoor);
