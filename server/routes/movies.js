var express = require('express');
var router = express.Router();
var neo4j = require('neo4j');
var secret = require('../../private.js');
var db = new neo4j.GraphDatabase(secret.grapheneDB_URI);
