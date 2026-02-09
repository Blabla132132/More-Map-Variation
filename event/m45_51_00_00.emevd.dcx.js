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
    BatchSetEventFlags(64010, 64019, OFF);
    
    // Set a random flag true which rolls what boss to spawn. Depends on amount of bosses in map file.
    // EDIT THIS WHEN ADDING/REMOVING BOSS
    if (HasMultiplayerState(MultiplayerState.Host))
        RandomlySetNetworkconnectedEventFlagInRange(64010, 64012, ON);
    
    // Disable all the potential character entityids and group entityids. Supports up to 10 variations. Does not need to be edited.
    DisableCharacter(45510800);
    DisableCharacterCollision(45510800);
    DisableCharacter(45515800);
    DisableCharacterCollision(45515800);
    DisableCharacter(45510810);
    DisableCharacterCollision(45510810);
    DisableCharacter(45515810);
    DisableCharacterCollision(45515810);
    DisableCharacter(45510820);
    DisableCharacterCollision(45510820);
    DisableCharacter(45515820);
    DisableCharacterCollision(45515820);
    DisableCharacter(45510830);
    DisableCharacterCollision(45510830);
    DisableCharacter(45515830);
    DisableCharacterCollision(45515830);
    DisableCharacter(45510840);
    DisableCharacterCollision(45510840);
    DisableCharacter(45515840);
    DisableCharacterCollision(45515840);
    DisableCharacter(45510850);
    DisableCharacterCollision(45510850);
    DisableCharacter(45515850);
    DisableCharacterCollision(45515850);
    DisableCharacter(45510860);
    DisableCharacterCollision(45510860);
    DisableCharacter(45515860);
    DisableCharacterCollision(45515860);
    DisableCharacter(45510870);
    DisableCharacterCollision(45510870);
    DisableCharacter(45515870);
    DisableCharacterCollision(45515870);
    DisableCharacter(45510880);
    DisableCharacterCollision(45510880);
    DisableCharacter(45515880);
    DisableCharacterCollision(45515880);
    DisableCharacter(45510890);
    DisableCharacterCollision(45510890);
    DisableCharacter(45515890);
    DisableCharacterCollision(45515890);
    
    WaitFor(
    EventFlag(64010) || EventFlag(64011) || EventFlag(64012) || EventFlag(64013) || EventFlag(64014) ||
    EventFlag(64015) || EventFlag(64016) || EventFlag(64017) || EventFlag(64018) || EventFlag(64019)
);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
if (EventFlag(64010)) {
    EnableCharacter(45510800);
    EnableCharacterCollision(45510800);
    EnableCharacter(45515800);
    EnableCharacterCollision(45515800);
}
if (EventFlag(64011)) {
    EnableCharacter(45510810);
    EnableCharacterCollision(45510810);
    EnableCharacter(45515810);
    EnableCharacterCollision(45515810);
}
if (EventFlag(64012)) {
    EnableCharacter(45510820);
    EnableCharacterCollision(45510820);
    EnableCharacter(45515820);
    EnableCharacterCollision(45515820);
}
if (EventFlag(64013)) {
    EnableCharacter(45510830);
    EnableCharacterCollision(45510830);
    EnableCharacter(45515830);
    EnableCharacterCollision(45515830);
}

if (EventFlag(64014)) {
    EnableCharacter(45510840);
    EnableCharacterCollision(45510840);
    EnableCharacter(45515840);
    EnableCharacterCollision(45515840);
}

if (EventFlag(64015)) {
    EnableCharacter(45510850);
    EnableCharacterCollision(45510850);
    EnableCharacter(45515850);
    EnableCharacterCollision(45515850);
}

if (EventFlag(64016)) {
    EnableCharacter(45510860);
    EnableCharacterCollision(45510860);
    EnableCharacter(45515860);
    EnableCharacterCollision(45515860);
}

if (EventFlag(64017)) {
    EnableCharacter(45510870);
    EnableCharacterCollision(45510870);
    EnableCharacter(45515870);
    EnableCharacterCollision(45515870);
}

if (EventFlag(64018)) {
    EnableCharacter(45510880);
    EnableCharacterCollision(45510880);
    EnableCharacter(45515880);
    EnableCharacterCollision(45515880);
}

if (EventFlag(64019)) {
    EnableCharacter(45510890);
    EnableCharacterCollision(45510890);
    EnableCharacter(45515890);
    EnableCharacterCollision(45515890);
}
    
    $InitializeCommonEvent(0, 90015000, 0, 45510800, 902100600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 45510800, 30, 921510, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 45510800, 45510800, 1020, 921510, 11290, 902100600, 45510800);
    $InitializeCommonEvent(0, 9005810, 45510800, 45510500, 45511500, 5);
    $InitializeCommonEvent(0, 90015005, 45511500, 45512800, 45510800);
    $InitializeCommonEvent(0, 90015000, 0, 45510810, 912000060, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 45510810, 30, 921510, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 45510810, 45510810, 1020, 921510, 11290, 912000060, 45510810);
    $InitializeCommonEvent(0, 9005810, 45510810, 45510500, 45511500, 5);
    $InitializeCommonEvent(0, 90015005, 45511500, 45512800, 45510810);
    $InitializeCommonEvent(0, 90015000, 0, 45510820, 903400301, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 45510820, 30, 921510, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 45510820, 45510820, 1020, 921510, 11290, 903400301, 45510820);
    $InitializeCommonEvent(0, 9005810, 45510820, 45510500, 45511500, 5);
    $InitializeCommonEvent(0, 90015005, 45511500, 45512800, 45510820);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 45510800, 921510, 45510800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 45510800, 921510, 45510810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 45510800, 921510, 45510820, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 45510800);
    $InitializeCommonEvent(0, 90015016, 45510800);
    $InitializeCommonEvent(0, 90015015, 45510810);
    $InitializeCommonEvent(0, 90015016, 45510810);
    $InitializeCommonEvent(0, 90015015, 45510820);
    $InitializeCommonEvent(0, 90015016, 45510820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 45510800);
        $InitializeCommonEvent(0, 90015468, 45510800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 45510810);
        $InitializeCommonEvent(0, 90015468, 45510810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 45510820);
        $InitializeCommonEvent(0, 90015468, 45510820, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 45510800);
    $InitializeCommonEvent(0, 90015199, 45510810);
    $InitializeCommonEvent(0, 90015199, 45510820);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(45512200, Default, function(chrEntityId) {
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
