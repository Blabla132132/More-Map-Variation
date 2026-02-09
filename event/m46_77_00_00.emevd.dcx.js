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
    DisableCharacter(46770800);
    DisableCharacterCollision(46770800);
    DisableCharacter(46775800);
    DisableCharacterCollision(46775800);
    DisableCharacter(46770810);
    DisableCharacterCollision(46770810);
    DisableCharacter(46775810);
    DisableCharacterCollision(46775810);
    DisableCharacter(46770820);
    DisableCharacterCollision(46770820);
    DisableCharacter(46775820);
    DisableCharacterCollision(46775820);
    DisableCharacter(46770830);
    DisableCharacterCollision(46770830);
    DisableCharacter(46775830);
    DisableCharacterCollision(46775830);
    DisableCharacter(46770840);
    DisableCharacterCollision(46770840);
    DisableCharacter(46775840);
    DisableCharacterCollision(46775840);
    DisableCharacter(46770850);
    DisableCharacterCollision(46770850);
    DisableCharacter(46775850);
    DisableCharacterCollision(46775850);
    DisableCharacter(46770860);
    DisableCharacterCollision(46770860);
    DisableCharacter(46775860);
    DisableCharacterCollision(46775860);
    DisableCharacter(46770870);
    DisableCharacterCollision(46770870);
    DisableCharacter(46775870);
    DisableCharacterCollision(46775870);
    DisableCharacter(46770880);
    DisableCharacterCollision(46770880);
    DisableCharacter(46775880);
    DisableCharacterCollision(46775880);
    DisableCharacter(46770890);
    DisableCharacterCollision(46770890);
    DisableCharacter(46775890);
    DisableCharacterCollision(46775890);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        EnableCharacter(46770800);
        EnableCharacterCollision(46770800);
        EnableCharacter(46775800);
        EnableCharacterCollision(46775800);
    }
    if (EventFlag(64001)) {
        EnableCharacter(46770810);
        EnableCharacterCollision(46770810);
        EnableCharacter(46775810);
        EnableCharacterCollision(46775810);
    }
    if (EventFlag(64002)) {
        EnableCharacter(46770820);
        EnableCharacterCollision(46770820);
        EnableCharacter(46775820);
        EnableCharacterCollision(46775820);
    }
    if (EventFlag(64003)) {
        EnableCharacter(46770830);
        EnableCharacterCollision(46770830);
        EnableCharacter(46775830);
        EnableCharacterCollision(46775830);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46770840);
        EnableCharacterCollision(46770840);
        EnableCharacter(46775840);
        EnableCharacterCollision(46775840);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46770850);
        EnableCharacterCollision(46770850);
        EnableCharacter(46775850);
        EnableCharacterCollision(46775850);
    }

    if (EventFlag(64006)) {
        EnableCharacter(46770860);
        EnableCharacterCollision(46770860);
        EnableCharacter(46775860);
        EnableCharacterCollision(46775860);
    }

    if (EventFlag(64007)) {
        EnableCharacter(46770870);
        EnableCharacterCollision(46770870);
        EnableCharacter(46775870);
        EnableCharacterCollision(46775870);
    }  
  
    if (EventFlag(64008)) {
        EnableCharacter(46770880);
        EnableCharacterCollision(46770880);
        EnableCharacter(46775880);
        EnableCharacterCollision(46775880);
    } 

    if (EventFlag(64009)) {
        EnableCharacter(46770890);
        EnableCharacterCollision(46770890);
        EnableCharacter(46775890);
        EnableCharacterCollision(46775890);
    }
        
    $InitializeCommonEvent(0, 90015000, 0, 46775800, 905081001, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46775800, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46775800, 46775800, 1020, 920610, 11290, 905081001, 46775800);
    $InitializeCommonEvent(0, 9005810, 46775800, 46770500, 46771500, 5);
    $InitializeCommonEvent(0, 90015005, 46771500, 46772800, 46775800);
    $InitializeCommonEvent(0, 90015000, 0, 46775810, 905320001, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46775810, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46775810, 46775810, 1020, 920610, 11290, 905320001, 46775810);
    $InitializeCommonEvent(0, 9005810, 46775810, 46770500, 46771500, 5);
    $InitializeCommonEvent(0, 90015005, 46771500, 46772800, 46775810);
    $InitializeCommonEvent(0, 90015000, 0, 46770820, 904630310, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46770820, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46770820, 46770820, 1020, 920610, 11290, 904630310, 46770820);
    $InitializeCommonEvent(0, 9005810, 46770820, 46770500, 46771500, 5);
    $InitializeCommonEvent(0, 90015005, 46771500, 46772800, 46770820);
    $InitializeCommonEvent(0, 90015000, 0, 46770830, 903181400, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46770830, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46770830, 46770830, 1020, 920610, 11290, 903181400, 46770830);
    $InitializeCommonEvent(0, 9005810, 46770830, 46770500, 46771500, 5);
    $InitializeCommonEvent(0, 90015005, 46771500, 46772800, 46770830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46770800, 931010, 46775800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46770800, 931010, 46775810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46770800, 931010, 46770820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46770800, 931010, 46770830, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46775800);
    $InitializeCommonEvent(0, 90015016, 46775800);
    $InitializeCommonEvent(0, 90015016, 46775810);
    $InitializeCommonEvent(0, 90015015, 46775810);
    $InitializeCommonEvent(0, 90015015, 46770820);
    $InitializeCommonEvent(0, 90015016, 46770820);
    $InitializeCommonEvent(0, 90015015, 46770830);
    $InitializeCommonEvent(0, 90015016, 46770830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46775800);
        $InitializeCommonEvent(0, 90015468, 46775800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46775810);
        $InitializeCommonEvent(0, 90015468, 46775810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46770820);
        $InitializeCommonEvent(0, 90015468, 46770820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46770830);
        $InitializeCommonEvent(0, 90015468, 46770830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46775800);
    $InitializeCommonEvent(0, 90015199, 46775810);
    $InitializeCommonEvent(0, 90015199, 46770820);
    $InitializeCommonEvent(0, 90015199, 46770830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46772200, Default, function(chrEntityId) {
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
