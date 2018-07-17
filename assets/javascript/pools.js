var highFrontVowels = [[['bleep','blip'],['blip','blɪp']],[['cheap','tʃip'],['chip','tʃɪp']],[['creep','krip'],['crip','krɪp']],[['heap','hip'],['hip','hɪp']]
[['jeep','dʒip'], ['gyp','dʒɪp']], [['keep','kip'], ['kip','kɪp']], [['leap','lip'], ['lip','lɪp']], [['neep','nip'], ['nip','nɪp']], [['peep','pip'], ['pip','pɪp']], [['seep','sip'], ['sip','sɪp']], [['sleep','slip'], ['slip','slɪp']], [['sheep','ʃip'], ['ship','ʃɪp']],
[['beat','bit'], ['bit','bɪt']], [['cheat','tʃit'], ['chit','tʃɪt']], [['feet','fit'], ['fit','fɪt']], [['fleet','flit'], ['flit','flɪt']], [['heat','hit'], ['hit','hɪt']], [['meat','mit'], ['mitt','mɪt']], [['neat','nit'], ['knit','nɪt']], [['peat','pit'], ['pit','pɪt']], [['seat','sit'], ['sit','sɪt']], [['sleet','slit'], ['slit','slɪt']], [['skeet','skit'], ['skit','skɪt']], [['teat','tit'], ['tit','tɪt']], [['wheat','wit'], ['wit','wɪt']],
[['cheek','tʃik'], ['chick','tʃɪk']], [['creek','krik'], ['crick','krɪk']], [['eke','ik'], ['ick','ɪk']], [['fleek','flik'], ['flick','flɪk']], [['keek','kik'], ['kick','kɪk']], [['leak','lik'], ['lick','lɪk']], [['peek','pik'], ['pick','pɪk']], [['reek','rik'], ['rick','rɪk']], [['seek','sik'], ['sick','sɪk']], [['sleek','slik'], ['slick','slɪk']], [['squeak','skwik'], ['squick','skwɪk']], [['teak','tik'], ['tick','tɪk']], [['treacle','trikəl'], ['trickle','trɪkəl']], [['weak','wik'], ['wick','wɪk']],
[['bead','bid'], ['bid','bɪd']], [['deed','did'], ['did','dɪd']], [['feed','fid'], ['fid','fɪd']], [['heed','hid'], ['hid','hɪd']], [['keyed','kid'], ['kid','kɪd']], [['lead','lid'], ['lid','lɪd']], [['mead','mid'], ['mid','mɪd']], [['meaty','miɾi'], ['midi','mɪɾi']], [['reed','rid'], ['rid','rɪd']], [['wheedle','wiɾəl'], ['whittle','wɪɾəl']],
[['bream','brim'], ['brim','brɪm']], [['deem','dim'], ['dim','dɪm']], [['meme','mim'], ['mim','mɪm']], [['ream','rim'], ['rim','rɪm']], [['scheme','skim'], ['skim','skɪm']], [['seem','sim'], ['sim','sɪm']],
[['bean','bin'], ['been','bɪn']], [['dean','din'], ['din','dɪn']], [['gene','dʒin'], ['gin','dʒɪn']], [['green','grin'], ['grin','grɪn']], [['keen','kin'], ['kin','kɪn']], [['mean','min'], ['min','mɪn']], [['peen','pin'], ['pin','pɪn']], [['queen','kwin'], ['quin','kwɪn']], [['sheen','ʃin'], ['shin','ʃɪn']], [['teen','tin'], ['tin','tɪn']], [['wean','win'], ['win','wɪn']],
[['deal','dil'], ['dill','dɪl']], [['eel','il'], ['ill','ɪl']], [['feel','fil'], ['fill','fɪl']], [['heal','hil'], ['hill','hɪl']], [['keel','kil'], ['kill','kɪl']], [['meal','mil'], ['mill','mɪl']], [['peel','pil'], ['pill','pɪl']], [['seal','sil'], ['sill','sɪl']], [['squeal','skwil'], ['squill','skwɪl']], [['steal','stil'], ['still','stɪl']], [['teal','til'], ['till','tɪl']], [['wheel','wil'], ['will','wɪl']],
[['cease','sis'], ['sis','sɪs']], [['east','ist'], ['ist','ɪst']], [['feast','fist'], ['fist','fɪst']], [['least','list'], ['list','lɪst']], [['peace','pis'], ['piss','pɪs']],
[['wheeze','wiz'], ['whiz','wɪz']],
[['beach','bitʃ'], ['bitch','bɪtʃ']], [['each','itʃ'], ['itch','ɪtʃ']], [['peach','pitʃ'], ['pitch','pɪtʃ']],
[['leafed','lift'], ['lift','lɪft']], [['reef','rif'], ['riff','rɪf']],
[['leave','liv'], ['live','lɪv']]
];

