function Promisee(callback) {
    var self = this;
    this.status = "pending"; //状态
    this.value = undefined;
    // 成功
    function resolve(value) {
        console.log(value)
        self.status = "resolve";
        self.value = value;
    }
    // 失败
    function reject(err) {
        self.status = "reject";
        console.log(err);
    }
    
    this.then = function (successCb) {
        console.log(self.value);
        if (self.status == "resolve") {
            successCb(self.value)
        }
    }
    callback(resolve, reject);
    // this.catch = function (failCb) {
    //     if (this.status == "reject") {
    //         failCb();
    //     }
    // }
}
// Promisee.prototype.then = function (successCb) {
//     console.log(this.value);
//     if (this.status == "resolve") {
//         successCb(this.value)
//     }
//     return this;
// }


new Promisee(function (resolve, reject) {
    setTimeout(function () {
        resolve("success");
    }, 1000)
}).then(function (data) {
    console.log(data)
}).catch()
// .catch(function (err) {
//     console.log(err)
// })