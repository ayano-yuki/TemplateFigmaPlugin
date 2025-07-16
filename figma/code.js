"use strict";
/// <reference types="@figma/plugin-typings" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, { width: 320, height: 200 });
let stampMode = false;
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (msg.type === 'start-stamp') {
            stampMode = true;
            figma.ui.postMessage({ type: 'status', message: 'スタンプモード中: 座標を指定して円を作成できます' });
        }
        else if (msg.type === 'stop-stamp') {
            stampMode = false;
            figma.ui.postMessage({ type: 'status', message: 'スタンプモード終了' });
        }
        else if (msg.type === 'create-stamp' && stampMode) {
            if (typeof msg.x !== 'number' || typeof msg.y !== 'number' || isNaN(msg.x) || isNaN(msg.y)) {
                figma.ui.postMessage({ type: 'error', message: '座標が正しく入力されていません' });
                figma.ui.postMessage({ type: 'status', message: '' });
                return;
            }
            const { x, y } = msg;
            const ellipse = figma.createEllipse();
            ellipse.x = x;
            ellipse.y = y;
            ellipse.resize(100, 100);
            figma.currentPage.appendChild(ellipse);
            figma.currentPage.selection = [ellipse];
            figma.viewport.scrollAndZoomIntoView([ellipse]);
            figma.ui.postMessage({ type: 'status', message: `(${x}, ${y}) に円を作成しました` });
        }
    }
    catch (error) {
        figma.ui.postMessage({ type: 'error', message: error.message || String(error) });
        figma.ui.postMessage({ type: 'status', message: '' });
    }
});
