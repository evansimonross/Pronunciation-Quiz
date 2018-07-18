var highFrontVowels = [[['bleep', 'blip'], ['blip', 'blɪp']], [['cheap', 'tʃip'], ['chip', 'tʃɪp']], [['creep', 'krip'], ['crip', 'krɪp']], [['heap', 'hip'], ['hip', 'hɪp']],
[['jeep', 'dʒip'], ['gyp', 'dʒɪp']], [['keep', 'kip'], ['kip', 'kɪp']], [['leap', 'lip'], ['lip', 'lɪp']], [['neep', 'nip'], ['nip', 'nɪp']], [['peep', 'pip'], ['pip', 'pɪp']], [['seep', 'sip'], ['sip', 'sɪp']], [['sleep', 'slip'], ['slip', 'slɪp']], [['sheep', 'ʃip'], ['ship', 'ʃɪp']],
[['beat', 'bit'], ['bit', 'bɪt']], [['cheat', 'tʃit'], ['chit', 'tʃɪt']], [['feet', 'fit'], ['fit', 'fɪt']], [['fleet', 'flit'], ['flit', 'flɪt']], [['heat', 'hit'], ['hit', 'hɪt']], [['meat', 'mit'], ['mitt', 'mɪt']], [['neat', 'nit'], ['knit', 'nɪt']], [['peat', 'pit'], ['pit', 'pɪt']], [['seat', 'sit'], ['sit', 'sɪt']], [['sleet', 'slit'], ['slit', 'slɪt']], [['skeet', 'skit'], ['skit', 'skɪt']], [['teat', 'tit'], ['tit', 'tɪt']], [['wheat', 'wit'], ['wit', 'wɪt']],
[['cheek', 'tʃik'], ['chick', 'tʃɪk']], [['creek', 'krik'], ['crick', 'krɪk']], [['eke', 'ik'], ['ick', 'ɪk']], [['fleek', 'flik'], ['flick', 'flɪk']], [['keek', 'kik'], ['kick', 'kɪk']], [['leak', 'lik'], ['lick', 'lɪk']], [['peek', 'pik'], ['pick', 'pɪk']], [['reek', 'rik'], ['rick', 'rɪk']], [['seek', 'sik'], ['sick', 'sɪk']], [['sleek', 'slik'], ['slick', 'slɪk']], [['squeak', 'skwik'], ['squick', 'skwɪk']], [['teak', 'tik'], ['tick', 'tɪk']], [['treacle', 'trikəl'], ['trickle', 'trɪkəl']], [['weak', 'wik'], ['wick', 'wɪk']],
[['bead', 'bid'], ['bid', 'bɪd']], [['deed', 'did'], ['did', 'dɪd']], [['feed', 'fid'], ['fid', 'fɪd']], [['heed', 'hid'], ['hid', 'hɪd']], [['keyed', 'kid'], ['kid', 'kɪd']], [['lead', 'lid'], ['lid', 'lɪd']], [['mead', 'mid'], ['mid', 'mɪd']], [['meaty', 'miɾi'], ['midi', 'mɪɾi']], [['reed', 'rid'], ['rid', 'rɪd']], [['wheedle', 'wiɾəl'], ['whittle', 'wɪɾəl']],
[['bream', 'brim'], ['brim', 'brɪm']], [['deem', 'dim'], ['dim', 'dɪm']], [['meme', 'mim'], ['mim', 'mɪm']], [['ream', 'rim'], ['rim', 'rɪm']], [['scheme', 'skim'], ['skim', 'skɪm']], [['seem', 'sim'], ['sim', 'sɪm']],
[['bean', 'bin'], ['been', 'bɪn']], [['dean', 'din'], ['din', 'dɪn']], [['gene', 'dʒin'], ['gin', 'dʒɪn']], [['green', 'grin'], ['grin', 'grɪn']], [['keen', 'kin'], ['kin', 'kɪn']], [['mean', 'min'], ['min', 'mɪn']], [['peen', 'pin'], ['pin', 'pɪn']], [['queen', 'kwin'], ['quin', 'kwɪn']], [['sheen', 'ʃin'], ['shin', 'ʃɪn']], [['teen', 'tin'], ['tin', 'tɪn']], [['wean', 'win'], ['win', 'wɪn']],
[['deal', 'dil'], ['dill', 'dɪl']], [['eel', 'il'], ['ill', 'ɪl']], [['feel', 'fil'], ['fill', 'fɪl']], [['heal', 'hil'], ['hill', 'hɪl']], [['keel', 'kil'], ['kill', 'kɪl']], [['meal', 'mil'], ['mill', 'mɪl']], [['peel', 'pil'], ['pill', 'pɪl']], [['seal', 'sil'], ['sill', 'sɪl']], [['squeal', 'skwil'], ['squill', 'skwɪl']], [['steal', 'stil'], ['still', 'stɪl']], [['teal', 'til'], ['till', 'tɪl']], [['wheel', 'wil'], ['will', 'wɪl']],
[['cease', 'sis'], ['sis', 'sɪs']], [['east', 'ist'], ['ist', 'ɪst']], [['feast', 'fist'], ['fist', 'fɪst']], [['least', 'list'], ['list', 'lɪst']], [['peace', 'pis'], ['piss', 'pɪs']],
[['wheeze', 'wiz'], ['whiz', 'wɪz']],
[['beach', 'bitʃ'], ['bitch', 'bɪtʃ']], [['each', 'itʃ'], ['itch', 'ɪtʃ']], [['peach', 'pitʃ'], ['pitch', 'pɪtʃ']],
[['leafed', 'lift'], ['lift', 'lɪft']], [['reef', 'rif'], ['riff', 'rɪf']],
[['leave', 'liv'], ['live', 'lɪv']]
];

