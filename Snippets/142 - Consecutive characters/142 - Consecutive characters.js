const input = "aaabbeeeeeffgg";
const regex = /([a-z])\1*/g;

const output = input.match(regex);

// [ 'aaa', 'bb', 'eeeee', 'ff', 'gg' ]