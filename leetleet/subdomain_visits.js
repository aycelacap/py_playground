var subdomainVisits = function(cpdomains) {
    
// cpdomains is an array of strings, number then website separated by commas    
// iterate over cpdomains
// each string has a number first and then the actual domain
// we can save the visited domains in an object
// at the very end if the key has '.com', we can tally up the values
// 



    
    let visitCount = {}
    
    for (let i = 0; i < cpdomains.length; i++) { // ["9001 discuss.leeetcode.com", "1 myspace.com"]
    const [visits, domains] = cpdomains[i].split(" ") // [9001, discuss.leetcode.com]
    
//     we want to split up domains into subdomains because currently, the domains look like:
//     discuss.leetcode.com, myspace.com

      let subDomains = domains.split('.');
      while (subDomains.length) {
        let subDomain = subdomains.join('.')

        if (!visitCount[subDomain]) {
          visitCount[subDomain] = Number(visits)
        }
      }
    
    }

};















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