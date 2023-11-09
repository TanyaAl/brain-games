#!/usr/bin/env node
import { runEngine } from '../src/index.js';
import { rules, generateRound } from '../src/games/game-calc.js';

runEngine(rules, generateRound);
