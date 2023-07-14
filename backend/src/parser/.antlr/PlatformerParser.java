// Generated from c:\Users\steve\Documents\GitHub\Project1Group8\backend\src\parser\PlatformerParser.g4 by ANTLR 4.9.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class PlatformerParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.9.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		LEADING_SPACE=1, COMPONENT=2, OP=3, PLAYER=4, ENEMY=5, DOOR=6, TERRAIN=7, 
		PLATFORM=8, BUTTON=9, COIN=10, LEVEL=11, CHECKS=12, IF=13, ADD=14, REMOVE=15, 
		LOGIC=16, STMT_NEWLINE=17, NAME=18, CONST=19, COMMA=20, OPEN_BRACE=21, 
		CLOSE_BRACE=22, OPEN_PAREN=23, CLOSE_PAREN=24, OPEN_SQUARE=25, CLOSED_SQUARE=26, 
		SEMICOLON=27, COLON=28, LITERAL=29, LINK=30, SPACE=31, NEWLINE=32;
	public static final int
		RULE_program = 0, RULE_level = 1, RULE_level_body = 2, RULE_level_cond = 3, 
		RULE_condition = 4, RULE_level_entity = 5, RULE_entity_bod = 6, RULE_player = 7, 
		RULE_entity = 8, RULE_cond_statement = 9, RULE_statement = 10, RULE_list = 11, 
		RULE_value = 12, RULE_list_object = 13, RULE_exp = 14;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "level", "level_body", "level_cond", "condition", "level_entity", 
			"entity_bod", "player", "entity", "cond_statement", "statement", "list", 
			"value", "list_object", "exp"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, null, null, null, "'Player'", "'Enemy'", "'Door'", "'Terrain'", 
			"'Platform'", "'Button'", "'Coin'", "'Level'", "'Checks'", "'IF'", null, 
			null, null, null, null, null, "','", "'{'", "'}'", "'('", "')'", "'['", 
			"']'", "';'", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "LEADING_SPACE", "COMPONENT", "OP", "PLAYER", "ENEMY", "DOOR", 
			"TERRAIN", "PLATFORM", "BUTTON", "COIN", "LEVEL", "CHECKS", "IF", "ADD", 
			"REMOVE", "LOGIC", "STMT_NEWLINE", "NAME", "CONST", "COMMA", "OPEN_BRACE", 
			"CLOSE_BRACE", "OPEN_PAREN", "CLOSE_PAREN", "OPEN_SQUARE", "CLOSED_SQUARE", 
			"SEMICOLON", "COLON", "LITERAL", "LINK", "SPACE", "NEWLINE"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "PlatformerParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public PlatformerParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class ProgramContext extends ParserRuleContext {
		public PlayerContext player() {
			return getRuleContext(PlayerContext.class,0);
		}
		public TerminalNode EOF() { return getToken(PlatformerParser.EOF, 0); }
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public List<EntityContext> entity() {
			return getRuleContexts(EntityContext.class);
		}
		public EntityContext entity(int i) {
			return getRuleContext(EntityContext.class,i);
		}
		public List<LevelContext> level() {
			return getRuleContexts(LevelContext.class);
		}
		public LevelContext level(int i) {
			return getRuleContext(LevelContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(PlatformerParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(PlatformerParser.NEWLINE, i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(30);
			player();
			setState(32);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(31);
				match(STMT_NEWLINE);
				}
			}

			setState(37); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(34);
				entity();
				setState(35);
				_la = _input.LA(1);
				if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(39); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==COMPONENT );
			setState(44); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(41);
				level();
				setState(42);
				_la = _input.LA(1);
				if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(46); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==LEVEL );
			setState(48);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LevelContext extends ParserRuleContext {
		public TerminalNode LEVEL() { return getToken(PlatformerParser.LEVEL, 0); }
		public TerminalNode NAME() { return getToken(PlatformerParser.NAME, 0); }
		public TerminalNode OPEN_BRACE() { return getToken(PlatformerParser.OPEN_BRACE, 0); }
		public Level_bodyContext level_body() {
			return getRuleContext(Level_bodyContext.class,0);
		}
		public TerminalNode CLOSE_BRACE() { return getToken(PlatformerParser.CLOSE_BRACE, 0); }
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public LevelContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_level; }
	}

	public final LevelContext level() throws RecognitionException {
		LevelContext _localctx = new LevelContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_level);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(50);
			match(LEVEL);
			setState(51);
			match(NAME);
			setState(52);
			match(OPEN_BRACE);
			setState(54);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(53);
				match(STMT_NEWLINE);
				}
			}

			setState(56);
			level_body();
			setState(58);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(57);
				match(STMT_NEWLINE);
				}
			}

			setState(60);
			match(CLOSE_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Level_bodyContext extends ParserRuleContext {
		public TerminalNode CHECKS() { return getToken(PlatformerParser.CHECKS, 0); }
		public TerminalNode COLON() { return getToken(PlatformerParser.COLON, 0); }
		public TerminalNode OPEN_SQUARE() { return getToken(PlatformerParser.OPEN_SQUARE, 0); }
		public TerminalNode CLOSED_SQUARE() { return getToken(PlatformerParser.CLOSED_SQUARE, 0); }
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(PlatformerParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(PlatformerParser.NEWLINE, i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public List<Level_entityContext> level_entity() {
			return getRuleContexts(Level_entityContext.class);
		}
		public Level_entityContext level_entity(int i) {
			return getRuleContext(Level_entityContext.class,i);
		}
		public List<Level_condContext> level_cond() {
			return getRuleContexts(Level_condContext.class);
		}
		public Level_condContext level_cond(int i) {
			return getRuleContext(Level_condContext.class,i);
		}
		public Level_bodyContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_level_body; }
	}

	public final Level_bodyContext level_body() throws RecognitionException {
		Level_bodyContext _localctx = new Level_bodyContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_level_body);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NAME) {
				{
				{
				setState(62);
				statement();
				setState(63);
				_la = _input.LA(1);
				if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(69);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(76);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMPONENT) {
				{
				{
				setState(70);
				level_entity();
				setState(72);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==STMT_NEWLINE || _la==NEWLINE) {
					{
					setState(71);
					_la = _input.LA(1);
					if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
					_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
				}

				}
				}
				setState(78);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(79);
			match(CHECKS);
			setState(80);
			match(COLON);
			setState(81);
			match(OPEN_SQUARE);
			setState(83);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE || _la==NEWLINE) {
				{
				setState(82);
				_la = _input.LA(1);
				if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(90);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==IF) {
				{
				{
				setState(85);
				level_cond();
				setState(86);
				_la = _input.LA(1);
				if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(92);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(93);
			match(CLOSED_SQUARE);
			setState(94);
			_la = _input.LA(1);
			if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Level_condContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(PlatformerParser.IF, 0); }
		public TerminalNode COLON() { return getToken(PlatformerParser.COLON, 0); }
		public TerminalNode OPEN_PAREN() { return getToken(PlatformerParser.OPEN_PAREN, 0); }
		public List<ConditionContext> condition() {
			return getRuleContexts(ConditionContext.class);
		}
		public ConditionContext condition(int i) {
			return getRuleContext(ConditionContext.class,i);
		}
		public TerminalNode CLOSE_PAREN() { return getToken(PlatformerParser.CLOSE_PAREN, 0); }
		public TerminalNode OPEN_BRACE() { return getToken(PlatformerParser.OPEN_BRACE, 0); }
		public TerminalNode CLOSE_BRACE() { return getToken(PlatformerParser.CLOSE_BRACE, 0); }
		public TerminalNode LOGIC() { return getToken(PlatformerParser.LOGIC, 0); }
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public List<Cond_statementContext> cond_statement() {
			return getRuleContexts(Cond_statementContext.class);
		}
		public Cond_statementContext cond_statement(int i) {
			return getRuleContext(Cond_statementContext.class,i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(PlatformerParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(PlatformerParser.NEWLINE, i);
		}
		public Level_condContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_level_cond; }
	}

	public final Level_condContext level_cond() throws RecognitionException {
		Level_condContext _localctx = new Level_condContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_level_cond);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(96);
			match(IF);
			setState(97);
			match(COLON);
			setState(98);
			match(OPEN_PAREN);
			setState(99);
			condition();
			setState(102);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LOGIC) {
				{
				setState(100);
				match(LOGIC);
				setState(101);
				condition();
				}
			}

			setState(104);
			match(CLOSE_PAREN);
			setState(105);
			match(OPEN_BRACE);
			setState(107);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE) {
				{
				setState(106);
				match(STMT_NEWLINE);
				}
			}

			setState(114);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMPONENT) {
				{
				{
				setState(109);
				cond_statement();
				setState(110);
				_la = _input.LA(1);
				if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(116);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(117);
			match(CLOSE_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConditionContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(PlatformerParser.NAME, 0); }
		public TerminalNode OP() { return getToken(PlatformerParser.OP, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public ConditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condition; }
	}

	public final ConditionContext condition() throws RecognitionException {
		ConditionContext _localctx = new ConditionContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_condition);
		try {
			setState(123);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				{
				setState(119);
				match(NAME);
				setState(120);
				match(OP);
				setState(121);
				exp();
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(122);
				match(NAME);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Level_entityContext extends ParserRuleContext {
		public TerminalNode COMPONENT() { return getToken(PlatformerParser.COMPONENT, 0); }
		public TerminalNode COLON() { return getToken(PlatformerParser.COLON, 0); }
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(PlatformerParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(PlatformerParser.NEWLINE, i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public Level_entityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_level_entity; }
	}

	public final Level_entityContext level_entity() throws RecognitionException {
		Level_entityContext _localctx = new Level_entityContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_level_entity);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(125);
			match(COMPONENT);
			setState(126);
			match(COLON);
			setState(127);
			_la = _input.LA(1);
			if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(133);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NAME) {
				{
				{
				setState(128);
				statement();
				setState(129);
				_la = _input.LA(1);
				if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(135);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Entity_bodContext extends ParserRuleContext {
		public TerminalNode OPEN_BRACE() { return getToken(PlatformerParser.OPEN_BRACE, 0); }
		public TerminalNode CLOSE_BRACE() { return getToken(PlatformerParser.CLOSE_BRACE, 0); }
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(PlatformerParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(PlatformerParser.NEWLINE, i);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public Entity_bodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_entity_bod; }
	}

	public final Entity_bodContext entity_bod() throws RecognitionException {
		Entity_bodContext _localctx = new Entity_bodContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_entity_bod);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(136);
			match(OPEN_BRACE);
			setState(137);
			_la = _input.LA(1);
			if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(143);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==NAME) {
				{
				{
				setState(138);
				statement();
				setState(139);
				_la = _input.LA(1);
				if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(145);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(146);
			match(CLOSE_BRACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PlayerContext extends ParserRuleContext {
		public TerminalNode PLAYER() { return getToken(PlatformerParser.PLAYER, 0); }
		public TerminalNode NAME() { return getToken(PlatformerParser.NAME, 0); }
		public TerminalNode COLON() { return getToken(PlatformerParser.COLON, 0); }
		public Entity_bodContext entity_bod() {
			return getRuleContext(Entity_bodContext.class,0);
		}
		public PlayerContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_player; }
	}

	public final PlayerContext player() throws RecognitionException {
		PlayerContext _localctx = new PlayerContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_player);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(148);
			match(PLAYER);
			setState(149);
			match(NAME);
			setState(150);
			match(COLON);
			setState(151);
			entity_bod();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EntityContext extends ParserRuleContext {
		public TerminalNode COMPONENT() { return getToken(PlatformerParser.COMPONENT, 0); }
		public TerminalNode NAME() { return getToken(PlatformerParser.NAME, 0); }
		public TerminalNode COLON() { return getToken(PlatformerParser.COLON, 0); }
		public Entity_bodContext entity_bod() {
			return getRuleContext(Entity_bodContext.class,0);
		}
		public EntityContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_entity; }
	}

	public final EntityContext entity() throws RecognitionException {
		EntityContext _localctx = new EntityContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_entity);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(153);
			match(COMPONENT);
			setState(154);
			match(NAME);
			setState(155);
			match(COLON);
			setState(156);
			entity_bod();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Cond_statementContext extends ParserRuleContext {
		public TerminalNode COMPONENT() { return getToken(PlatformerParser.COMPONENT, 0); }
		public TerminalNode COLON() { return getToken(PlatformerParser.COLON, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public TerminalNode ADD() { return getToken(PlatformerParser.ADD, 0); }
		public TerminalNode REMOVE() { return getToken(PlatformerParser.REMOVE, 0); }
		public Cond_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cond_statement; }
	}

	public final Cond_statementContext cond_statement() throws RecognitionException {
		Cond_statementContext _localctx = new Cond_statementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_cond_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(158);
			match(COMPONENT);
			setState(159);
			match(COLON);
			setState(160);
			_la = _input.LA(1);
			if ( !(_la==ADD || _la==REMOVE) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			setState(161);
			value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(PlatformerParser.NAME, 0); }
		public TerminalNode COLON() { return getToken(PlatformerParser.COLON, 0); }
		public ValueContext value() {
			return getRuleContext(ValueContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(163);
			match(NAME);
			setState(164);
			match(COLON);
			setState(165);
			value();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ListContext extends ParserRuleContext {
		public TerminalNode OPEN_SQUARE() { return getToken(PlatformerParser.OPEN_SQUARE, 0); }
		public List<List_objectContext> list_object() {
			return getRuleContexts(List_objectContext.class);
		}
		public List_objectContext list_object(int i) {
			return getRuleContext(List_objectContext.class,i);
		}
		public TerminalNode CLOSED_SQUARE() { return getToken(PlatformerParser.CLOSED_SQUARE, 0); }
		public List<TerminalNode> COMMA() { return getTokens(PlatformerParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(PlatformerParser.COMMA, i);
		}
		public List<TerminalNode> STMT_NEWLINE() { return getTokens(PlatformerParser.STMT_NEWLINE); }
		public TerminalNode STMT_NEWLINE(int i) {
			return getToken(PlatformerParser.STMT_NEWLINE, i);
		}
		public List<TerminalNode> NEWLINE() { return getTokens(PlatformerParser.NEWLINE); }
		public TerminalNode NEWLINE(int i) {
			return getToken(PlatformerParser.NEWLINE, i);
		}
		public ListContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list; }
	}

	public final ListContext list() throws RecognitionException {
		ListContext _localctx = new ListContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(167);
			match(OPEN_SQUARE);
			setState(169);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE || _la==NEWLINE) {
				{
				setState(168);
				_la = _input.LA(1);
				if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(171);
			list_object();
			setState(177);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(172);
				match(COMMA);
				setState(173);
				_la = _input.LA(1);
				if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(174);
				list_object();
				}
				}
				setState(179);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(181);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==STMT_NEWLINE || _la==NEWLINE) {
				{
				setState(180);
				_la = _input.LA(1);
				if ( !(_la==STMT_NEWLINE || _la==NEWLINE) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
			}

			setState(183);
			match(CLOSED_SQUARE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ValueContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(PlatformerParser.NAME, 0); }
		public TerminalNode CONST() { return getToken(PlatformerParser.CONST, 0); }
		public List_objectContext list_object() {
			return getRuleContext(List_objectContext.class,0);
		}
		public TerminalNode LITERAL() { return getToken(PlatformerParser.LITERAL, 0); }
		public TerminalNode LINK() { return getToken(PlatformerParser.LINK, 0); }
		public ListContext list() {
			return getRuleContext(ListContext.class,0);
		}
		public ValueContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value; }
	}

	public final ValueContext value() throws RecognitionException {
		ValueContext _localctx = new ValueContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_value);
		try {
			setState(191);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NAME:
				enterOuterAlt(_localctx, 1);
				{
				setState(185);
				match(NAME);
				}
				break;
			case CONST:
				enterOuterAlt(_localctx, 2);
				{
				setState(186);
				match(CONST);
				}
				break;
			case OPEN_PAREN:
				enterOuterAlt(_localctx, 3);
				{
				setState(187);
				list_object();
				}
				break;
			case LITERAL:
				enterOuterAlt(_localctx, 4);
				{
				setState(188);
				match(LITERAL);
				}
				break;
			case LINK:
				enterOuterAlt(_localctx, 5);
				{
				setState(189);
				match(LINK);
				}
				break;
			case OPEN_SQUARE:
				enterOuterAlt(_localctx, 6);
				{
				setState(190);
				list();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class List_objectContext extends ParserRuleContext {
		public TerminalNode OPEN_PAREN() { return getToken(PlatformerParser.OPEN_PAREN, 0); }
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public TerminalNode CLOSE_PAREN() { return getToken(PlatformerParser.CLOSE_PAREN, 0); }
		public List<TerminalNode> COMMA() { return getTokens(PlatformerParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(PlatformerParser.COMMA, i);
		}
		public List_objectContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_list_object; }
	}

	public final List_objectContext list_object() throws RecognitionException {
		List_objectContext _localctx = new List_objectContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_list_object);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(193);
			match(OPEN_PAREN);
			setState(194);
			exp();
			setState(199);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(195);
				match(COMMA);
				setState(196);
				exp();
				}
				}
				setState(201);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(202);
			match(CLOSE_PAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpContext extends ParserRuleContext {
		public TerminalNode NAME() { return getToken(PlatformerParser.NAME, 0); }
		public TerminalNode CONST() { return getToken(PlatformerParser.CONST, 0); }
		public ExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp; }
	}

	public final ExpContext exp() throws RecognitionException {
		ExpContext _localctx = new ExpContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_exp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(204);
			_la = _input.LA(1);
			if ( !(_la==NAME || _la==CONST) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\"\u00d1\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\3\2\3\2\5\2#\n\2\3\2"+
		"\3\2\3\2\6\2(\n\2\r\2\16\2)\3\2\3\2\3\2\6\2/\n\2\r\2\16\2\60\3\2\3\2\3"+
		"\3\3\3\3\3\3\3\5\39\n\3\3\3\3\3\5\3=\n\3\3\3\3\3\3\4\3\4\3\4\7\4D\n\4"+
		"\f\4\16\4G\13\4\3\4\3\4\5\4K\n\4\7\4M\n\4\f\4\16\4P\13\4\3\4\3\4\3\4\3"+
		"\4\5\4V\n\4\3\4\3\4\3\4\7\4[\n\4\f\4\16\4^\13\4\3\4\3\4\3\4\3\5\3\5\3"+
		"\5\3\5\3\5\3\5\5\5i\n\5\3\5\3\5\3\5\5\5n\n\5\3\5\3\5\3\5\7\5s\n\5\f\5"+
		"\16\5v\13\5\3\5\3\5\3\6\3\6\3\6\3\6\5\6~\n\6\3\7\3\7\3\7\3\7\3\7\3\7\7"+
		"\7\u0086\n\7\f\7\16\7\u0089\13\7\3\b\3\b\3\b\3\b\3\b\7\b\u0090\n\b\f\b"+
		"\16\b\u0093\13\b\3\b\3\b\3\t\3\t\3\t\3\t\3\t\3\n\3\n\3\n\3\n\3\n\3\13"+
		"\3\13\3\13\3\13\3\13\3\f\3\f\3\f\3\f\3\r\3\r\5\r\u00ac\n\r\3\r\3\r\3\r"+
		"\3\r\7\r\u00b2\n\r\f\r\16\r\u00b5\13\r\3\r\5\r\u00b8\n\r\3\r\3\r\3\16"+
		"\3\16\3\16\3\16\3\16\3\16\5\16\u00c2\n\16\3\17\3\17\3\17\3\17\7\17\u00c8"+
		"\n\17\f\17\16\17\u00cb\13\17\3\17\3\17\3\20\3\20\3\20\2\2\21\2\4\6\b\n"+
		"\f\16\20\22\24\26\30\32\34\36\2\5\4\2\23\23\"\"\3\2\20\21\3\2\24\25\2"+
		"\u00da\2 \3\2\2\2\4\64\3\2\2\2\6E\3\2\2\2\bb\3\2\2\2\n}\3\2\2\2\f\177"+
		"\3\2\2\2\16\u008a\3\2\2\2\20\u0096\3\2\2\2\22\u009b\3\2\2\2\24\u00a0\3"+
		"\2\2\2\26\u00a5\3\2\2\2\30\u00a9\3\2\2\2\32\u00c1\3\2\2\2\34\u00c3\3\2"+
		"\2\2\36\u00ce\3\2\2\2 \"\5\20\t\2!#\7\23\2\2\"!\3\2\2\2\"#\3\2\2\2#\'"+
		"\3\2\2\2$%\5\22\n\2%&\t\2\2\2&(\3\2\2\2\'$\3\2\2\2()\3\2\2\2)\'\3\2\2"+
		"\2)*\3\2\2\2*.\3\2\2\2+,\5\4\3\2,-\t\2\2\2-/\3\2\2\2.+\3\2\2\2/\60\3\2"+
		"\2\2\60.\3\2\2\2\60\61\3\2\2\2\61\62\3\2\2\2\62\63\7\2\2\3\63\3\3\2\2"+
		"\2\64\65\7\r\2\2\65\66\7\24\2\2\668\7\27\2\2\679\7\23\2\28\67\3\2\2\2"+
		"89\3\2\2\29:\3\2\2\2:<\5\6\4\2;=\7\23\2\2<;\3\2\2\2<=\3\2\2\2=>\3\2\2"+
		"\2>?\7\30\2\2?\5\3\2\2\2@A\5\26\f\2AB\t\2\2\2BD\3\2\2\2C@\3\2\2\2DG\3"+
		"\2\2\2EC\3\2\2\2EF\3\2\2\2FN\3\2\2\2GE\3\2\2\2HJ\5\f\7\2IK\t\2\2\2JI\3"+
		"\2\2\2JK\3\2\2\2KM\3\2\2\2LH\3\2\2\2MP\3\2\2\2NL\3\2\2\2NO\3\2\2\2OQ\3"+
		"\2\2\2PN\3\2\2\2QR\7\16\2\2RS\7\36\2\2SU\7\33\2\2TV\t\2\2\2UT\3\2\2\2"+
		"UV\3\2\2\2V\\\3\2\2\2WX\5\b\5\2XY\t\2\2\2Y[\3\2\2\2ZW\3\2\2\2[^\3\2\2"+
		"\2\\Z\3\2\2\2\\]\3\2\2\2]_\3\2\2\2^\\\3\2\2\2_`\7\34\2\2`a\t\2\2\2a\7"+
		"\3\2\2\2bc\7\17\2\2cd\7\36\2\2de\7\31\2\2eh\5\n\6\2fg\7\22\2\2gi\5\n\6"+
		"\2hf\3\2\2\2hi\3\2\2\2ij\3\2\2\2jk\7\32\2\2km\7\27\2\2ln\7\23\2\2ml\3"+
		"\2\2\2mn\3\2\2\2nt\3\2\2\2op\5\24\13\2pq\t\2\2\2qs\3\2\2\2ro\3\2\2\2s"+
		"v\3\2\2\2tr\3\2\2\2tu\3\2\2\2uw\3\2\2\2vt\3\2\2\2wx\7\30\2\2x\t\3\2\2"+
		"\2yz\7\24\2\2z{\7\5\2\2{~\5\36\20\2|~\7\24\2\2}y\3\2\2\2}|\3\2\2\2~\13"+
		"\3\2\2\2\177\u0080\7\4\2\2\u0080\u0081\7\36\2\2\u0081\u0087\t\2\2\2\u0082"+
		"\u0083\5\26\f\2\u0083\u0084\t\2\2\2\u0084\u0086\3\2\2\2\u0085\u0082\3"+
		"\2\2\2\u0086\u0089\3\2\2\2\u0087\u0085\3\2\2\2\u0087\u0088\3\2\2\2\u0088"+
		"\r\3\2\2\2\u0089\u0087\3\2\2\2\u008a\u008b\7\27\2\2\u008b\u0091\t\2\2"+
		"\2\u008c\u008d\5\26\f\2\u008d\u008e\t\2\2\2\u008e\u0090\3\2\2\2\u008f"+
		"\u008c\3\2\2\2\u0090\u0093\3\2\2\2\u0091\u008f\3\2\2\2\u0091\u0092\3\2"+
		"\2\2\u0092\u0094\3\2\2\2\u0093\u0091\3\2\2\2\u0094\u0095\7\30\2\2\u0095"+
		"\17\3\2\2\2\u0096\u0097\7\6\2\2\u0097\u0098\7\24\2\2\u0098\u0099\7\36"+
		"\2\2\u0099\u009a\5\16\b\2\u009a\21\3\2\2\2\u009b\u009c\7\4\2\2\u009c\u009d"+
		"\7\24\2\2\u009d\u009e\7\36\2\2\u009e\u009f\5\16\b\2\u009f\23\3\2\2\2\u00a0"+
		"\u00a1\7\4\2\2\u00a1\u00a2\7\36\2\2\u00a2\u00a3\t\3\2\2\u00a3\u00a4\5"+
		"\32\16\2\u00a4\25\3\2\2\2\u00a5\u00a6\7\24\2\2\u00a6\u00a7\7\36\2\2\u00a7"+
		"\u00a8\5\32\16\2\u00a8\27\3\2\2\2\u00a9\u00ab\7\33\2\2\u00aa\u00ac\t\2"+
		"\2\2\u00ab\u00aa\3\2\2\2\u00ab\u00ac\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad"+
		"\u00b3\5\34\17\2\u00ae\u00af\7\26\2\2\u00af\u00b0\t\2\2\2\u00b0\u00b2"+
		"\5\34\17\2\u00b1\u00ae\3\2\2\2\u00b2\u00b5\3\2\2\2\u00b3\u00b1\3\2\2\2"+
		"\u00b3\u00b4\3\2\2\2\u00b4\u00b7\3\2\2\2\u00b5\u00b3\3\2\2\2\u00b6\u00b8"+
		"\t\2\2\2\u00b7\u00b6\3\2\2\2\u00b7\u00b8\3\2\2\2\u00b8\u00b9\3\2\2\2\u00b9"+
		"\u00ba\7\34\2\2\u00ba\31\3\2\2\2\u00bb\u00c2\7\24\2\2\u00bc\u00c2\7\25"+
		"\2\2\u00bd\u00c2\5\34\17\2\u00be\u00c2\7\37\2\2\u00bf\u00c2\7 \2\2\u00c0"+
		"\u00c2\5\30\r\2\u00c1\u00bb\3\2\2\2\u00c1\u00bc\3\2\2\2\u00c1\u00bd\3"+
		"\2\2\2\u00c1\u00be\3\2\2\2\u00c1\u00bf\3\2\2\2\u00c1\u00c0\3\2\2\2\u00c2"+
		"\33\3\2\2\2\u00c3\u00c4\7\31\2\2\u00c4\u00c9\5\36\20\2\u00c5\u00c6\7\26"+
		"\2\2\u00c6\u00c8\5\36\20\2\u00c7\u00c5\3\2\2\2\u00c8\u00cb\3\2\2\2\u00c9"+
		"\u00c7\3\2\2\2\u00c9\u00ca\3\2\2\2\u00ca\u00cc\3\2\2\2\u00cb\u00c9\3\2"+
		"\2\2\u00cc\u00cd\7\32\2\2\u00cd\35\3\2\2\2\u00ce\u00cf\t\4\2\2\u00cf\37"+
		"\3\2\2\2\27\")\608<EJNU\\hmt}\u0087\u0091\u00ab\u00b3\u00b7\u00c1\u00c9";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}