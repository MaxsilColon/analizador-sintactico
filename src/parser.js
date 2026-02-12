let tokens = [];
let pos = 0;

function peek() {
  return tokens[pos];
}

function consume(expected) {
  if (peek() === expected) {
    pos++;
  } else {
    throw new Error(`Se esperaba '${expected}' y se encontró '${peek()}'`);
  }
}

function consumeID() {
  if (/^[a-zA-Z_]\w*$/.test(peek())) {
    pos++;
  } else {
    throw new Error("Se esperaba un identificador");
  }
}

function consumeNUM() {
  if (/^\d+$/.test(peek())) {
    pos++;
  } else {
    throw new Error("Se esperaba un número");
  }
}

function factor() {
  if (/^\d+$/.test(peek())) {
    consumeNUM();
  } else if (/^[a-zA-Z_]\w*$/.test(peek())) {
    consumeID();
  } else if (peek() === "(") {
    consume("(");
    expression();
    consume(")");
  } else {
    throw new Error("Factor inválido");
  }
}

function term() {
  factor();

  while (peek() === "*" || peek() === "/") {
    pos++;
    factor();
  }
}

function expression() {
  term();

  while (peek() === "+" || peek() === "-") {
    pos++;
    term();
  }
}

function assignment() {
  consumeID();
  consume("=");
  expression();
  consume(";");
}

function printStmt() {
  consume("print");
  consume("(");
  expression();
  consume(")");
  consume(";");
}

function statement() {
  if (peek() === "print") {
    printStmt();
  } else {
    assignment();
  }
}

function program() {
  while (pos < tokens.length) {
    statement();
  }
}

export function parse(inputTokens) {
  tokens = inputTokens;
  pos = 0;

  program();

  if (pos < tokens.length) {
    throw new Error("Tokens sobrantes");
  }

  console.log("Sintaxis correcta");
}
