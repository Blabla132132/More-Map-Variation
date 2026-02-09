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
    DisableCharacter(46620800);
    DisableCharacterCollision(46620800);
    DisableCharacter(46625800);
    DisableCharacterCollision(46625800);
    DisableCharacter(46620810);
    DisableCharacterCollision(46620810);
    DisableCharacter(46625810);
    DisableCharacterCollision(46625810);
    DisableCharacter(46620820);
    DisableCharacterCollision(46620820);
    DisableCharacter(46625820);
    DisableCharacterCollision(46625820);
    DisableCharacter(46620830);
    DisableCharacterCollision(46620830);
    DisableCharacter(46625830);
    DisableCharacterCollision(46625830);
    DisableCharacter(46620840);
    DisableCharacterCollision(46620840);
    DisableCharacter(46625840);
    DisableCharacterCollision(46625840);
    DisableCharacter(46620850);
    DisableCharacterCollision(46620850);
    DisableCharacter(46625850);
    DisableCharacterCollision(46625850);
    DisableCharacter(46620860);
    DisableCharacterCollision(46620860);
    DisableCharacter(46625860);
    DisableCharacterCollision(46625860);
    DisableCharacter(46620870);
    DisableCharacterCollision(46620870);
    DisableCharacter(46625870);
    DisableCharacterCollision(46625870);
    DisableCharacter(46620880);
    DisableCharacterCollision(46620880);
    DisableCharacter(46625880);
    DisableCharacterCollision(46625880);
    DisableCharacter(46620890);
    DisableCharacterCollision(46620890);
    DisableCharacter(46625890);
    DisableCharacterCollision(46625890);
    
    // Disable mount npcs
    DisableCharacter(46620902);
    DisableCharacterCollision(46620902);
    DisableCharacter(46620912);
    DisableCharacterCollision(46620912);
    DisableCharacter(46620922);
    DisableCharacterCollision(46620922);
    DisableCharacter(46620932);
    DisableCharacterCollision(46620932);
    DisableCharacter(46620942);
    DisableCharacterCollision(46620942);
    DisableCharacter(46620952);
    DisableCharacterCollision(46620952);

    // Depending on roll, enable characters and group entity ids. Supports up to 10 variations. Does not need to be edited.
    if (EventFlag(64000)) {
        
       // Roll to decide what Knight version
       BatchSetNetworkconnectedEventFlags(64010, 64019, OFF);
       RandomlySetNetworkconnectedEventFlagInRange(64010, 64015, ON);
       
        if (EventFlag(64010)) {
            EnableCharacter(46620800);
            EnableCharacterCollision(46620800);
            EnableCharacter(46625800);
            EnableCharacterCollision(46625800);
            // Enable mount npcs
            EnableCharacter(46620902);
            EnableCharacterCollision(46620902);            
        }       
       
        if (EventFlag(64011)) {
            EnableCharacter(46620810);
            EnableCharacterCollision(46620810);
            EnableCharacter(46625810);
            EnableCharacterCollision(46625810);
            // Enable mount npcs
            EnableCharacter(46620912);
            EnableCharacterCollision(46620912);              
        }
        
        if (EventFlag(64012)) {
            EnableCharacter(46620820);
            EnableCharacterCollision(46620820);
            EnableCharacter(46625820);
            EnableCharacterCollision(46625820);
            // Enable mount npcs
            EnableCharacter(46620922);
            EnableCharacterCollision(46620922);              
        }

        if (EventFlag(64013)) {
            EnableCharacter(46620830);
            EnableCharacterCollision(46620830);
            EnableCharacter(46625830);
            EnableCharacterCollision(46625830);
            // Enable mount npcs
            EnableCharacter(46620932);
            EnableCharacterCollision(46620932);              
        }
  
        if (EventFlag(64014)) {
            EnableCharacter(46620840);
            EnableCharacterCollision(46620840);
            EnableCharacter(46625840);
            EnableCharacterCollision(46625840);
            // Enable mount npcs
            EnableCharacter(46620942);
            EnableCharacterCollision(46620942);              
        }  

        if (EventFlag(64015)) {
            EnableCharacter(46620850);
            EnableCharacterCollision(46620850);
            EnableCharacter(46625850);
            EnableCharacterCollision(46625850);
            // Enable mount npcs
            EnableCharacter(46620952);
            EnableCharacterCollision(46620952);              
        }
    }
    
    if (EventFlag(64001)) {
        EnableCharacter(46620860);
        EnableCharacterCollision(46620860);
        EnableCharacter(46625860);
        EnableCharacterCollision(46625860);
    }    
    
    if (EventFlag(64002)) {
        EnableCharacter(46620870);
        EnableCharacterCollision(46620870);
        EnableCharacter(46625870);
        EnableCharacterCollision(46625870);
    }
    
    if (EventFlag(64003)) {
        EnableCharacter(46620880);
        EnableCharacterCollision(46620880);
        EnableCharacter(46625880);
        EnableCharacterCollision(46625880);        
    }
    
    if (EventFlag(64004)) {
        EnableCharacter(46620890);
        EnableCharacterCollision(46620890);
        EnableCharacter(46625890);
        EnableCharacterCollision(46625890);        
    }
    
    $InitializeCommonEvent(0, 90015000, 0, 46625800, 904311001, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46625800, 30, 921010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46625800, 46625800, 1020, 921010, 11290, 904311001, 46625800);
    $InitializeCommonEvent(0, 9005810, 46625800, 46620500, 46621500, 5);
    $InitializeCommonEvent(0, 90015005, 46621500, 46622800, 46625800);
    $InitializeCommonEvent(0, 90015000, 0, 46625810, 904311002, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46625810, 30, 921010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46625810, 46625810, 1020, 921010, 11290, 904311002, 46625810);
    $InitializeCommonEvent(0, 9005810, 46625810, 46620500, 46621500, 5);
    $InitializeCommonEvent(0, 90015005, 46621500, 46622800, 46625810);
    $InitializeCommonEvent(0, 90015000, 0, 46625820, 904311003, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46625820, 30, 921010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46625820, 4662582, 1020, 921010, 11290, 904311003, 46625820);
    $InitializeCommonEvent(0, 9005810, 46625820, 46620500, 46621500, 5);
    $InitializeCommonEvent(0, 90015005, 46621500, 46622800, 46625820);
    $InitializeCommonEvent(0, 90015000, 0, 46625830, 904311004, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46625830, 30, 921010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46625830, 46625830, 1020, 921010, 11290, 904311004, 46625830);
    $InitializeCommonEvent(0, 9005810, 46625830, 46620500, 46621500, 5);
    $InitializeCommonEvent(0, 90015005, 46621500, 46622800, 46625830);
    $InitializeCommonEvent(0, 90015000, 0, 46625840, 904311006, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46625840, 30, 921010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46625840, 46625840, 1020, 921010, 11290, 904311006, 46625840);
    $InitializeCommonEvent(0, 9005810, 46625840, 46620500, 46621500, 5);
    $InitializeCommonEvent(0, 90015005, 46621500, 46622800, 46625840);
    $InitializeCommonEvent(0, 90015000, 0, 46625850, 904311005, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46625850, 30, 921010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46625850, 46625850, 1020, 921010, 11290, 904311005, 46625850);
    $InitializeCommonEvent(0, 9005810, 46625850, 46620500, 46621500, 5);
    $InitializeCommonEvent(0, 90015005, 46621500, 46622800, 46625850);
    $InitializeCommonEvent(0, 90015000, 0, 46625860, 903700302, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46625860, 30, 921010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46625860, 46625860, 1020, 921010, 11290, 903700302, 46625860);
    $InitializeCommonEvent(0, 9005810, 46625860, 46620500, 46621500, 5);
    $InitializeCommonEvent(0, 90015005, 46621500, 46622800, 46625860);
    $InitializeCommonEvent(0, 90015000, 0, 46625870, 903550542, 30, 0, 0);
    $InitializeCommonEvent(0, 90015030, 0, 46625870, 30, 921010, 0);
    $InitializeCommonEvent(0, 90015002, 0, 0, 46625870, 46625870, 1020, 921010, 11290, 903550542, 46625870);
    $InitializeCommonEvent(0, 9005810, 46625870, 46620500, 46621500, 5);
    $InitializeCommonEvent(0, 90015005, 46621500, 46622800, 46625870);
    GotoIf(S0, Signed(0) != 0);
    GotoIf(S0, 0 != 0);
    Goto(S1);
