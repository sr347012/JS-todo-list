var jsonData=[];;
var main;

    async function getTodos() {
        await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
          console.log(json[0]);
          jsonData = json;
        })
    }

    async function getTodo(id) {
        await fetch('https://jsonplaceholder.typicode.com/todos/'+`${id}`)
      .then(response => response.json())
      .then(json => console.log(json))
    }
    getTodos();
function init() {
    
    main = document.getElementById('main');
    for (let index = 0; index < 10; index++) {
        var liEl = document.createElement('div');
        var liChk = document.createElement('INPUT');
        liChk.setAttribute("type", "checkbox");
        var liTxtTxt = jsonData[index].title;
        // console.log(liTxtTxt);
        var liTxt = document.createTextNode(`${liTxtTxt}`);
        liEl.appendChild(liChk);
        liEl.appendChild(liTxt);
        
        main.appendChild(liEl);
    }
    // main.appendChild();
    // console.log(main);
}
// getTodos();
setTimeout(()=>init(),1000)
// init();

