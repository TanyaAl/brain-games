#!/usr/bin/env node
import { executeGame } from '../src/index.js';
import { ruleOfGame, play } from '../src/games/game-prime.js';

executeGame(ruleOfGame, play);
