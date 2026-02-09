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
    BatchSetEventFlags(64170, 64179, OFF);
    
    // Set a random flag true which rolls what boss to spawn. Depends on amount of bosses in map file.
    // EDIT THIS WHEN ADDING/REMOVING BOSS
    if (HasMultiplayerState(MultiplayerState.Host))    
        RandomlySetNetworkconnectedEventFlagInRange(64170, 64172, ON);
    
    // Disable all the potential character entityids and group entityids. Supports up to 10 variations. Does not need to be edited.
    DisableCharacter(46680800);
    DisableCharacterCollision(46680800);
    DisableCharacter(46685800);
    DisableCharacterCollision(46685800);
    DisableCharacter(46680810);
    DisableCharacterCollision(46680810);
    DisableCharacter(46685810);
    DisableCharacterCollision(46685810);
    DisableCharacter(46680820);
    DisableCharacterCollision(46680820);
    DisableCharacter(46685820);
    DisableCharacterCollision(46685820);    
    DisableCharacter(46680830);
    DisableCharacterCollision(46680830);
    DisableCharacter(46685830);
    DisableCharacterCollision(46685830);
    DisableCharacter(46680840);
    DisableCharacterCollision(46680840);
    DisableCharacter(46685840);
    DisableCharacterCollision(46685840);
    DisableCharacter(46680850);
    DisableCharacterCollision(46680850);
    DisableCharacter(46685850);
    DisableCharacterCollision(46685850);
    DisableCharacter(46680860);
    DisableCharacterCollision(46680860);
    DisableCharacter(46685860);
    DisableCharacterCollision(46685860);
    DisableCharacter(46680870);
    DisableCharacterCollision(46680870);
    DisableCharacter(46685870);
    DisableCharacterCollision(46685870);
    DisableCharacter(46680880);
    DisableCharacterCollision(46680880);
    DisableCharacter(46685880);
    DisableCharacterCollision(46685880);
    DisableCharacter(46680890);
    DisableCharacterCollision(46680890);
    DisableCharacter(46685890);
    DisableCharacterCollision(46685890);
    
WaitFor(
    EventFlag(64170) || EventFlag(64171) || EventFlag(64172) || EventFlag(64173) || EventFlag(64174) ||
    EventFlag(64175) || EventFlag(64176) || EventFlag(64177) || EventFlag(64178) || EventFlag(64179)
);

// Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
if (EventFlag(64170)) {
    EnableCharacter(46680800);
    EnableCharacterCollision(46680800);
    EnableCharacter(46685800);
    EnableCharacterCollision(46685800);
}
if (EventFlag(64171)) {
    EnableCharacter(46680810);
    EnableCharacterCollision(46680810);
    EnableCharacter(46685810);
    EnableCharacterCollision(46685810);
}
if (EventFlag(64172)) {
    EnableCharacter(46680820);
    EnableCharacterCollision(46680820);
    EnableCharacter(46685820);
    EnableCharacterCollision(46685820);
}
if (EventFlag(64173)) {
    EnableCharacter(46680830);
    EnableCharacterCollision(46680830);
    EnableCharacter(46685830);
    EnableCharacterCollision(46685830);
}

if (EventFlag(64174)) {
    EnableCharacter(46680840);
    EnableCharacterCollision(46680840);
    EnableCharacter(46685840);
    EnableCharacterCollision(46685840);
}

if (EventFlag(64175)) {
    EnableCharacter(46680850);
    EnableCharacterCollision(46680850);
    EnableCharacter(46685850);
    EnableCharacterCollision(46685850);
}

if (EventFlag(64176)) {
    EnableCharacter(46680860);
    EnableCharacterCollision(46680860);
    EnableCharacter(46685860);
    EnableCharacterCollision(46685860);
}

if (EventFlag(64177)) {
    EnableCharacter(46680870);
    EnableCharacterCollision(46680870);
    EnableCharacter(46685870);
    EnableCharacterCollision(46685870);
}

if (EventFlag(64178)) {
    EnableCharacter(46680880);
    EnableCharacterCollision(46680880);
    EnableCharacter(46685880);
    EnableCharacterCollision(46685880);
}

if (EventFlag(64179)) {
    EnableCharacter(46680890);
    EnableCharacterCollision(46680890);
    EnableCharacter(46685890);
    EnableCharacterCollision(46685890);
}
    
    $InitializeCommonEvent(0, 90015000, 0, 46680800, 904910320, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46680800, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46680800, 46680800, 1020, 920910, 11290, 904910320, 46680800);
    $InitializeCommonEvent(0, 9005810, 46680800, 46680500, 46681500, 5);
    $InitializeCommonEvent(0, 90015005, 46681500, 46682800, 46680800);
    $InitializeCommonEvent(0, 90015000, 0, 46680810, 903560000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46680810, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46680810, 46680810, 1020, 920910, 11290, 903560000, 46680810);
    $InitializeCommonEvent(0, 9005810, 46680810, 46680500, 46681500, 5);
    $InitializeCommonEvent(0, 90015005, 46681500, 46682800, 46680810);
    $InitializeCommonEvent(0, 90015000, 0, 46680820, 903570000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46680820, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46680820, 46680820, 1020, 920910, 11290, 903570000, 46680820);
    $InitializeCommonEvent(0, 9005810, 46680820, 46680500, 46681500, 5);
    $InitializeCommonEvent(0, 90015005, 46681500, 46682800, 46680820);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46680800, 920910, 46680800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46680810, 920910, 46680810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46680820, 920910, 46680820, 0, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46680800);
    $InitializeCommonEvent(0, 90015016, 46680800);
    $InitializeCommonEvent(0, 90015015, 46680810);
    $InitializeCommonEvent(0, 90015016, 46680810);
    $InitializeCommonEvent(0, 90015015, 46680820);
    $InitializeCommonEvent(0, 90015016, 46680820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46680800);
        $InitializeCommonEvent(0, 90015468, 46680800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46680810);
        $InitializeCommonEvent(0, 90015468, 46680810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46680820);
        $InitializeCommonEvent(0, 90015468, 46680820, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46680800);
    $InitializeCommonEvent(0, 90015199, 46680810);
    $InitializeCommonEvent(0, 90015199, 46680820);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46682200, Default, function(chrEntityId) {
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
