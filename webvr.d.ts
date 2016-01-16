// Type definitions for webVR v0.1.0
// Project: http://webvr.info/
// Definitions by: Yasu-umiNishikawa <https://github.com/Yasu-umi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare enum VREye { right, left }

interface VRFieldOfView {
    downDegrees: number;
    leftDegrees: number;
    rightDegrees: number;
    upDegrees: number;
}

interface DOMPoint {
    w: number;
    x: number;
    y: number;
    z: number;
}

interface DOMRect {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
    x: number;
    y: number;    
}

interface VREyeParameters {
    minimumFieldOfView: VRFieldOfView;
    maximumFieldOfView: VRFieldOfView;
    recommendedFieldOfView: VRFieldOfView;
    currentFieldOfView: VRFieldOfView;
    eyeTranslation: DOMPoint;
    renderRect: DOMRect;
}

interface VRPositionState {
    timestamp: number;
    hasPosition: boolean;
    position: DOMPoint;
    linearVelocity: DOMPoint;
    linearAcceleration: DOMPoint;
    hasOrientation: boolean;
    orientation: DOMPoint;
    angularVelocity: DOMPoint;
    AnfularAcceleration: DOMPoint;
}

interface VRDevice {
    hardwareUnitId: string;
    deviceId: string;
    deviceName: string;
}

interface HMDVRDevice extends VRDevice {
    getEyeParameters(VREye: VREye): VREyeParameters;
    setFieldOfView(leftFOV?:number, rightFOV?:number, zNead?: number, Zfar?:number): void;
}

declare var HMDVRDevice: {
    prototype: HMDVRDevice;
    new(): HMDVRDevice;
}

interface PositionSensorVRDevice extends VRDevice {
    getImmediateState(): VRPositionState;
    getState(): VRPositionState;
    resetSensor(): void;
}

declare var PositionSensorVRDevice: {
    prototype: PositionSensorVRDevice;
    new(): PositionSensorVRDevice;
}

interface Navigator {
    getVRDevices(): Promise<VRDevice[]>;
}
