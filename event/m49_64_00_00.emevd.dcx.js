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
        if (EventFlag(49640000)) {
            $InitializeCommonEvent(0, 90055000, 49645200, 1, 49642200, 49640201);
            $InitializeCommonEvent(0, 90055001, 49645200, 1, 49640201, 49640200);
        }
        if (EventFlag(49640001)) {
            $InitializeCommonEvent(0, 90055000, 49645200, 2, 49642200, 49640201);
            $InitializeCommonEvent(0, 90055001, 49645200, 2, 49640201, 49640200);
        }
    }
    if (IsMapVariation(1)) {
        $InitializeCommonEvent(0, 90035000, 49640200);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015442, 49642200, 49640200);
    }
    $InitializeCommonEvent(0, 90065910, 49640200, 49640205, 49640800, 950010, 690047, 49645210, 49640800, 904964000, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90065911, 49640200, 49640800, 950010, 49645210, 49640800, 904964000, 0, 0, 0, 0, 0);
    if (!IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90065900, 49640800, 1, 0, 0, 1050, 950010, 904964000, 49640800);
    }
    $InitializeCommonEvent(0, 90015012, 49645210, 49640200);
    $InitializeCommonEvent(1, 90015012, 0, 49640200);
    $InitializeCommonEvent(0, 90015020, 49640200, 49640800);
    $InitializeCommonEvent(0, 90015008, 49640205, 49640800, 950010, 49640800, 14771, 0);
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015443, 49642200, 49640800);
        $InitializeCommonEvent(0, 90015023, 49640200, 40, 0, 49645210, 49640800, 904964000, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90015030, 49640200, 49645210, 40, 950010, 0);
        $InitializeCommonEvent(0, 90015002, 0, 49640200, 0, 49645210, 1020, 950010, 110320, 904964000, 49640800);
        $InitializeCommonEvent(0, 90015470, 49642200, 49640200, 49640800, 49645210, 0, 0, 49645210);
        $InitializeCommonEvent(0, 90015446, 49645210, 49640200, 49640800, 49642200);
        $InitializeCommonEvent(0, 90015460, 49642200, 49640800);
        $InitializeCommonEvent(0, 90015460, 49642200, 0);
        $InitializeCommonEvent(0, 90015460, 49642200, 0);
    }
    if (IsMapVariation(2)) {
        $InitializeCommonEvent(0, 90015475, 49642200, 49640800);
        $InitializeCommonEvent(0, 90015475, 49642200, 0);
        $InitializeCommonEvent(0, 90015475, 49642200, 0);
    }
    $InitializeCommonEvent(0, 90035001, 49640800);
    if (1 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49640000, 49640300);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49640000, 49640300);
    }
    if (1 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49640000, 49640300);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49640000, 49640300);
    }
    if (1 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49640000, 49640300);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49640000, 49640300);
    }
    if (2 == 1) {
        $InitializeCommonEvent(0, 90015070, 1056402601, 49640000, 49640301);
        $InitializeCommonEvent(0, 90015070, 1028402600, 49640000, 49640301);
    }
    if (2 == 2) {
        $InitializeCommonEvent(0, 90015070, 1056402602, 49640000, 49640301);
        $InitializeCommonEvent(0, 90015070, 1028402601, 49640000, 49640301);
    }
    if (2 == 3) {
        $InitializeCommonEvent(0, 90015070, 1056402603, 49640000, 49640301);
        $InitializeCommonEvent(0, 90015070, 1028402602, 49640000, 49640301);
    }
});

$Event(496402800, Default, function(chrEntityId, assetEntityId, chrEntityId2, eventFlagId, eventFlagId2, eventFlagId3) {
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

$Event(49642810, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, nameId, eventFlagId4, eventFlagId5) {
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
    ForceAnimationPlayback(49640800, 20012, false, false, false);
    DisableCharacterHPBarDisplay(chrEntityId);
    DisableCharacterHPBarDisplay(49640801);
    EnableCharacterAI(chrEntityId);
    SetNetworkUpdateRate(49640800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
});