var highFrontVowelsFileNotFound = [['caesar', 'scissor'], ['deep', 'dip'], ['reap', 'rip'], ['streep', 'strip'], ['eat', 'it'], ['leet', 'lit'], ['seen', 'sin'], ['wield', 'willed'], ['leech', 'lich']];

var highBackVowels = [[['poot', 'put'], ['put', 'pʊt']], [['suit', 'sut'], ['soot', 'sʊt']], [['cuke', 'kjuk'], ['cook', 'kʊk']], [['nuke', 'n(j)uk'], ['nook', 'nʊk']], [['tuque', 't(j)uk'], ['took', 'tʊk']], [['stewed', 'stud'], ['stood', 'stʊd']], [['fool', 'ful'], ['full', 'fʊl']], [['pool', 'pul'], ['pull', 'pʊl']]];

var highBackVowelsFileNotFound = [['kooky', 'cookie'], ['who\'d', 'hood']];

var lowVowels = [[['app','æp'], ['up','ʌp']], [['cup','kʌp'], ['cop','kɑp']], [['chap','tʃæp'], ['chop','tʃɑp']], [['clap','klæp'], ['clop','klɑp']], [['crap','kræp'], ['crop','krɑp']], [['flap','flæp'], ['flop','flɑp']], [['hap','hæp'], ['hup','hʌp'], ['hop','hɑp']], [['lap','læp'], ['lop','lɑp']], [['map','mæp'], ['mop','mɑp']], [['pap','pæp'], ['pup','pʌp'], ['pop','pɑp']], [['sap','sæp'], ['sup','sʌp'], ['sop','sɑp']], [['slap','slæp'], ['slop','slɑp']], [['strap','stræp'], ['strop','strɑp']], [['tap','tæp'], ['tup','tʌp'], ['top','tɑp']], [['yap','jæp'], ['yup','jʌp']],
[['bat','bæt'], ['but','bʌt'], ['bot','bɑt']], [['batter','bæɾɚ'], ['butter','bʌɾɚ']], [['blat','blæt'], ['blot','bɑt']], [['cat','kæt'], ['cut','kʌt'], ['cot', 'kɑt']], [['gnat','næt'], ['nut','nʌt'], ['not','nɑt']], [['gut','gʌt'], ['got','gɑt']], [['hat','hæt'], ['hut','hʌt'], ['hot','hɑt']], [['jut','dʒʌt'], ['jot','dʒɑt']], [['lat','læt'], ['lot','lɑt']], [['mat','mæt'], ['mutt','mʌt']], [['pat','pæt'], ['putt','pʌt'], ['pot','pɑt']], [['rat','ræt'], ['rut','rʌt'], ['rot','rɑt']], [['shut','ʃʌt'], ['shot','ʃɑt']], [['slat','slæt'], ['slut','slʌt'], ['slot','slɑt']], [['spat','spæt'], ['spot','spɑt']], [['stat','stæt'], ['stot','stɑt']], [['tat','tæt'], ['tut','tʌt'], ['tot','tɑt']],
[['ax','æks'], ['ox','ɑks']], [['back','bæk'], ['buck','bʌk'], ['bock','bɑk']], [['black','blæk'], ['block','blɑk']], [['duck','dʌk'], ['dock','dɑk']], [['fax','fæks'], ['fox','fɑks']], [['flack','flæk'], ['flock','flɑk']], [['frack','fræk'], ['frock','frɑk']], [['hack','hæk'], ['huck','hʌk'], ['hock','hɑk']], [['jack','dʒæk'], ['jock','dʒɑk']], [['knack','næk'], ['knock','nɑk']], [['lack','læk'], ['luck','lʌk'], ['lock','lɑk']], [['lax','læks'], ['lux','lʌks'], ['lox','lɑks']], [['muck','mʌk'], ['mock','mɑk']], [['pack','pæk'], ['puck','pʌk'], ['pock','pɑk']], [['plaque','plæk'], ['pluck','plʌk']], [['rack','ræk'], ['ruck','rʌk'], ['rock','rɑk']], [['sack','sæk'], ['suck','sʌk'], ['sock','sɑk']], [['shack','ʃæk'], ['shuck','ʃʌk'], ['shock','ʃɑk']], [['stack','stæk'], ['stuck','stʌk'], ['stock','stɑk']], [['tack','tæk'], ['tuck','tʌk']], [['track','træk'], ['truck','trʌk']], [['vax','væks'], ['vox','vɑks']], [['whack','wæk'], ['wok','wɑk']], [['yak','jæk'], ['yuck','jʌk']],
[['bub','bʌb'], ['bob','bɑb']], [['blab','blæb'], ['blob','blɑb']], [['blabber','blæbɚ'], ['blubber','blʌbɚ']], [['cab','kæb'], ['cub','kʌb'], ['cob','kɑb']], [['dab','dæb'], ['dub','dʌb']], [['flab','flæb'], ['flub','flʌb']], [['gab','gæb'], ['gob','gɑb']], [['hub','hʌb'], ['hob','hɑb']], [['lab','læb'], ['lob','lɑb']], [['nab','næb'], ['knob','nɑb']], [['rub','rʌb'], ['rob','rɑb']], [['slab','slæb'], ['slob','slɑb']], [['stab','stæb'], ['stub','stʌb']], [['tab','tæb'], ['tub','tʌb']],
[['adder','æɾɚ'], ['udder','ʌɾɚ']], [['adze','ædz'], ['odds','ɑdz']], [['bad','bæd'], ['bud','bʌd'], ['bod','bɑd']], [['cad','kæd'], ['cud','kʌd']], [['dad','dæd'], ['dud','dʌd']], [['gad','gæd'], ['god','gɑd']], [['mad','mæd'], ['mud','mʌd']], [['pad','pæd'], ['pod','pɑd']], [['plaid','plæd'], ['plod','plɑd']], [['rad','ræd'], ['rod','rɑd']], [['sad','sæd'], ['sod','sɑd']], [['sadden','sæɾən'], ['sudden','sʌɾən'], ['sodden','sɑɾən']], [['tad','tæd'], ['tod','tɑd']],
[['bag','bæg'], ['bug','bʌg']], [['baggy','bægi'],['buggy','bʌgi'], ['boggy','bɑgi']], [['dug','dʌg'], ['dog','dɑg']], [['drag','dræg'], ['drug','drʌg']], [['hag','hæg'], ['hug','hʌg'], ['hog','hɑg']], [['jag','dʒæg'], ['jug','dʒʌg'], ['jog','dʒɑg']], [['rag','ræg'], ['rug','rʌg']], [['saggy','sægi'], ['soggy','sɑgi']], [['snag','snæg'], ['snug','snʌg'], ['snog','snɑg']], [['tag','tæg'], ['tug','tʌg']], [['wag','wæg'], ['wog','wɑg']],
[['bam','bæm'], ['bum','bʌm'], ['bomb','bɑm']], [['cam','kæm'], ['come','kʌm'], ['calm','kɑm']], [['cram','kræm'], ['crumb','krʌm']], [['dam','dæm'], ['dumb','dʌm'], ['dom','dɑm']], [['dram','dræm'], ['drum','drʌm']], [['ham','hæm'], ['hum','hʌm']], [['mam','mæm'], ['mum','mʌm'], ['mom','mɑm']], [['ram','ræm'], ['rum','rʌm'], ['rom','rɑm']], [['scam','skæm'], ['scum','skʌm']], [['slam','slæm'], ['slum','slʌm']], [['tummy','tʌmi'], ['tommy','tɑmi']], [['yam','jæm'], ['yum','jʌm']],
[['ban','bæn'], ['bun','bʌn']], [['bland','blænd'], ['blond','blɑnd']], [['dun','dʌn'], ['don','dɑn']], [['fan','fæn'], ['fun','fʌn']], [['fund','fʌnd'], ['fond','fɑnd']], [['manny','mæni'], ['money','fʌni']], [['pan','pæn'], ['pun','pʌn']], [['ran','ræn'], ['run','rʌn']], [['rant','rænt'], ['runt','rʌnt']], [['tan','tæn'], ['ton','tʌn']],
[['batch','bætʃ'], ['botch','bɑtʃ']], [['crutch','krʌtʃ'], ['crotch','krɑtʃ']], [['hatch','hætʃ'], ['hutch','hʌtʃ']], [['match','mætʃ'], ['much','mʌtʃ']], [['natch','nætʃ'], ['notch','nɑtʃ']],
[['buff','bʌf'], ['boff','bɑf']], [['calf','kæf'], ['cuff','kʌf'], ['cough','kɑf']], [['gaff','gæf'], ['guff','gʌf']], [['half','hæf'], ['huff','hʌf']], [['staff','stæf'], ['stuff','stʌf']],
[['lav','læv'], ['love','lʌv']],
[['math','mæθ'], ['moth','mɑθ']], [['wrath','ræθ'], ['wroth','rɑθ']],
[['bash','bæʃ'], ['bosh','bɑʃ']], [['gash','gæʃ'], ['gush','gʌʃ'], ['gosh','gɑʃ']], [['lash','læʃ'], ['lush','lʌʃ']], [['mash','mæʃ'], ['mush','mʌʃ'], ['mosh','mɑʃ']], [['rash','ræʃ'], ['rush','rʌʃ']], [['slash','slæʃ'], ['slush','slʌʃ'], ['slosh','slɑʃ']]
];

