const main = document.querySelector('main');

const joke1 = "What did the fish say when he swam into a wall? Dam.";
const joke2 = "What do you call a can opener that doesn't work? A can't opener.";
const joke3 = "Did you hear about the Italian chef who died? He pasta-way.";


main.innerHTML = `
    <h1>My jokes</h1>
    <ul>
        <li> ${joke1} </li>
        <li> ${joke2} </li>
        <li> ${joke3} </li>
    </ul>
`
const p1 = document.createElement('p1');
p1.textContent = "That's all folks!";

main.appendChild(p1);