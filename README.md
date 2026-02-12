# Analizador Sintáctico en JavaScript

Este proyecto implementa un analizador sintáctico usando Node.js.

## Gramática

Programa → Sentencia*
Sentencia → Asignacion | Print
Asignacion → ID = Expresion ;
Print → print(Expresion);

## Ejecución

node src/main.js examples/test1.txt
# analizador-sintactico