var lowVowelsFileNotFound = [['cap', 'cup', 'cop'], ['sat', 'sot'], ['shat', 'shut', 'shot'], ['tack', 'tuck', 'tock'], ['jab', 'job'], ['sub', 'sob'], ['cad', 'cud', 'cod'], ['mad', 'mud', 'mod'], ['bag', 'bug', 'bog'], ['am', 'um'], ['numb', 'nom'], ['can', 'con'], ['stand', 'stunned']];

var midBackVowels = [[['awe'], ['owe'], ['or']], [['caw'], ['core']], [['craw'], ['crow']], [['daw'], ['door']], [['draw'], ['drawer']], [['foe'], ['four']], [['flaw'], ['flow'], ['floor']], [['gnaw'], ['no'], ['nor']], [['go'], ['gore']], [['haw'], ['hoe'], ['whore']], [['jaw'], ['joe']], [['law'], ['low'], ['lore']], [['maw'], ['mow'], ['more']], [['paw'], ['pour']], [['raw'], ['row'], ['roar']], [['saw'], ['sew'], ['soar']], [['shaw'], ['show'], ['shore']], [['slaw'], ['slow']], [['stow'], ['store']], [['straw'], ['strow']], [['toe'], ['tour']], [['woe'], ['war']], [['yo'], ['yore']],
[['bought'], ['boat']], [['caught'], ['coat'], ['court']], [['fought'], ['fort']],
[['awk'], ['oak'], ['orc']], [['chalk'], ['choke']], [['stalk'], ['stoke'], ['stork']], [['talk'], ['toke']], [['walk'], ['woke']],
[['bawd'], ['bode'], ['board']], [['code'], ['cord']], [['gaud'], ['goad']], [['load'], ['lord']], [['woad'], ['ward']],
[['comb'], ['corm']], [['dome'], ['dorm']], [['foam'], ['form']], [['gnome'], ['norm']],
[['bone'], ['born']], [['moan'], ['mourn']], [['pawn'], ['porn']], [['sawn'], ['sewn']], [['tone'], ['torn']],
[['poach'], ['porch']],
[['auth'], ['oath']]
];

