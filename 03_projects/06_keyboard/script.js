const insert = document.getElementById('insert')
document.body.style.backgroundColor = 'green';


const header = `
<table>
    <tr>
        <th>Key </th>
        <th>Keycode</th>
        <th>Code</th>
    </tr>
</table>
`
insert.innerHTML += header;


window.addEventListener('keydown', (e) => {
    const row = `
        <table>
            <tr>
                <td>${e.key === " " ? 'space' : e.key} </td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    `

    insert.innerHTML += row;
});