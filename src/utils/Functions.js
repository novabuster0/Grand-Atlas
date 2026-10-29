export function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}

/*
params :
        [
            {paramName = -1,
            range = [Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER],
            specific = null}
        ]
    
    */

export function handleSearch(data, setter, params) {

    const paramKeys = Object.keys(params);
    console.log(params)
    const filteredData = data.filter((project) => {
        let pass = true;
        paramKeys.some((paramKey) => {
            // search by max
            if (params[paramKey]["max"] > 0) {
                pass = (params[paramKey]["max"] >= project[paramKey]);
                console.log(` max : \npass result :${pass} \nparamkey : ${paramKey}\nparamValue: ${params[paramKey]["max"]}\nprojectValue : ${project[paramKey]} `)
                console.log(params[paramKey]["max"]);

            }
            // search by specifc
            else if (params[paramKey]["specific"] != "") {
                pass = (params[paramKey]["specific"] == project[paramKey].toLowerCase());
                console.log(` specifc : \npass result :${pass} \nparamkey : ${paramKey}\nparamValue: ${params[paramKey]}\nproject : ${project} `)
            }
            // search doesnt pass 
            if (!pass) { return true }
            // pass to next search param
            return false;
        })
        return pass;
    })
    setter(filteredData)
}

function filter(paramInfo, value) {

}
// maps through objects
function objectMap(obj, fn) {
    const accepted = true;

    Object.keys(obj).forEach((key) => {
        accepted = fn(obj[key]);
    });
    return accepted;
}



export function formatPrice(price) {
    return price.toLocaleString("en-US");
}