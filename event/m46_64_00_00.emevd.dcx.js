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
    DisableCharacter(46640800);
    DisableCharacterCollision(46640800);
    DisableCharacter(46645800);
    DisableCharacterCollision(46645800);
    DisableCharacter(46640810);
    DisableCharacterCollision(46640810);
    DisableCharacter(46645810);
    DisableCharacterCollision(46645810);
    DisableCharacter(46640820);
    DisableCharacterCollision(46640820);
    DisableCharacter(46645820);
    DisableCharacterCollision(46645820);
    DisableCharacter(46640830);
    DisableCharacterCollision(46640830);
    DisableCharacter(46645830);
    DisableCharacterCollision(46645830);
    DisableCharacter(46640840);
    DisableCharacterCollision(46640840);
    DisableCharacter(46645840);
    DisableCharacterCollision(46645840);
    DisableCharacter(46640850);
    DisableCharacterCollision(46640850);
    DisableCharacter(46645850);
    DisableCharacterCollision(46645850);
    DisableCharacter(46640860);
    DisableCharacterCollision(46640860);
    DisableCharacter(46645860);
    DisableCharacterCollision(46645860);
    DisableCharacter(46640870);
    DisableCharacterCollision(46640870);
    DisableCharacter(46645870);
    DisableCharacterCollision(46645870);
    DisableCharacter(46640880);
    DisableCharacterCollision(46640880);
    DisableCharacter(46645880);
    DisableCharacterCollision(46645880);
    DisableCharacter(46640890);
    DisableCharacterCollision(46640890);
    DisableCharacter(46645890);
    DisableCharacterCollision(46645890);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        EnableCharacter(46640800);
        EnableCharacterCollision(46640800);
        EnableCharacter(46645800);
        EnableCharacterCollision(46645800);
    }
    if (EventFlag(64001)) {
        EnableCharacter(46640810);
        EnableCharacterCollision(46640810);
        EnableCharacter(46645810);
        EnableCharacterCollision(46645810);
    }
    if (EventFlag(64002)) {
        EnableCharacter(46640820);
        EnableCharacterCollision(46640820);
        EnableCharacter(46645820);
        EnableCharacterCollision(46645820);
    }
    if (EventFlag(64003)) {
        EnableCharacter(46640830);
        EnableCharacterCollision(46640830);
        EnableCharacter(46645830);
        EnableCharacterCollision(46645830);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46640840);
        EnableCharacterCollision(46640840);
        EnableCharacter(46645840);
        EnableCharacterCollision(46645840);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46640850);
        EnableCharacterCollision(46640850);
        EnableCharacter(46645850);
        EnableCharacterCollision(46645850);
    }

    if (EventFlag(64006)) {
        EnableCharacter(46640860);
        EnableCharacterCollision(46640860);
        EnableCharacter(46645860);
        EnableCharacterCollision(46645860);
    }

    if (EventFlag(64007)) {
        EnableCharacter(46640870);
        EnableCharacterCollision(46640870);
        EnableCharacter(46645870);
        EnableCharacterCollision(46645870);
    }  
  
    if (EventFlag(64008)) {
        EnableCharacter(46640880);
        EnableCharacterCollision(46640880);
        EnableCharacter(46645880);
        EnableCharacterCollision(46645880);
    } 

    if (EventFlag(64009)) {
        EnableCharacter(46640890);
        EnableCharacterCollision(46640890);
        EnableCharacter(46645890);
        EnableCharacterCollision(46645890);
    }
    
    $InitializeCommonEvent(0, 90015000, 0, 46640800, 904810600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46640800, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46640800, 46640800, 1020, 920610, 11290, 904810600, 46640800);
    $InitializeCommonEvent(0, 9005810, 46640800, 46640500, 46641500, 5);
    $InitializeCommonEvent(0, 90015005, 46641500, 46642800, 46640800);
    $InitializeCommonEvent(0, 90015000, 0, 46640810, 904811000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46640810, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46640810, 46640810, 1020, 920610, 11290, 904810600, 46640810);
    $InitializeCommonEvent(0, 9005810, 46640810, 46640500, 46641500, 5);
    $InitializeCommonEvent(0, 90015005, 46641500, 46642800, 46640810);
    $InitializeCommonEvent(0, 90015000, 0, 46640820, 904580600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46640820, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46640820, 46640820, 1020, 920610, 11290, 904810600, 46640820);
    $InitializeCommonEvent(0, 9005810, 46640820, 46640500, 46641500, 5);
    $InitializeCommonEvent(0, 90015005, 46641500, 46642800, 46640820);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46640800, 920610, 46640800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46640810, 920610, 46640810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46640820, 920610, 46640820, 0, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46640800);
    $InitializeCommonEvent(0, 90015016, 46640800);
    $InitializeCommonEvent(0, 90015015, 46640810);
    $InitializeCommonEvent(0, 90015016, 46640810);
    $InitializeCommonEvent(0, 90015015, 46640820);
    $InitializeCommonEvent(0, 90015016, 46640820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46640800);
        $InitializeCommonEvent(0, 90015468, 46640800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46640810);
        $InitializeCommonEvent(0, 90015468, 46640810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46640820);
        $InitializeCommonEvent(0, 90015468, 46640820, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46640800);
    $InitializeCommonEvent(0, 90015199, 46640810);
    $InitializeCommonEvent(0, 90015199, 46640820);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46642200, Default, function(chrEntityId) {
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


