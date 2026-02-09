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
        RandomlySetEventFlagInRange(64000, 64003, ON);
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
    DisableCharacter(46630800);
    DisableCharacterCollision(46630800);
    DisableCharacter(46635800);
    DisableCharacterCollision(46635800);
    DisableCharacter(46630810);
    DisableCharacterCollision(46630810);
    DisableCharacter(46635810);
    DisableCharacterCollision(46635810);
    DisableCharacter(46630820);
    DisableCharacterCollision(46630820);
    DisableCharacter(46635820);
    DisableCharacterCollision(46635820);
    DisableCharacter(46630830);
    DisableCharacterCollision(46630830);
    DisableCharacter(46635830);
    DisableCharacterCollision(46635830);
    DisableCharacter(46630840);
    DisableCharacterCollision(46630840);
    DisableCharacter(46635840);
    DisableCharacterCollision(46635840);
    DisableCharacter(46630850);
    DisableCharacterCollision(46630850);
    DisableCharacter(46635850);
    DisableCharacterCollision(46635850);
    DisableCharacter(46630860);
    DisableCharacterCollision(46630860);
    DisableCharacter(46635860);
    DisableCharacterCollision(46635860);
    DisableCharacter(46630870);
    DisableCharacterCollision(46630870);
    DisableCharacter(46635870);
    DisableCharacterCollision(46635870);
    DisableCharacter(46630880);
    DisableCharacterCollision(46630880);
    DisableCharacter(46635880);
    DisableCharacterCollision(46635880);
    DisableCharacter(46630890);
    DisableCharacterCollision(46630890);
    DisableCharacter(46635890);
    DisableCharacterCollision(46635890);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        EnableCharacter(46630800);
        EnableCharacterCollision(46630800);
        EnableCharacter(46635800);
        EnableCharacterCollision(46635800);
    }
    if (EventFlag(64001)) {
        EnableCharacter(46630810);
        EnableCharacterCollision(46630810);
        EnableCharacter(46635810);
        EnableCharacterCollision(46635810);
    }
    if (EventFlag(64002)) {
        EnableCharacter(46630820);
        EnableCharacterCollision(46630820);
        EnableCharacter(46635820);
        EnableCharacterCollision(46635820);
    }
    if (EventFlag(64003)) {
        EnableCharacter(46630830);
        EnableCharacterCollision(46630830);
        EnableCharacter(46635830);
        EnableCharacterCollision(46635830);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46630840);
        EnableCharacterCollision(46630840);
        EnableCharacter(46635840);
        EnableCharacterCollision(46635840);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46630850);
        EnableCharacterCollision(46630850);
        EnableCharacter(46635850);
        EnableCharacterCollision(46635850);
    }

    if (EventFlag(64006)) {
        EnableCharacter(46630860);
        EnableCharacterCollision(46630860);
        EnableCharacter(46635860);
        EnableCharacterCollision(46635860);
    }

    if (EventFlag(64007)) {
        EnableCharacter(46630870);
        EnableCharacterCollision(46630870);
        EnableCharacter(46635870);
        EnableCharacterCollision(46635870);
    }  
  
    if (EventFlag(64008)) {
        EnableCharacter(46630880);
        EnableCharacterCollision(46630880);
        EnableCharacter(46635880);
        EnableCharacterCollision(46635880);
    } 

    if (EventFlag(64009)) {
        EnableCharacter(46630890);
        EnableCharacterCollision(46630890);
        EnableCharacter(46635890);
        EnableCharacterCollision(46635890);
    }
    
    $InitializeCommonEvent(0, 90015000, 0, 46630800, 904640000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46630800, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46630800, 46630800, 1020, 920610, 11290, 904640000, 46630800);
    $InitializeCommonEvent(0, 9005810, 46630800, 46630500, 46631500, 5);
    $InitializeCommonEvent(0, 90015005, 46631500, 46632800, 46630800);
    $InitializeCommonEvent(0, 90015000, 0, 46630810, 904630320, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46630810, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46630810, 46630810, 1020, 920610, 11290, 904630320, 46630810);
    $InitializeCommonEvent(0, 9005810, 46630810, 46630500, 46631500, 5);
    $InitializeCommonEvent(0, 90015005, 46631500, 46632800, 46630810);
    $InitializeCommonEvent(0, 90015000, 0, 46635820, 903150610, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46635820, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46635820, 46635820, 1020, 920610, 11290, 903150610, 46635820);
    $InitializeCommonEvent(0, 9005810, 46635820, 46630500, 46631500, 5);
    $InitializeCommonEvent(0, 90015005, 46631500, 46632800, 46635820);
    $InitializeCommonEvent(0, 90015000, 0, 46630830, 904770000, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46630830, 30, 920610, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46630830, 46630830, 1020, 920610, 11290, 904770000, 46630830);
    $InitializeCommonEvent(0, 9005810, 46630830, 46630500, 46631500, 5);
    $InitializeCommonEvent(0, 90015005, 46631500, 46632800, 46630830);
    GotoIf(S0, Signed(18870) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46630800, 920610, 46630800, 18870, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46630810, 920610, 46630810, 18870, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46630820, 920610, 46635820, 18870, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46630830, 920610, 46630830, 18870, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46630800);
    $InitializeCommonEvent(0, 90015016, 46630800);
    $InitializeCommonEvent(0, 90015015, 46630810);
    $InitializeCommonEvent(0, 90015016, 46630810);
    $InitializeCommonEvent(0, 90015015, 46635820);
    $InitializeCommonEvent(0, 90015016, 46635820);
    $InitializeCommonEvent(0, 90015015, 46630830);
    $InitializeCommonEvent(0, 90015016, 46630830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46630800);
        $InitializeCommonEvent(0, 90015468, 46630800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46630810);
        $InitializeCommonEvent(0, 90015468, 46630810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46635820);
        $InitializeCommonEvent(0, 90015468, 46635820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46630830);
        $InitializeCommonEvent(0, 90015468, 46630830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46630800);
    $InitializeCommonEvent(0, 90015199, 46630810);
    $InitializeCommonEvent(0, 90015199, 46635820);
    $InitializeCommonEvent(0, 90015199, 46630830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46632200, Default, function(chrEntityId) {
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

$Event(46632500, Restart, function(chrEntityId, spEffectId, eventFlagId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    SetEventFlagID(eventFlagId, ON);
});
