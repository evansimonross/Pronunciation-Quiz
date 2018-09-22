var highFrontVowels = [[['bleep', 'blip'], ['blip', 'blɪp']], [['cheap', 'tʃip'], ['chip', 'tʃɪp']], [['creep', 'krip'], ['crip', 'krɪp']], [['heap', 'hip'], ['hip', 'hɪp']],
[['keep', 'kip'], ['kip', 'kɪp']], [['leap', 'lip'], ['lip', 'lɪp']], [['neep', 'nip'], ['nip', 'nɪp']], [['peep', 'pip'], ['pip', 'pɪp']], [['seep', 'sip'], ['sip', 'sɪp']], [['sleep', 'slip'], ['slip', 'slɪp']], [['sheep', 'ʃip'], ['ship', 'ʃɪp']],
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

var lowVowels = [[['app', 'æp'], ['up', 'ʌp']], [['cup', 'kʌp'], ['cop', 'kɑp']], [['chap', 'tʃæp'], ['chop', 'tʃɑp']], [['clap', 'klæp'], ['clop', 'klɑp']], [['crap', 'kræp'], ['crop', 'krɑp']], [['flap', 'flæp'], ['flop', 'flɑp']], [['hap', 'hæp'], ['hup', 'hʌp'], ['hop', 'hɑp']], [['lap', 'læp'], ['lop', 'lɑp']], [['map', 'mæp'], ['mop', 'mɑp']], [['pap', 'pæp'], ['pup', 'pʌp'], ['pop', 'pɑp']], [['sap', 'sæp'], ['sup', 'sʌp'], ['sop', 'sɑp']], [['slap', 'slæp'], ['slop', 'slɑp']], [['strap', 'stræp'], ['strop', 'strɑp']], [['tap', 'tæp'], ['tup', 'tʌp'], ['top', 'tɑp']], [['yap', 'jæp'], ['yup', 'jʌp']],
[['bat', 'bæt'], ['but', 'bʌt'], ['bot', 'bɑt']], [['batter', 'bæɾɚ'], ['butter', 'bʌɾɚ']], [['blat', 'blæt'], ['blot', 'bɑt']], [['cat', 'kæt'], ['cut', 'kʌt'], ['cot', 'kɑt']], [['gnat', 'næt'], ['nut', 'nʌt'], ['not', 'nɑt']], [['gut', 'gʌt'], ['got', 'gɑt']], [['hat', 'hæt'], ['hut', 'hʌt'], ['hot', 'hɑt']], [['jut', 'dʒʌt'], ['jot', 'dʒɑt']], [['lat', 'læt'], ['lot', 'lɑt']], [['mat', 'mæt'], ['mutt', 'mʌt']], [['pat', 'pæt'], ['putt', 'pʌt'], ['pot', 'pɑt']], [['rat', 'ræt'], ['rut', 'rʌt'], ['rot', 'rɑt']], [['shut', 'ʃʌt'], ['shot', 'ʃɑt']], [['slat', 'slæt'], ['slut', 'slʌt'], ['slot', 'slɑt']], [['spat', 'spæt'], ['spot', 'spɑt']], [['stat', 'stæt'], ['stot', 'stɑt']], [['tat', 'tæt'], ['tut', 'tʌt'], ['tot', 'tɑt']],
[['ax', 'æks'], ['ox', 'ɑks']], [['back', 'bæk'], ['buck', 'bʌk'], ['bock', 'bɑk']], [['black', 'blæk'], ['block', 'blɑk']], [['duck', 'dʌk'], ['dock', 'dɑk']], [['fax', 'fæks'], ['fox', 'fɑks']], [['flack', 'flæk'], ['flock', 'flɑk']], [['frack', 'fræk'], ['frock', 'frɑk']], [['hack', 'hæk'], ['huck', 'hʌk'], ['hock', 'hɑk']], [['jack', 'dʒæk'], ['jock', 'dʒɑk']], [['knack', 'næk'], ['knock', 'nɑk']], [['lack', 'læk'], ['luck', 'lʌk'], ['lock', 'lɑk']], [['lax', 'læks'], ['lux', 'lʌks'], ['lox', 'lɑks']], [['muck', 'mʌk'], ['mock', 'mɑk']], [['pack', 'pæk'], ['puck', 'pʌk'], ['pock', 'pɑk']], [['plaque', 'plæk'], ['pluck', 'plʌk']], [['rack', 'ræk'], ['ruck', 'rʌk'], ['rock', 'rɑk']], [['sack', 'sæk'], ['suck', 'sʌk'], ['sock', 'sɑk']], [['shack', 'ʃæk'], ['shuck', 'ʃʌk'], ['shock', 'ʃɑk']], [['stack', 'stæk'], ['stuck', 'stʌk'], ['stock', 'stɑk']], [['tack', 'tæk'], ['tuck', 'tʌk']], [['track', 'træk'], ['truck', 'trʌk']], [['vax', 'væks'], ['vox', 'vɑks']], [['whack', 'wæk'], ['wok', 'wɑk']], [['yak', 'jæk'], ['yuck', 'jʌk']],
[['bub', 'bʌb'], ['bob', 'bɑb']], [['blab', 'blæb'], ['blob', 'blɑb']], [['blabber', 'blæbɚ'], ['blubber', 'blʌbɚ']], [['cab', 'kæb'], ['cub', 'kʌb'], ['cob', 'kɑb']], [['dab', 'dæb'], ['dub', 'dʌb']], [['flab', 'flæb'], ['flub', 'flʌb']], [['gab', 'gæb'], ['gob', 'gɑb']], [['hub', 'hʌb'], ['hob', 'hɑb']], [['lab', 'læb'], ['lob', 'lɑb']], [['nab', 'næb'], ['knob', 'nɑb']], [['rub', 'rʌb'], ['rob', 'rɑb']], [['slab', 'slæb'], ['slob', 'slɑb']], [['stab', 'stæb'], ['stub', 'stʌb']], [['tab', 'tæb'], ['tub', 'tʌb']],
[['adder', 'æɾɚ'], ['udder', 'ʌɾɚ']], [['adze', 'ædz'], ['odds', 'ɑdz']], [['bad', 'bæd'], ['bud', 'bʌd'], ['bod', 'bɑd']], [['cad', 'kæd'], ['cud', 'kʌd']], [['dad', 'dæd'], ['dud', 'dʌd']], [['gad', 'gæd'], ['god', 'gɑd']], [['mad', 'mæd'], ['mud', 'mʌd']], [['pad', 'pæd'], ['pod', 'pɑd']], [['plaid', 'plæd'], ['plod', 'plɑd']], [['rad', 'ræd'], ['rod', 'rɑd']], [['sad', 'sæd'], ['sod', 'sɑd']], [['sadden', 'sæɾən'], ['sudden', 'sʌɾən'], ['sodden', 'sɑɾən']], [['tad', 'tæd'], ['tod', 'tɑd']],
[['bag', 'bæg'], ['bug', 'bʌg']], [['baggy', 'bægi'], ['buggy', 'bʌgi'], ['boggy', 'bɑgi']], [['dug', 'dʌg'], ['dog', 'dɑg']], [['drag', 'dræg'], ['drug', 'drʌg']], [['hag', 'hæg'], ['hug', 'hʌg'], ['hog', 'hɑg']], [['jag', 'dʒæg'], ['jug', 'dʒʌg'], ['jog', 'dʒɑg']], [['rag', 'ræg'], ['rug', 'rʌg']], [['saggy', 'sægi'], ['soggy', 'sɑgi']], [['snag', 'snæg'], ['snug', 'snʌg'], ['snog', 'snɑg']], [['tag', 'tæg'], ['tug', 'tʌg']], [['wag', 'wæg'], ['wog', 'wɑg']],
[['bam', 'bæm'], ['bum', 'bʌm'], ['bomb', 'bɑm']], [['cam', 'kæm'], ['come', 'kʌm'], ['calm', 'kɑm']], [['cram', 'kræm'], ['crumb', 'krʌm']], [['dam', 'dæm'], ['dumb', 'dʌm'], ['dom', 'dɑm']], [['dram', 'dræm'], ['drum', 'drʌm']], [['ham', 'hæm'], ['hum', 'hʌm']], [['mam', 'mæm'], ['mum', 'mʌm'], ['mom', 'mɑm']], [['ram', 'ræm'], ['rum', 'rʌm'], ['rom', 'rɑm']], [['scam', 'skæm'], ['scum', 'skʌm']], [['slam', 'slæm'], ['slum', 'slʌm']], [['tummy', 'tʌmi'], ['tommy', 'tɑmi']], [['yam', 'jæm'], ['yum', 'jʌm']],
[['ban', 'bæn'], ['bun', 'bʌn']], [['bland', 'blænd'], ['blond', 'blɑnd']], [['dun', 'dʌn'], ['don', 'dɑn']], [['fan', 'fæn'], ['fun', 'fʌn']], [['fund', 'fʌnd'], ['fond', 'fɑnd']], [['manny', 'mæni'], ['money', 'fʌni']], [['pan', 'pæn'], ['pun', 'pʌn']], [['ran', 'ræn'], ['run', 'rʌn']], [['rant', 'rænt'], ['runt', 'rʌnt']], [['tan', 'tæn'], ['ton', 'tʌn']],
[['batch', 'bætʃ'], ['botch', 'bɑtʃ']], [['crutch', 'krʌtʃ'], ['crotch', 'krɑtʃ']], [['hatch', 'hætʃ'], ['hutch', 'hʌtʃ']], [['match', 'mætʃ'], ['much', 'mʌtʃ']], [['natch', 'nætʃ'], ['notch', 'nɑtʃ']],
[['buff', 'bʌf'], ['boff', 'bɑf']], [['calf', 'kæf'], ['cuff', 'kʌf'], ['cough', 'kɑf']], [['gaff', 'gæf'], ['guff', 'gʌf']], [['half', 'hæf'], ['huff', 'hʌf']], [['staff', 'stæf'], ['stuff', 'stʌf']],
[['lav', 'læv'], ['love', 'lʌv']],
[['math', 'mæθ'], ['moth', 'mɑθ']], [['wrath', 'ræθ'], ['wroth', 'rɑθ']],
[['bash', 'bæʃ'], ['bosh', 'bɑʃ']], [['gash', 'gæʃ'], ['gush', 'gʌʃ'], ['gosh', 'gɑʃ']], [['lash', 'læʃ'], ['lush', 'lʌʃ']], [['mash', 'mæʃ'], ['mush', 'mʌʃ'], ['mosh', 'mɑʃ']], [['rash', 'ræʃ'], ['rush', 'rʌʃ']], [['slash', 'slæʃ'], ['slush', 'slʌʃ'], ['slosh', 'slɑʃ']]
];

var lowVowelsFileNotFound = [['cap', 'cup', 'cop'], ['sat', 'sot'], ['shat', 'shut', 'shot'], ['tack', 'tuck', 'tock'], ['jab', 'job'], ['sub', 'sob'], ['cad', 'cud', 'cod'], ['mad', 'mud', 'mod'], ['bag', 'bug', 'bog'], ['am', 'um'], ['numb', 'nom'], ['can', 'con'], ['stand', 'stunned']];

var lowFrontVowels = [[['dap', 'dæp'], ['dep', 'dɛp']], [['hap', 'hæp'], ['hep', 'hɛp']], [['pap', 'pæp'], ['pep', 'pɛp']], [['sap', 'sæp'], ['cep', 'sɛp']], [['strap', 'stræp'], ['strep', 'strɛp']], [['yap', 'jæp'], ['yep', 'jɛp']],
[['bat', 'bæt'], ['bet', 'bɛt']], [['dat', 'dæt'], ['debt', 'dɛt']], [['gat', 'gæt'], ['get', 'gɛt']], [['hat', 'hæt'], ['het', 'hɛt']], [['lat', 'læt'], ['let', 'lɛt']], [['mat', 'mæt'], ['met', 'mɛt']], [['gnat', 'næt'], ['net', 'nɛt']], [['rat', 'ræt'], ['ret', 'rɛt']], [['stat', 'stæt'], ['stet', 'stɛt']],
[['back', 'bæk'], ['beck', 'bɛk']], [['flack', 'flæk'], ['fleck', 'flɛk']], [['hack', 'hæk'], ['heck', 'hɛk']], [['knack', 'næk'], ['neck', 'nɛk']], [['pack', 'pæk'], ['peck', 'pɛk']], [['rack', 'ræk'], ['wreck', 'rɛk']], [['sax', 'sæks'], ['sex', 'sɛks']], [['snack', 'snæk'], ['sneck', 'snɛk']], [['tack', 'tæk'], ['tech', 'tɛk']], [['vax', 'væks'], ['vex', 'vɛks']],
[['blab', 'blæb'], ['bleb', 'blɛb']], [['dab', 'dæb'], ['deb', 'dɛb']], [['nab', 'næb'], ['neb', 'nɛb']],
[['dad', 'dæd'], ['dead', 'dɛd']], [['fad', 'fæd'], ['fed', 'fɛd']], [['mad', 'mæd'], ['med', 'mɛd']], [['plaid', 'plæd'], ['pled', 'plɛd']], [['rad', 'ræd'], ['red', 'rɛd']], [['sad', 'sæd'], ['said', 'sɛd']], [['shad', 'ʃæd'], ['shed', 'ʃɛd']], [['tad', 'tæd'], ['ted', 'tɛd']], [['trad', 'træd'], ['tread', 'trɛd']],
[['bag', 'bæg'], ['beg', 'bɛg']], [['lag', 'læg'], ['leg', 'lɛg']], [['nag', 'næg'], ['neg', 'nɛg']],
[['am', 'æm'], ['em', 'ɛm']], [['fam', 'fæm'], ['femme', 'fɛm']], [['ham', 'hæm'], ['hem', 'hɛm']], [['jam', 'dʒæm'], ['gem', 'dʒɛm']],
[['an', 'æn'], ['en', 'ɛn']], [['ban', 'bæn'], ['ben', 'bɛn']], [['band', 'bænd'], ['bend', 'bɛnd']], [['dan', 'dæn'], ['den', 'dɛn']], [['dance', 'dæns'], ['dense', 'dɛns']], [['fan', 'fæn'], ['fen', 'fɛn']], [['man', 'mæn'], ['men', 'mɛn']], [['pan', 'pæn'], ['pen', 'pɛn']], [['pant', 'pænt'], ['pent', 'pɛnt']], [['ran', 'ræn'], ['wren', 'rɛn']], [['rant', 'rænt'], ['rent', 'rɛnt']], [['tan', 'tæn'], ['ten', 'tɛn']], [['wan', 'wæn'], ['when', 'wɛn']],
[['aft', 'æft'], ['eft', 'ɛft']], [['daft', 'dæft'], ['deft', 'dɛft']], [['haft', 'hæft'], ['heft', 'hɛft']], [['raft', 'ræft'], ['reft', 'rɛft']],
[['lav', 'læv'], ['lev', 'lɛv']],
[['math', 'mæθ'], ['meth', 'mɛθ']],
[['flash', 'flæʃ'], ['flesh', 'flɛʃ']], [['mash', 'mæʃ'], ['mesh', 'mɛʃ']], [['thrash', 'θræʃ'], ['thresh', 'θrɛʃ']]
];

var lowFrontVowelsFileNotFound = [['pat', 'pet'], ['sat', 'set'], ['vat', 'vet'], ['ab', 'ebb'], ['bad', 'bed'], ['had', 'head'], ['lad', 'led'], ['lamb', 'lem'], ['ram', 'rem'], ['ant', 'ent'], ['and', 'end'], ['can', 'ken'], ['han', 'hen'], ['catch', 'ketch']];

var lowBackVowels = [[['gnaw', 'nɔ'], ['nah', 'nɑ']], [['law', 'lɔ'], ['la', 'lɑ']], [['shaw', 'ʃɔ'], ['shah', 'ʃɑ']],
[['bought', 'bɔt'], ['bot', 'bɑt']], [['caught', 'kɔt'], ['cot', 'kɑt']], [['naughty', 'nɔti'], ['knotty', 'nɑti']], [['wrought', 'rɔt'], ['rot', 'rɑt']], [['sought', 'sɔt'], ['sot', 'sɑt']], [['taught', 'tɔt'], ['tot', 'tɑt']],
[['chalk', 'tʃɔk'], ['chock', 'tʃɑk']], [['hawk', 'hɔk'], ['hock', 'hɑk']], [['stalk', 'stɔk'], ['stock', 'stɑk']], [['walk', 'wɔk'], ['wok', 'wɑk']],
[['awed', 'ɔd'], ['odd', 'ɑd']], [['bawd', 'bɔd'], ['bod', 'bɑd']], [['bawdy', 'bɔɾi'], ['body', 'bɑɾi']],
[['yawn', 'jɔn'], ['yon', 'jɑn']]
];

var lowBackVowelsFileNotFound = [['awe', 'ah'], ['haw', 'ha'], ['maw', 'ma'], ['paw', 'pa'], ['raw', 'ra'], ['taw', 'ta'], ['haughty', 'hottie'], ['naught', 'not'], ['thought', 'thot'], ['fawkes', 'fox'], ['fawn', 'fon'], ['dawn', 'don']];

var midBackVowels = [[['awe', 'ɔ'], ['owe', 'ou'], ['or', 'oɚ']], [['caw', 'kɔ'], ['core', 'koɚ']], [['craw', 'krɔ'], ['crow', 'krou']], [['daw', 'dɔ'], ['door', 'doɚ']], [['draw', 'drɔ'], ['drawer', 'droɚ']], [['foe', 'fou'], ['four', 'foɚr']], [['flaw', 'flɔ'], ['flow', 'flou'], ['floor', 'floɚr']], [['gnaw', 'nɔ'], ['no', 'nou'], ['nor', 'noɚr']], [['go', 'gou'], ['gore', 'goɚ']], [['haw', 'hɔ'], ['hoe', 'hou'], ['whore', 'hoɚ']], [['jaw', 'dʒɔ'], ['joe', 'dʒou']], [['law', 'lɔ'], ['low', 'lou'], ['lore', 'loɚ']], [['maw', 'mɔ'], ['mow', 'mou'], ['more', 'moɚ']], [['paw', 'pɔ'], ['pour', 'poɚ']], [['raw', 'rɔ'], ['row', 'rou'], ['roar', 'roɚ']], [['saw', 'sɔ'], ['sew', 'sou'], ['soar', 'soɚ']], [['shaw', 'ʃɔ'], ['show', 'ʃou'], ['shore', 'ʃoɚ']], [['slaw', 'slɔ'], ['slow', 'slou']], [['stow', 'stou'], ['store', 'stoɚ']], [['straw', 'strɔ'], ['strow', 'strou']], [['toe', 'tou'], ['tour', 'toɚ']], [['woe', 'wou'], ['war', 'woɚ']], [['yo', 'jou'], ['yore', 'joɚ']],
[['bought', 'bɔt'], ['boat', 'bout']], [['caught', 'kɔt'], ['coat', 'kout'], ['court', 'koɚt']], [['fought', 'fɔt'], ['fort', 'foɚt']],
[['awk', 'ɔk'], ['oak', 'ouk'], ['orc', 'oɚk']], [['chalk', 'tʃɔk'], ['choke', 'tʃouk']], [['stalk', 'stɔk'], ['stoke', 'stouk'], ['stork', 'stoɚk']], [['talk', 'tɔk'], ['toke', 'touk']], [['walk', 'wɔk'], ['woke', 'wouk']],
[['bawd', 'bɔd'], ['bode', 'boud'], ['board', 'boɚd']], [['code', 'koud'], ['cord', 'koɚd']], [['gaud', 'gɔd'], ['goad', 'goud']], [['load', 'loud'], ['lord', 'loɚd']], [['woad', 'woud'], ['ward', 'woɚd']],
[['comb', 'koum'], ['corm', 'koɚm']], [['dome', 'doum'], ['dorm', 'doɚm']], [['foam', 'foum'], ['form', 'foɚm']], [['gnome', 'noum'], ['norm', 'noɚm']],
[['bone', 'boun'], ['born', 'boɚn']], [['moan', 'moun'], ['mourn', 'moɚn']], [['pawn', 'pɔn'], ['porn', 'poɚn']], [['sawn', 'sɔn'], ['sewn', 'soun']], [['tone', 'toun'], ['torn', 'toɚn']],
[['poach', 'poutʃ'], ['porch', 'poɚtʃ']],
[['auth', 'ɔθ'], ['oath', 'ouθ']]
];

var midBackVowelsFileNotFound = [['daw', 'doe', 'door'], ['gaud', 'goad', 'gourd'], ['cone', 'corn']];

var midFrontVowels = [[['crip', 'krɪp'], ['crepe', 'kreip']], [['drip', 'drɪp'], ['drape', 'dreip']], [['grip', 'grɪp'], ['grape', 'greip']], [['hip', 'hɪp'], ['hep', 'hɛp']], [['kip', 'kɪp'], ['cape', 'keip']], [['nip', 'nɪp'], ['nape', 'neip']], [['pip', 'pɪp'], ['pep', 'pɛp']], [['rape', 'reip'], ['rep', 'rɛp']], [['skip', 'skɪp'], ['scape', 'skeip']], [['strip', 'strɪp'], ['strep', 'strɛp']], [['tip', 'tɪp'], ['tape', 'teip']], [['yip', 'jɪp'], ['yep', 'jɛp']],
[['bit', ' bɪt'], ['bait', ' beit'], ['bet', 'bɛt']], [['fit', 'fɪt'], ['fate', 'feit']], [['git', 'gɪt'], ['gate', 'geit'], ['get', 'gɛt']], [['grit', 'grɪt'], ['great', 'greit']], [['hit', 'hɪt'], ['hate', 'heit'], ['het', 'hɛt']], [['lit', 'lɪt'], ['late', 'leit'], ['let', 'lɛt']], [['mitt', 'mɪt'], ['mate', 'meit'], ['met', 'mɛt']], [['knit', 'nɪt'], ['net', 'nɛt']], [['writ', 'rɪt'], ['rate', 'reit'], ['ret', 'rɛt']], [['sit', 'sɪt'], ['sate', 'seit'], ['set', 'sɛt']], [['skit', 'skɪt'], ['skate', 'skeit']], [['wit', 'wɪt'], ['wait', 'weit'], ['wet', 'wɛt']],
[['bake', 'beik'], ['beck', 'bɛk']], [['brick', 'brɪk'], ['break', 'breik']], [['chick', 'tʃɪk'], ['check', 'tʃɛk']], [['dick', 'dɪk'], ['deck', 'dɛk']], [['drake', 'dreik'], ['dreck', 'drɛk']], [['flick', 'flɪk'], ['flake', 'fleik'], ['fleck', 'flɛk']], [['hick', 'hɪk'], ['hake', 'heik'], ['heck', 'hɛk']], [['kick', 'kɪk'], ['cake', 'keik'], ['keck', 'kɛk']], [['lick', 'lɪk'], ['lake', 'leik']], [['nick', 'nɪk'], ['neck', 'nɛk']], [['pick', 'pɪk'], ['peck', 'pɛk']], [['quick', 'kwɪk'], ['quake', 'kweik']], [['rick', 'rɪk'], ['rake', 'reik'], ['wreck', 'rɛk']], [['sick', 'sɪk'], ['sake', 'seik'], ['sec', 'sɛk']], [['spake', 'speik'], ['speck', 'spɛk']], [['stick', 'stɪk'], ['steak', 'steik']], [['tick', 'tɪk'], ['take', 'teik'], ['tech', 'tɛk']], [['trick', 'trɪk'], ['trek', 'trɛk']], [['wick', 'wɪk'], ['wake', 'weik']],
[['bib', 'bɪb'], ['babe', 'beib']], [['dib', 'dɪb'], ['deb', 'dɛb']],
[['braid', 'breid'], ['bread', 'brɛd']], [['did', 'dɪd'], ['dead', 'dɛd']], [['fid', 'fɪd'], ['fade', 'feid'], ['fed', 'fɛd']], [['grid', 'grɪd'], ['grade', 'greid']], [['hid', 'hɪd'], ['hade', 'heid'], ['head', 'hɛd']], [['mid', 'mɪd'], ['made', 'meid'], ['med', 'mɛd']], [['rid', 'rɪd'], ['raid', 'reid'], ['red', 'rɛd']], [['wade', 'weid'], ['wed', 'wɛd']],
[['big', 'bɪg'], ['beg', 'bɛg']], [['pig', 'pɪg'], ['peg', 'pɛg']],
[['aim', 'eim'], ['em', 'ɛm']], [['dim', 'dɪm'], ['dame', 'deim']], [['fame', 'feim'], ['femme', 'fɛm']], [['flame', 'fleim'], ['phlegm', 'flɛm']], [['him', 'hɪm'], ['hem', 'hɛm']], [['limb', 'lɪm'], ['lame', 'leim']],
[['in', 'ɪn'], ['en', 'ɛn']], [['bin', 'bɪn'], ['bane', 'bein'], ['ben', 'bɛn']], [['bint', 'bɪnt'], ['bent', 'bɛnt']], [['chin', 'tʃɪn'], ['chain', 'tʃein']], [['din', 'dɪn'], ['deign', 'dein'], ['den', 'dɛn']], [['dint', 'dɪnt'], ['dent', 'dɛnt']], [['fin', 'fɪn'], ['feign', 'fein'], ['fen', 'fɛn']], [['grin', 'grɪn'], ['grain', 'grein']], [['kin', 'kɪn'], ['cane', 'kein'], ['ken', 'kɛn']], [['lint', 'lɪnt'], ['lent', 'lɛnt']], [['min', 'mɪn'], ['main', 'mein'], ['men', 'mɛn']], [['mint', 'mɪnt'], ['meant', 'mɛnt']], [['pin', 'pɪn'], ['pain', 'pein'], ['pen', 'pɛn']], [['paint', 'peint'], ['pent', 'pɛnt']], [['quint', 'kwɪnt'], ['quaint', 'kweint']], [['saint', 'seint'], ['sent', 'sɛnt']], [['stint', 'stɪnt'], ['stent', 'stɛnt']], [['tin', 'tɪn'], ['ten', 'tɛn']], [['tint', 'tɪnt'], ['taint', 'teint'], ['tent', 'tɛnt']], [['thin', 'θɪn'], ['thane', 'θein']], [['win', 'wɪn'], ['wane', 'wein'], ['when', 'wɛn']], [['wind', 'wɪnd'], ['wend', 'wɛnd']],
[['itch', 'ɪtʃ'], ['aitch', 'eitʃ'], ['etch', 'ɛtʃ']], [['fitch', 'fɪtʃ'], ['fetch', 'fɛtʃ']], [['kitsch', 'kɪtʃ'], ['ketch', 'kɛtʃ']], [['rich', 'rɪtʃ'], ['wretch', 'rɛtʃ']],
[['midge', 'mɪdʒ'], ['mage', 'meidʒ']], [['ridge', 'rɪdʒ'], ['rage', 'reidʒ']], [['sage', 'seidʒ'], ['sedge', 'sɛdʒ']], [['wage', 'weidʒ'], ['wedge', 'wɛdʒ']],
[['ill', 'ɪl'], ['ale', 'eil'], ['el', 'ɛl']], [['bill', 'bɪl'], ['bail', 'beil'], ['bell', 'bɛl']], [['dill', 'dɪl'], ['dale', 'deil'], ['dell', 'dɛl']], [['fill', 'fɪl'], ['fail', 'feil'], ['fell', 'fɛl']], [['frill', 'frɪl'], ['frail', 'freil']], [['gill', 'gɪl'], ['gale', 'geil']], [['grill', 'grɪl'], ['grail', 'greil']], [['hill', 'hɪl'], ['hail', 'heil'], ['hell', 'hɛl']], [['mill', 'mɪl'], ['mail', 'meil']], [['nil', 'nɪl'], ['nail', 'neil'], ['knell', 'nɛl']], [['pill', 'pɪl'], ['pail', 'peil']], [['quill', 'kwɪl'], ['quail', 'kweil'], ['quell', 'kwɛl']], [['sill', 'sɪl'], ['sail', 'seil'], ['sell', 'sɛl']], [['shill', 'ʃɪl'], ['shale', 'ʃeil'], ['shell', 'ʃɛl']], [['skill', 'skɪl'], ['scale', 'skeil'], ['skell', 'skɛl']], [['snail', 'sneil'], ['snell', 'snɛl']], [['spill', 'spɪl'], ['spell', 'spɛl']], [['still', 'stɪl'], ['stale', 'steil']], [['till', 'tɪl'], ['tail', 'teil'], ['tell', 'tɛl']], [['trill', 'trɪl'], ['trail', 'treil']], [['will', 'wɪl'], ['whale', 'weil'], ['well', 'wɛl']]
];

var midFrontVowelsFileNotFound = [[['pip'], ['pape'], ['pep']], [['rip'], ['rape'], ['rep']], [['it'], ['eight'], ['et']], [['pit'], ['pate'], ['pet']], [['fake'], ['feck']], [['bid'], ['bade'], ['bed']], [['blade'], ['bled']], [['lid'], ['led']], [['slid'], ['slade'], ['sled']], [['rim'], ['rem']], [['shim'], ['shame'], ['shem']], [['din'], ['dane'], ['den']], [['sin'], ['sane']], [['vill'], ['vail']]];

var rColoredVowels = [[['burr', 'bɚ'], ['bar', 'baɚ'], ['bore', 'boɚ']], [['chirr', 'tʃɚ'], ['char', 'tʃaɚ'], ['chore', 'tʃoɚ']], [['cur', 'kɚ'], ['car', 'kaɚ'], ['core', 'koɚ']], [['fur', 'fɚ'], ['far', 'faɚ'], ['four', 'foɚ']], [['mar', 'maɚ'], ['more', 'moɚ']], [['purr', 'pɚ'], ['par', 'paɚ'], ['pour', 'poɚ']], [['sir', 'sɚ'], ['soar', 'soɚ']], [['stir', 'stɚ'], ['star', 'staɚ'], ['store', 'stoɚ']], [['sure', 'ʃɚ'], ['shore', 'ʃoɚ']], [['tar', 'taɚ'], ['tore', 'toɚ']],
[['curt', 'kɚt'], ['cart', 'kaɚt'], ['court', 'koɚt']], [['dirt', 'dɚt'], ['dart', 'daɚt']], [['hurt', 'hɚt'], ['heart', 'haɚt']], [['pert', 'pɚt'], ['part', 'paɚt'], ['port', 'poɚt']], [['shirt', 'ʃɚt'], ['short', 'ʃoɚt']], [['tart', 'taɚt'], ['tort', 'toɚt']], [['wert', 'wɚt'], ['wart', 'woɚt']],
[['irk', 'ɚk'], ['ark', 'aɚk'], ['orc', 'oɚk']], [['dirk', 'dɚk'], ['dark', 'daɚk'], ['dork', 'doɚk']], [['kirk', 'kɚk'], ['cork', 'koɚk']], [['lurk', 'lɚk'], ['lark', 'laɚk']], [['murk', 'mɚk'], ['mark', 'maɚk']], [['perk', 'pɚk'], ['park', 'paɚk'], ['pork', 'poɚk']], [['quirk', 'kwɚk'], ['quark', 'kwaɚk']], [['shirk', 'ʃɚk'], ['shark', 'ʃaɚk']],
[['bird', 'bɚd'], ['bard', 'baɚd'], ['board', 'boɚd']], [['curd', 'kɚd'], ['card', 'kaɚd'], ['cord', 'koɚd']], [['gird', 'gɚd'], ['guard', 'gaɚd']], [['herd', 'hɚd'], ['hard', 'haɚd'], ['hoard', 'hoɚd']], [['lard', 'laɚd'], ['lord', 'loɚd']], [['sard', 'saɚd'], ['sword', 'soɚd']], [['word', 'wɚd'], ['ward', 'woɚd']],
[['erg', 'ɚg'], ['org', 'oɚg']],
[['derm', 'dɚm'], ['dorm', 'doɚm']], [['firm', 'fɚm'], ['farm', 'faɚm'], ['form', 'foɚm']], [['perm', 'pɚm'], ['parm', 'paɚm']], [['worm', 'wɚm'], ['warm', 'woɚm']],
[['burn', 'bɚn'], ['barn', 'baɚn'], ['born', 'boɚn']], [['learn', 'lɚn'], ['lorn', 'loɚn']], [['skarn', 'skaɚn'], ['scorn', 'skoɚn']], [['turn', 'tɚn'], ['torn', 'toɚn']],
[['curse', 'kɚs'], ['course', 'koɚs']], [['first', 'fɚst'], ['forced', 'foɚst']], [['hearse', 'hɚs'], ['horse', 'hoɚs']], [['nurse', 'nɚs'], ['norse', 'noɚs']], [['purse', 'pɚs'], ['parse', 'paɚs']],
[['lurch', 'lɚtʃ'], ['larch', 'laɚtʃ']], [['merch', 'mɚtʃ'], ['march', 'maɚtʃ']], [['perch', 'pɚtʃ'], ['parch', 'paɚtʃ'], ['porch', 'poɚtʃ']],
[['girth', 'gɚθ'], ['garth', 'gaɚθ']]
];

var rColoredVowelsFileNotFound = [['carp', 'corp'], ['turk', 'torque']];

var schwaOrNothing = [[['prayed'], ['parade']], [['scum'], ['succumb']], [['prana'], ['piranha']],[['plight'],['polite']]];

var rl = [[['rack', 'ræk'], ['lack', 'læk']], [['rad', 'ræd'], ['lad', 'læd']], [['raid', 'reid'], ['laid', 'leid']], [['rag', 'ræg'], ['lag', 'læg']], [['rake', 'reik'], ['lake', 'leik']], [['ram', 'ræm'], ['lamb', 'læm']], [['ramp', 'ræmp'], ['lamp', 'læmp']], [['ran', 'ræn'], ['lan', 'læn']], [['rain', 'rein'], ['lain', 'lein']], [['wrap', 'ræp'], ['lap', 'læp']], [['rat', 'ræt'], ['lat', 'læt']], [['rate', 'reit'], ['late', 'leit']], [['raw', 'rɔ'], ['law', 'lɔ']], [['ray', 'rei'], ['lay', 'lei']],
[['reed', 'rid'], ['lead', 'lid']], [['reef', 'rif'], ['leaf', 'lif']], [['reek', 'rik'], ['leak', 'lik']], [['real', 'ril'], ['leal', 'lil']], [['rend', 'rɛnd'], ['lend', 'lɛnd']], [['reap', 'rip'], ['leap', 'lip']], [['rear', 'riɚ'], ['leer', 'liɚ']], [['rest', 'rɛst'], ['lest', 'lɛst']], [['reave', 'riv'], ['leave', 'liv']],
[['rib', 'rɪb'], ['lib', 'lɪb']], [['rick', 'rɪk'], ['lick', 'lɪk']], [['rid', 'rɪd'], ['lid', 'lɪd']], [['rife', 'raif'], ['life', 'laif']], [['rift', 'rɪft'], ['lift', 'lɪft']], [['rhyme', 'raim'], ['lime', 'laim']], [['rink', 'rɪŋk'], ['link', 'lɪŋk']], [['wrist', 'rɪst'], ['list', 'lɪst']], [['writ', 'rɪt'], ['lit', 'lɪt']], [['right', 'rait'], ['light', 'lait']], [['river', 'rɪvɚ'], ['liver', 'lɪvɚ']],
[['rob', 'rɑb'], ['lob', 'lɑb']], [['robe', 'roub'], ['lobe', 'loub']], [['rock', 'rɑk'], ['lock', 'lɑk']], [['rode', 'roud'], ['load', 'loud']], [['room', 'rum'], ['loom', 'lum']], [['roan', 'roun'], ['lone', 'loun']], [['roo', 'ru'], ['loo', 'lu']], [['rope', 'roup'], ['lope', 'loup']], [['rot', 'rɑt'], ['lot', 'lɑt']], [['row', 'rou'], ['low', 'lou']],
[['ruck', 'rʌk'], ['luck', 'lʌk']], [['rude', 'rud'], ['lewd', 'lud']], [['rug', 'rʌg'], ['lug', 'lʌg']], [['ruse', 'ruz'], ['lose', 'luz']], [['rust', 'rʌst'], ['lust', 'lʌst']],
[['breach', 'britʃ'], ['bleach', 'blitʃ']], [['brand', 'brænd'], ['bland', 'blænd']], [['brat', 'bræt'], ['blat', 'blæt']], [['breed', 'brid'], ['bleed', 'blid']], [['breast', 'brɛst'], ['blest', 'blɛst']], [['bring', 'brɪŋ'], ['bling', 'blɪŋ']], [['brink', 'brɪŋk'], ['blink', 'blɪŋk']], [['bris', 'brɪs'], ['bliss', 'blɪs']], [['bright', 'brait'], ['blight', 'blait']], [['broke', 'brouk'], ['bloke', 'blouk']], [['bro', 'brou'], ['blow', 'blou']], [['bruise', 'bruz'], ['blues', 'bluz']], [['brunt', 'brʌnt'], ['blunt', 'blʌnt']],
[['crack', 'kræk'], ['clack', 'klæk']], [['cram', 'kræm'], ['clam', 'klæm']], [['cramp', 'kræmp'], ['clamp', 'klæmp']], [['crap', 'kræp'], ['clap', 'klæp']], [['crass', 'kræs'], ['class', 'klæs']], [['crave', 'kreiv'], ['clave', 'kleiv']], [['craw', 'krɔ'], ['claw', 'klɔ']], [['crick', 'krɪk'], ['click', 'klɪk']], [['crime', 'kraim'], ['climb', 'klaim']], [['crip', 'krɪp'], ['clip', 'klɪp']], [['crock', 'krɑk'], ['clock', 'klɑk']], [['croak', 'krouk'], ['cloak', 'klouk']], [['crone', 'kroun'], ['clone', 'kloun']], [['crown', 'kraun'], ['clown', 'klaun']], [['cruck', 'krʌk'], ['cluck', 'klʌk']], [['cray', 'krei'], ['clay', 'klei']],
[['frack', 'fræk'], ['flack', 'flæk']], [['frag', 'fræg'], ['flag', 'flæg']], [['frap', 'fræp'], ['flap', 'flæp']], [['frat', 'fræt'], ['flat', 'flæt']], [['fray', 'frei'], ['flay', 'flei']], [['freak', 'frik'], ['fleek', 'flik']], [['free', 'fri'], ['flee', 'fli']], [['fright', 'frait'], ['flight', 'flait']], [['frock', 'frɑk'], ['flock', 'flɑk']], [['fro', 'frou'], ['flow', 'flou']],
[['grad', 'græd'], ['glad', 'glæd']], [['grade', 'greid'], ['glade', 'gleid']], [['gram', 'græm'], ['glam', 'glæm']], [['grand', 'grænd'], ['gland', 'glænd']], [['groom', 'grum'], ['gloom', 'glum']], [['grow', 'grou'], ['glow', 'glou']], [['grew', 'gru'], ['glue', 'glu']],
[['pray', 'prei'], ['play', 'plei']], [['prod', 'prɑd'], ['plod', 'plɑd']], [['proud', 'praud'], ['ploughed', 'plaud']], [['spray', 'sprei'], ['splay', 'splei']], [['sprint', 'sprɪnt'], ['splint', 'splɪnt']],
[['arrive', 'əraiv'], ['alive', 'əlaiv']], [['array', 'ərei'], ['allay', 'əlei']]
];

var rlFileNotFound = [['raff', 'laugh'], ['red', 'led'], ['rip', 'lip'], ['bread', 'bled'], ['prow', 'plow']['broom', 'bloom'], ['griff', 'glyph']];

var nl = [[['knack', 'næk'], ['lack', 'læk']], [['nag', 'næg'], ['lag', 'læg']], [['nan', 'næn'], ['lan', 'læn']], [['nap', 'næp'], ['lap', 'læp']], [['gnash', 'næʃ'], ['lash', 'læʃ']], [['gnat', 'næt'], ['lat', 'læt']], [['natch', 'nætʃ'], ['latch', 'lætʃ']], [['knave', 'neiv'], ['lave', 'leiv']], [['gnaw', 'nɔ'], ['law', 'lɔ']], [['neigh', 'nei'], ['lay', 'lei']],
[['need', 'nid'], ['lead', 'lid']], [['neep', 'nip'], ['leap', 'lip']], [['near', 'niɚ'], ['leer', 'liɚ']], [['ness', 'nɛs'], ['less', 'lɛs']], [['nest', 'nɛst'], ['lest', 'lɛst']], [['net', 'nɛt'], ['let', 'lɛt']], [['never', 'nɛvɚ'], ['lever', 'lɛvɚ']], [['new', 'nu'], ['loo', 'lu']], [['nexus', 'nɛksəs'], ['lexis', 'lɛksəs']],
[['nib', 'nɪb'], ['lib', 'lɪb']], [['nick', 'nɪk'], ['lick', 'lɪk']], [['niece', 'nis'], ['lease', 'lis']], [['knife', 'naif'], ['life', 'laif']], [['nine', 'nain'], ['line', 'lain']], [['nip', 'nɪp'], ['lip', 'lɪp']], [['knit', 'nɪt'], ['lit', 'lɪt']], [['night', 'nait'], ['light', 'lait']],
[['knob', 'nɑb'], ['lob', 'lɑb']], [['knock', 'nɑk'], ['lock', 'lɑk']], [['node', 'noud'], ['load', 'loud']], [['nook', 'nʊk'], ['look', 'lʊk']], [['nope', 'noup'], ['lope', 'loup']], [['not', 'nɑt'], ['lot', 'lɑt']], [['no', 'nou'], ['low', 'lou']],
[['nude', 'nud'], ['lewd', 'lud']], [['news', 'nuz'], ['lose', 'luz']],
[['snag', 'snæg'], ['slag', 'slæg']], [['snake', 'sneik'], ['slake', 'sleik']], [['snap', 'snæp'], ['slap', 'slæp']], [['snick', 'snɪk'], ['slick', 'slɪk']], [['snip', 'snɪp'], ['slip', 'slɪp']], [['snit', 'snɪt'], ['slit', 'slɪt']], [['snob', 'snɑb'], ['slob', 'slɑb']], [['snot', 'snɑt'], ['slot', 'slɑt']], [['snow', 'snou'], ['slow', 'slou']], [['snug', 'snʌg'], ['slug', 'slʌg']],
[['tannin', 'tænən'], ['talon', 'tælən']], [['winnow', 'wɪnou'], ['willow', 'wɪlou']]
];

var nlFileNotFound = [['nug', 'lug']];

var vw = [[['vac', 'væk'], ['whack', 'wæk']], [['van', 'væn'], ['wan', 'wæn']], [['vary', 'væri'], ['wary', 'wæri']], [['veep', 'vip'], ['weep', 'wip']], [['vest', 'vɛst'], ['west', 'wɛst']], [['vet', 'vɛt'], ['wet', 'wɛt']], [['vile', 'vail'], ['while', 'wail']], [['vine', 'vain'], ['wine', 'wain']], [['vow', 'vau'], ['wow', 'wau']],
[['vicar', 'vɪkɚ'], ['wicker', 'wɪkɚ']], [['viper', 'vaipɚ'], ['wiper', 'waipɚ']],
[['rove', 'rouv'], ['row', 'rou']], [['have', 'hæv'], ['how', 'hau']], [['grove', 'grouv'], ['grow', 'grou']]
];

var vb = [[['vac', 'væk'], ['back', 'bæk']], [['van', 'væn'], ['ban', 'bæn']], [['veep', 'vip'], ['beep', 'bip']], [['veer', 'viɚ'], ['beer', 'biɚ']], [['very', 'vɛri'], ['berry', 'bɛri']], [['vest', 'vɛst'], ['best', 'bɛst']], [['vet', 'vɛt'], ['bet', 'bɛt']], [['vile', 'vail'], ['bile', 'bail']], [['vine', 'vain'], ['bine', 'bain']], [['vow', 'vau'], ['bow', 'bau']], [['vox', 'vɑks'], ['box', 'bɑks']],
[['vicar', 'vɪkɚ'], ['bicker', 'bɪkɚ']],
[['rove', 'rouv'], ['robe', 'roub']], [['live', 'lɪv'], ['lib', 'lɪb']], [['lover', 'lʌvɚ'], ['lubber', 'lʌbɚ']], [['lav', 'læv'], ['lab', 'læb']]
];

var vbFileNotFound = [['vat', 'bat'], ['volley', 'bali']];

var fp = [[['face'],['pace']],[['fad'],['pad']],[['fade'],['paid']],[['phage'],['page']],[['fall'],['pall']],[['fail'],['pale']],[['fan'],['pan']],[['feign'],['pain']],[['far'],['par']],[['fair'],['pair']],[['fashion'],['passion']],[['fast'],['past']],[['faced'],['paste']],[['fat'],['pat']],[['fate'],['pate']],[['fave'],['pave']],[['fawn'],['pawn']],[['fax'],['pax']],[['fay'],['pay']],
[['fee'],['pee']],[['feel'],['peel']],[['felt'],['pelt']],[['fen'],['pen']],[['fear'],['peer']],[['feet'],['peat']],[['few'],['pew']],
[['fickle'],['pickle']],[['fig'],['pig']],[['fill'],['pill']],[['file'],['pile']],[['fin'],['pin']],[['fine'],['pine']],[['fist'],['pissed']],[['fit'],['pit']],[['fix'],['pix']],
[['folk'],['poke']],[['foal'],['pole']],[['fool'],['pool']],[['phone'],['pwn']],[['fond'],['pond']],[['fop'],['pop']],[['four'],['pour']],[['fox'],['pox']],
[['fug'],['pug']],[['full'],['pull']],[['fun'],['pun']],[['fur'],['purr']],[['fuss'],['pus']],
[['flack'],['plaque']],[['flan'],['plan']],[['flat'],['plait']],[['flay'],['play']],[['flayer'],['player']],[['flee'],['plea']],[['fled'],['pled']],[['fleet'],['pleat']],[['flop'],['plop']],[['flume'],['plume']],[['fly'],['ply']],
[['frat'],['prat']],[['fray'],['pray']],[['free'],['pre']],[['frig'],['prig']],[['frill'],['prill']],[['friar'],['prior']],[['fro'],['pro']],[['fry'],['pry']],
[['sphere'],['spear']],
[['defend'],['depend']]
];

var fpFileNotFound = [[['feck'],['peck']],[['fend'],['pend']],[['flaccid'],['placid']],[['flex'],['plex']],[['frick'],['prick']],[['fried'],['pride']]];

var thssh = [[['thaw'],['saw'],['shaw']],[['thank'],['sank'],['shank']],[['thane'],['sane']],[['sack'],['shack']],[['same'],['shame']],[['save'],['shave']],
[['see'],['she']],[['thief'],['sheaf']],[['seethe'],['sheathe']],[['seek'],['chic']],[['seem'],['theme']],[['seen'],['sheen']],[['seep'],['sheep']],[['sear'],['sheer']],[['seat'],['sheet']],[['thew'],['sue'],['shoe']],
[['thick'],['sick']],[['sift'],['shift']],[['thigh'],['sigh'],['shy']],[['sill'],['shill']],[['thin'],['shin']],[['sign'],['shine']],[['thing'],['sing']],[['think'],['sink']],[['sip'],['ship']],[['sir'],['sure']],[['sieve'],['shiv']],
[['thorn'],['shorn']],[['soar'],['shore']],[['sewn'],['shown']],[['sour'],['shower']],[['soul'],['shoal']],
[['thump'],['sump']],[['thumb'],['some']],[['thunder'],['sunder']],[['suit'],['chute']],[['suck'],['shuck']],[['sun'],['shun']],[['subtle'],['shuttle']],
[['thrill'],['shrill']],[['thrift'],['shrift']],[['through'],['shrew']],[['thread'],['shred']]
];

var thsshFileNotFound = [[['sag'],['shag']],[['thin'],['sin'],['shin']],[['thought'],['sought']],[['thong'],['song']],[['thud'],['sud']]];

var chjy = [[['jack'],['yak']],[['jam'],['yam']],[['chap'],['yap']],[['char'],['jar']],[['jaw'],['yaw']],
[['gel'],['yell']],[['cheep'],['jeep']],[['cheer'],['jeer'],['year']],[['chess'],['jess'],['yes']],[['chew'],['jew'],['you']],
[['chin'],['gin']],[['chip'],['gyp'],['yip']],
[['joe'],['yo']],[['job'],['yob']],[['chalk'],['jock']],[['choke'],['joke'],['yoke']],[['chore'],['yore']],[['choose'],['use']],[['jot'],['yacht']],[['jowl'],['yowl']],
[['chuck'],['yuck']],[['chug'],['jug']],[['chum'],['yum']],[['churn'],['yearn']]
];

var chjyFileNotFound = [[['chill'],['jill']]];