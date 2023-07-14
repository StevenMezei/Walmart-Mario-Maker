// Generated from src/parser/PlatformerLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class PlatformerLexer extends Lexer {
	public static readonly LEADING_SPACE = 1;
	public static readonly COMPONENT = 2;
	public static readonly OP = 3;
	public static readonly PLAYER = 4;
	public static readonly ENEMY = 5;
	public static readonly DOOR = 6;
	public static readonly TERRAIN = 7;
	public static readonly PLATFORM = 8;
	public static readonly BUTTON = 9;
	public static readonly COIN = 10;
	public static readonly LEVEL = 11;
	public static readonly CHECKS = 12;
	public static readonly IF = 13;
	public static readonly ADD = 14;
	public static readonly REMOVE = 15;
	public static readonly LOGIC = 16;
	public static readonly STMT_NEWLINE = 17;
	public static readonly NAME = 18;
	public static readonly CONST = 19;
	public static readonly COMMA = 20;
	public static readonly OPEN_BRACE = 21;
	public static readonly CLOSE_BRACE = 22;
	public static readonly OPEN_PAREN = 23;
	public static readonly CLOSE_PAREN = 24;
	public static readonly OPEN_SQUARE = 25;
	public static readonly CLOSED_SQUARE = 26;
	public static readonly SEMICOLON = 27;
	public static readonly COLON = 28;
	public static readonly LITERAL = 29;
	public static readonly LINK = 30;
	public static readonly SPACE = 31;
	public static readonly NEWLINE = 32;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"LEADING_SPACE", "COMPONENT", "OP", "PLAYER", "ENEMY", "DOOR", "TERRAIN", 
		"PLATFORM", "BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD", "REMOVE", 
		"LOGIC", "STMT_NEWLINE", "NAME", "CONST", "COMMA", "OPEN_BRACE", "CLOSE_BRACE", 
		"OPEN_PAREN", "CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", "SEMICOLON", 
		"COLON", "LITERAL", "LINK", "SPACE", "NEWLINE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'Player'", "'Enemy'", "'Door'", 
		"'Terrain'", "'Platform'", "'Button'", "'Coin'", "'Level'", "'Checks'", 
		"'IF'", undefined, undefined, undefined, undefined, undefined, undefined, 
		"','", "'{'", "'}'", "'('", "')'", "'['", "']'", "';'", "':'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LEADING_SPACE", "COMPONENT", "OP", "PLAYER", "ENEMY", "DOOR", 
		"TERRAIN", "PLATFORM", "BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD", 
		"REMOVE", "LOGIC", "STMT_NEWLINE", "NAME", "CONST", "COMMA", "OPEN_BRACE", 
		"CLOSE_BRACE", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", 
		"SEMICOLON", "COLON", "LITERAL", "LINK", "SPACE", "NEWLINE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PlatformerLexer._LITERAL_NAMES, PlatformerLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PlatformerLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(PlatformerLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "PlatformerLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return PlatformerLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return PlatformerLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return PlatformerLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return PlatformerLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\"\xFC\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x03\x02\x06" +
		"\x02E\n\x02\r\x02\x0E\x02F\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x05\x03Q\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x05\x04[\n\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x05\x0F\xA2\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\xB0\n\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xB7\n\x11\x03\x12\x06" +
		"\x12\xBA\n\x12\r\x12\x0E\x12\xBB\x03\x13\x03\x13\x07\x13\xC0\n\x13\f\x13" +
		"\x0E\x13\xC3\v\x13\x03\x14\x05\x14\xC6\n\x14\x03\x14\x06\x14\xC9\n\x14" +
		"\r\x14\x0E\x14\xCA\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03" +
		"\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x03\x1D\x03\x1D\x03\x1E\x06\x1E\xE0\n\x1E\r\x1E\x0E\x1E\xE1\x03\x1F" +
		"\x06\x1F\xE5\n\x1F\r\x1F\x0E\x1F\xE6\x03\x1F\x03\x1F\x06\x1F\xEB\n\x1F" +
		"\r\x1F\x0E\x1F\xEC\x03 \x06 \xF0\n \r \x0E \xF1\x03 \x03 \x03!\x06!\xF7" +
		"\n!\r!\x0E!\xF8\x03!\x03!\x02\x02\x02\"\x03\x02\x03\x05\x02\x04\x07\x02" +
		"\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02" +
		"\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12" +
		"#\x02\x13%\x02\x14\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02" +
		"\x1A3\x02\x1B5\x02\x1C7\x02\x1D9\x02\x1E;\x02\x1F=\x02 ?\x02!A\x02\"\x03" +
		"\x02\b\x04\x02\v\v\"\"\x04\x02\f\f\x0F\x0F\x04\x02C\\c|\x05\x022;C\\c" +
		"|\x03\x022;\v\x02##%(/;??AAC\\aac|\x80\x80\x02\u0111\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
		"\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02" +
		"\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02" +
		"\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02" +
		"\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)" +
		"\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02" +
		"\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02" +
		"\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03" +
		"\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x03D\x03\x02\x02" +
		"\x02\x05P\x03\x02\x02\x02\x07Z\x03\x02\x02\x02\t\\\x03\x02\x02\x02\vc" +
		"\x03\x02\x02\x02\ri\x03\x02\x02\x02\x0Fn\x03\x02\x02\x02\x11v\x03\x02" +
		"\x02\x02\x13\x7F\x03\x02\x02\x02\x15\x86\x03\x02\x02\x02\x17\x8B\x03\x02" +
		"\x02\x02\x19\x91\x03\x02\x02\x02\x1B\x98\x03\x02\x02\x02\x1D\xA1\x03\x02" +
		"\x02\x02\x1F\xAF\x03\x02\x02\x02!\xB6\x03\x02\x02\x02#\xB9\x03\x02\x02" +
		"\x02%\xBD\x03\x02\x02\x02\'\xC5\x03\x02\x02\x02)\xCC\x03\x02\x02\x02+" +
		"\xCE\x03\x02\x02\x02-\xD0\x03\x02\x02\x02/\xD2\x03\x02\x02\x021\xD4\x03" +
		"\x02\x02\x023\xD6\x03\x02\x02\x025\xD8\x03\x02\x02\x027\xDA\x03\x02\x02" +
		"\x029\xDC\x03\x02\x02\x02;\xDF\x03\x02\x02\x02=\xE4\x03\x02\x02\x02?\xEF" +
		"\x03\x02\x02\x02A\xF6\x03\x02\x02\x02CE\t\x02\x02\x02DC\x03\x02\x02\x02" +
		"EF\x03\x02\x02\x02FD\x03\x02\x02\x02FG\x03\x02\x02\x02GH\x03\x02\x02\x02" +
		"HI\b\x02\x02\x02I\x04\x03\x02\x02\x02JQ\x05\v\x06\x02KQ\x05\r\x07\x02" +
		"LQ\x05\x13\n\x02MQ\x05\x0F\b\x02NQ\x05\x11\t\x02OQ\x05\x15\v\x02PJ\x03" +
		"\x02\x02\x02PK\x03\x02\x02\x02PL\x03\x02\x02\x02PM\x03\x02\x02\x02PN\x03" +
		"\x02\x02\x02PO\x03\x02\x02\x02Q\x06\x03\x02\x02\x02R[\x07@\x02\x02ST\x07" +
		"@\x02\x02T[\x07?\x02\x02UV\x07>\x02\x02V[\x07?\x02\x02W[\x07>\x02\x02" +
		"XY\x07?\x02\x02Y[\x07?\x02\x02ZR\x03\x02\x02\x02ZS\x03\x02\x02\x02ZU\x03" +
		"\x02\x02\x02ZW\x03\x02\x02\x02ZX\x03\x02\x02\x02[\b\x03\x02\x02\x02\\" +
		"]\x07R\x02\x02]^\x07n\x02\x02^_\x07c\x02\x02_`\x07{\x02\x02`a\x07g\x02" +
		"\x02ab\x07t\x02\x02b\n\x03\x02\x02\x02cd\x07G\x02\x02de\x07p\x02\x02e" +
		"f\x07g\x02\x02fg\x07o\x02\x02gh\x07{\x02\x02h\f\x03\x02\x02\x02ij\x07" +
		"F\x02\x02jk\x07q\x02\x02kl\x07q\x02\x02lm\x07t\x02\x02m\x0E\x03\x02\x02" +
		"\x02no\x07V\x02\x02op\x07g\x02\x02pq\x07t\x02\x02qr\x07t\x02\x02rs\x07" +
		"c\x02\x02st\x07k\x02\x02tu\x07p\x02\x02u\x10\x03\x02\x02\x02vw\x07R\x02" +
		"\x02wx\x07n\x02\x02xy\x07c\x02\x02yz\x07v\x02\x02z{\x07h\x02\x02{|\x07" +
		"q\x02\x02|}\x07t\x02\x02}~\x07o\x02\x02~\x12\x03\x02\x02\x02\x7F\x80\x07" +
		"D\x02\x02\x80\x81\x07w\x02\x02\x81\x82\x07v\x02\x02\x82\x83\x07v\x02\x02" +
		"\x83\x84\x07q\x02\x02\x84\x85\x07p\x02\x02\x85\x14\x03\x02\x02\x02\x86" +
		"\x87\x07E\x02\x02\x87\x88\x07q\x02\x02\x88\x89\x07k\x02\x02\x89\x8A\x07" +
		"p\x02\x02\x8A\x16\x03\x02\x02\x02\x8B\x8C\x07N\x02\x02\x8C\x8D\x07g\x02" +
		"\x02\x8D\x8E\x07x\x02\x02\x8E\x8F\x07g\x02\x02\x8F\x90\x07n\x02\x02\x90" +
		"\x18\x03\x02\x02\x02\x91\x92\x07E\x02\x02\x92\x93\x07j\x02\x02\x93\x94" +
		"\x07g\x02\x02\x94\x95\x07e\x02\x02\x95\x96\x07m\x02\x02\x96\x97\x07u\x02" +
		"\x02\x97\x1A\x03\x02\x02\x02\x98\x99\x07K\x02\x02\x99\x9A\x07H\x02\x02" +
		"\x9A\x1C\x03\x02\x02\x02\x9B\x9C\x07c\x02\x02\x9C\x9D\x07f\x02\x02\x9D" +
		"\xA2\x07f\x02\x02\x9E\x9F\x07C\x02\x02\x9F\xA0\x07f\x02\x02\xA0\xA2\x07" +
		"f\x02\x02\xA1\x9B\x03\x02\x02\x02\xA1\x9E\x03\x02\x02\x02\xA2\x1E\x03" +
		"\x02\x02\x02\xA3\xA4\x07t\x02\x02\xA4\xA5\x07g\x02\x02\xA5\xA6\x07o\x02" +
		"\x02\xA6\xA7\x07q\x02\x02\xA7\xA8\x07x\x02\x02\xA8\xB0\x07g\x02\x02\xA9" +
		"\xAA\x07T\x02\x02\xAA\xAB\x07g\x02\x02\xAB\xAC\x07o\x02\x02\xAC\xAD\x07" +
		"q\x02\x02\xAD\xAE\x07x\x02\x02\xAE\xB0\x07g\x02\x02\xAF\xA3\x03\x02\x02" +
		"\x02\xAF\xA9\x03\x02\x02\x02\xB0 \x03\x02\x02\x02\xB1\xB2\x07C\x02\x02" +
		"\xB2\xB3\x07P\x02\x02\xB3\xB7\x07F\x02\x02\xB4\xB5\x07Q\x02\x02\xB5\xB7" +
		"\x07T\x02\x02\xB6\xB1\x03\x02\x02\x02\xB6\xB4\x03\x02\x02\x02\xB7\"\x03" +
		"\x02\x02\x02\xB8\xBA\t\x03\x02\x02\xB9\xB8\x03\x02\x02\x02\xBA\xBB\x03" +
		"\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC$\x03" +
		"\x02\x02\x02\xBD\xC1\t\x04\x02\x02\xBE\xC0\t\x05\x02\x02\xBF\xBE\x03\x02" +
		"\x02\x02\xC0\xC3\x03\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02" +
		"\x02\x02\xC2&\x03\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC6\x07/\x02" +
		"\x02\xC5\xC4\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC8\x03\x02\x02" +
		"\x02\xC7\xC9\t\x06\x02\x02\xC8\xC7\x03\x02\x02\x02\xC9\xCA\x03\x02\x02" +
		"\x02\xCA\xC8\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB(\x03\x02\x02" +
		"\x02\xCC\xCD\x07.\x02\x02\xCD*\x03\x02\x02\x02\xCE\xCF\x07}\x02\x02\xCF" +
		",\x03\x02\x02\x02\xD0\xD1\x07\x7F\x02\x02\xD1.\x03\x02\x02\x02\xD2\xD3" +
		"\x07*\x02\x02\xD30\x03\x02\x02\x02\xD4\xD5\x07+\x02\x02\xD52\x03\x02\x02" +
		"\x02\xD6\xD7\x07]\x02\x02\xD74\x03\x02\x02\x02\xD8\xD9\x07_\x02\x02\xD9" +
		"6\x03\x02\x02\x02\xDA\xDB\x07=\x02\x02\xDB8\x03\x02\x02\x02\xDC\xDD\x07" +
		"<\x02\x02\xDD:\x03\x02\x02\x02\xDE\xE0\t\x07\x02\x02\xDF\xDE\x03\x02\x02" +
		"\x02\xE0\xE1\x03\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02" +
		"\x02\xE2<\x03\x02\x02\x02\xE3\xE5\x05;\x1E\x02\xE4\xE3\x03\x02\x02\x02" +
		"\xE5\xE6\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02" +
		"\xE7\xE8\x03\x02\x02\x02\xE8\xEA\x059\x1D\x02\xE9\xEB\x05;\x1E\x02\xEA" +
		"\xE9\x03\x02\x02\x02\xEB\xEC\x03\x02\x02\x02\xEC\xEA\x03\x02\x02\x02\xEC" +
		"\xED\x03\x02\x02\x02\xED>\x03\x02\x02\x02\xEE\xF0\t\x02\x02\x02\xEF\xEE" +
		"\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF2" +
		"\x03\x02\x02\x02\xF2\xF3\x03\x02\x02\x02\xF3\xF4\b \x02\x02\xF4@\x03\x02" +
		"\x02\x02\xF5\xF7\t\x03\x02\x02\xF6\xF5\x03\x02\x02\x02\xF7\xF8\x03\x02" +
		"\x02\x02\xF8\xF6\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x03\x02" +
		"\x02\x02\xFA\xFB\b!\x03\x02\xFBB\x03\x02\x02\x02\x13\x02FPZ\xA1\xAF\xB6" +
		"\xBB\xC1\xC5\xCA\xDF\xE1\xE6\xEC\xF1\xF8\x04\x02\x03\x02\x04\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PlatformerLexer.__ATN) {
			PlatformerLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PlatformerLexer._serializedATN));
		}

		return PlatformerLexer.__ATN;
	}

}

