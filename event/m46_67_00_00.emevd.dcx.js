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
    RandomlySetEventFlagInRange(64000, 64002, ON);
    
    // Disable all the potential character entityids and group entityids. Supports up to 10 variations. Does not need to be edited.
    DisableCharacter(46670800);
    DisableCharacterCollision(46670800);
    DisableCharacter(46675800);
    DisableCharacterCollision(46675800);
    DisableCharacter(46670810);
    DisableCharacterCollision(46670810);
    DisableCharacter(46675810);
    DisableCharacterCollision(46675810);
    DisableCharacter(46670820);
    DisableCharacterCollision(46670820);
    DisableCharacter(46675820);
    DisableCharacterCollision(46675820);
    DisableCharacter(46670830);
    DisableCharacterCollision(46670830);
    DisableCharacter(46675830);
    DisableCharacterCollision(46675830);
    DisableCharacter(46670840);
    DisableCharacterCollision(46670840);
    DisableCharacter(46675840);
    DisableCharacterCollision(46675840);
    DisableCharacter(46670850);
    DisableCharacterCollision(46670850);
    DisableCharacter(46675850);
    DisableCharacterCollision(46675850);
    DisableCharacter(46670860);
    DisableCharacterCollision(46670860);
    DisableCharacter(46675860);
    DisableCharacterCollision(46675860);
    DisableCharacter(46670870);
    DisableCharacterCollision(46670870);
    DisableCharacter(46675870);
    DisableCharacterCollision(46675870);
    DisableCharacter(46670880);
    DisableCharacterCollision(46670880);
    DisableCharacter(46675880);
    DisableCharacterCollision(46675880);
    DisableCharacter(46670890);
    DisableCharacterCollision(46670890);
    DisableCharacter(46675890);
    DisableCharacterCollision(46675890);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        EnableCharacter(46670800);
        EnableCharacterCollision(46670800);
        EnableCharacter(46675800);
        EnableCharacterCollision(46675800);
    }
    if (EventFlag(64001)) {
        EnableCharacter(46670810);
        EnableCharacterCollision(46670810);
        EnableCharacter(46675810);
        EnableCharacterCollision(46675810);
    }
    if (EventFlag(64002)) {
        EnableCharacter(46670820);
        EnableCharacterCollision(46670820);
        EnableCharacter(46675820);
        EnableCharacterCollision(46675820);
    }
    if (EventFlag(64003)) {
        EnableCharacter(46670830);
        EnableCharacterCollision(46670830);
        EnableCharacter(46675830);
        EnableCharacterCollision(46675830);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46670840);
        EnableCharacterCollision(46670840);
        EnableCharacter(46675840);
        EnableCharacterCollision(46675840);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46670850);
        EnableCharacterCollision(46670850);
        EnableCharacter(46675850);
        EnableCharacterCollision(46675850);
    }

    if (EventFlag(64006)) {
        EnableCharacter(46670860);
        EnableCharacterCollision(46670860);
        EnableCharacter(46675860);
        EnableCharacterCollision(46675860);
    }

    if (EventFlag(64007)) {
        EnableCharacter(46670870);
        EnableCharacterCollision(46670870);
        EnableCharacter(46675870);
        EnableCharacterCollision(46675870);
    }  
  
    if (EventFlag(64008)) {
        EnableCharacter(46670880);
        EnableCharacterCollision(46670880);
        EnableCharacter(46675880);
        EnableCharacterCollision(46675880);
    } 

    if (EventFlag(64009)) {
        EnableCharacter(46670890);
        EnableCharacterCollision(46670890);
        EnableCharacter(46675890);
        EnableCharacterCollision(46675890);
    }
    
    $InitializeCommonEvent(0, 90015000, 0, 46670800, 904810600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46670800, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46670800, 46670800, 1020, 920610, 11290, 904810600, 46670800);
    $InitializeCommonEvent(0, 9005810, 46670800, 46670500, 46671500, 5);
    $InitializeCommonEvent(0, 90015005, 46671500, 46672800, 46670800);
    $InitializeCommonEvent(0, 90015000, 0, 46670810, 904130730, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46670810, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46670810, 46670810, 1020, 920610, 11290, 904130730, 46670810);
    $InitializeCommonEvent(0, 9005810, 46670810, 46670500, 46671500, 5);
    $InitializeCommonEvent(0, 90015005, 46671500, 46672800, 46670810);
    $InitializeCommonEvent(0, 90015000, 0, 46670820, 904130720, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46670820, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46670820, 46670820, 1020, 920610, 11290, 904130720, 46670820);
    $InitializeCommonEvent(0, 9005810, 46670820, 46670500, 46671500, 5);
    $InitializeCommonEvent(0, 90015005, 46671500, 46672800, 46670820);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46670800, 920610, 46670800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46670810, 920610, 46670810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46670820, 920610, 46670820, 0, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46670800);
    $InitializeCommonEvent(0, 90015016, 46670800);
    $InitializeCommonEvent(0, 90015015, 46670810);
    $InitializeCommonEvent(0, 90015016, 46670810);
    $InitializeCommonEvent(0, 90015015, 46670820);
    $InitializeCommonEvent(0, 90015016, 46670820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46670800);
        $InitializeCommonEvent(0, 90015468, 46670800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46670810);
        $InitializeCommonEvent(0, 90015468, 46670810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46670820);
        $InitializeCommonEvent(0, 90015468, 46670820, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46670800);
    $InitializeCommonEvent(0, 90015199, 46670810);
    $InitializeCommonEvent(0, 90015199, 46670820);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46672200, Default, function(chrEntityId) {
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
