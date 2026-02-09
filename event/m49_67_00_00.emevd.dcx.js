// ==EMEVD==
// @docs    nr-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "W:\\CL\\data\\Param\\event\\common_func.emevd\u0000W:\\CL\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.2
// ==/EMEVD==

$Event(0, Default, function() {
    if (IsMapVariation(0)) {
        if (EventFlag(49670000)) {
            $InitializeCommonEvent(0, 90055000, 49675200, 1, 49672200, 49670201);
            $InitializeCommonEvent(0, 90055001, 49675200, 1, 49670201, 49670200);
        }
        if (EventFlag(49670001)) {
            $InitializeCommonEvent(0, 90055000, 49675200, 2, 49672200, 49670201);
            $InitializeCommonEvent(0, 90055001, 49675200, 2, 49670201, 49670200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49670200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49672200, 49670200);
    }
    $InitializeCommonEvent(0, 90065910, 49670200, 49670205, 49670800, 475000, 690047, 49675210, 49670800, 904967000, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49670200, 49670800, 475000, 49675210, 49670800, 904967000, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49670800, 1, 0, 0, 1050, 475000, 904967000, 49670800);
    }
    $InitializeCommonEvent(0, 90015012, 49675210, 49670200);
    $InitializeCommonEvent(1, 90015012, 0, 49670200);
    $InitializeCommonEvent(0, 90015020, 49670200, 49670800);
    $InitializeCommonEvent(0, 90015008, 49670205, 49670800, 475000, 49670800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49672200, 49670800);
        $InitializeCommonEvent(0, 90015023, 49670200, 40, 0, 49675210, 49670800, 904967000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49670200, 49675210, 40, 475000, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49670200, 0, 49675210, 1020, 475000, 110320, 904967000, 49670800);
        $InitializeCommonEvent(0, 90015470, 49672200, 49670200, 49670800, 49675210, 0, 0, 49675210);
        $InitializeCommonEvent(0, 90015446, 49675210, 49670200, 49670800, 49672200);
        $InitializeCommonEvent(0, 90015460, 49672200, 49670800);
        $InitializeCommonEvent(0, 90015460, 49672200, 0);
        $InitializeCommonEvent(0, 90015460, 49672200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49672200, 49670800);
        $InitializeCommonEvent(0, 90015475, 49672200, 0);
        $InitializeCommonEvent(0, 90015475, 49672200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49670800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49670000, 49670300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49670000, 49670300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49670000, 49670300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49670000, 49670300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49670000, 49670300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49670000, 49670300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49670000, 49670301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49670000, 49670301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49670000, 49670301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49670000, 49670301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49670000, 49670301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49670000, 49670301);
    }
});

$Event(496702800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(HPRatio(chrEntityId) <= 0);
    WaitFixedTimeSeconds(4);
    WaitFor(CharacterDead(chrEntityId));
    DisplayBossHealthBar(Disabled, chrEntityId, 0, 0);
    if (assetEntityId != 0) {
        EnableAsset(assetEntityId);
    }
    if (chrEntityId2 != 0) {
        EnableCharacter(chrEntityId2);
    }
    if (!EventFlag(eventFlagId3)) {
        SetEventFlagID(eventFlagId, ON);
        EndEvent();
    }
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(ElapsedSeconds(3));
    DisableCharacter(chrEntityId);
});

$Event(49672810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
    if (EventFlag(eventFlagId4) || EventFlag(eventFlagId5)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
L0:
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableCharacterAI(chrEntityId);
    flag = EventFlag(7515) && (EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    WaitFor(EventFlag(eventFlagId3));
    WaitFixedTimeSeconds(1);
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterAI(chrEntityId);
    ForceAnimationPlayback(49670800, 20012, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49670801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49670800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});
