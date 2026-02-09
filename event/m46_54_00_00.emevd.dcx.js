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
    RandomlySetNetworkconnectedEventFlagInRange(64000, 64003, ON);
    
    // Disable all the potential character entityids and group entityids. Supports up to 10 variations. Does not need to be edited.
    DisableCharacter(46540800);
    DisableCharacterCollision(46540800);
    DisableCharacter(46545800);
    DisableCharacterCollision(46545800);
    DisableCharacter(46540810);
    DisableCharacterCollision(46540810);
    DisableCharacter(46545810);
    DisableCharacterCollision(46545810);
    DisableCharacter(46540820);
    DisableCharacterCollision(46540820);
    DisableCharacter(46545820);
    DisableCharacterCollision(46545820);
    DisableCharacter(46540830);
    DisableCharacterCollision(46540830);
    DisableCharacter(46545830);
    DisableCharacterCollision(46545830);
    DisableCharacter(46540840);
    DisableCharacterCollision(46540840);
    DisableCharacter(46545840);
    DisableCharacterCollision(46545840);
    DisableCharacter(46540850);
    DisableCharacterCollision(46540850);
    DisableCharacter(46545850);
    DisableCharacterCollision(46545850);
    DisableCharacter(46540860);
    DisableCharacterCollision(46540860);
    DisableCharacter(46545860);
    DisableCharacterCollision(46545860);
    DisableCharacter(46540870);
    DisableCharacterCollision(46540870);
    DisableCharacter(46545870);
    DisableCharacterCollision(46545870);
    DisableCharacter(46540880);
    DisableCharacterCollision(46540880);
    DisableCharacter(46545880);
    DisableCharacterCollision(46545880);
    DisableCharacter(46540890);
    DisableCharacterCollision(46540890);
    DisableCharacter(46545890);
    DisableCharacterCollision(46545890);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        EnableCharacter(46540800);
        EnableCharacterCollision(46540800);
        EnableCharacter(46545800);
        EnableCharacterCollision(46545800);
    }
    if (EventFlag(64001)) {
        EnableCharacter(46540810);
        EnableCharacterCollision(46540810);
        EnableCharacter(46545810);
        EnableCharacterCollision(46545810);
    }
    if (EventFlag(64002)) {
        EnableCharacter(46540820);
        EnableCharacterCollision(46540820);
        EnableCharacter(46545820);
        EnableCharacterCollision(46545820);
    }
    if (EventFlag(64003)) {
        EnableCharacter(46540830);
        EnableCharacterCollision(46540830);
        EnableCharacter(46545830);
        EnableCharacterCollision(46545830);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46540840);
        EnableCharacterCollision(46540840);
        EnableCharacter(46545840);
        EnableCharacterCollision(46545840);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46540850);
        EnableCharacterCollision(46540850);
        EnableCharacter(46545850);
        EnableCharacterCollision(46545850);
    }

    if (EventFlag(64006)) {
        EnableCharacter(46540860);
        EnableCharacterCollision(46540860);
        EnableCharacter(46545860);
        EnableCharacterCollision(46545860);
    }

    if (EventFlag(64007)) {
        EnableCharacter(46540870);
        EnableCharacterCollision(46540870);
        EnableCharacter(46545870);
        EnableCharacterCollision(46545870);
    }  
  
    if (EventFlag(64008)) {
        EnableCharacter(46540880);
        EnableCharacterCollision(46540880);
        EnableCharacter(46545880);
        EnableCharacterCollision(46545880);
    } 

    if (EventFlag(64009)) {
        EnableCharacter(46540890);
        EnableCharacterCollision(46540890);
        EnableCharacter(46545890);
        EnableCharacterCollision(46545890);
    }
    
    $InitializeCommonEvent(0, 90015000, 0, 46540800, 904510601, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46540800, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46540800, 46540800, 1020, 920210, 11290, 904510601, 46540800);
    $InitializeCommonEvent(0, 9005810, 46540800, 46540500, 46541500, 5);
    $InitializeCommonEvent(0, 90015005, 46541500, 46542800, 46540800);
    $InitializeCommonEvent(0, 90015000, 0, 46540810, 904503600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46540810, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46540810, 46540810, 1020, 920210, 11290, 904503600, 46540810);
    $InitializeCommonEvent(0, 9005810, 46540810, 46540500, 46541500, 5);
    $InitializeCommonEvent(0, 90015005, 46541500, 46542800, 46540810);
    $InitializeCommonEvent(0, 90015000, 0, 46540820, 904501600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46540820, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46540820, 46540820, 1020, 920210, 11290, 904501600, 46540820);
    $InitializeCommonEvent(0, 9005810, 46540820, 46540500, 46541500, 5);
    $InitializeCommonEvent(0, 90015005, 46541500, 46542800, 46540820);
    $InitializeCommonEvent(0, 90015000, 0, 46540830, 904650600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46540830, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46540830, 46540830, 1020, 920210, 11290, 904650600, 46540830);
    $InitializeCommonEvent(0, 9005810, 46540830, 46540500, 46541500, 5);
    $InitializeCommonEvent(0, 90015005, 46541500, 46542800, 46540830);
    GotoIf(S0, Signed(13801) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46540800, 920210, 46540800, 13801, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46540810, 920210, 46540810, 13801, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46540820, 920210, 46540820, 13801, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46540830, 920210, 46540830, 13801, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46540800);
    $InitializeCommonEvent(0, 90015016, 46540800);
    $InitializeCommonEvent(0, 90015015, 46540810);
    $InitializeCommonEvent(0, 90015016, 46540810);
    $InitializeCommonEvent(0, 90015015, 46540820);
    $InitializeCommonEvent(0, 90015016, 46540820);
    $InitializeCommonEvent(0, 90015015, 46540830);
    $InitializeCommonEvent(0, 90015016, 46540830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46540800);
        $InitializeCommonEvent(0, 90015468, 46540800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46540810);
        $InitializeCommonEvent(0, 90015468, 46540810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46540820);
        $InitializeCommonEvent(0, 90015468, 46540820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46540830);
        $InitializeCommonEvent(0, 90015468, 46540830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46540800);
    $InitializeCommonEvent(0, 90015199, 46540810);
    $InitializeCommonEvent(0, 90015199, 46540820);
    $InitializeCommonEvent(0, 90015199, 46540830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46542200, Default, function(chrEntityId) {
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

$Event(46542500, Restart, function(chrEntityId, spEffectId, eventFlagId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    SetEventFlagID(eventFlagId, ON);
});
