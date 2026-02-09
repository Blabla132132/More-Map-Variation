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
        RandomlySetNetworkconnectedEventFlagInRange(64000, 64002, ON);
    
    // Disable all the potential character entityids and group entityids. Supports up to 10 variations. Does not need to be edited.
    DisableCharacter(46510800);
    DisableCharacterCollision(46510800);
    DisableCharacter(46515800);
    DisableCharacterCollision(46515800);
    DisableCharacter(46510810);
    DisableCharacterCollision(46510810);
    DisableCharacter(46515810);
    DisableCharacterCollision(46515810);
    DisableCharacter(46510820);
    DisableCharacterCollision(46510820);
    DisableCharacter(46515820);
    DisableCharacterCollision(46515820);
    DisableCharacter(46510830);
    DisableCharacterCollision(46510830);
    DisableCharacter(46515830);
    DisableCharacterCollision(46515830);
    DisableCharacter(46510840);
    DisableCharacterCollision(46510840);
    DisableCharacter(46515840);
    DisableCharacterCollision(46515840);
    DisableCharacter(46510850);
    DisableCharacterCollision(46510850);
    DisableCharacter(46515850);
    DisableCharacterCollision(46515850);
    DisableCharacter(46510860);
    DisableCharacterCollision(46510860);
    DisableCharacter(46515860);
    DisableCharacterCollision(46515860);
    DisableCharacter(46510870);
    DisableCharacterCollision(46510870);
    DisableCharacter(46515870);
    DisableCharacterCollision(46515870);
    DisableCharacter(46510880);
    DisableCharacterCollision(46510880);
    DisableCharacter(46515880);
    DisableCharacterCollision(46515880);
    DisableCharacter(46510890);
    DisableCharacterCollision(46510890);
    DisableCharacter(46515890);
    DisableCharacterCollision(46515890);
    
    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        EnableCharacter(46510800);
        EnableCharacterCollision(46510800);
        EnableCharacter(46515800);
        EnableCharacterCollision(46515800);
    }
    
    // Roll to decide what Miranda Blossom version
    if (EventFlag(64001)) {
        
        BatchSetNetworkconnectedEventFlags(64010, 64019, OFF);
        RandomlySetNetworkconnectedEventFlagInRange(64010, 64013, ON);
        
        if (EventFlag(64010)) {
            EnableCharacter(46510810);
            EnableCharacterCollision(46510810);
            EnableCharacter(46515810);
            EnableCharacterCollision(46515810);
        }
        
        if (EventFlag(64011)) {
            EnableCharacter(46510820);
            EnableCharacterCollision(46510820);
            EnableCharacter(46515820);
            EnableCharacterCollision(46515820);
        }

        if (EventFlag(64012)) {
            EnableCharacter(46510830);
            EnableCharacterCollision(46510830);
            EnableCharacter(46515830);
            EnableCharacterCollision(46515830);
        }

        if (EventFlag(64013)) {
            EnableCharacter(46510840);
            EnableCharacterCollision(46510840);
            EnableCharacter(46515840);
            EnableCharacterCollision(46515840);
        }
    }
    if (EventFlag(64002)) {
        EnableCharacter(46510850);
        EnableCharacterCollision(46510850);
        EnableCharacter(46515850);
        EnableCharacterCollision(46515850);
    }
    if (EventFlag(64003)) {
        EnableCharacter(46510860);
        EnableCharacterCollision(46510860);
        EnableCharacter(46515860);
        EnableCharacterCollision(46515860);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46510870);
        EnableCharacterCollision(46510870);
        EnableCharacter(46515870);
        EnableCharacterCollision(46515870);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46510880);
        EnableCharacterCollision(46510880);
        EnableCharacter(46515880);
        EnableCharacterCollision(46515880);
    }

    if (EventFlag(64006)) {
        EnableCharacter(46510890);
        EnableCharacterCollision(46510890);
        EnableCharacter(46515890);
        EnableCharacterCollision(46515890);
    }
    
    $InitializeCommonEvent(0, 90015000, 0, 46510800, 903181300, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46510800, 30, 921410, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46510800, 46510800, 1020, 921410, 11290, 903181300, 46510800);
    $InitializeCommonEvent(0, 9005810, 46510800, 46510500, 46511500, 5);
    $InitializeCommonEvent(0, 90015005, 46511500, 46512800, 46510800);
    $InitializeCommonEvent(0, 90015000, 0, 46515810, 904480311, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46515810, 30, 921410, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46515810, 46515810, 1020, 921410, 11290, 904480311, 46515810);
    $InitializeCommonEvent(0, 9005810, 46510900, 46510500, 46511500, 5);
    $InitializeCommonEvent(0, 90015005, 46511500, 46512800, 46515810);
    $InitializeCommonEvent(0, 90015000, 0, 46515820, 904480311, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46515820, 30, 921410, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46515820, 46515820, 1020, 921410, 11290, 904480311, 46515820);
    $InitializeCommonEvent(0, 9005810, 46515820, 46510500, 46511500, 5);
    $InitializeCommonEvent(0, 90015005, 46511500, 46512800, 46515820);
    $InitializeCommonEvent(0, 90015000, 0, 46515830, 904480311, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46515830, 30, 921410, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46515830, 46515830, 1020, 921410, 11290, 904480311, 46515830);
    $InitializeCommonEvent(0, 9005810, 46515830, 46510500, 46511500, 5);
    $InitializeCommonEvent(0, 90015005, 46511500, 46512800, 46515830);
    $InitializeCommonEvent(0, 90015000, 0, 46515840, 904480311, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46515840, 30, 921410, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46515840, 46515840, 1020, 921410, 11290, 904480311, 46515840);
    $InitializeCommonEvent(0, 9005810, 46515840, 46510500, 46511500, 5);
    $InitializeCommonEvent(0, 90015005, 46511500, 46512800, 46515840);
    $InitializeCommonEvent(0, 90015000, 0, 46510850, 904130700, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46510850, 30, 921410, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46510850, 46510850, 1020, 921410, 11290, 904130700, 46510850);
    $InitializeCommonEvent(0, 9005810, 46510850, 46510500, 46511500, 5);
    $InitializeCommonEvent(0, 90015005, 46511500, 46512800, 46510850);    
    
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46510800, 921410, 46510800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46510800, 921410, 46515810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46510800, 921410, 46515820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46510800, 921410, 46515830, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46510800, 921410, 46515840, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46510800, 921410, 46510850, 0, 0);    
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46510800);
    $InitializeCommonEvent(0, 90015016, 46510800);
    $InitializeCommonEvent(0, 90015015, 46515810);
    $InitializeCommonEvent(0, 90015016, 46515810);
    $InitializeCommonEvent(0, 90015015, 46515820);
    $InitializeCommonEvent(0, 90015016, 46515820);
    $InitializeCommonEvent(0, 90015015, 46515830);
    $InitializeCommonEvent(0, 90015016, 46515830);
    $InitializeCommonEvent(0, 90015015, 46515840);
    $InitializeCommonEvent(0, 90015016, 46515840);
    $InitializeCommonEvent(0, 90015015, 46510850);
    $InitializeCommonEvent(0, 90015016, 46510850);    
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46510800);
        $InitializeCommonEvent(0, 90015468, 46510800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46515810);
        $InitializeCommonEvent(0, 90015468, 46515810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46515820);
        $InitializeCommonEvent(0, 90015468, 46515820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46515830);
        $InitializeCommonEvent(0, 90015468, 46515830, 8270, 8247);      
        $InitializeCommonEvent(0, 90015071, 46515840);
        $InitializeCommonEvent(0, 90015468, 46515840, 8270, 8247);  
        $InitializeCommonEvent(0, 90015071, 46510850);   
        $InitializeCommonEvent(0, 90015468, 46510850, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46510800);
    $InitializeCommonEvent(0, 90015199, 46515810);
    $InitializeCommonEvent(0, 90015199, 46515820);
    $InitializeCommonEvent(0, 90015199, 46515830);
    $InitializeCommonEvent(0, 90015199, 46515840);
    $InitializeCommonEvent(0, 90015199, 46510850);    
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46512200, Default, function(chrEntityId) {
    EndIf(
        !(EventFlag(7603)
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
