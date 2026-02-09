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
    DisableCharacter(46740800);
    DisableCharacterCollision(46740800);
    DisableCharacter(46745800);
    DisableCharacterCollision(46745800);
    DisableCharacter(46740810);
    DisableCharacterCollision(46740810);
    DisableCharacter(46745810);
    DisableCharacterCollision(46745810);
    DisableCharacter(46740820);
    DisableCharacterCollision(46740820);
    DisableCharacter(46745820);
    DisableCharacterCollision(46745820);
    DisableCharacter(46740830);
    DisableCharacterCollision(46740830);
    DisableCharacter(46745830);
    DisableCharacterCollision(46745830);
    DisableCharacter(46740840);
    DisableCharacterCollision(46740840);
    DisableCharacter(46745840);
    DisableCharacterCollision(46745840);
    DisableCharacter(46740850);
    DisableCharacterCollision(46740850);
    DisableCharacter(46745850);
    DisableCharacterCollision(46745850);
    DisableCharacter(46740860);
    DisableCharacterCollision(46740860);
    DisableCharacter(46745860);
    DisableCharacterCollision(46745860);
    DisableCharacter(46740870);
    DisableCharacterCollision(46740870);
    DisableCharacter(46745870);
    DisableCharacterCollision(46745870);
    DisableCharacter(46740880);
    DisableCharacterCollision(46740880);
    DisableCharacter(46745880);
    DisableCharacterCollision(46745880);
    DisableCharacter(46740890);
    DisableCharacterCollision(46740890);
    DisableCharacter(46745890);
    DisableCharacterCollision(46745890);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        EnableCharacter(46740800);
        EnableCharacterCollision(46740800);
        EnableCharacter(46745800);
        EnableCharacterCollision(46745800);
    }
    if (EventFlag(64001)) {
        EnableCharacter(46740810);
        EnableCharacterCollision(46740810);
        EnableCharacter(46745810);
        EnableCharacterCollision(46745810);
    }
    if (EventFlag(64002)) {
        EnableCharacter(46740820);
        EnableCharacterCollision(46740820);
        EnableCharacter(46745820);
        EnableCharacterCollision(46745820);
    }
    if (EventFlag(64003)) {
        EnableCharacter(46740830);
        EnableCharacterCollision(46740830);
        EnableCharacter(46745830);
        EnableCharacterCollision(46745830);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46740840);
        EnableCharacterCollision(46740840);
        EnableCharacter(46745840);
        EnableCharacterCollision(46745840);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46740850);
        EnableCharacterCollision(46740850);
        EnableCharacter(46745850);
        EnableCharacterCollision(46745850);
    }

    if (EventFlag(64006)) {
        EnableCharacter(46740860);
        EnableCharacterCollision(46740860);
        EnableCharacter(46745860);
        EnableCharacterCollision(46745860);
    }

    if (EventFlag(64007)) {
        EnableCharacter(46740870);
        EnableCharacterCollision(46740870);
        EnableCharacter(46745870);
        EnableCharacterCollision(46745870);
    }  
  
    if (EventFlag(64008)) {
        EnableCharacter(46740880);
        EnableCharacterCollision(46740880);
        EnableCharacter(46745880);
        EnableCharacterCollision(46745880);
    } 

    if (EventFlag(64009)) {
        EnableCharacter(46740890);
        EnableCharacterCollision(46740890);
        EnableCharacter(46745890);
        EnableCharacterCollision(46745890);
    }    
    
    $InitializeCommonEvent(0, 90015000, 0, 46745800, 903575000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46745800, 30, 920110, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46745800, 46745800, 1020, 920110, 11290, 903575000, 46745800);
    $InitializeCommonEvent(0, 9005810, 46745800, 46740500, 46741500, 5);
    $InitializeCommonEvent(0, 90015005, 46741500, 46742800, 46745800);
    $InitializeCommonEvent(0, 90015000, 0, 46745810, 902500311, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46745810, 30, 920110, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46745810, 46745810, 1020, 920110, 11290, 902500311, 46745810);
    $InitializeCommonEvent(0, 9005810, 46745810, 46740500, 46741500, 5);
    $InitializeCommonEvent(0, 90015005, 46741500, 46742800, 46745810);
    $InitializeCommonEvent(0, 90015000, 0, 46740820, 904980600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46740820, 30, 920110, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46740820, 46740820, 1020, 920110, 11290, 904980600, 46740820);
    $InitializeCommonEvent(0, 9005810, 46740820, 46740500, 46741500, 5);
    $InitializeCommonEvent(0, 90015005, 46741500, 46742800, 46740820);
    $InitializeCommonEvent(0, 90015000, 0, 46740830, 905250600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46740830, 30, 920110, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46740830, 46740830, 1020, 920110, 11290, 905250600, 46740830);
    $InitializeCommonEvent(0, 9005810, 46740830, 46740500, 46741500, 5);
    $InitializeCommonEvent(0, 90015005, 46741500, 46742800, 46740830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46745800, 920110, 46745800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46740810, 920110, 46745810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46740820, 920110, 46740820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46740830, 920110, 46740830, 0, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46745800);
    $InitializeCommonEvent(0, 90015016, 46745800);
    $InitializeCommonEvent(0, 90015015, 46745810);
    $InitializeCommonEvent(0, 90015016, 46745810);
    $InitializeCommonEvent(0, 90015015, 46740820);
    $InitializeCommonEvent(0, 90015016, 46740820);
    $InitializeCommonEvent(0, 90015015, 46740830);
    $InitializeCommonEvent(0, 90015016, 46740830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46745800);
        $InitializeCommonEvent(0, 90015468, 46745800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46745810);
        $InitializeCommonEvent(0, 90015468, 46745810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46740820);
        $InitializeCommonEvent(0, 90015468, 46740820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46740830);
        $InitializeCommonEvent(0, 90015468, 46740830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46745800);
    $InitializeCommonEvent(0, 90015199, 46745810);
    $InitializeCommonEvent(0, 90015199, 46740820);
    $InitializeCommonEvent(0, 90015199, 46740830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46742200, Default, function(chrEntityId) {
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
