const fs = require('fs');
const crypto = require('crypto');
const start = Date.now();
// process.env.UV_THREADPOOL_SIZE = 2; //NOT Working on windows

fs.readFile('test-file.txt', (e, d) => {
    console.log(Date.now() - start + " - I/O fileHandeling");
    console.log("-------------------------------------");

    setTimeout(() => console.log(Date.now() - start + " - setTimeout-2"), 0);
    setTimeout(() => console.log(Date.now() - start + " - setTimeout-2(with 3 seconds)"), 3000);
    setImmediate(() => console.log(Date.now() - start + " - setImmediate-2"));
    process.nextTick(() => console.log("process.NextTick"));
    crypto.pbkdf2("password", "salt", 300000, 1024, "sha512", () => console.log(Date.now() - start, "password-encrypted-async"));
    crypto.pbkdf2("password", "salt", 300000, 1024, "sha512", () => console.log(Date.now() - start, "password-encrypted-async"));
    crypto.pbkdf2("password", "salt", 300000, 1024, "sha512", () => console.log(Date.now() - start, "password-encrypted-async"));
    crypto.pbkdf2("password", "salt", 300000, 1024, "sha512", () => console.log(Date.now() - start, "password-encrypted-async"));
    crypto.pbkdf2("password", "salt", 300000, 1024, "sha512", () => console.log(Date.now() - start, "password-encrypted-async"));
    crypto.pbkdf2("password", "salt", 300000, 1024, "sha512", () => console.log(Date.now() - start, "password-encrypted-async"));

    // crypto.pbkdf2Sync("password", "salt", 200000, 1024, "sha512");
    // console.log(Date.now() - start, "password-encrypted");

    // crypto.pbkdf2Sync("password", "salt", 200000, 1024, "sha512");
    // console.log(Date.now() - start, "password-encrypted");

});

setTimeout(() => console.log(Date.now() - start + " - setTimeout-1"), 0);
setImmediate(() => console.log(Date.now() - start + " - setImmediate-1"));

console.log(Date.now() - start + " - top level code");