S0:
    $InitializeCommonEvent(0, 90015008, 0, 46620800, 921010, 46625800, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46620800, 921010, 46625810, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46620800, 921010, 46625820, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46620800, 921010, 46625830, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46620800, 921010, 46625840, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46620800, 921010, 46625850, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46620800, 921010, 46625860, 0, 0);
    $InitializeCommonEvent(0, 90015008, 0, 46620800, 921010, 46625870, 0, 0);   
S1:
    if (0 != 0) {
        $InitializeCommonEvent(0, 90015013);
    }
    $InitializeCommonEvent(0, 90015015, 46625800);
    $InitializeCommonEvent(0, 90015016, 46625800);
    $InitializeCommonEvent(0, 90015015, 46625810);
    $InitializeCommonEvent(0, 90015016, 46625810);
    $InitializeCommonEvent(0, 90015015, 46625820);
    $InitializeCommonEvent(0, 90015016, 46625820);
    $InitializeCommonEvent(0, 90015015, 46625830);
    $InitializeCommonEvent(0, 90015016, 46625830);
    $InitializeCommonEvent(0, 90015015, 46625840);
    $InitializeCommonEvent(0, 90015016, 46625840);
    $InitializeCommonEvent(0, 90015015, 46625850);
    $InitializeCommonEvent(0, 90015016, 46625850);
    $InitializeCommonEvent(0, 90015015, 46625860);
    $InitializeCommonEvent(0, 90015016, 46625860);
    $InitializeCommonEvent(0, 90015015, 46625870);
    $InitializeCommonEvent(0, 90015016, 46625870);  
    if (EventFlag(7604)) {
        $InitializeCommonEvent(0, 90015071, 46625800);
        $InitializeCommonEvent(0, 90015468, 46625800, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46625810);
        $InitializeCommonEvent(0, 90015468, 46625810, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46625820);
        $InitializeCommonEvent(0, 90015468, 46625820, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46625830);
        $InitializeCommonEvent(0, 90015468, 46625830, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46625840);
        $InitializeCommonEvent(0, 90015468, 46625840, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46625850);
        $InitializeCommonEvent(0, 90015468, 46625850, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46625860);
        $InitializeCommonEvent(0, 90015468, 46625860, 8270, 8247);
        $InitializeCommonEvent(0, 90015071, 46625870);
        $InitializeCommonEvent(0, 90015468, 46625870, 8270, 8247);
    }
    $InitializeCommonEvent(0, 90065111, 46625800, 46625810, 6001, 46625800);
    $InitializeCommonEvent(0, 90065112, 46625800, 46625810, 6001, 46625800);
    $InitializeCommonEvent(0, 90015199, 46625800);
    $InitializeCommonEvent(0, 90065111, 46625810, 46625830, 6001, 46625810);
    $InitializeCommonEvent(0, 90065112, 46625810, 46625830, 6001, 46625810);
    $InitializeCommonEvent(0, 90015199, 46625810);
    $InitializeCommonEvent(0, 90065111, 46625820, 46625850, 6001, 46625820);
    $InitializeCommonEvent(0, 90065112, 46625820, 46625850, 6001, 46625820);
    $InitializeCommonEvent(0, 90015199, 46625820);
    $InitializeCommonEvent(0, 90065111, 46625830, 46620870, 6001, 46625830);
    $InitializeCommonEvent(0, 90065112, 46625830, 46620870, 6001, 46625830);
    $InitializeCommonEvent(0, 90015199, 46625830);
    $InitializeCommonEvent(0, 90065111, 46625840, 46620890, 6001, 46625840);
    $InitializeCommonEvent(0, 90065112, 46625840, 46620890, 6001, 46625840);
    $InitializeCommonEvent(0, 90015199, 46625840);
    $InitializeCommonEvent(0, 90065111, 46625850, 46620910, 6001, 46625850);
    $InitializeCommonEvent(0, 90065112, 46625850, 46620910, 6001, 46625850);
    $InitializeCommonEvent(0, 90015199, 46625850);
    $InitializeCommonEvent(0, 90065111, 46625860, 46620910, 6001, 46625860);
    $InitializeCommonEvent(0, 90065112, 46625860, 46620910, 6001, 46625860);
    $InitializeCommonEvent(0, 90015199, 46625860);
    $InitializeCommonEvent(0, 90065111, 46625870, 46620910, 6001, 46625870);
    $InitializeCommonEvent(0, 90065112, 46625870, 46620910, 6001, 46625870);
    $InitializeCommonEvent(0, 90015199, 46625870);  
    if (IsPlayMode(2)) {
        $InitializeCommonEvent(0, 90015040, 0);
    }
});

$Event(46622200, Default, function(chrEntityId) {
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
