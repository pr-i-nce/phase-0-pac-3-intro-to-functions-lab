require ( './root.js' );
const string = "Hello!";

console.log(string);
console.log(string.toUpperCase());

console.log(string === string.toUpperCase());


 function shout(string)  {
  return string.toUpperCase(); // 'HELLO!'


  }


function whisper(string) {
  return string.toLowerCase();
}
  

 function logShout(string) {
  console.log(string.toLowerCase());
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith('HELLO');

    console.log.restore();
  })
}

 function logWhisper(string) {
  console.log (string.toUpperCase());
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
}

function sayHiToHeadphonedRoommate(string) {
  if(string===string.toLowerCase()) 
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    return "I cant hear you";

    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
  })
  else if (string ===string.toUpperCase())
  it('returns "YES INDEED!" if `string` is uppercase', function() {
    return 'YES INDEED';
    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
  })
  else if (string === "Let's have dinner togather!")
  it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
    return "I would love to!"
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
      "I would love to!"
    );
  });
}

module.exports = {
  shout,
  whisper,
  logShout,
  logWhisper,
  sayHiToHeadphonedRoommate
};
