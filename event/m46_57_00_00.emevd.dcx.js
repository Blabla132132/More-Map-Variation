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
    RandomlySetEventFlagInRange(64000, 64002, ON);
    
    // Disable all the potential character entityids and group entityids. Supports up to 10 variations. Does not need to be edited.
    DisableCharacter(46570800);
    DisableCharacterCollision(46570800);
    DisableCharacter(46575800);
    DisableCharacterCollision(46575800);
    DisableCharacter(46570810);
    DisableCharacterCollision(46570810);
    DisableCharacter(46575810);
    DisableCharacterCollision(46575810);
    DisableCharacter(46570820);
    DisableCharacterCollision(46570820);
    DisableCharacter(46575820);
    DisableCharacterCollision(46575820);
    // Disable Night's Cavalry steed
    DisableCharacter(46570821);
    DisableCharacterCollision(46570821);
    DisableCharacter(46570830);
    DisableCharacterCollision(46570830);
    DisableCharacter(46575830);
    DisableCharacterCollision(46575830);
    DisableCharacter(46570840);
    DisableCharacterCollision(46570840);
    DisableCharacter(46575840);
    DisableCharacterCollision(46575840);
    DisableCharacter(46570850);
    DisableCharacterCollision(46570850);
    DisableCharacter(46575850);
    DisableCharacterCollision(46575850);
    DisableCharacter(46570860);
    DisableCharacterCollision(46570860);
    DisableCharacter(46575860);
    DisableCharacterCollision(46575860);
    DisableCharacter(46570870);
    DisableCharacterCollision(46570870);
    DisableCharacter(46575870);
    DisableCharacterCollision(46575870);
    DisableCharacter(46570880);
    DisableCharacterCollision(46570880);
    DisableCharacter(46575880);
    DisableCharacterCollision(46575880);
    DisableCharacter(46570890);
    DisableCharacterCollision(46570890);
    DisableCharacter(46575890);
    DisableCharacterCollision(46575890);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        EnableCharacter(46570800);
        EnableCharacterCollision(46570800);
        EnableCharacter(46575800);
        EnableCharacterCollision(46575800);
    }
    if (EventFlag(64001)) {
        EnableCharacter(46570810);
        EnableCharacterCollision(46570810);
        EnableCharacter(46575810);
        EnableCharacterCollision(46575810);
    }
    if (EventFlag(64002)) {
        EnableCharacter(46570820);
        EnableCharacterCollision(46570820);
        EnableCharacter(46575820);
        EnableCharacterCollision(46575820);
        // Enable Night's Cavalry steed
        EnableCharacter(46570821);
        EnableCharacterCollision(46570821);
    }
    if (EventFlag(64003)) {
        EnableCharacter(46570830);
        EnableCharacterCollision(46570830);
        EnableCharacter(46575830);
        EnableCharacterCollision(46575830);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46570840);
        EnableCharacterCollision(46570840);
        EnableCharacter(46575840);
        EnableCharacterCollision(46575840);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46570850);
        EnableCharacterCollision(46570850);
        EnableCharacter(46575850);
        EnableCharacterCollision(46575850);
    }

    if (EventFlag(64006)) {
        EnableCharacter(46570860);
        EnableCharacterCollision(46570860);
        EnableCharacter(46575860);
        EnableCharacterCollision(46575860);
    }

    if (EventFlag(64007)) {
        EnableCharacter(46570870);
        EnableCharacterCollision(46570870);
        EnableCharacter(46575870);
        EnableCharacterCollision(46575870);
    }  
  
    if (EventFlag(64008)) {
        EnableCharacter(46570880);
        EnableCharacterCollision(46570880);
        EnableCharacter(46575880);
        EnableCharacterCollision(46575880);
    } 

    if (EventFlag(64009)) {
        EnableCharacter(46570890);
        EnableCharacterCollision(46570890);
        EnableCharacter(46575890);
        EnableCharacterCollision(46575890);
    }
    
    $InitializeCommonEvent(0, 90015000, 0, 46570800, 905011000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46570800, 30, 950010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46570800, 46570800, 1020, 950010, 11290, 905011000, 46570800);
    $InitializeCommonEvent(0, 9005810, 46570800, 46570500, 46571500, 5);
    $InitializeCommonEvent(0, 90015005, 46571500, 46572800, 46570800);
    $InitializeCommonEvent(0, 90015000, 0, 46570810, 904601000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46570810, 30, 950010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46570810, 46570810, 1020, 950010, 11290, 904601000, 46570810);
    $InitializeCommonEvent(0, 9005810, 46570810, 46570500, 46571500, 5);
    $InitializeCommonEvent(0, 90015005, 46571500, 46572800, 46570810);
    $InitializeCommonEvent(0, 90015000, 0, 46570820, 903150600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46570820, 30, 950010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46570820, 46570820, 1020, 950010, 11290, 903150600, 46570820);
    $InitializeCommonEvent(0, 9005810, 46570820, 46570500, 46571500, 5);
    $InitializeCommonEvent(0, 90015005, 46571500, 46572800, 46570820);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46570800, 950010, 46570800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46570800, 950010, 46570810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46570800, 950010, 46570820, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46570800);
    $InitializeCommonEvent(0, 90015016, 46570800);
    $InitializeCommonEvent(0, 90015015, 46570810);
    $InitializeCommonEvent(0, 90015016, 46570810);
    $InitializeCommonEvent(0, 90015015, 46570820);
    $InitializeCommonEvent(0, 90015016, 46570820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46570800);
        $InitializeCommonEvent(0, 90015468, 46570800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46570810);
        $InitializeCommonEvent(0, 90015468, 46570810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46570820);
        $InitializeCommonEvent(0, 90015468, 46570820, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46570800);
    $InitializeCommonEvent(0, 90015199, 46570810);
    $InitializeCommonEvent(0, 90015199, 46570820);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46572200, Default, function(chrEntityId) {
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
