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
    DisableCharacter(46560800);
    DisableCharacterCollision(46560800);
    DisableCharacter(46565800);
    DisableCharacterCollision(46565800);
    DisableCharacter(46560810);
    DisableCharacterCollision(46560810);
    DisableCharacter(46565810);
    DisableCharacterCollision(46565810);
    DisableCharacter(46560820);
    DisableCharacterCollision(46560820);
    DisableCharacter(46565820);
    DisableCharacterCollision(46565820);
    DisableCharacter(46560830);
    DisableCharacterCollision(46560830);
    DisableCharacter(46565830);
    DisableCharacterCollision(46565830);
    DisableCharacter(46560840);
    DisableCharacterCollision(46560840);
    DisableCharacter(46565840);
    DisableCharacterCollision(46565840);
    DisableCharacter(46560850);
    DisableCharacterCollision(46560850);
    DisableCharacter(46565850);
    DisableCharacterCollision(46565850);
    DisableCharacter(46560860);
    DisableCharacterCollision(46560860);
    DisableCharacter(46565860);
    DisableCharacterCollision(46565860);
    DisableCharacter(46560870);
    DisableCharacterCollision(46560870);
    DisableCharacter(46565870);
    DisableCharacterCollision(46565870);
    DisableCharacter(46560880);
    DisableCharacterCollision(46560880);
    DisableCharacter(46565880);
    DisableCharacterCollision(46565880);
    DisableCharacter(46560890);
    DisableCharacterCollision(46560890);
    DisableCharacter(46565890);
    DisableCharacterCollision(46565890);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        EnableCharacter(46560800);
        EnableCharacterCollision(46560800);
        EnableCharacter(46565800);
        EnableCharacterCollision(46565800);
    }
    if (EventFlag(64001)) {
        EnableCharacter(46560810);
        EnableCharacterCollision(46560810);
        EnableCharacter(46565810);
        EnableCharacterCollision(46565810);
    }
    if (EventFlag(64002)) {
        EnableCharacter(46560820);
        EnableCharacterCollision(46560820);
        EnableCharacter(46565820);
        EnableCharacterCollision(46565820);
    }
    if (EventFlag(64003)) {
        EnableCharacter(46560830);
        EnableCharacterCollision(46560830);
        EnableCharacter(46565830);
        EnableCharacterCollision(46565830);
    }

    if (EventFlag(64004)) {
        EnableCharacter(46560840);
        EnableCharacterCollision(46560840);
        EnableCharacter(46565840);
        EnableCharacterCollision(46565840);
    }

    if (EventFlag(64005)) {
        EnableCharacter(46560850);
        EnableCharacterCollision(46560850);
        EnableCharacter(46565850);
        EnableCharacterCollision(46565850);
    }

    if (EventFlag(64006)) {
        EnableCharacter(46560860);
        EnableCharacterCollision(46560860);
        EnableCharacter(46565860);
        EnableCharacterCollision(46565860);
    }

    if (EventFlag(64007)) {
        EnableCharacter(46560870);
        EnableCharacterCollision(46560870);
        EnableCharacter(46565870);
        EnableCharacterCollision(46565870);
    }  
  
    if (EventFlag(64008)) {
        EnableCharacter(46560880);
        EnableCharacterCollision(46560880);
        EnableCharacter(46565880);
        EnableCharacterCollision(46565880);
    } 

    if (EventFlag(64009)) {
        EnableCharacter(46560890);
        EnableCharacterCollision(46560890);
        EnableCharacter(46565890);
        EnableCharacterCollision(46565890);
    }
    
    $InitializeCommonEvent(0, 90015000, 0, 46560800, 912000060, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46560800, 30, 921010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46560800, 46560800, 1020, 921010, 11290, 903100600, 46560800);
    $InitializeCommonEvent(0, 9005810, 46560800, 46560500, 46561500, 5);
    $InitializeCommonEvent(0, 90015005, 46561500, 46562800, 46560800);
    $InitializeCommonEvent(0, 90015000, 0, 46560810, 903050600, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46560810, 30, 921010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46560810, 46560810, 1020, 921010, 11290, 903050600, 46560810);
    $InitializeCommonEvent(0, 9005810, 46560810, 46560500, 46561500, 5);
    $InitializeCommonEvent(0, 90015005, 46561500, 46562800, 46560810);
    $InitializeCommonEvent(0, 90015000, 0, 46560820, 903050500, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46560820, 30, 921010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46560820, 46560820, 1020, 921010, 11290, 903050500, 46560820);
    $InitializeCommonEvent(0, 9005810, 46560820, 46560500, 46561500, 5);
    $InitializeCommonEvent(0, 90015005, 46561500, 46562800, 46560820);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46560800, 921010, 46560800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46560810, 921010, 46560810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46560820, 921010, 46560820, 0, 0);
S1:
    if (1 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46560800);
    $InitializeCommonEvent(0, 90015016, 46560800);
    $InitializeCommonEvent(0, 90015015, 46560810);
    $InitializeCommonEvent(0, 90015016, 46560810);
    $InitializeCommonEvent(0, 90015015, 46560820);
    $InitializeCommonEvent(0, 90015016, 46560820);
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46560800);
        $InitializeCommonEvent(0, 90015468, 46560800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46560810);
        $InitializeCommonEvent(0, 90015468, 46560810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46560820);
        $InitializeCommonEvent(0, 90015468, 46560820, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90015199, 46560800);
    $InitializeCommonEvent(0, 90015199, 46560810);
    $InitializeCommonEvent(0, 90015199, 46560820);
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46562200, Default, function(chrEntityId) {
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
