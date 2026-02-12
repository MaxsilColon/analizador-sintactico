export function tokenize(code) {
  const regex = /\s*(print|\d+|[a-zA-Z_]\w*|==|=|\+|-|\*|\/|\(|\)|;)\s*/g;
  const tokens = [];

  let match;

  while ((match = regex.exec(code)) !== null) {
    tokens.push(match[1]);
  }

  return tokens;
}
