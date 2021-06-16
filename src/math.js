
let vec = {
    add : (v1,v2) => 
    {
        return [v1[0] + v2[0], v1[1] + v2[1], v1[2] + v2[2]];
    },
    sub : (v1,v2) => 
    {
        v2 = v2.map(x => -x);
        return vec.add(v1,v2);
    },
    dot : (v1,v2) => 
    {
        if(!v2) v2 = v1;
        return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2]; 
    }, 
    len : (v1) => 
    {
        return Math.sqrt(vec.dot(v1));
    },
    norm : (v1) => 
    {
        let len = vec.len(v1);
        return [v1[0] / len, v1[1] / len, v1[2] / len];
    },
    neg : (v1) => 
    {
        return v1.map(x => -x);
    },
    scale : (c,v1) => 
    {
        return v1.map(x => c * x);
    }
}

module.exports = {
    vec,
}
