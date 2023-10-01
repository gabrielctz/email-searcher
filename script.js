const prompt = require('prompt-sync')();

function searcher(){
    console.clear();
    console.log("\x1b[36m%s\x1b[0m", `
    .▄▄ · ▄▄▄ . ▄▄▄· ▄▄▄   ▄▄·  ▄ .▄▄▄▄ .▄▄▄  
    ▐█ ▀. ▀▄.▀·▐█ ▀█ ▀▄ █·▐█ ▌▪██▪▐█▀▄.▀·▀▄ █·
    ▄▀▀▀█▄▐▀▀▪▄▄█▀▀█ ▐▀▀▄ ██ ▄▄██▀▐█▐▀▀▪▄▐▀▀▄ 
    ▐█▄▪▐█▐█▄▄▌▐█ ▪▐▌▐█•█▌▐███▌██▌▐▀▐█▄▄▌▐█•█▌
     ▀▀▀▀  ▀▀▀  ▀  ▀ .▀  ▀·▀▀▀ ▀▀▀ · ▀▀▀ .▀  ▀\n`);
    const email = prompt("[?] Email adress: ")
    fetch(`https://leakcheck.net/api/public?key=49535f49545f5245414c4c595f4150495f4b4559&check=${email}`)
      .then((response) => {
        if (!response.ok) {
          console.log(" [-] " + response.status);
        }
        return response.json();
      })
      .then((json) => {
        const sources = json.sources;
        const found = json.found;
        const numberOfPasswords = json.passwords;
    
        console.log(`\n [+] Number of pwd : ${numberOfPasswords}`);
        console.log(` [+] Number of website results : ${found}\n`);
    
        sources.forEach((source, index) => {
          console.log(` ${index + 1}. ${source.name}`);
        });
        console.log("\n [+] Ctrl + C for exit the script...");
      })
    
    setTimeout(() => {}, 1000000);
}
searcher()
