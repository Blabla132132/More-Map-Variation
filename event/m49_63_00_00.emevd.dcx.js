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
        if (EventFlag(49630000)) {
            $InitializeCommonEvent(0, 90055000, 49635200, 1, 49632200, 49630201);
            $InitializeCommonEvent(0, 90055001, 49635200, 1, 49630201, 49630200);
        }
        if (EventFlag(49630001)) {
            $InitializeCommonEvent(0, 90055000, 49635200, 2, 49632200, 49630201);
            $InitializeCommonEvent(0, 90055001, 49635200, 2, 49630201, 49630200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49630200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49632200, 49630200);
    }
    $InitializeCommonEvent(0, 90065910, 49630200, 49630205, 49630800, 950010, 690047, 49635210, 49630800, 902190000, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49630200, 49630800, 950010, 49635210, 49630800, 902190000, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49630800, 1, 0, 0, 1050, 950010, 902190000, 49630800);
    }
    $InitializeCommonEvent(0, 90015012, 49635210, 49630200);
    $InitializeCommonEvent(1, 90015012, 0, 49630200);
    $InitializeCommonEvent(0, 90015020, 49630200, 49630800);
    $InitializeCommonEvent(0, 90015008, 49630205, 49630800, 950010, 49630800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49632200, 49630800);
        $InitializeCommonEvent(0, 90015023, 49630200, 40, 0, 49635210, 49630800, 902190000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49630200, 49635210, 40, 950010, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49630200, 0, 49635210, 1020, 950010, 110320, 902190000, 49630800);
        $InitializeCommonEvent(0, 90015470, 49632200, 49630200, 49630800, 49635210, 0, 0, 49635210);
        $InitializeCommonEvent(0, 90015446, 49635210, 49630200, 49630800, 49632200);
        $InitializeCommonEvent(0, 90015460, 49632200, 49630800);
        $InitializeCommonEvent(0, 90015460, 49632200, 0);
        $InitializeCommonEvent(0, 90015460, 49632200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49632200, 49630800);
        $InitializeCommonEvent(0, 90015475, 49632200, 0);
        $InitializeCommonEvent(0, 90015475, 49632200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49630800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49630000, 49630300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49630000, 49630300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49630000, 49630300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49630000, 49630300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49630000, 49630300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49630000, 49630300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49630000, 49630301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49630000, 49630301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49630000, 49630301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49630000, 49630301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49630000, 49630301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49630000, 49630301);
    }
});

$Event(496302800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49632810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    ForceAnimationPlayback(49630800, 20012, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49630801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49630800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});
