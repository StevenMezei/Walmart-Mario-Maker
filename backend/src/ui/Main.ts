import { ANTLRInputStream, CommonTokenStream, ConsoleErrorListener } from 'antlr4ts';
import { PlatformerLexer } from '../../PlatformerLexer';
import { PlatformerParser } from '../../PlatformerParser';
import { evaluator } from '../evaluator/evalulator';
import { jsoner } from '../evaluator/jsoner';
import { ParseTreetoAST } from '../parser/ParseTreetoAST';


export class mainHomoSapien {
    constructor() {
        console.log("Mom can we have mario maker. No we have mario maker at home. Mario maker at home:");
    }


    public parseAndEvaluateGame(userInput: string): [boolean,any] {
        // Create the lexer and parser
        let inputStream = new ANTLRInputStream(userInput);
        let lexer = new PlatformerLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new PlatformerParser(tokenStream);
        let visitor = new ParseTreetoAST();
        let program = visitor.visitProgram(parser.program());
        let json = new jsoner(program);
        let js = json.jsoner();
        let e = new evaluator(js);
        let error;
        if (!e.evaluate()) {
            error = e.getError();
            return [false,{"error": error}];
        } else {
            return [true,js];
        }
    }
}
