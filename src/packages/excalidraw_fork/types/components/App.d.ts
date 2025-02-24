import React from "react";
import { RoughCanvas } from "roughjs/bin/canvas";
import { ActionManager } from "../actions/manager";
import { EXPORT_IMAGE_TYPES } from "../constants";
import { LinearElementEditor } from "../element/linearElementEditor";
import { ExcalidrawElement, NonDeletedExcalidrawElement } from "../element/types";
import History from "../history";
import Scene from "../scene/Scene";
import { AppClassProperties, AppProps, AppState, ExcalidrawImperativeAPI, BinaryFiles, LibraryItems, SceneData, Device, FrameNameBoundsCache, SidebarName, SidebarTabName, ToolType } from "../types";
import { FileSystemHandle } from "../data/filesystem";
import { Renderer } from "../scene/Renderer";
import { LaserPathManager } from "./LaserTool/LaserPathManager";
export declare const ExcalidrawContainerContext: React.Context<{
    container: HTMLDivElement | null;
    id: string | null;
}>;
export declare const useApp: () => AppClassProperties;
export declare const useAppProps: () => AppProps;
export declare const useDevice: () => Readonly<{
    isSmScreen: boolean;
    isMobile: boolean;
    isTouchScreen: boolean;
    canDeviceFitSidebar: boolean;
    isLandscape: boolean;
}>;
export declare const useExcalidrawContainer: () => {
    container: HTMLDivElement | null;
    id: string | null;
};
export declare const useExcalidrawElements: () => readonly NonDeletedExcalidrawElement[];
export declare const useExcalidrawAppState: () => AppState;
export declare const useExcalidrawSetAppState: () => <K extends keyof AppState>(state: AppState | ((prevState: Readonly<AppState>, props: Readonly<any>) => AppState | Pick<AppState, K> | null) | Pick<AppState, K> | null, callback?: (() => void) | undefined) => void;
export declare const useExcalidrawActionManager: () => ActionManager;
declare class App extends React.Component<AppProps, AppState> {
    canvas: AppClassProperties["canvas"];
    interactiveCanvas: AppClassProperties["interactiveCanvas"];
    rc: RoughCanvas;
    unmounted: boolean;
    actionManager: ActionManager;
    device: Device;
    detachIsMobileMqHandler?: () => void;
    private excalidrawContainerRef;
    static defaultProps: Partial<AppProps>;
    scene: Scene;
    renderer: Renderer;
    private fonts;
    private resizeObserver;
    private nearestScrollableContainer;
    library: AppClassProperties["library"];
    libraryItemsFromStorage: LibraryItems | undefined;
    id: string;
    private history;
    private excalidrawContainerValue;
    files: BinaryFiles;
    imageCache: AppClassProperties["imageCache"];
    private iFrameRefs;
    hitLinkElement?: NonDeletedExcalidrawElement;
    lastPointerDownEvent: React.PointerEvent<HTMLElement> | null;
    lastPointerUpEvent: React.PointerEvent<HTMLElement> | PointerEvent | null;
    lastViewportPosition: {
        x: number;
        y: number;
    };
    laserPathManager: LaserPathManager;
    constructor(props: AppProps);
    private onWindowMessage;
    private updateEmbeddableRef;
    private getHTMLIFrameElement;
    private handleEmbeddableCenterClick;
    private isEmbeddableCenter;
    private updateEmbeddables;
    private renderEmbeddables;
    private getFrameNameDOMId;
    frameNameBoundsCache: FrameNameBoundsCache;
    private renderFrameNames;
    render(): JSX.Element;
    focusContainer: AppClassProperties["focusContainer"];
    getSceneElementsIncludingDeleted: () => readonly ExcalidrawElement[];
    getSceneElements: () => readonly NonDeletedExcalidrawElement[];
    onInsertElements: (elements: readonly ExcalidrawElement[]) => void;
    onExportImage: (type: keyof typeof EXPORT_IMAGE_TYPES, elements: readonly NonDeletedExcalidrawElement[]) => Promise<void>;
    private openEyeDropper;
    private syncActionResult;
    private onBlur;
    private onUnload;
    private disableEvent;
    private resetHistory;
    /**
     * Resets scene & history.
     * ! Do not use to clear scene user action !
     */
    private resetScene;
    private initializeScene;
    private refreshDeviceState;
    componentDidMount(): Promise<void>;
    componentWillUnmount(): void;
    private onResize;
    private removeEventListeners;
    private addEventListeners;
    componentDidUpdate(prevProps: AppProps, prevState: AppState): void;
    private renderInteractiveSceneCallback;
    private onScroll;
    private onCut;
    private onCopy;
    private cutAll;
    private copyAll;
    private static resetTapTwice;
    private onTouchStart;
    private onTouchEnd;
    pasteFromClipboard: (event: ClipboardEvent | null) => Promise<void>;
    private addElementsFromPasteOrLibrary;
    private addTextFromPaste;
    setAppState: React.Component<any, AppState>["setState"];
    removePointer: (event: React.PointerEvent<HTMLElement> | PointerEvent) => void;
    toggleLock: (source?: "keyboard" | "ui") => void;
    updateFrameRendering: (opts: Partial<{
        enabled: boolean;
        name: boolean;
        outline: boolean;
        clip: boolean;
    }> | ((prevState: AppState["frameRendering"]) => Partial<AppState["frameRendering"]>)) => void;
    togglePenMode: (force?: boolean) => void;
    onHandToolToggle: () => void;
    /**
     * Zooms on canvas viewport center
     */
    zoomCanvas: (value: number) => void;
    private cancelInProgresAnimation;
    scrollToContent: (target?: ExcalidrawElement | readonly ExcalidrawElement[], opts?: {
        fitToContent?: boolean;
        fitToViewport?: never;
        viewportZoomFactor?: never;
        animate?: boolean;
        duration?: number;
    } | {
        fitToContent?: never;
        fitToViewport?: boolean;
        /** when fitToViewport=true, how much screen should the content cover,
         * between 0.1 (10%) and 1 (100%)
         */
        viewportZoomFactor?: number;
        animate?: boolean;
        duration?: number;
    }) => void;
    /** use when changing scrollX/scrollY/zoom based on user interaction */
    private translateCanvas;
    setToast: (toast: {
        message: string;
        closable?: boolean;
        duration?: number;
    } | null) => void;
    restoreFileFromShare: () => Promise<void>;
    /** adds supplied files to existing files in the appState */
    addFiles: ExcalidrawImperativeAPI["addFiles"];
    updateScene: <K extends keyof AppState>(sceneData: {
        elements?: SceneData["elements"];
        appState?: Pick<AppState, K> | null | undefined;
        collaborators?: SceneData["collaborators"];
        commitToHistory?: SceneData["commitToHistory"];
    }) => void;
    private onSceneUpdated;
    /**
     * @returns whether the menu was toggled on or off
     */
    toggleSidebar: ({ name, tab, force, }: {
        name: SidebarName;
        tab?: string | undefined;
        force?: boolean | undefined;
    }) => boolean;
    private updateCurrentCursorPosition;
    private onKeyDown;
    private onWheel;
    private onKeyUp;
    setActiveTool: (tool: {
        type: ToolType;
    } | {
        type: "custom";
        customType: string;
    }) => void;
    private setCursor;
    private resetCursor;
    /**
     * returns whether user is making a gesture with >= 2 fingers (points)
     * on o touch screen (not on a trackpad). Currently only relates to Darwin
     * (iOS/iPadOS,MacOS), but may work on other devices in the future if
     * GestureEvent is standardized.
     */
    private isTouchScreenMultiTouchGesture;
    private onGestureStart;
    private onGestureChange;
    private onGestureEnd;
    private handleTextWysiwyg;
    private deselectElements;
    private getTextElementAtPosition;
    private getElementAtPosition;
    private getElementsAtPosition;
    private startTextEditing;
    private handleCanvasDoubleClick;
    private getElementLinkAtPosition;
    private redirectToLink;
    private getTopLayerFrameAtSceneCoords;
    private handleCanvasPointerMove;
    private handleEraser;
    private handleTouchMove;
    handleHoverSelectedLinearElement(linearElementEditor: LinearElementEditor, scenePointerX: number, scenePointerY: number): void;
    private handleCanvasPointerDown;
    private handleCanvasPointerUp;
    private maybeOpenContextMenuAfterPointerDownOnTouchDevices;
    private resetContextMenuTimer;
    private maybeCleanupAfterMissingPointerUp;
    private handleCanvasPanUsingWheelOrSpaceDrag;
    private updateGestureOnPointerDown;
    private initialPointerDownState;
    private handleDraggingScrollBar;
    private clearSelectionIfNotUsingSelection;
    /**
     * @returns whether the pointer event has been completely handled
     */
    private handleSelectionOnPointerDown;
    private isASelectedElement;
    private isHittingCommonBoundingBoxOfSelectedElements;
    private handleTextOnPointerDown;
    private handleFreeDrawElementOnPointerDown;
    private insertEmbeddableElement;
    private createImageElement;
    private handleLinearElementOnPointerDown;
    private getCurrentItemRoundness;
    private createGenericElementOnPointerDown;
    private createFrameElementOnPointerDown;
    private maybeCacheReferenceSnapPoints;
    private maybeCacheVisibleGaps;
    private onKeyDownFromPointerDownHandler;
    private onKeyUpFromPointerDownHandler;
    private onPointerMoveFromPointerDownHandler;
    private handlePointerMoveOverScrollbars;
    private onPointerUpFromPointerDownHandler;
    private restoreReadyToEraseElements;
    private eraseElements;
    private initializeImage;
    /**
     * inserts image into elements array and rerenders
     */
    private insertImageElement;
    private setImagePreviewCursor;
    private onImageAction;
    private initializeImageDimensions;
    /** updates image cache, refreshing updated elements and/or setting status
        to error for images that fail during <img> element creation */
    private updateImageCache;
    /** adds new images to imageCache and re-renders if needed */
    private addNewImagesToImageCache;
    /** generally you should use `addNewImagesToImageCache()` directly if you need
     *  to render new images. This is just a failsafe  */
    private scheduleImageRefresh;
    private updateBindingEnabledOnPointerMove;
    private maybeSuggestBindingAtCursor;
    private maybeSuggestBindingsForLinearElementAtCoords;
    private maybeSuggestBindingForAll;
    private clearSelection;
    private handleInteractiveCanvasRef;
    private handleAppOnDrop;
    loadFileToCanvas: (file: File, fileHandle: FileSystemHandle | null) => Promise<void>;
    private handleCanvasContextMenu;
    private maybeDragNewGenericElement;
    private maybeHandleResize;
    private getContextMenuItems;
    private handleWheel;
    private getTextWysiwygSnappedToCenterPosition;
    private savePointer;
    private resetShouldCacheIgnoreZoomDebounced;
    private updateDOMRect;
    refresh: () => void;
    private getCanvasOffsets;
    private updateLanguage;
}
declare global {
    interface Window {
        h: {
            elements: readonly ExcalidrawElement[];
            state: AppState;
            setState: React.Component<any, AppState>["setState"];
            app: InstanceType<typeof App>;
            history: History;
        };
    }
}
export default App;
