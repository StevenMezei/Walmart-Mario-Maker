// Generated from src/parser/PlatformerParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./PlatformerParser";
import { LevelContext } from "./PlatformerParser";
import { Level_bodyContext } from "./PlatformerParser";
import { Level_condContext } from "./PlatformerParser";
import { ConditionContext } from "./PlatformerParser";
import { Level_entityContext } from "./PlatformerParser";
import { Entity_bodContext } from "./PlatformerParser";
import { PlayerContext } from "./PlatformerParser";
import { EntityContext } from "./PlatformerParser";
import { Cond_statementContext } from "./PlatformerParser";
import { StatementContext } from "./PlatformerParser";
import { ListContext } from "./PlatformerParser";
import { ValueContext } from "./PlatformerParser";
import { List_objectContext } from "./PlatformerParser";
import { ExpContext } from "./PlatformerParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `PlatformerParser`.
 */
export interface PlatformerParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `PlatformerParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.level`.
	 * @param ctx the parse tree
	 */
	enterLevel?: (ctx: LevelContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.level`.
	 * @param ctx the parse tree
	 */
	exitLevel?: (ctx: LevelContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.level_body`.
	 * @param ctx the parse tree
	 */
	enterLevel_body?: (ctx: Level_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.level_body`.
	 * @param ctx the parse tree
	 */
	exitLevel_body?: (ctx: Level_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.level_cond`.
	 * @param ctx the parse tree
	 */
	enterLevel_cond?: (ctx: Level_condContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.level_cond`.
	 * @param ctx the parse tree
	 */
	exitLevel_cond?: (ctx: Level_condContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.level_entity`.
	 * @param ctx the parse tree
	 */
	enterLevel_entity?: (ctx: Level_entityContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.level_entity`.
	 * @param ctx the parse tree
	 */
	exitLevel_entity?: (ctx: Level_entityContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.entity_bod`.
	 * @param ctx the parse tree
	 */
	enterEntity_bod?: (ctx: Entity_bodContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.entity_bod`.
	 * @param ctx the parse tree
	 */
	exitEntity_bod?: (ctx: Entity_bodContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.player`.
	 * @param ctx the parse tree
	 */
	enterPlayer?: (ctx: PlayerContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.player`.
	 * @param ctx the parse tree
	 */
	exitPlayer?: (ctx: PlayerContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.entity`.
	 * @param ctx the parse tree
	 */
	enterEntity?: (ctx: EntityContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.entity`.
	 * @param ctx the parse tree
	 */
	exitEntity?: (ctx: EntityContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.cond_statement`.
	 * @param ctx the parse tree
	 */
	enterCond_statement?: (ctx: Cond_statementContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.cond_statement`.
	 * @param ctx the parse tree
	 */
	exitCond_statement?: (ctx: Cond_statementContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.list_object`.
	 * @param ctx the parse tree
	 */
	enterList_object?: (ctx: List_objectContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.list_object`.
	 * @param ctx the parse tree
	 */
	exitList_object?: (ctx: List_objectContext) => void;

	/**
	 * Enter a parse tree produced by `PlatformerParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `PlatformerParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;
}

