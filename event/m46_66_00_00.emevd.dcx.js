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
    DisableCharacter(46660800);
    DisableCharacterCollision(46660800);
    DisableCharacter(46665800);
    DisableCharacterCollision(46665800);
    DisableCharacter(46660810);
    DisableCharacterCollision(46660810);
    DisableCharacter(46665810);
    DisableCharacterCollision(46665810);
    DisableCharacter(46660820);
    DisableCharacterCollision(46660820);
    DisableCharacter(46665820);
    DisableCharacterCollision(46665820);
    DisableCharacter(46660830);
    DisableCharacterCollision(46660830);
    DisableCharacter(46665830);
    DisableCharacterCollision(46665830);
    DisableCharacter(46660840);
    DisableCharacterCollision(46660840);
    DisableCharacter(46665840);
    DisableCharacterCollision(46665840);
    DisableCharacter(46660850);
    DisableCharacterCollision(46660850);
    DisableCharacter(46665850);
    DisableCharacterCollision(46665850);
    DisableCharacter(46660860);
    DisableCharacterCollision(46660860);
    DisableCharacter(46665860);
    DisableCharacterCollision(46665860);
    DisableCharacter(46660870);
    DisableCharacterCollision(46660870);
    DisableCharacter(46665870);
    DisableCharacterCollision(46665870);
    DisableCharacter(46660880);
    DisableCharacterCollision(46660880);
    DisableCharacter(46665880);
    DisableCharacterCollision(46665880);
    DisableCharacter(46660890);
    DisableCharacterCollision(46660890);
    DisableCharacter(46665890);
    DisableCharacterCollision(46665890);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        EnableCharacter(46660800);
        EnableCharacterCollision(46660800);
        EnableCharacter(46665800);
        EnableCharacterCollision(46665800);
    }
    if (EventFlag(64001)) {
        EnableCharacter(46660810);
        EnableCharacterCollision(46660810);
        EnableCharacter(46665810);
        EnableCharacterCollision(46665810);
    }
    if (EventFlag(64002)) {
        EnableCharacter(46660820);
        EnableCharacterCollision(46660820);
        EnableCharacter(46665820);
        EnableCharacterCollision(46665820);
    }
    if (EventFlag(64003)) {
        EnableCharacter(46660830);
        EnableCharacterCollision(46660830);
        EnableCharacter(46665830);
        EnableCharacterCollision(46665830);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46660840);
        EnableCharacterCollision(46660840);
        EnableCharacter(46665840);
        EnableCharacterCollision(46665840);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46660850);
        EnableCharacterCollision(46660850);
        EnableCharacter(46665850);
        EnableCharacterCollision(46665850);
    }

    if (EventFlag(64006)) {
        EnableCharacter(46660860);
        EnableCharacterCollision(46660860);
        EnableCharacter(46665860);
        EnableCharacterCollision(46665860);
    }

    if (EventFlag(64007)) {
        EnableCharacter(46660870);
        EnableCharacterCollision(46660870);
        EnableCharacter(46665870);
        EnableCharacterCollision(46665870);
    }  
  
    if (EventFlag(64008)) {
        EnableCharacter(46660880);
        EnableCharacterCollision(46660880);
        EnableCharacter(46665880);
        EnableCharacterCollision(46665880);
    } 

    if (EventFlag(64009)) {
        EnableCharacter(46660890);
        EnableCharacterCollision(46660890);
        EnableCharacter(46665890);
        EnableCharacterCollision(46665890);
    }
    
    $InitializeCommonEvent(0, 90015000, 0, 46660800, 904770001, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46660800, 30, 931010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46660800, 46660800, 1020, 931010, 11290, 904770001, 46660800);
    $InitializeCommonEvent(0, 9005810, 46660800, 46660500, 46661500, 5);
    $InitializeCommonEvent(0, 90015005, 46661500, 46662800, 46660800);
    $InitializeCommonEvent(0, 90015000, 0, 46660810, 905820600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46660810, 30, 931010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46660810, 46660810, 1020, 931010, 11290, 905820600, 46660810);
    $InitializeCommonEvent(0, 9005810, 46660810, 46660500, 46661500, 5);
    $InitializeCommonEvent(0, 90015005, 46661500, 46662800, 46660810);
    $InitializeCommonEvent(0, 90015000, 0, 46660820, 905210600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46660820, 30, 931010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46660820, 46660820, 1020, 931010, 11290, 905210600, 46660820);
    $InitializeCommonEvent(0, 9005810, 46660820, 46660500, 46661500, 5);
    $InitializeCommonEvent(0, 90015005, 46661500, 46662800, 46660820);
    $InitializeCommonEvent(0, 90015000, 0, 46660830, 904680320, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46660830, 30, 931010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46660830, 46660830, 1020, 931010, 11290, 904680320, 46660830);
    $InitializeCommonEvent(0, 9005810, 46660830, 46660500, 46661500, 5);
    $InitializeCommonEvent(0, 90015005, 46661500, 46662800, 46660830);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46660800, 931010, 46660800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46660810, 931010, 46660810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46660820, 931010, 46660820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46660830, 931010, 46660830, 0, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46660800);
    $InitializeCommonEvent(0, 90015016, 46660800);
    $InitializeCommonEvent(0, 90015015, 46660810);
    $InitializeCommonEvent(0, 90015016, 46660810);
    $InitializeCommonEvent(0, 90015015, 46660820);
    $InitializeCommonEvent(0, 90015016, 46660820);
    $InitializeCommonEvent(0, 90015015, 46660830);
    $InitializeCommonEvent(0, 90015016, 46660830);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46660800);
        $InitializeCommonEvent(0, 90015468, 46660800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46660810);
        $InitializeCommonEvent(0, 90015468, 46660810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46660820);
        $InitializeCommonEvent(0, 90015468, 46660820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46660830);
        $InitializeCommonEvent(0, 90015468, 46660830, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46660800);
    $InitializeCommonEvent(0, 90015199, 46660810);
    $InitializeCommonEvent(0, 90015199, 46660820);
    $InitializeCommonEvent(0, 90015199, 46660830);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46662200, Default, function(chrEntityId) {
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
