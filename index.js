const userInformation = require("./information");
const cowSay = require("cowsay");
console.log("user: ${userInformation.name}");
console.log("campus: ${userInformation.campus}");
console.log(cowSay.say({ text: `Hello! I'm ${userInformation.name} from ${userInformation.campus}` }));
