#!/usr/bin/env node
import runEngine from '../src/index.js';
import { rules, generateRound } from '../src/games/game-gcd.js';

runEngine(rules, generateRound);
