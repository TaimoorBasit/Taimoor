'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    const [shouldLoad, setShouldLoad] = useState(false)

    useEffect(() => {
        // Prioritize LCP: Defer Spline load slightly (reduced to 50ms) to unblock initial paint but feel immediate
        const timer = setTimeout(() => {
            setShouldLoad(true)
        }, 50)
        return () => clearTimeout(timer)
    }, [])

    if (!shouldLoad) {
        return (
            <div className={className}>
                {/* Lightweight placeholder to prevent layout shift */}
                <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-cyan-mist/30 border-t-cyan-mist animate-spin" />
                </div>
            </div>
        )
    }

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
            />
        </Suspense>
    )
}
