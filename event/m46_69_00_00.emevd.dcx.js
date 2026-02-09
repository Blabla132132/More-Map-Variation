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
    {
        RandomlySetEventFlagInRange(64000, 64002, ON);
        if (EventFlag(64000))
        {
            SetSpEffect(10002, 1605000)
            SetSpEffect(10003, 4481)
            SetSpEffect(10002, 64000)
        }
        if (EventFlag(64001))
        {
            SetSpEffect(10002, 64001)
        }
        if (EventFlag(64002))
        {
            SetSpEffect(10002, 64002)
        }
        if (EventFlag(64003))
        {
            SetSpEffect(10002, 64003)
        }
    } 
    
    // Disable all the potential character entityids and group entityids. Supports up to 10 variations. Does not need to be edited.
    DisableCharacter(46690800);
    DisableCharacterCollision(46690800);
    DisableCharacter(46695800);
    DisableCharacterCollision(46695800);
    DisableCharacter(46690810);
    DisableCharacterCollision(46690810);
    DisableCharacter(46695810);
    DisableCharacterCollision(46695810);
    DisableCharacter(46690820);
    DisableCharacterCollision(46690820);
    DisableCharacter(46695820);
    DisableCharacterCollision(46695820);
    DisableCharacter(46690830);
    DisableCharacterCollision(46690830);
    DisableCharacter(46695830);
    DisableCharacterCollision(46695830);
    DisableCharacter(46690840);
    DisableCharacterCollision(46690840);
    DisableCharacter(46695840);
    DisableCharacterCollision(46695840);
    DisableCharacter(46690850);
    DisableCharacterCollision(46690850);
    DisableCharacter(46695850);
    DisableCharacterCollision(46695850);
    DisableCharacter(46690860);
    DisableCharacterCollision(46690860);
    DisableCharacter(46695860);
    DisableCharacterCollision(46695860);
    DisableCharacter(46690870);
    DisableCharacterCollision(46690870);
    DisableCharacter(46695870);
    DisableCharacterCollision(46695870);
    DisableCharacter(46690880);
    DisableCharacterCollision(46690880);
    DisableCharacter(46695880);
    DisableCharacterCollision(46695880);
    DisableCharacter(46690890);
    DisableCharacterCollision(46690890);
    DisableCharacter(46695890);
    DisableCharacterCollision(46695890);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        EnableCharacter(46690800);
        EnableCharacterCollision(46690800);
        EnableCharacter(46695800);
        EnableCharacterCollision(46695800);
    }
    if (EventFlag(64001)) {
        EnableCharacter(46690810);
        EnableCharacterCollision(46690810);
        EnableCharacter(46695810);
        EnableCharacterCollision(46695810);
    }
    if (EventFlag(64002)) {
        EnableCharacter(46690820);
        EnableCharacterCollision(46690820);
        EnableCharacter(46695820);
        EnableCharacterCollision(46695820);
    }
    if (EventFlag(64003)) {
        EnableCharacter(46690830);
        EnableCharacterCollision(46690830);
        EnableCharacter(46695830);
        EnableCharacterCollision(46695830);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46690840);
        EnableCharacterCollision(46690840);
        EnableCharacter(46695840);
        EnableCharacterCollision(46695840);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46690850);
        EnableCharacterCollision(46690850);
        EnableCharacter(46695850);
        EnableCharacterCollision(46695850);
    }

    if (EventFlag(64006)) {
        EnableCharacter(46690860);
        EnableCharacterCollision(46690860);
        EnableCharacter(46695860);
        EnableCharacterCollision(46695860);
    }

    if (EventFlag(64007)) {
        EnableCharacter(46690870);
        EnableCharacterCollision(46690870);
        EnableCharacter(46695870);
        EnableCharacterCollision(46695870);
    }  
  
    if (EventFlag(64008)) {
        EnableCharacter(46690880);
        EnableCharacterCollision(46690880);
        EnableCharacter(46695880);
        EnableCharacterCollision(46695880);
    } 

    if (EventFlag(64009)) {
        EnableCharacter(46690890);
        EnableCharacterCollision(46690890);
        EnableCharacter(46695890);
        EnableCharacterCollision(46695890);
    }
        
    $InitializeCommonEvent(0, 90015000, 0, 46690800, 904690000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46690800, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46690800, 46690800, 1020, 920210, 11290, 904690000, 46690800);
    $InitializeCommonEvent(0, 9005810, 46690800, 46690500, 46691500, 5);
    $InitializeCommonEvent(0, 90015005, 46691500, 46692800, 46690800);
    $InitializeCommonEvent(0, 90015000, 0, 46690810, 903460600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46690810, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46690810, 46690810, 1020, 920210, 11290, 903460600, 46690810);
    $InitializeCommonEvent(0, 9005810, 46690810, 46690500, 46691500, 5);
    $InitializeCommonEvent(0, 90015005, 46691500, 46692800, 46690810);
    $InitializeCommonEvent(0, 90015000, 0, 46690820, 903400302, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46690820, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46690820, 46690820, 1020, 920210, 11290, 903400302, 46690820);
    $InitializeCommonEvent(0, 9005810, 46690820, 46690500, 46691500, 5);
    $InitializeCommonEvent(0, 90015005, 46691500, 46692800, 46690820);
    $InitializeCommonEvent(0, 90015000, 0, 46690830, 905250610, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46690830, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46690830, 46690830, 1020, 920210, 11290, 905250610, 46690830);
    $InitializeCommonEvent(0, 9005810, 46690830, 46690500, 46691500, 5);
    $InitializeCommonEvent(0, 90015005, 46691500, 46692800, 46690830);    
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46690800, 920210, 46690800, 16951, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46690800, 920210, 46690810, 16951, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46690800, 920210, 46690820, 16951, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46690800, 920210, 46690830, 16951, 0);    
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46690800);
    $InitializeCommonEvent(0, 90015016, 46690800);
    $InitializeCommonEvent(0, 90015015, 46690810);
    $InitializeCommonEvent(0, 90015016, 46690810);
    $InitializeCommonEvent(0, 90015015, 46690820);
    $InitializeCommonEvent(0, 90015016, 46690820);
    $InitializeCommonEvent(0, 90015015, 46690830);
    $InitializeCommonEvent(0, 90015016, 46690830);    
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46690800);
        $InitializeCommonEvent(0, 90015468, 46690800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46690810);
        $InitializeCommonEvent(0, 90015468, 46690810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46690820);
        $InitializeCommonEvent(0, 90015468, 46690820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46690830);
        $InitializeCommonEvent(0, 90015468, 46690830, 8270, 8247);        
    }
    $InitializeCommonEvent(0, 90015199, 46690800);
    $InitializeCommonEvent(0, 90015199, 46690810);
    $InitializeCommonEvent(0, 90015199, 46690820);
    $InitializeCommonEvent(0, 90015199, 46690830);    
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46692200, Default, function(chrEntityId) {
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

$Event(46692500, Restart, function(chrEntityId, spEffectId, eventFlagId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    SetEventFlagID(eventFlagId, ON);
});
