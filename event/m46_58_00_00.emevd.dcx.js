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
    BatchSetEventFlags(64090, 64099, OFF);
    
    // Set a random flag true which rolls what boss to spawn. Depends on amount of bosses in map file.
    // EDIT THIS WHEN ADDING/REMOVING BOSS
    if (HasMultiplayerState(MultiplayerState.Host))    
        RandomlySetNetworkconnectedEventFlagInRange(64090, 64093, ON);
    
    // Disable all the potential character entityids and group entityids. Supports up to 10 variations. Does not need to be edited.
    DisableCharacter(46580800);
    DisableCharacterCollision(46580800);
    DisableCharacter(46585800);
    DisableCharacterCollision(46585800);
    DisableCharacter(46580810);
    DisableCharacterCollision(46580810);
    DisableCharacter(46585810);
    DisableCharacterCollision(46585810);
    DisableCharacter(46580820);
    DisableCharacterCollision(46580820);
    DisableCharacter(46585820);
    DisableCharacterCollision(46585820);
    DisableCharacter(46580830);
    DisableCharacterCollision(46580830);
    DisableCharacter(46585830);
    DisableCharacterCollision(46585830);
    DisableCharacter(46580840);
    DisableCharacterCollision(46580840);
    DisableCharacter(46585840);
    DisableCharacterCollision(46585840);
    DisableCharacter(46580850);
    DisableCharacterCollision(46580850);
    DisableCharacter(46585850);
    DisableCharacterCollision(46585850);
    DisableCharacter(46580860);
    DisableCharacterCollision(46580860);
    DisableCharacter(46585860);
    DisableCharacterCollision(46585860);
    DisableCharacter(46580870);
    DisableCharacterCollision(46580870);
    DisableCharacter(46585870);
    DisableCharacterCollision(46585870);
    DisableCharacter(46580880);
    DisableCharacterCollision(46580880);
    DisableCharacter(46585880);
    DisableCharacterCollision(46585880);
    DisableCharacter(46580890);
    DisableCharacterCollision(46580890);
    DisableCharacter(46585890);
    DisableCharacterCollision(46585890);

WaitFor(
    EventFlag(64090) || EventFlag(64091) || EventFlag(64092) || EventFlag(64093) || EventFlag(64094) ||
    EventFlag(64095) || EventFlag(64096) || EventFlag(64097) || EventFlag(64098) || EventFlag(64099)
);

// Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
if (EventFlag(64090)) {
    EnableCharacter(46580800);
    EnableCharacterCollision(46580800);
    EnableCharacter(46585800);
    EnableCharacterCollision(46585800);
}
if (EventFlag(64091)) {
    EnableCharacter(46580810);
    EnableCharacterCollision(46580810);
    EnableCharacter(46585810);
    EnableCharacterCollision(46585810);
}
if (EventFlag(64092)) {
    EnableCharacter(46580820);
    EnableCharacterCollision(46580820);
    EnableCharacter(46585820);
    EnableCharacterCollision(46585820);
}
if (EventFlag(64093)) {
    EnableCharacter(46580830);
    EnableCharacterCollision(46580830);
    EnableCharacter(46585830);
    EnableCharacterCollision(46585830);
}

if (EventFlag(64094)) {
    EnableCharacter(46580840);
    EnableCharacterCollision(46580840);
    EnableCharacter(46585840);
    EnableCharacterCollision(46585840);
}

if (EventFlag(64095)) {
    EnableCharacter(46580850);
    EnableCharacterCollision(46580850);
    EnableCharacter(46585850);
    EnableCharacterCollision(46585850);
}

if (EventFlag(64096)) {
    EnableCharacter(46580860);
    EnableCharacterCollision(46580860);
    EnableCharacter(46585860);
    EnableCharacterCollision(46585860);
}

if (EventFlag(64097)) {
    EnableCharacter(46580870);
    EnableCharacterCollision(46580870);
    EnableCharacter(46585870);
    EnableCharacterCollision(46585870);
}  

if (EventFlag(64098)) {
    EnableCharacter(46580880);
    EnableCharacterCollision(46580880);
    EnableCharacter(46585880);
    EnableCharacterCollision(46585880);
} 

if (EventFlag(64099)) {
    EnableCharacter(46580890);
    EnableCharacterCollision(46580890);
    EnableCharacter(46585890);
    EnableCharacterCollision(46585890);
}
    
    $InitializeCommonEvent(0, 90015000, 0, 46580800, 904500600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46580800, 30, 920310, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46580800, 46580800, 1020, 920310, 11290, 904500600, 46580800);
    $InitializeCommonEvent(0, 9005810, 46580800, 46580500, 46581500, 5);
    $InitializeCommonEvent(0, 90015005, 46581500, 46582800, 46580800);
    $InitializeCommonEvent(0, 90015000, 0, 46580810, 905860000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46580810, 30, 920310, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46580810, 46580810, 1020, 920310, 11290, 905860000, 46580810);
    $InitializeCommonEvent(0, 9005810, 46580810, 46580500, 46581500, 5);
    $InitializeCommonEvent(0, 90015005, 46581500, 46582800, 46580810);
    $InitializeCommonEvent(0, 90015000, 0, 46580820, 904650601, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46580820, 30, 920310, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46580820, 46580820, 1020, 920310, 11290, 904650601, 46580820);
    $InitializeCommonEvent(0, 9005810, 46580820, 46580500, 46581500, 5);
    $InitializeCommonEvent(0, 90015005, 46581500, 46582800, 46580820);
    $InitializeCommonEvent(0, 90015000, 0, 46580830, 904502600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46580830, 30, 920310, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46580830, 46580830, 1020, 920310, 11290, 904502600, 46580830);
    $InitializeCommonEvent(0, 9005810, 46580830, 46580500, 46581500, 5);
    $InitializeCommonEvent(0, 90015005, 46581500, 46582800, 46580830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46580800, 920310, 46580800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46580810, 920310, 46580810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46580820, 920310, 46580820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46580830, 920310, 46580830, 0, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46580800);
    $InitializeCommonEvent(0, 90015016, 46580800);
    $InitializeCommonEvent(0, 90015015, 46580810);
    $InitializeCommonEvent(0, 90015016, 46580810);
    $InitializeCommonEvent(0, 90015015, 46580820);
    $InitializeCommonEvent(0, 90015016, 46580820);
    $InitializeCommonEvent(0, 90015015, 46580830);
    $InitializeCommonEvent(0, 90015016, 46580830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46580800);
        $InitializeCommonEvent(0, 90015468, 46580800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46580810);
        $InitializeCommonEvent(0, 90015468, 46580810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46580820);
        $InitializeCommonEvent(0, 90015468, 46580820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46580830);
        $InitializeCommonEvent(0, 90015468, 46580830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46580800);
    $InitializeCommonEvent(0, 90015199, 46580810);
    $InitializeCommonEvent(0, 90015199, 46580820);
    $InitializeCommonEvent(0, 90015199, 46580830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46582200, Default, function(chrEntityId) {
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
