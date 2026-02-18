'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-cyan-mist/30 border-t-cyan-mist animate-spin" />
                </div>
            }
        >
            <Spline
                scene={scene}
                className={className}
                title="3D Interactive Cyber Avatar"
            />
        </Suspense>
    )
}
