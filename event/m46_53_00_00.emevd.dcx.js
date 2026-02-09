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
            SetEventFlagID(64000, OFF)
            SetEventFlagID(64000, ON)
        }
        if (EventFlag(64001))
        {
            SetEventFlagID(64001, OFF)
            SetEventFlagID(64001, ON)
        }
        if (EventFlag(64002))
        {
            SetEventFlagID(64002, OFF)
            SetEventFlagID(64002, ON)
        }
        if (EventFlag(64003))
        {
            SetEventFlagID(64003, OFF)    
            SetEventFlagID(64003, ON)
        }
        if (EventFlag(64004))
        {
            SetEventFlagID(64004, OFF)            
            SetEventFlagID(64004, ON)
        }
        if (EventFlag(64005))
        {
            SetEventFlagID(64005, OFF)            
            SetEventFlagID(64005, ON)
        }
        if (EventFlag(64006))
        {
            SetEventFlagID(64006, OFF)               
            SetEventFlagID(64006, ON)
        }   
        if (EventFlag(64007))
        {
            SetEventFlagID(64007, OFF)              
            SetEventFlagID(64007, ON)
        } 
        if (EventFlag(64008))
        {
            SetEventFlagID(64008, OFF)              
            SetEventFlagID(64008, ON)  
        } 
        if (EventFlag(64009))
        {
            SetEventFlagID(64009, OFF)            
            SetEventFlagID(64009, ON)
        }
    }  
    
    // Disable all the potential character entityids and group entityids. Supports up to 10 variations. Does not need to be edited.
    DisableCharacter(46530800);
    DisableCharacterCollision(46530800);
    DisableCharacter(46535800);
    DisableCharacterCollision(46535800);
    DisableCharacter(46530810);
    DisableCharacterCollision(46530810);
    DisableCharacter(46535810);
    DisableCharacterCollision(46535810);
    DisableCharacter(46530820);
    DisableCharacterCollision(46530820);
    DisableCharacter(46535820);
    DisableCharacterCollision(46535820);
    DisableCharacter(46530830);
    DisableCharacterCollision(46530830);
    DisableCharacter(46535830);
    DisableCharacterCollision(46535830);
    DisableCharacter(46530840);
    DisableCharacterCollision(46530840);
    DisableCharacter(46535840);
    DisableCharacterCollision(46535840);
    DisableCharacter(46530850);
    DisableCharacterCollision(46530850);
    DisableCharacter(46535850);
    DisableCharacterCollision(46535850);
    DisableCharacter(46530860);
    DisableCharacterCollision(46530860);
    DisableCharacter(46535860);
    DisableCharacterCollision(46535860);
    DisableCharacter(46530870);
    DisableCharacterCollision(46530870);
    DisableCharacter(46535870);
    DisableCharacterCollision(46535870);
    DisableCharacter(46530880);
    DisableCharacterCollision(46530880);
    DisableCharacter(46535880);
    DisableCharacterCollision(46535880);
    DisableCharacter(46530890);
    DisableCharacterCollision(46530890);
    DisableCharacter(46535890);
    DisableCharacterCollision(46535890);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        EnableCharacter(46530800);
        EnableCharacterCollision(46530800);
        EnableCharacter(46535800);
        EnableCharacterCollision(46535800);
    }
    if (EventFlag(64001)) {
        EnableCharacter(46530810);
        EnableCharacterCollision(46530810);
        EnableCharacter(46535810);
        EnableCharacterCollision(46535810);
    }
    if (EventFlag(64002)) {
        EnableCharacter(46530820);
        EnableCharacterCollision(46530820);
        EnableCharacter(46535820);
        EnableCharacterCollision(46535820);
    }
    if (EventFlag(64003)) {
        EnableCharacter(46530830);
        EnableCharacterCollision(46530830);
        EnableCharacter(46535830);
        EnableCharacterCollision(46535830);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46530840);
        EnableCharacterCollision(46530840);
        EnableCharacter(46535840);
        EnableCharacterCollision(46535840);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46530850);
        EnableCharacterCollision(46530850);
        EnableCharacter(46535850);
        EnableCharacterCollision(46535850);
    }

    if (EventFlag(64006)) {
        EnableCharacter(46530860);
        EnableCharacterCollision(46530860);
        EnableCharacter(46535860);
        EnableCharacterCollision(46535860);
    }

    if (EventFlag(64007)) {
        EnableCharacter(46530870);
        EnableCharacterCollision(46530870);
        EnableCharacter(46535870);
        EnableCharacterCollision(46535870);
    }  
  
    if (EventFlag(64008)) {
        EnableCharacter(46530880);
        EnableCharacterCollision(46530880);
        EnableCharacter(46535880);
        EnableCharacterCollision(46535880);
    } 

    if (EventFlag(64009)) {
        EnableCharacter(46530890);
        EnableCharacterCollision(46530890);
        EnableCharacter(46535890);
        EnableCharacterCollision(46535890);
    }
    
    $InitializeCommonEvent(0, 90015000, 0, 46530800, 903251600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46530800, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46530800, 46530800, 1020, 920210, 11290, 903251600, 46530800);
    $InitializeCommonEvent(0, 9005810, 46530800, 46530500, 46531500, 5);
    $InitializeCommonEvent(0, 90015005, 46531500, 46532800, 46530800);
    $InitializeCommonEvent(0, 90015000, 0, 46530810, 902500300, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46530810, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46530810, 46530810, 1020, 920210, 11290, 902500300, 46530810);
    $InitializeCommonEvent(0, 9005810, 46530810, 46530500, 46531500, 5);
    $InitializeCommonEvent(0, 90015005, 46531500, 46532800, 46530810);
    $InitializeCommonEvent(0, 90015000, 0, 46530820, 902500300, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46530820, 30, 920210, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46530820, 46530820, 1020, 920210, 11290, 902500300, 46530820);
    $InitializeCommonEvent(0, 9005810, 46530820, 46530500, 46531500, 5);
    $InitializeCommonEvent(0, 90015005, 46531500, 46532800, 46530820);
    GotoIf(S0, Signed(13771) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46530800, 920210, 46530800, 13771, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46530810, 920210, 46530810, 13771, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46530820, 920210, 46530820, 13771, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46530800);
    $InitializeCommonEvent(0, 90015016, 46530800);
    $InitializeCommonEvent(0, 90015015, 46530810);
    $InitializeCommonEvent(0, 90015016, 46530810);
    $InitializeCommonEvent(0, 90015015, 46530820);
    $InitializeCommonEvent(0, 90015016, 46530820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46530800);
        $InitializeCommonEvent(0, 90015468, 46530800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46530810);
        $InitializeCommonEvent(0, 90015468, 46530810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46530820);
        $InitializeCommonEvent(0, 90015468, 46530820, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46530800);
    $InitializeCommonEvent(0, 90015199, 46530810);
    $InitializeCommonEvent(0, 90015199, 46530820);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46532200, Default, function(chrEntityId) {
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

$Event(46532500, Restart, function(chrEntityId, spEffectId, eventFlagId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    SetEventFlagID(eventFlagId, ON);
});
