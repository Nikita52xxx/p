let s = "qewWeew dsdaDds asdasdIooo";
let up = [];

for (let i = 0; i < s.length; i++) {
    const e = s[i];
    if (e == e.toUpperCase() && e!=" ") {
        up.push(e);
    }
    
}

console.log(up)