var highFrontVowelsFileNotFound = [['caesar','scissor'],['deep', 'dip'], ['reap', 'rip'], ['streep', 'strip'], ['eat', 'it'], ['leet', 'lit'], ['seen', 'sin'], ['wield', 'willed'], ['leech', 'lich']];

var highBackVowels = [['poot', 'put'], ['suit', 'soot'], ['cuke', 'cook'], ['nuke', 'nook'], ['tuque', 'took'], ['stewed', 'stood'], ['fool', 'full'], ['pool', 'pull']];

var highBackVowelsFileNotFound = [['kooky', 'cookie'], ['who\'d', 'hood']];

var lowVowels = [['app', 'up'], ['cup', 'cop'], ['chap', 'chop'], ['clap', 'clop'], ['crap', 'crop'], ['flap', 'flop'], ['hap', 'hup', 'hop'], ['lap', 'lop'], ['map', 'mop'], ['pap', 'pup', 'pop'], ['sap', 'sup', 'sop'], ['slap', 'slop'], ['strap', 'strop'], ['tap', 'tup', 'top'], ['yap', 'yup'],
['bat', 'but', 'bot'], ['batter', 'butter'], ['blat', 'blot'], ['cat', 'cut', 'cot'], ['gnat', 'nut', 'not'], ['gut', 'got'], ['hat', 'hut', 'hot'], ['jut', 'jot'], ['lat', 'lot'], ['mat', 'mutt'], ['pat', 'putt', 'pot'], ['rat', 'rut', 'rot'], ['shut', 'shot'], ['slat', 'slut', 'slot'], ['spat', 'spot'], ['stat', 'stot'], ['tat', 'tut', 'tot'],
['ax', 'ox'], ['back', 'buck', 'bock'], ['black', 'block'], ['duck', 'dock'], ['fax', 'fox'], ['flack', 'flock'], ['frack', 'frock'], ['hack', 'huck', 'hock'], ['jack', 'jock'], ['knack', 'knock'], ['lack', 'luck', 'lock'], ['lax', 'lux', 'lox'], ['muck', 'mock'], ['pack', 'puck', 'pock'], ['plaque', 'pluck'], ['rack', 'ruck', 'rock'], ['sack', 'suck', 'sock'], ['shack', 'shuck', 'shock'], ['stack', 'stuck', 'stock'], ['tack', 'tuck'], ['track', 'truck'], ['vax', 'vox'], ['whack', 'wok'], ['yak', 'yuck'],
['bub', 'bob'], ['blab', 'blob'], ['blabber', 'blubber'], ['cab', 'cub', 'cob'], ['dab', 'dub'], ['flab', 'flub'], ['gab', 'gob'], ['hub', 'hob'], ['jab', 'job'], ['lab', 'lob'], ['nab', 'knob'], ['rub', 'rob'], ['slab', 'slob'], ['stab', 'stub'], ['tab', 'tub'],
['adder', 'udder'], ['adze', 'odds'], ['bad', 'bud', 'bod'], ['cad', 'cud'], ['dad', 'dud'], ['gad', 'god'], ['mad', 'mud'], ['pad', 'pod'], ['plaid', 'plod'], ['rad', 'rod'], ['sad', 'sod'], ['sadden', 'sudden', 'sodden'], ['tad', 'tod'],
['bag', 'bug'], ['buggy', 'boggy'], ['dug', 'dog'], ['drag', 'drug'], ['hag', 'hug', 'hog'], ['jag', 'jug', 'jog'], ['rag', 'rug'], ['saggy', 'soggy'], ['snag', 'snug', 'snog'], ['tag', 'tug'], ['wag', 'wog'],
['bam', 'bum', 'bomb'], ['cam', 'come', 'calm'], ['cram', 'crumb'], ['dam', 'dumb', 'dom'], ['dram', 'drum'], ['ham', 'hum'], ['mam', 'mum', 'mom'], ['ram', 'rum', 'rom'], ['scam', 'scum'], ['slam', 'slum'], ['tummy', 'tommy'], ['yam', 'yum'],
['ban', 'bun'], ['bland', 'blond'], ['dun', 'don'], ['fan', 'fun'], ['fund', 'fond'], ['manny', 'money'], ['pan', 'pun'], ['ran', 'run'], ['rant', 'runt'], ['tan', 'ton'],
['batch', 'botch'], ['crutch', 'crotch'], ['hatch', 'hutch'], ['match', 'much'], ['natch', 'notch'],
['buff', 'boff'], ['calf', 'cuff', 'cough'], ['gaff', 'guff'], ['half', 'huff'], ['staff', 'stuff'],
['lav', 'love'],
['math', 'moth'], ['wrath', 'wroth'],
['bash','bosh'],['gash','gush','gosh'],['lash','lush'],['mash','mush','mosh'],['rash','rush'],['slash','slush','slosh']
];

