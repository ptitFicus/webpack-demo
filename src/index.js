console.log('COUCOU');

var id = 'hello-module';
var button = document.createElement('button');
button.textContent = 'Load';
button.id = id;

console.log(document.getElementById('app'));
document.getElementById('app').appendChild(button);

document.getElementById(id).addEventListener('click', () => {
  import('./hello').then(hello => {
    console.log(hello);
    hello.default();
  });
});
