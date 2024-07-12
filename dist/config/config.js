"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClustWorker = void 0;
class ClustWorker {
    constructor(cl) {
        this.cluster = cl;
    }
    on() {
        let worker = this.cluster.fork();
        console.log(`WORKER INIT ${worker.id}`);
    }
    off() {
        let obj = this;
        setTimeout(() => {
            obj.on();
        }, 2000);
    }
}
exports.ClustWorker = ClustWorker;
