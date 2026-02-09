// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
        
    // Disable flags that will be used to roll for randomness
    BatchSetEventFlags(64000, 64009, OFF);
    
    // Set a random flag true which rolls what boss to spawn. Depends on amount of bosses in map file.
    // EDIT THIS WHEN ADDING/REMOVING BOSS
    if (HasMultiplayerState(MultiplayerState.Host))
    {
        RandomlySetEventFlagInRange(64000, 64002, ON);
        if (EventFlag(64000))
        {
            SetSpEffect(10002, 1605000)
            SetSpEffect(10003, 1605000)
            SetSpEffect(10002, 64000)
        }
        if (EventFlag(64001))
        {
            SetSpEffect(10002, 64001)
        }
        if (EventFlag(64002))
        {
            SetSpEffect(10002, 64002)
        }
        if (EventFlag(64003))
        {
            SetSpEffect(10002, 64003)
        }
    } 
    
    // Disable all the potential character entityids and group entityids. Supports up to 10 variations. Does not need to be edited.
    DisableCharacter(46720800);
    DisableCharacterCollision(46720800);
    DisableCharacter(46725800);
    DisableCharacterCollision(46725800);
    DisableCharacter(46720810);
    DisableCharacterCollision(46720810);
    DisableCharacter(46725810);
    DisableCharacterCollision(46725810);
    DisableCharacter(46720820);
    DisableCharacterCollision(46720820);
    DisableCharacter(46725820);
    DisableCharacterCollision(46725820);
    DisableCharacter(46720830);
    DisableCharacterCollision(46720830);
    DisableCharacter(46725830);
    DisableCharacterCollision(46725830);
    DisableCharacter(46720840);
    DisableCharacterCollision(46720840);
    DisableCharacter(46725840);
    DisableCharacterCollision(46725840);
    DisableCharacter(46720850);
    DisableCharacterCollision(46720850);
    DisableCharacter(46725850);
    DisableCharacterCollision(46725850);
    DisableCharacter(46720860);
    DisableCharacterCollision(46720860);
    DisableCharacter(46725860);
    DisableCharacterCollision(46725860);
    DisableCharacter(46720870);
    DisableCharacterCollision(46720870);
    DisableCharacter(46725870);
    DisableCharacterCollision(46725870);
    DisableCharacter(46720880);
    DisableCharacterCollision(46720880);
    DisableCharacter(46725880);
    DisableCharacterCollision(46725880);
    DisableCharacter(46720890);
    DisableCharacterCollision(46720890);
    DisableCharacter(46725890);
    DisableCharacterCollision(46725890);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (CharacterHasSpEffect(10002, 1605000)) {
        EnableCharacter(46720800);
        EnableCharacterCollision(46720800);
        EnableCharacter(46725800);
        EnableCharacterCollision(46725800);
    }
    if (CharacterHasSpEffect(10002, 64005)) {
        EnableCharacter(46720810);
        EnableCharacterCollision(46720810);
        EnableCharacter(46725810);
        EnableCharacterCollision(46725810);
    }
    if (CharacterHasSpEffect(10002, 64005)) {
        EnableCharacter(46720820);
        EnableCharacterCollision(46720820);
        EnableCharacter(46725820);
        EnableCharacterCollision(46725820);
    }
    if (CharacterHasSpEffect(10002, 64005)) {
        EnableCharacter(46720830);
        EnableCharacterCollision(46720830);
        EnableCharacter(46725830);
        EnableCharacterCollision(46725830);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46720840);
        EnableCharacterCollision(46720840);
        EnableCharacter(46725840);
        EnableCharacterCollision(46725840);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46720850);
        EnableCharacterCollision(46720850);
        EnableCharacter(46725850);
        EnableCharacterCollision(46725850);
    }

    if (CharacterHasSpEffect(10002, 64006)) {
        EnableCharacter(46720860);
        EnableCharacterCollision(46720860);
        EnableCharacter(46725860);
        EnableCharacterCollision(46725860);
    }

    if (EventFlag(64007)) {
        EnableCharacter(46720870);
        EnableCharacterCollision(46720870);
        EnableCharacter(46725870);
        EnableCharacterCollision(46725870);
    }  
  
    if (EventFlag(64008)) {
        EnableCharacter(46720880);
        EnableCharacterCollision(46720880);
        EnableCharacter(46725880);
        EnableCharacterCollision(46725880);
    } 

    if (EventFlag(64009)) {
        EnableCharacter(46720890);
        EnableCharacterCollision(46720890);
        EnableCharacter(46725890);
        EnableCharacterCollision(46725890);
    }
        
    $InitializeCommonEvent(0, 90015000, 0, 46720800, 905810000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46720800, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46720800, 46720800, 1020, 920610, 11290, 905810000, 46720800);
    $InitializeCommonEvent(0, 9005810, 46720800, 46720500, 46721500, 5);
    $InitializeCommonEvent(0, 90015005, 46721500, 46722800, 46720800);
    $InitializeCommonEvent(0, 90015000, 0, 46720810, 905040000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46720810, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46720810, 46720810, 1020, 920610, 11290, 905040000, 46720810);
    $InitializeCommonEvent(0, 9005810, 46720810, 46720500, 46721500, 5);
    $InitializeCommonEvent(0, 90015005, 46721500, 46722800, 46720810);
    $InitializeCommonEvent(0, 90015000, 0, 46720820, 905070000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46720820, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46720820, 46720820, 1020, 920610, 11290, 905070000, 46720820);
    $InitializeCommonEvent(0, 9005810, 46720820, 46720500, 46721500, 5);
    $InitializeCommonEvent(0, 90015005, 46721500, 46722800, 46720820);
    $InitializeCommonEvent(0, 90015000, 0, 46720830, 905070000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46720830, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46720830, 46720830, 1020, 920610, 11290, 905070000, 46720830);
    $InitializeCommonEvent(0, 9005810, 46720830, 46720500, 46721500, 5);
    $InitializeCommonEvent(0, 90015005, 46721500, 46722800, 46720830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46720800, 920610, 46720800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46720800, 920610, 46720810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46720800, 920610, 46720820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46720800, 920610, 46720830, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46720800);
    $InitializeCommonEvent(0, 90015016, 46720800);
    $InitializeCommonEvent(0, 90015015, 46720810);
    $InitializeCommonEvent(0, 90015016, 46720810);
    $InitializeCommonEvent(0, 90015015, 46720820);
    $InitializeCommonEvent(0, 90015016, 46720820);
    $InitializeCommonEvent(0, 90015015, 46720830);
    $InitializeCommonEvent(0, 90015016, 46720830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46720800);
        $InitializeCommonEvent(0, 90015468, 46720800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46720810);
        $InitializeCommonEvent(0, 90015468, 46720810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46720820);
        $InitializeCommonEvent(0, 90015468, 46720820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46720830);
        $InitializeCommonEvent(0, 90015468, 46720830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46720800);
    $InitializeCommonEvent(0, 90015199, 46720810);
    $InitializeCommonEvent(0, 90015199, 46720820);
    $InitializeCommonEvent(0, 90015199, 46720830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46722200, Default, function(chrEntityId) {
    EndIf(
        !(!EventFlag(7603)
            && (InArea(chrEntityId, 1045392989)
                || InArea(chrEntityId, 1045392988)
                || InArea(chrEntityId, 1044362996)
                || InArea(chrEntityId, 1045382998)
                || InArea(chrEntityId, 1045382997)
                || InArea(chrEntityId, 1045362996)
                || InArea(chrEntityId, 1045362995)
                || InArea(chrEntityId, 1045362994))));
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
});
