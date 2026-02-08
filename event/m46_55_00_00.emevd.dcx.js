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
    RandomlySetEventFlagInRange(64000, 64001, ON);
    
    // Disable all the potential character entityids and group entityids. Supports up to 10 variations. Does not need to be edited.
    DisableCharacter(46550800);
    DisableCharacterCollision(46550800);
    DisableCharacter(46555800);
    DisableCharacterCollision(46555800);
    DisableCharacter(46550810);
    DisableCharacterCollision(46550810);
    DisableCharacter(46555810);
    DisableCharacterCollision(46555810);
    DisableCharacter(46550820);
    DisableCharacterCollision(46550820);
    DisableCharacter(46555820);
    DisableCharacterCollision(46555820);
    DisableCharacter(46550830);
    DisableCharacterCollision(46550830);
    DisableCharacter(46555830);
    DisableCharacterCollision(46555830);
    DisableCharacter(46550840);
    DisableCharacterCollision(46550840);
    DisableCharacter(46555840);
    DisableCharacterCollision(46555840);
    DisableCharacter(46550850);
    DisableCharacterCollision(46550850);
    DisableCharacter(46555850);
    DisableCharacterCollision(46555850);
    DisableCharacter(46550860);
    DisableCharacterCollision(46550860);
    DisableCharacter(46555860);
    DisableCharacterCollision(46555860);
    DisableCharacter(46550870);
    DisableCharacterCollision(46550870);
    DisableCharacter(46555870);
    DisableCharacterCollision(46555870);
    DisableCharacter(46550880);
    DisableCharacterCollision(46550880);
    DisableCharacter(46555880);
    DisableCharacterCollision(46555880);
    DisableCharacter(46550890);
    DisableCharacterCollision(46550890);
    DisableCharacter(46555890);
    DisableCharacterCollision(46555890);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        EnableCharacter(46550800);
        EnableCharacterCollision(46550800);
        EnableCharacter(46555800);
        EnableCharacterCollision(46555800);
    }
        
    // Roll to decide what Watchdog version
    if (EventFlag(64001)) {
        
        BatchSetEventFlags(64010, 64019, OFF);
        RandomlySetEventFlagInRange(64010, 64012, ON);
        
        if (EventFlag(64010)) {
            EnableCharacter(46550810);
            EnableCharacterCollision(46550810);
            EnableCharacter(46555810);
            EnableCharacterCollision(46555810);
        }
        
        if (EventFlag(64011)) {
            EnableCharacter(46550820);
            EnableCharacterCollision(46550820);
            EnableCharacter(46555820);
            EnableCharacterCollision(46555820);
        }

        if (EventFlag(64012)) {
            EnableCharacter(46550830);
            EnableCharacterCollision(46550830);
            EnableCharacter(46555830);
            EnableCharacterCollision(46555830);
        }
    }

    if (EventFlag(64002)) {
        EnableCharacter(46550840);
        EnableCharacterCollision(46550840);
        EnableCharacter(46555840);
        EnableCharacterCollision(46555840);
    }

    if (EventFlag(64003)) {
        EnableCharacter(46550850);
        EnableCharacterCollision(46550850);
        EnableCharacter(46555850);
        EnableCharacterCollision(46555850);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46550860);
        EnableCharacterCollision(46550860);
        EnableCharacter(46555860);
        EnableCharacterCollision(46555860);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46550870);
        EnableCharacterCollision(46550870);
        EnableCharacter(46555870);
        EnableCharacterCollision(46555870);
    }  
  
    if (EventFlag(64006)) {
        EnableCharacter(46550880);
        EnableCharacterCollision(46550880);
        EnableCharacter(46555880);
        EnableCharacterCollision(46555880);
    } 

    if (EventFlag(64007)) {
        EnableCharacter(46550890);
        EnableCharacterCollision(46550890);
        EnableCharacter(46555890);
        EnableCharacterCollision(46555890);
    }
    
    $InitializeCommonEvent(0, 90015000, 0, 46550800, 903460500, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46550800, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46550800, 46550800, 1020, 920910, 11290, 903460500, 46550800);
    $InitializeCommonEvent(0, 9005810, 46550800, 46550500, 46551500, 5);
    $InitializeCommonEvent(0, 90015005, 46551500, 46552800, 46550800);
    $InitializeCommonEvent(0, 90015000, 0, 46550810, 904260307, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46550810, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46550810, 46550810, 1020, 920910, 11290, 904260307, 46550810);
    $InitializeCommonEvent(0, 9005810, 46550810, 46550500, 46551500, 5);
    $InitializeCommonEvent(0, 90015005, 46551500, 46552800, 46550810);
    $InitializeCommonEvent(0, 90015000, 0, 46550820, 904260307, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46550820, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46550820, 46550820, 1020, 920910, 11290, 904260307, 46550820);
    $InitializeCommonEvent(0, 9005810, 46550820, 46550500, 46551500, 5);
    $InitializeCommonEvent(0, 90015005, 46551500, 46552800, 46550820);
    $InitializeCommonEvent(0, 90015000, 0, 46550830, 904260307, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46550830, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46550830, 46550830, 1020, 920910, 11290, 904260307, 46550830);
    $InitializeCommonEvent(0, 9005810, 46550830, 46550500, 46551500, 5);
    $InitializeCommonEvent(0, 90015005, 46551500, 46552800, 46550830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46550800, 920910, 46550800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46550800, 920910, 46550810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46550800, 920910, 46550820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46550800, 920910, 46550830, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46550800);
    $InitializeCommonEvent(0, 90015016, 46550800);
    $InitializeCommonEvent(0, 90015015, 46550810);
    $InitializeCommonEvent(0, 90015016, 46550810);
    $InitializeCommonEvent(0, 90015015, 46550820);
    $InitializeCommonEvent(0, 90015016, 46550820);
    $InitializeCommonEvent(0, 90015015, 46550830);
    $InitializeCommonEvent(0, 90015016, 46550830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46550800);
        $InitializeCommonEvent(0, 90015468, 46550800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46550810);
        $InitializeCommonEvent(0, 90015468, 46550810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46550820);
        $InitializeCommonEvent(0, 90015468, 46550820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46550830);
        $InitializeCommonEvent(0, 90015468, 46550830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46550800);
    $InitializeCommonEvent(0, 90015199, 46550810);
    $InitializeCommonEvent(0, 90015199, 46550820);
    $InitializeCommonEvent(0, 90015199, 46550830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46552200, Default, function(chrEntityId) {
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
