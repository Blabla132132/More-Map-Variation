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
    DisableCharacter(46650800);
    DisableCharacterCollision(46650800);
    DisableCharacter(46655800);
    DisableCharacterCollision(46655800);
    DisableCharacter(46650810);
    DisableCharacterCollision(46650810);
    DisableCharacter(46655810);
    DisableCharacterCollision(46655810);
    DisableCharacter(46650820);
    DisableCharacterCollision(46650820);
    DisableCharacter(46655820);
    DisableCharacterCollision(46655820);
    DisableCharacter(46650830);
    DisableCharacterCollision(46650830);
    DisableCharacter(46655830);
    DisableCharacterCollision(46655830);
    DisableCharacter(46650840);
    DisableCharacterCollision(46650840);
    DisableCharacter(46655840);
    DisableCharacterCollision(46655840);
    DisableCharacter(46650850);
    DisableCharacterCollision(46650850);
    DisableCharacter(46655850);
    DisableCharacterCollision(46655850);
    DisableCharacter(46650860);
    DisableCharacterCollision(46650860);
    DisableCharacter(46655860);
    DisableCharacterCollision(46655860);
    DisableCharacter(46650870);
    DisableCharacterCollision(46650870);
    DisableCharacter(46655870);
    DisableCharacterCollision(46655870);
    DisableCharacter(46650880);
    DisableCharacterCollision(46650880);
    DisableCharacter(46655880);
    DisableCharacterCollision(46655880);
    DisableCharacter(46650890);
    DisableCharacterCollision(46650890);
    DisableCharacter(46655890);
    DisableCharacterCollision(46655890);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        EnableCharacter(46650800);
        EnableCharacterCollision(46650800);
        EnableCharacter(46655800);
        EnableCharacterCollision(46655800);
    }
    if (EventFlag(64001)) {
        EnableCharacter(46650810);
        EnableCharacterCollision(46650810);
        EnableCharacter(46655810);
        EnableCharacterCollision(46655810);
    }
    if (EventFlag(64002)) {
        EnableCharacter(46650820);
        EnableCharacterCollision(46650820);
        EnableCharacter(46655820);
        EnableCharacterCollision(46655820);
    }
    if (EventFlag(64003)) {
        EnableCharacter(46650830);
        EnableCharacterCollision(46650830);
        EnableCharacter(46655830);
        EnableCharacterCollision(46655830);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46650840);
        EnableCharacterCollision(46650840);
        EnableCharacter(46655840);
        EnableCharacterCollision(46655840);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46650850);
        EnableCharacterCollision(46650850);
        EnableCharacter(46655850);
        EnableCharacterCollision(46655850);
    }

    if (EventFlag(64006)) {
        EnableCharacter(46650860);
        EnableCharacterCollision(46650860);
        EnableCharacter(46655860);
        EnableCharacterCollision(46655860);
    }

    if (EventFlag(64007)) {
        EnableCharacter(46650870);
        EnableCharacterCollision(46650870);
        EnableCharacter(46655870);
        EnableCharacterCollision(46655870);
    }  
  
    if (EventFlag(64008)) {
        EnableCharacter(46650880);
        EnableCharacterCollision(46650880);
        EnableCharacter(46655880);
        EnableCharacterCollision(46655880);
    } 

    if (EventFlag(64009)) {
        EnableCharacter(46650890);
        EnableCharacterCollision(46650890);
        EnableCharacter(46655890);
        EnableCharacterCollision(46655890);
    }
    
    $InitializeCommonEvent(0, 90015000, 0, 46650800, 903800710, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46650800, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46650800, 46650800, 1020, 920910, 11290, 904690000, 46650800);
    $InitializeCommonEvent(0, 9005810, 46650800, 46650500, 46651500, 5);
    $InitializeCommonEvent(0, 90015005, 46651500, 46652800, 46650800);
    $InitializeCommonEvent(0, 90015000, 0, 46650810, 903800710, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46650810, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46650810, 46650810, 1020, 920910, 11290, 904690000, 46650810);
    $InitializeCommonEvent(0, 9005810, 46650810, 46650500, 46651500, 5);
    $InitializeCommonEvent(0, 90015005, 46651500, 46652800, 46650810);
    $InitializeCommonEvent(0, 90015000, 0, 46650820, 903400301, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46650820, 30, 920910, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46650820, 46650820, 1020, 920910, 11290, 904690000, 46650820);
    $InitializeCommonEvent(0, 9005810, 46650820, 46650500, 46651500, 5);
    $InitializeCommonEvent(0, 90015005, 46651500, 46652800, 46650820);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46650800, 920910, 46650800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46650800, 920910, 46650810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46650800, 920910, 46650820, 0, 0);
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46650800);
    $InitializeCommonEvent(0, 90015016, 46650800);
    $InitializeCommonEvent(0, 90015015, 46650810);
    $InitializeCommonEvent(0, 90015016, 46650810);
    $InitializeCommonEvent(0, 90015015, 46650820);
    $InitializeCommonEvent(0, 90015016, 46650820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46650800);
        $InitializeCommonEvent(0, 90015468, 46650800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46650810);
        $InitializeCommonEvent(0, 90015468, 46650810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46650820);
        $InitializeCommonEvent(0, 90015468, 46650820, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46650800);
    $InitializeCommonEvent(0, 90015199, 46650810);
    $InitializeCommonEvent(0, 90015199, 46650820);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46652200, Default, function(chrEntityId) {
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
