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
    BatchSetNetworkconnectedEventFlags(64000, 64009, OFF);
    
    // Set a random flag true which rolls what boss to spawn. Depends on amount of bosses in map file.
    // EDIT THIS WHEN ADDING/REMOVING BOSS
    RandomlySetNetworkconnectedEventFlagInRange(64000, 64003, ON);
    
    // Disable all the potential character entityids and group entityids. Supports up to 10 variations. Does not need to be edited.
    DisableCharacter(46520800);
    DisableCharacterCollision(46520800);
    DisableCharacter(46525800);
    DisableCharacterCollision(46525800);
    DisableCharacter(46520810);
    DisableCharacterCollision(46520810);
    DisableCharacter(46525810);
    DisableCharacterCollision(46525810);
    DisableCharacter(46520820);
    DisableCharacterCollision(46520820);
    DisableCharacter(46525820);
    DisableCharacterCollision(46525820);
    DisableCharacter(46520830);
    DisableCharacterCollision(46520830);
    DisableCharacter(46525830);
    DisableCharacterCollision(46525830);
    DisableCharacter(46520840);
    DisableCharacterCollision(46520840);
    DisableCharacter(46525840);
    DisableCharacterCollision(46525840);
    DisableCharacter(46520850);
    DisableCharacterCollision(46520850);
    DisableCharacter(46525850);
    DisableCharacterCollision(46525850);
    DisableCharacter(46520860);
    DisableCharacterCollision(46520860);
    DisableCharacter(46525860);
    DisableCharacterCollision(46525860);
    DisableCharacter(46520870);
    DisableCharacterCollision(46520870);
    DisableCharacter(46525870);
    DisableCharacterCollision(46525870);
    DisableCharacter(46520880);
    DisableCharacterCollision(46520880);
    DisableCharacter(46525880);
    DisableCharacterCollision(46525880);
    DisableCharacter(46520890);
    DisableCharacterCollision(46520890);
    DisableCharacter(46525890);
    DisableCharacterCollision(46525890);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        EnableCharacter(46520800);
        EnableCharacterCollision(46520800);
        EnableCharacter(46525800);
        EnableCharacterCollision(46525800);
    }
    if (EventFlag(64001)) {
        EnableCharacter(46520810);
        EnableCharacterCollision(46520810);
        EnableCharacter(46525810);
        EnableCharacterCollision(46525810);
    }
    if (EventFlag(64002)) {
        EnableCharacter(46520820);
        EnableCharacterCollision(46520820);
        EnableCharacter(46525820);
        EnableCharacterCollision(46525820);
    }
    if (EventFlag(64003)) {
        EnableCharacter(46520830);
        EnableCharacterCollision(46520830);
        EnableCharacter(46525830);
        EnableCharacterCollision(46525830);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46520840);
        EnableCharacterCollision(46520840);
        EnableCharacter(46525840);
        EnableCharacterCollision(46525840);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46520850);
        EnableCharacterCollision(46520850);
        EnableCharacter(46525850);
        EnableCharacterCollision(46525850);
    }

    if (EventFlag(64006)) {
        EnableCharacter(46520860);
        EnableCharacterCollision(46520860);
        EnableCharacter(46525860);
        EnableCharacterCollision(46525860);
    }

    if (EventFlag(64007)) {
        EnableCharacter(46520870);
        EnableCharacterCollision(46520870);
        EnableCharacter(46525870);
        EnableCharacterCollision(46525870);
    }  
  
    if (EventFlag(64008)) {
        EnableCharacter(46520880);
        EnableCharacterCollision(46520880);
        EnableCharacter(46525880);
        EnableCharacterCollision(46525880);
    } 

    if (EventFlag(64009)) {
        EnableCharacter(46520890);
        EnableCharacterCollision(46520890);
        EnableCharacter(46525890);
        EnableCharacterCollision(46525890);
    }
 
    $InitializeCommonEvent(0, 90015000, 0, 46520800, 903250600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46520800, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46520800, 46520800, 1020, 920210, 11290, 903250600, 46520800);
    $InitializeCommonEvent(0, 9005810, 46520800, 46520500, 46521500, 5);
    $InitializeCommonEvent(0, 90015005, 46521500, 46522800, 46520800);
    $InitializeCommonEvent(0, 90015000, 0, 46520810, 904640100, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46520810, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46520810, 46520810, 1020, 920210, 11290, 904640100, 46520810);
    $InitializeCommonEvent(0, 9005810, 46520810, 46520500, 46521500, 5);
    $InitializeCommonEvent(0, 90015005, 46521500, 46522800, 46520810);
    $InitializeCommonEvent(0, 90015000, 0, 46520820, 904811000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46520820, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46520820, 46520820, 1020, 920210, 11290, 904811000, 46520820);
    $InitializeCommonEvent(0, 9005810, 46520820, 46520500, 46521500, 5);
    $InitializeCommonEvent(0, 90015005, 46521500, 46522800, 46520820);
    $InitializeCommonEvent(0, 90015000, 0, 46525820, 903150600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46520820, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015000, 0, 46520830, 903253500, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46520830, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46520830, 46520830, 1020, 920210, 11290, 903253500, 46520830);
    $InitializeCommonEvent(0, 9005810, 46520830, 46520500, 46521500, 5);
    $InitializeCommonEvent(0, 90015005, 46521500, 46522830, 46520830);
    $InitializeCommonEvent(0, 90015000, 0, 46520810, 903251600, 30, 0, 0);  
    GotoIf(S0, Signed(13708) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46520800, 920210, 46520800, 13708, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46520810, 920210, 46520810, 13708, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46520820, 920210, 46520820, 13708, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46520830, 920210, 46520830, 13708, 0);    
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46520800);
    $InitializeCommonEvent(0, 90015016, 46520800);
    $InitializeCommonEvent(0, 90015015, 46520810);
    $InitializeCommonEvent(0, 90015016, 46520810);
    $InitializeCommonEvent(0, 90015015, 46520820);
    $InitializeCommonEvent(0, 90015016, 46520820);
    $InitializeCommonEvent(0, 90015015, 46520830);
    $InitializeCommonEvent(0, 90015016, 46520830);    
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46520800);
        $InitializeCommonEvent(0, 90015468, 46520800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46520810);
        $InitializeCommonEvent(0, 90015468, 46520810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46520820);
        $InitializeCommonEvent(0, 90015468, 46520820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46520830);
        $InitializeCommonEvent(0, 90015468, 46520830, 8270, 8247);        
    }
    $InitializeCommonEvent(0, 90015199, 46520800);
    $InitializeCommonEvent(0, 90015199, 46520810);
    $InitializeCommonEvent(0, 90015199, 46520820);
    $InitializeCommonEvent(0, 90015199, 46520830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46522200, Default, function(chrEntityId) {
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

$Event(46522500, Restart, function(chrEntityId, spEffectId, eventFlagId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    SetEventFlagID(eventFlagId, ON);
});
