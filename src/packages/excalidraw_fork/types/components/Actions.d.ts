import { ActionManager } from "../actions/manager";
import { ExcalidrawElement, PointerType } from "../element/types";
import { AppClassProperties, UIAppState, Zoom } from "../types";
import "./Actions.scss";
export declare const SelectedShapeActions: ({ appState, elements, renderAction, }: {
    appState: UIAppState;
    elements: readonly ExcalidrawElement[];
    renderAction: ActionManager["renderAction"];
}) => JSX.Element;
export declare const ShapesSwitcher: ({ interactiveCanvas, activeTool, onImageAction, appState, app, }: {
    interactiveCanvas: HTMLCanvasElement | null;
    activeTool: UIAppState["activeTool"];
    onImageAction: (data: {
        pointerType: PointerType | null;
    }) => void;
    appState: UIAppState;
    app: AppClassProperties;
}) => JSX.Element;
export declare const ZoomActions: ({ renderAction, zoom, }: {
    renderAction: ActionManager["renderAction"];
    zoom: Zoom;
}) => JSX.Element;
export declare const UndoRedoActions: ({ renderAction, className, }: {
    renderAction: ActionManager["renderAction"];
    className?: string | undefined;
}) => JSX.Element;
export declare const ExitZenModeAction: ({ actionManager, showExitZenModeBtn, }: {
    actionManager: ActionManager;
    showExitZenModeBtn: boolean;
}) => JSX.Element;
export declare const FinalizeAction: ({ renderAction, className, }: {
    renderAction: ActionManager["renderAction"];
    className?: string | undefined;
}) => JSX.Element;
