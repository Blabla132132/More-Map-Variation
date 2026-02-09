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
            SetSpEffect(10003, 4481)
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
    DisableCharacter(46590800);
    DisableCharacterCollision(46590800);
    DisableCharacter(46595800);
    DisableCharacterCollision(46595800);
    DisableCharacter(46590810);
    DisableCharacterCollision(46590810);
    DisableCharacter(46595810);
    DisableCharacterCollision(46595810);
    DisableCharacter(46590820);
    DisableCharacterCollision(46590820);
    DisableCharacter(46595820);
    DisableCharacterCollision(46595820);
    DisableCharacter(46590830);
    DisableCharacterCollision(46590830);
    DisableCharacter(46595830);
    DisableCharacterCollision(46595830);
    DisableCharacter(46590840);
    DisableCharacterCollision(46590840);
    DisableCharacter(46595840);
    DisableCharacterCollision(46595840);
    DisableCharacter(46590850);
    DisableCharacterCollision(46590850);
    DisableCharacter(46595850);
    DisableCharacterCollision(46595850);
    DisableCharacter(46590860);
    DisableCharacterCollision(46590860);
    DisableCharacter(46595860);
    DisableCharacterCollision(46595860);
    DisableCharacter(46590870);
    DisableCharacterCollision(46590870);
    DisableCharacter(46595870);
    DisableCharacterCollision(46595870);
    DisableCharacter(46590880);
    DisableCharacterCollision(46590880);
    DisableCharacter(46595880);
    DisableCharacterCollision(46595880);
    DisableCharacter(46590890);
    DisableCharacterCollision(46590890);
    DisableCharacter(46595890);
    DisableCharacterCollision(46595890);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        EnableCharacter(46590800);
        EnableCharacterCollision(46590800);
        EnableCharacter(46595800);
        EnableCharacterCollision(46595800);
    }
    if (EventFlag(64001)) {
        EnableCharacter(46590810);
        EnableCharacterCollision(46590810);
        EnableCharacter(46595810);
        EnableCharacterCollision(46595810);
    }
    if (EventFlag(64002)) {
        EnableCharacter(46590820);
        EnableCharacterCollision(46590820);
        EnableCharacter(46595820);
        EnableCharacterCollision(46595820);
    }
    if (EventFlag(64003)) {
        EnableCharacter(46590830);
        EnableCharacterCollision(46590830);
        EnableCharacter(46595830);
        EnableCharacterCollision(46595830);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46590840);
        EnableCharacterCollision(46590840);
        EnableCharacter(46595840);
        EnableCharacterCollision(46595840);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46590850);
        EnableCharacterCollision(46590850);
        EnableCharacter(46595850);
        EnableCharacterCollision(46595850);
    }

    if (EventFlag(64006)) {
        EnableCharacter(46590860);
        EnableCharacterCollision(46590860);
        EnableCharacter(46595860);
        EnableCharacterCollision(46595860);
    }

    if (EventFlag(64007)) {
        EnableCharacter(46590870);
        EnableCharacterCollision(46590870);
        EnableCharacter(46595870);
        EnableCharacterCollision(46595870);
    }  
  
    if (EventFlag(64008)) {
        EnableCharacter(46590880);
        EnableCharacterCollision(46590880);
        EnableCharacter(46595880);
        EnableCharacterCollision(46595880);
    } 

    if (EventFlag(64009)) {
        EnableCharacter(46590890);
        EnableCharacterCollision(46590890);
        EnableCharacter(46595890);
        EnableCharacterCollision(46595890);
    }
    
    $InitializeCommonEvent(0, 90015000, 0, 46590800, 904270600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46590800, 30, 921210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46590800, 46590800, 1020, 921210, 11290, 904270600, 46590800);
    $InitializeCommonEvent(0, 9005810, 46590800, 46590500, 46591500, 5);
    $InitializeCommonEvent(0, 90015005, 46591500, 46592800, 46590800);
    $InitializeCommonEvent(0, 90015000, 0, 46595810, 904470003, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46595810, 30, 921210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46595810, 46595810, 1020, 921210, 11290, 904470003, 46595810);
    $InitializeCommonEvent(0, 9005810, 46595810, 46590500, 46591500, 5);
    $InitializeCommonEvent(0, 90015005, 46591500, 46592800, 46595810);
    $InitializeCommonEvent(0, 90015000, 0, 46590820, 904580600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46590820, 30, 921210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46590820, 46590820, 1020, 921210, 11290, 904580600, 46590820);
    $InitializeCommonEvent(0, 9005810, 46590820, 46590500, 46591500, 5);
    $InitializeCommonEvent(0, 90015005, 46591500, 46592800, 46590820);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46590800, 921210, 46590800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46590800, 921210, 46595810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46590800, 921210, 46590820, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46590800);
    $InitializeCommonEvent(0, 90015016, 46590800);
    $InitializeCommonEvent(0, 90015015, 46595810);
    $InitializeCommonEvent(0, 90015016, 46595810);
    $InitializeCommonEvent(0, 90015015, 46590820);
    $InitializeCommonEvent(0, 90015016, 46590820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46590800);
        $InitializeCommonEvent(0, 90015468, 46590800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46595810);
        $InitializeCommonEvent(0, 90015468, 46595810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46590820);
        $InitializeCommonEvent(0, 90015468, 46590820, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46590800);
    $InitializeCommonEvent(0, 90015199, 46595810);
    $InitializeCommonEvent(0, 90015199, 46590820);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46592200, Default, function(chrEntityId) {
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
