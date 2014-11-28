/*jslint node: true */
/*global module*/
"use strict";

/**
 * Logger - all-purpose logging
 * 
 * @param   iDebugLevel
 * @return  Logger
 */
function Logger() {
    
    // Constants
    this.DEBUG_OFF = 0;
    this.DEBUG_INFO = 1;
    this.DEBUG_WARN = 2;
    this.DEBUG_CRITICAL = 3;
    
    this.iDebugLevel = 1;
    
    return this;
    
}

/**
 * Set the debug level
 *
 * @param   mDebugLevel  int|boolean
 * @return  Logger
 */
Logger.prototype.fnSetDebugLevel = function (mDebugLevel) {
    
    this.iDebugLevel = Number(mDebugLevel);
    
    return this;
    
};

/**
 * Log output to the console
 *
 * @param   mOutput         mixed
 * @param   iDebugLevel     int
 * @return  Logger
 */
Logger.prototype.fnLog = function (mOutput, iDebugLevel) {
    
    var sOutput;
    
    if (this.iDebugLevel || iDebugLevel >= this.iDebugLevel) {
        
        return this;
        
    }
    
    sOutput = (mOutput === null) ? "null" : JSON.stringify(mOutput, null, 4);
    
    console[iDebugLevel > this.DEBUG_CRITICAL ? "error" : "info"](mOutput);
    
    return this;
    
};
 
module.exports = Logger;