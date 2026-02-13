'use client'

import React from 'react';
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
export function SplineSceneBasic() {
    return (
        <Card className="w-full h-full bg-transparent border-none relative overflow-visible shadow-none">
            <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
                <SplineScene
                    scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                    className="w-full h-full"
                />
            </div>
        </Card>
    )
}