var lowVowelsFileNotFound = [['cap', 'cup', 'cop'], ['sat', 'sot'], ['shat', 'shut', 'shot'], ['tack', 'tuck', 'tock'], ['sub', 'sob'], ['cad', 'cud', 'cod'], ['mad', 'mud', 'mod'], ['bag', 'bug', 'bog'], ['am', 'um'], ['numb', 'nom'], ['can', 'con'], ['stand', 'stunned']];

var midBackVowels = [['awe','owe','or'],['caw','core'],['craw','crow'],['daw', 'door'],['draw','drawer'],['foe','four'],['flaw','flow','floor'],['gnaw','no','nor'],['go','gore'],['haw','hoe','whore'],['jaw','joe'],['law','low','lore'],['maw','mow','more'],['paw','pour'],['raw','row','roar'],['saw','sew','soar'],['shaw','show','shore'],['slaw','slow'],['stow','store'],['straw','strow'],['toe','tour'],['woe','war'],['yo','yore'],
['bought','boat'],['caught','coat','court'],['fought','fort'],
['awk','oak','orc'],['chalk','choke'],['stalk','stoke','stork'],['talk','toke'],['walk','woke'],
['bawd','bode','board'],['code','cord'],['gaud','goad'],['load','lord'],['woad','ward'],
['comb','corm'],['dome','dorm'],['foam','form'],['gnome','norm'],
['bone','born'],['moan','mourn'],['pawn','porn'],['sawn','sewn'],['tone','torn'],
['poach','porch'],
['auth','oath']
];

var midBackVowelsFileNotFound =[['daw','doe','door'],['gaud','goad','gourd'],['cone','corn'],]

var rColoredVowels = [['burr','bar','bore'],['chirr', 'char', 'chore'], ['cur','car','core'],['fur','far','for'],['mar','more'],['purr','par','pour'],['sir','soar'],['stir','star','store'],['sure','shore'],['tar','tore'],
['curt','cart','court'],['dirt','dart'],['hurt','heart'],['pert','part','port'],['shirt','short'],['tart','tort'],['wert','wart'],
['irk','orc'],['dark','dork'],['kirk','cork'],['lurk','lark'],['murk','mark'], ['perk','park','pork'],['quirk','quark'],['shirk','shark'],
['bird','bard','board'],['curd','card','cord'],['gird','guard'],['herd','hard','hoard'], ['lard','lord'],['sard','sword'],['word','ward'],
['erg','org'],
['derm','dorm'],['firm','farm','form'],['perm','parm'],['worm','warm'],
['burn','barn','born'],['learn','lorn'],['skarn','scorn'],['turn','torn'],
['curse','course'],['first','forced'],['hearse','horse'],['nurse','norse'],['purse','parse'],
['lurch','larch'],['merch','march'],['perch','parch','porch'],
['girth','garth']
];

