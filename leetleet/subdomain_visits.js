// var subdomainVisits = function(cpdomains) {
    
// // cpdomains is an array of strings, number then website separated by commas    
// // iterate over cpdomains
// // each string has a number first and then the actual domain
// // we can save the visited domains in an object
// // at the very end if the key has '.com', we can tally up the values
// // 



    
//     let visitCount = {}
    
//     for (let i = 0; i < cpdomains.length; i++) { // ["9001 discuss.leeetcode.com", "1 myspace.com"]
//     const [visits, domains] = cpdomains[i].split(" ") // [9001, discuss.leetcode.com]
    
// //     we want to split up domains into subdomains because currently, the domains look like:
// //     discuss.leetcode.com, myspace.com

//       let subDomains = domains.split('.');
//       while (subDomains.length) {
//         let subDomain = subdomains.join('.')

//         if (!visitCount[subDomain]) {
//           visitCount[subDomain] = Number(visits)
//         }
//       }
    
//     }

// };

// Date: 03/16/2021
// Problem: Subdomain Visit Count
// Leetcode #811: https://leetcode.com/problems/subdomain-visit-count/
// ex. discuss.leetcode.com has various subdomains
    // top level -> com
    // next level -> leetcode.com
    // lowest level -> discuss.leetcode.com
// we need to create a hash holding every domain
    // example. google.mail.com
    // hash will be like
        // { google.mail.com = 1; mail.com = 1}
    // iterate through the given array
        // find the domain not the number so spilt @ " " 
        // break down the domain into subdomains
            // -> use helper function
// helper function -> takes in pair and count object
    // separate number and domain and save them into a variable
    // google.mail.com
        // split @ "."
        // iterate backwards
        // com -> unshift into new holding array 
            // join array and save that into the hash




var subdomainVisits = function(cpdomains) {
    const count = {};
    for (let i = 0; i < cpdomains.length; i ++) {
        helpFunc(count, cpdomains[i])
    }
    return helperFuncTwo(count)
};
function helpFunc(count, currentElement) {
    let splitEle = currentElement.split(" ");
    let value = parseInt(splitEle[0]);
    let completeDomain = splitEle[1];
    let splitDomain = splitEle[1].split(".");
    let holdArray = [];
    for (let i = splitDomain.length - 1; i >= 0; i--) {
        holdArray.unshift(splitDomain[i])
        let currentDomain = holdArray.join(".")
        if (currentDomain in count) {
            count[currentDomain] += value
        } else {
            count[currentDomain] = value
        }   
    }
}
function helperFuncTwo(count) {
    // I want to go through this object
    // and create a new array
    // each element in the array will be the key proceeded by its value
    const newArray = [];
    for (const [key, value] of Object.entries(count)) {
        newArray.push(`${value} ${key}`)
    }
    return newArray
}










// a simple and easy to follow solution in JS
// var subdomainVisits = function(cpdomains) {
//     let visitCounts = {};
//     for (let i = 0; i < cpdomains.length; i++) {
//         // Split visits and domains by the space
//         const [visits, domains] = cpdomains[i].split(" ");
        
//         // Create array of subdomains in domain
//         let subdomains = domains.split(".");
        
//         while(subdomains.length) {
//             // Join all items in subdomains array
//             let subdomain = subdomains.join('.');
            
//             // If subdomain already exists in object, add to existing count
//             // number allows us to turn a string into a number 
//             visitCounts[subdomain] = visitCounts.hasOwnProperty(subdomain) ?
//                 Number(visitCounts[subdomain]) + Number(visits) :
//                 visits;
            
//             // Remove first subdomain from array
//             subdomains.shift();
//         }
//     }

//     return Object.keys(visitCounts).map((key) => `${visitCounts[key]} ${key}`);
// };
// 
// 
// 