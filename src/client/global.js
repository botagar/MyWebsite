import * as structuredLog from 'structured-log'
import seqSink from 'structured-log-seq-sink'

var levelSwitch = new structuredLog.DynamicLevelSwitch("info")

global.log = structuredLog.configure()
.writeTo(new structuredLog.ConsoleSink())
.minLevel.debug()
.writeTo(seqSink({
  url: 'http://localhost:5341',
  levelSwitch: levelSwitch
}))
.create()