var midBackVowelsFileNotFound = [['daw', 'doe', 'door'], ['gaud', 'goad', 'gourd'], ['cone', 'corn'],]

var rColoredVowels = [[['burr'], ['bar'], ['bore']], [['chirr'], ['char'], ['chore']], [['cur'], ['car'], ['core']], [['fur'], ['far'], ['for']], [['mar'], ['more']], [['purr'], ['par'], ['pour']], [['sir'], ['soar']], [['stir'], ['star'], ['store']], [['sure'], ['shore']], [['tar'], ['tore']],
[['curt'], ['cart'], ['court']], [['dirt'], ['dart']], [['hurt'], ['heart']], [['pert'], ['part'], ['port']], [['shirt'], ['short']], [['tart'], ['tort']], [['wert'], ['wart']],
[['irk'], ['orc']], [['dark'], ['dork']], [['kirk'], ['cork']], [['lurk'], ['lark']], [['murk'], ['mark']], [['perk'], ['park'], ['pork']], [['quirk'], ['quark']], [['shirk'], ['shark']],
[['bird'], ['bard'], ['board']], [['curd'], ['card'], ['cord']], [['gird'], ['guard']], [['herd'], ['hard'], ['hoard']], [['lard'], ['lord']], [['sard'], ['sword']], [['word'], ['ward']],
[['erg'], ['org']],
[['derm'], ['dorm']], [['firm'], ['farm'], ['form']], [['perm'], ['parm']], [['worm'], ['warm']],
[['burn'], ['barn'], ['born']], [['learn'], ['lorn']], [['skarn'], ['scorn']], [['turn'], ['torn']],
[['curse'], ['course']], [['first'], ['forced']], [['hearse'], ['horse']], [['nurse'], ['norse']], [['purse'], ['parse']],
[['lurch'], ['larch']], [['merch'], ['march']], [['perch'], ['parch'], ['porch']],
[['girth'], ['garth']]
];

