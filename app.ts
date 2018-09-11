import { IPostsService } from './app';
import * as fs from 'fs'; 

export interface Post{
    id: number;
    first_name: string;
    IP: string;
    email: string;
}

export interface IPostsService {
    getAll(): Promise<Post[]>;
    save(post:Post): Promise<void>;
}

export class PostsService implements IPostsService{
    private _filename: string = "data.json";

    constructor(){

    }
    getAll(): Promise<Post[]>{
        return new Promise((resolve,reject) => {
            fs.readFile(this._filename, "utf8",(err,data)=>{
                if(err){
                    reject(err); 
                }
                return JSON.parse(data);
            });
        });
        // throw new Error("method not implemented");
    }
    save(post:Post): Promise<void>{
        return new Promise((resolve, reject) => {
            this.getAll().then(posts => {
                posts.push(post);
                fs.writeFile(this._filename,post,err => {
                    if(err){
                        reject(err);
                    }
                    else{
                        resolve();
                    }
                })
            })
        });
        // throw new Error("Method not implemented");
    }
}

export class NewsFeed{
    constructor(private _service: IPostsService){

    }
    show(){
        this._service.getAll().then(posts => {
            posts.forEach(post =>{
                console.log(`${post.id} - ${post.IP}`);
            })
        });
    }
}

let newsFeed = new NewsFeed(new PostsService());
newsFeed.show();