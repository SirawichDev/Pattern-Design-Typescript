class Showme <T>{
    private mapper: { [key:string]: T} = {};
    setItem(key:string,item: T){
        this.mapper[key] = item;
    }
    getItem(key:string){
        return this.mapper[key];
    }
    clear(){
        this.mapper = {};
    }
    printMap(){
        for(let i in this.mapper){
            console.log(` ${i}-${this.mapper[i]}`)
        }
    }
}
const show = new Showme<number>();
show.setItem("xx",3);
show.getItem("xx");
show.printMap();
show.clear();
show.printMap();
