function _0x1e07(_0x1f2029,_0x1b90aa){const _0x4b6a9d=_0x4b6a();return _0x1e07=function(_0x1e07a7,_0x177f46){_0x1e07a7=_0x1e07a7-0x1a8;let _0x1e6d2b=_0x4b6a9d[_0x1e07a7];return _0x1e6d2b;},_0x1e07(_0x1f2029,_0x1b90aa);}const _0x284763=_0x1e07;(function(_0xecc903,_0x44269a){const _0x2fc3de=_0x1e07,_0x23fd26=_0xecc903();while(!![]){try{const _0x2c0b95=parseInt(_0x2fc3de(0x1bc))/0x1+-parseInt(_0x2fc3de(0x1ac))/0x2+parseInt(_0x2fc3de(0x1b8))/0x3*(parseInt(_0x2fc3de(0x1ae))/0x4)+-parseInt(_0x2fc3de(0x1b2))/0x5*(parseInt(_0x2fc3de(0x1bd))/0x6)+parseInt(_0x2fc3de(0x1be))/0x7+-parseInt(_0x2fc3de(0x1af))/0x8*(parseInt(_0x2fc3de(0x1b3))/0x9)+-parseInt(_0x2fc3de(0x1b5))/0xa*(-parseInt(_0x2fc3de(0x1bb))/0xb);if(_0x2c0b95===_0x44269a)break;else _0x23fd26['push'](_0x23fd26['shift']());}catch(_0x1e37c9){_0x23fd26['push'](_0x23fd26['shift']());}}}(_0x4b6a,0x97886));import{createLogger,format,transports}from'winston';import _0x250b95 from'fs';const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x1b107b,message:_0x4b89ed,timestamp:_0x344f4c})=>{const _0x4c6144=_0x1e07;return _0x344f4c+'\x20['+_0x1b107b+_0x4c6144(0x1c1)+_0x4b89ed;});function _0x4b6a(){const _0x214b91=['truncate','180490LWzPgH','level','warn','18kuiCrk','setLevel','clear','1551SnOgZi','221824Bgmhmd','384126yHRKXo','2305233mGWOzC','message','error',']:\x20','Failed\x20to\x20clear\x20the\x20log\x20file:\x20','logger','debug','Log\x20file\x20cleared','log/app.log','2282848DFcoxD','YYYY-MM-DD\x20HH:mm:ss','54220ClbhtZ','8mUxDXb','File','info','65KsiQIg','5247063YjJHqi'];_0x4b6a=function(){return _0x214b91;};return _0x4b6a();}class Logger{constructor(){const _0x5bf642=_0x1e07;this['logger']=createLogger({'level':_0x5bf642(0x1a9),'format':combine(timestamp({'format':_0x5bf642(0x1ad)}),colorize(),customFormat),'transports':[new transports['File']({'filename':_0x5bf642(0x1ab)})],'exceptionHandlers':[new transports[(_0x5bf642(0x1b0))]({'filename':'log/app.log'})],'rejectionHandlers':[new transports['File']({'filename':'log/app.log'})]});}['info'](_0x3bb240){const _0x2b67d1=_0x1e07;this[_0x2b67d1(0x1a8)][_0x2b67d1(0x1b1)](_0x3bb240);}['warn'](_0x58f5a4){const _0x4c5775=_0x1e07;this['logger'][_0x4c5775(0x1b7)](_0x58f5a4);}[_0x284763(0x1c0)](_0xb1f2c1){const _0x1db605=_0x284763;this[_0x1db605(0x1a8)][_0x1db605(0x1c0)](_0xb1f2c1);}[_0x284763(0x1a9)](_0x362d4c){const _0xf3ac7a=_0x284763;this[_0xf3ac7a(0x1a8)]['debug'](_0x362d4c);}[_0x284763(0x1b9)](_0x4eae05){const _0x3494da=_0x284763;this[_0x3494da(0x1a8)][_0x3494da(0x1b6)]=_0x4eae05;}[_0x284763(0x1ba)](){const _0x536543=_0x284763;_0x250b95[_0x536543(0x1b4)](_0x536543(0x1ab),0x0,_0x24c210=>{const _0x347cee=_0x536543;_0x24c210?this['logger'][_0x347cee(0x1c0)](_0x347cee(0x1c2)+_0x24c210[_0x347cee(0x1bf)]):this['logger']['info'](_0x347cee(0x1aa));});}}export default new Logger();
