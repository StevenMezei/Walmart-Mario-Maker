// Generated from src/parser/PlatformerParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PlatformerParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface PlatformerParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `PlatformerParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.level`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevel?: (ctx: LevelContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.level_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevel_body?: (ctx: Level_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.level_cond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevel_cond?: (ctx: Level_condContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.level_entity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLevel_entity?: (ctx: Level_entityContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.entity_bod`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity_bod?: (ctx: Entity_bodContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.player`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlayer?: (ctx: PlayerContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.entity`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity?: (ctx: EntityContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.cond_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCond_statement?: (ctx: Cond_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList?: (ctx: ListContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.list_object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_object?: (ctx: List_objectContext) => Result;

	/**
	 * Visit a parse tree produced by `PlatformerParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?: (ctx: ExpContext) => Result;
}

