import React from "react";
import { ActionManager } from "../actions/manager";
import { NonDeletedExcalidrawElement } from "../element/types";
import { Language } from "../i18n";
import { AppProps, AppState, ExcalidrawProps, BinaryFiles, UIAppState, AppClassProperties } from "../types";
import "./LayerUI.scss";
import "./Toolbar.scss";
interface LayerUIProps {
    actionManager: ActionManager;
    appState: UIAppState;
    files: BinaryFiles;
    canvas: HTMLCanvasElement;
    interactiveCanvas: HTMLCanvasElement | null;
    setAppState: React.Component<any, AppState>["setState"];
    elements: readonly NonDeletedExcalidrawElement[];
    onLockToggle: () => void;
    onHandToolToggle: () => void;
    onPenModeToggle: () => void;
    showExitZenModeBtn: boolean;
    langCode: Language["code"];
    renderTopRightUI?: ExcalidrawProps["renderTopRightUI"];
    renderCustomStats?: ExcalidrawProps["renderCustomStats"];
    UIOptions: AppProps["UIOptions"];
    onImageAction: (data: {
        insertOnCanvasDirectly: boolean;
    }) => void;
    onExportImage: AppClassProperties["onExportImage"];
    renderWelcomeScreen: boolean;
    children?: React.ReactNode;
    app: AppClassProperties;
    isCollaborating: boolean;
}
declare const _default: React.MemoExoticComponent<({ actionManager, appState, files, setAppState, elements, canvas, interactiveCanvas, onLockToggle, onHandToolToggle, onPenModeToggle, showExitZenModeBtn, renderTopRightUI, renderCustomStats, UIOptions, onImageAction, onExportImage, renderWelcomeScreen, children, app, isCollaborating, }: LayerUIProps) => JSX.Element>;
export default _default;
