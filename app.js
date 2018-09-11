"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var PostsService = /** @class */ (function () {
    function PostsService() {
        this._filename = "data.json";
    }
    PostsService.prototype.getAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fs.readFile(_this._filename, "utf8", function (err, data) {
                if (err) {
                    reject(err);
                }
                return JSON.parse(data);
            });
        });
        // throw new Error("method not implemented");
    };
    PostsService.prototype.save = function (post) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getAll().then(function (posts) {
                posts.push(post);
                fs.writeFile(_this._filename, post, function (err) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                });
            });
        });
        // throw new Error("Method not implemented");
    };
    return PostsService;
}());
exports.PostsService = PostsService;
var NewsFeed = /** @class */ (function () {
    function NewsFeed(_service) {
        this._service = _service;
    }
    NewsFeed.prototype.show = function () {
        this._service.getAll().then(function (posts) {
            posts.forEach(function (post) {
                console.log(post.id + " - " + post.IP);
            });
        });
    };
    return NewsFeed;
}());
exports.NewsFeed = NewsFeed;
var newsFeed = new NewsFeed(new PostsService());
newsFeed.show();