var rColoredVowelsFileNotFound = [['carp', 'corp'], ['turk', 'torque']];

var schwaOrNothing = [[['prayed'],['parade']],[['scum'],['succumb']],[['prana'],['piranha']]];

var rl = [[['rack'], ['lack']], [['rad'], ['lad']], [['raid'], ['laid']], [['rag'], ['lag']], [['rake'], ['lake']], [['ram'], ['lamb']], [['ramp'], ['lamp']], [['ran'], ['lan']], [['rain'], ['lain']], [['wrap'], ['lap']], [['rat'], ['lat']], [['rate'], ['late']], [['raw'], ['law']], [['ray'], ['lay']],
[['reed'], ['lead']], [['reef'], ['leaf']], [['reek'], ['leak']], [['real'], ['leal']], [['rend'], ['lend']], [['reap'], ['leap']], [['rear'], ['leer']], [['rest'], ['lest']], [['reave'], ['leave']],
[['rib'], ['lib']], [['rick'], ['lick']], [['rid'], ['lid']], [['rife'], ['life']], [['rift'], ['lift']], [['rhyme'], ['lime']], [['rink'], ['link']], [['wrist'], ['list']], [['writ'], ['lit']], [['right'], ['light']], [['river'], ['liver']],
[['rob'], ['lob']], [['robe'], ['lobe']], [['rock'], ['lock']], [['rode'], ['load']], [['room'], ['loom']], [['roan'], ['lone']], [['roo'], ['loo']], [['rope'], ['lope']], [['rot'], ['lot']], [['row'], ['low']],
[['ruck'], ['luck']], [['rude'], ['lewd']], [['rug'], ['lug']], [['ruse'], ['lose']], [['rust'], ['lust']],
[['breach'], ['bleach']], [['brand'], ['bland']], [['brink'], ['blink']], [['brat'], ['blat']], [['breed'], ['bleed']], [['breast'], ['blest']], [['bring'], ['bling']], [['brink'], ['blink']], [['bris'], ['bliss']], [['bright'], ['blight']], [['broke'], ['bloke']], [['bro'], ['blow']], [['bruise'], ['blues']], [['brunt'], ['blunt']],
[['crack'], ['clack']], [['cram'], ['clam']], [['cramp'], ['clamp']], [['crap'], ['clap']], [['crass'], ['class']], [['crave'], ['clave']], [['craw'], ['claw']], [['crick'], ['click']], [['crime'], ['climb']], [['crip'], ['clip']], [['crock'], ['clock']], [['croak'], ['cloak']], [['crone'], ['clone']], [['crown'], ['clown']], [['cruck'], ['cluck']], [['cray'], ['clay']],
[['frack'], ['flack']], [['frag'], ['flag']], [['frap'], ['flap']], [['frat'], ['flat']], [['fray'], ['flay']], [['freak'], ['fleek']], [['free'], ['flee']], [['fright'], ['flight']], [['frock'], ['flock']], [['fro'], ['flow']],
[['grad'], ['glad']], [['grade'], ['glade']], [['gram'], ['glam']], [['grand'], ['gland']], [['groom'], ['gloom']], [['grow'], ['glow']], [['grew'], ['glue']],
[['pray'], ['play']], [['prod'], ['plod']], [['proud'], ['ploughed']], [['spray'], ['splay']], [['sprint'], ['splint']],
[['arrive'], ['alive']], [['array'], ['allay']]
];

