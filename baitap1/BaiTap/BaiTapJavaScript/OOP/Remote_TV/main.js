let remote = new Remote();
let tv = new Tv(1, 50);

console.log("channel hiện tại: " + remote.getChannel(tv));
console.log("volume hiện tại: " + remote.getVolume(tv));

remote.switchChannel(tv, 9);
remote.changeVolume(tv, 100);

console.log("channel hiện tại: " + remote.getChannel(tv));
console.log("volume hiện tại: " + remote.getVolume(tv));
