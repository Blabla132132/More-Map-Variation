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
        if (EventFlag(49570000)) {
            $InitializeCommonEvent(0, 90055000, 49575200, 1, 49572200, 49570201);
            $InitializeCommonEvent(0, 90055001, 49575200, 1, 49570201, 49570200);
        }
        if (EventFlag(49570001)) {
            $InitializeCommonEvent(0, 90055000, 49575200, 2, 49572200, 49570201);
            $InitializeCommonEvent(0, 90055001, 49575200, 2, 49570201, 49570200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49570200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49572200, 49570200);
    }
    $InitializeCommonEvent(0, 90065910, 49570200, 49570205, 49570800, 950010, 690047, 49575210, 49570800, 904957000, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49570200, 49570800, 950010, 49575210, 49570800, 904957000, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49570800, 1, 0, 0, 1050, 950010, 904957000, 49570800);
    }
    $InitializeCommonEvent(0, 90015012, 49575210, 49570200);
    $InitializeCommonEvent(1, 90015012, 0, 49570200);
    $InitializeCommonEvent(0, 90015020, 49570200, 49570800);
    $InitializeCommonEvent(0, 90015008, 49570205, 49570800, 950010, 49570800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49572200, 49570800);
        $InitializeCommonEvent(0, 90015023, 49570200, 40, 0, 49575210, 49570800, 904957000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49570200, 49575210, 40, 950010, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49570200, 0, 49575210, 1020, 950010, 110320, 904957000, 49570800);
        $InitializeCommonEvent(0, 90015470, 49572200, 49570200, 49570800, 49575210, 0, 0, 49575210);
        $InitializeCommonEvent(0, 90015446, 49575210, 49570200, 49570800, 49572200);
        $InitializeCommonEvent(0, 90015460, 49572200, 49570800);
        $InitializeCommonEvent(0, 90015460, 49572200, 0);
        $InitializeCommonEvent(0, 90015460, 49572200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49572200, 49570800);
        $InitializeCommonEvent(0, 90015475, 49572200, 0);
        $InitializeCommonEvent(0, 90015475, 49572200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49570800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49570000, 49570300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49570000, 49570300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49570000, 49570300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49570000, 49570300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49570000, 49570300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49570000, 49570300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49570000, 49570301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49570000, 49570301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49570000, 49570301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49570000, 49570301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49570000, 49570301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49570000, 49570301);
    }
});

$Event(495702800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49572810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    ForceAnimationPlayback(49570800, 20012, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49570801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49570800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});