var rlFileNotFound = [['raff', 'laugh'], ['red', 'led'], ['rip', 'lip'], ['bread', 'bled'], ['prow', 'plow']['broom', 'bloom'], ['griff', 'glyph']];

var nl = [[['knack'], ['lack']], [['nag'], ['lag']], [['nan'], ['lan']], [['nap'], ['lap']], [['gnash'], ['lash']], [['gnat'], ['lat']], [['natch'], ['latch']], [['knave'], ['lave']], [['gnaw'], ['law']], [['neigh'], ['lay']],
[['need'], ['lead']], [['neep'], ['leap']], [['near'], ['leer']], [['ness'], ['less']], [['nest'], ['lest']], [['net'], ['let']], [['never'], ['lever']], [['new'], ['loo']], [['nexus'], ['lexis']],
[['nib'], ['lib']], [['nick'], ['lick']], [['niece'], ['lease']], [['knife'], ['life']], [['nine'], ['line']], [['nip'], ['lip']], [['knit'], ['lit']], [['night'], ['light']],
[['knob'], ['lob']], [['knock'], ['lock']], [['node'], ['load']], [['nook'], ['look']], [['nope'], ['lope']], [['not'], ['lot']], [['no'], ['low']],
[['nude'], ['lewd']], [['news'], ['lose']],
[['snag'], ['slag']], [['snake'], ['slake']], [['snap'], ['slap']], [['snick'], ['slick']], [['snip'], ['slip']], [['snit'], ['slit']], [['snob'], ['slob']], [['snot'], ['slot']], [['snow'], ['slow']], [['snug'], ['slug']],
[['tannin'], ['talon']], [['winnow'], ['willow']]
];

var nlFileNotFound = [['nug', 'lug']];

var vw = [[['vac'], ['whack']], [['van'], ['wan']], [['vary'], ['wary']], [['veep'], ['weep']], [['vest'], ['west']], [['vet'], ['wet']], [['vile'], ['while']], [['vine'], ['wine']], [['vow'], ['wow']],
[['vicar'], ['wicker']], [['viper'], ['wiper']],
[['rove'], ['row']], [['have'], ['how']], [['grove'], ['grow']]
];

var vb = [[['vac'], ['back']], [['van'], ['ban']], [['veep'], ['beep']], [['veer'], ['beer']], [['very'], ['berry']], [['vest'], ['best']], [['vet'], ['bet']], [['vile'], ['bile']], [['vine'], ['bine']], [['vow'], ['bow']], [['vox'], ['box']],
[['vicar'], ['bicker']],
[['rove'], ['robe']], [['live'], ['lib']], [['lover'], ['lubber']], [['lav'], ['lab']]
];

var vbFileNotFound = [['vat', 'bat'], ['volley', 'bali']];