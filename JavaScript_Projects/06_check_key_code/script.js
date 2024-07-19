const insect = document.getElementById('insect')

window.addEventListener('keydown',(e) =>{
insect.innerHTML = `
<div class='color'>
<table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space" : e.key }</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  <tr>
  
</table>
</div>`
})