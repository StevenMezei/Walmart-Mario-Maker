parser grammar PlatformerParser;
options { tokenVocab=PlatformerLexer; }

program   : player STMT_NEWLINE? (entity (STMT_NEWLINE | NEWLINE))+ (level (STMT_NEWLINE | NEWLINE))+ EOF;

level    : LEVEL NAME OPEN_BRACE STMT_NEWLINE? level_body STMT_NEWLINE? CLOSE_BRACE;
level_body: (statement (STMT_NEWLINE | NEWLINE))* (level_entity (STMT_NEWLINE | NEWLINE)?)* CHECKS COLON OPEN_SQUARE (STMT_NEWLINE | NEWLINE)? (level_cond (STMT_NEWLINE | NEWLINE))* CLOSED_SQUARE (STMT_NEWLINE | NEWLINE);

level_cond: IF COLON OPEN_PAREN condition (LOGIC condition)? CLOSE_PAREN OPEN_BRACE STMT_NEWLINE? (cond_statement (STMT_NEWLINE | NEWLINE))* CLOSE_BRACE;
condition: (NAME OP exp) | NAME;
level_entity : COMPONENT COLON (STMT_NEWLINE | NEWLINE)  (statement (STMT_NEWLINE | NEWLINE))*;
entity_bod: OPEN_BRACE (STMT_NEWLINE | NEWLINE) (statement (STMT_NEWLINE | NEWLINE))* CLOSE_BRACE;
player : PLAYER NAME COLON entity_bod;  
entity : COMPONENT NAME COLON entity_bod;
cond_statement: COMPONENT COLON (ADD|REMOVE) value;
statement : NAME COLON value;
list: OPEN_SQUARE (STMT_NEWLINE | NEWLINE)? list_object (COMMA (STMT_NEWLINE | NEWLINE) list_object)* (STMT_NEWLINE | NEWLINE)? CLOSED_SQUARE;
value : NAME | CONST | list_object | LITERAL | LINK | list;
list_object: OPEN_PAREN exp (COMMA exp)* CLOSE_PAREN;
exp       : NAME | CONST;
