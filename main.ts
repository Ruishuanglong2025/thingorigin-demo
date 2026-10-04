// 引入3d引擎
import "thingorigin"

// 使用3d引擎
console.dir(ThingOrigin)

// 引擎ts类型检测
declare global {
    const ThingOrigin: {
        [key: string]: any
    }
}