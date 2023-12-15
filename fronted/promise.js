// for settime out
function promisedTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(resolve,duration);
    })
    return p;
}

// promise chaining
promisedTimeout(1000).then(function(){
    console.log("heyy");
})
promisedTimeout(2000).then(function(){
    console.log("bye");
})