var rColoredVowelsFileNotFound =[['carp','corp'],['turk','torque'],]

var rl = [['rack','lack'],['rad','lad'],['raid','laid'],['rag','lag'],['rake','lake'],['ram','lamb'],['ramp','lamp'],['ran','lan'],['rain','lain'],['wrap','lap'],['rat','lat'],['rate','late'],['raw','law'],['ray','lay'],
['reed','lead'],['reef','leaf'],['reek','leak'],['real','leal'],['rend','lend'],['reap','leap'],['rear','leer'],['rest','lest'],['reave','leave'],
['rib','lib'],['rick','lick'],['rid','lid'],['rife','life'],['rift','lift'],['rhyme','lime'],['rink','link'],['wrist','list'],['writ','lit'],['right','light'],['river','liver'],
['rob','lob'],['robe','lobe'],['rock','lock'],['rode','load'],['room','loom'],['roan','lone'],['roo','loo'],['rope','lope'],['rot','lot'],['row','low'],
['ruck','luck'],['rude','lewd'],['rug','lug'],['ruse','lose'],['rust','lust'],
['breach','bleach'],['brand','bland'],['brink','blink'],['brat','blat'],['breed','bleed'],['breast','blest'],['bring','bling'],['brink','blink'],['bris','bliss'],['bright','blight'],['broke','bloke'],['bro','blow'],['bruise','blues'],['brunt','blunt'],
['crack','clack'],['cram','clam'],['cramp','clamp'],['crap','clap'],['crass','class'],['crave','clave'],['craw','claw'],['crick','click'],['crime','climb'],['crip','clip'],['crock','clock'],['croak','cloak'],['crone','clone'],['crown','clown'],['cruck','cluck'],['cray','clay'],
['frack','flack'],['frag','flag'],['frap','flap'],['frat','flat'],['fray','flay'],['freak','fleek'],['free','flee'],['fright','flight'],['frock','flock'],['fro','flow'],
['grad','glad'],['grade','glade'],['gram','glam'],['grand','gland'],['groom','gloom'],['grow','glow'],['grew','glue'],
['pray','play'],['prod','plod'],['proud','ploughed'],['spray','splay'],['sprint','splint'],
['arrive','alive'],['array','allay']
];

var rlFileNotFound =[['raff','laugh'],['red','led'],['rip','lip'],['bread','bled'],['prow','plow']['broom','bloom'],['griff','glyph']];

var nl =[['knack','lack'],['nag','lag'],['nan','lan'],['nap','lap'],['gnash','lash'],['gnat','lat'],['natch','latch'],['knave','lave'],['gnaw','law'],['neigh','lay'],
['need','lead'],['neep','leap'],['near','leer'],['ness','less'],['nest','lest'],['net','let'],['never','lever'],['new','loo'],['nexus','lexis'],
['nib','lib'],['nick','lick'],['niece','lease'],['knife','life'],['nine','line'],['nip','lip'],['knit','lit'],['night','light'],
['knob','lob'],['knock','lock'],['node','load'],['nook','look'],['nope','lope'],['not','lot'],['no','low'],
['nude','lewd'],['news','lose'],
['snag','slag'],['snake','slake'],['snap','slap'],['snick','slick'],['snip','slip'],['snit','slit'],['snob','slob'],['snot','slot'],['snow','slow'],['snug','slug'],
['tannin','talon'],['winnow','willow']
];

var nlFileNotFound = [['nug','lug']];

var vw = [['vac','whack'],['van','wan'],['vary','wary'],['veep','weep'],['vest','west'],['vet','wet'],['vile','while'],['vine','wine'],['vow','wow'],
['vicar','wicker'],['viper','wiper'],
['rove','row'],['have','how'],['grove','grow'],
];

var vb = [['vac','back'],['van','ban'],['veep','beep'],['veer','beer'],['very','berry'],['vest','best'],['vet','bet'],['vile','bile'],['vine','bine'],['vow','bow'],['vox','box'],
['vicar','bicker'],
['rove','robe'],['live','lib'],['lover','lubber'],['lav','lab']
];

var vbFileNotFound = [['vat','bat'],['volley','bali']];