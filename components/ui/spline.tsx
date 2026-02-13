'use client'

/**
 * Spline 3D scene placeholder. The @splinetool/react-spline package triggers
 * "Package path . is not exported" on Vercel build, so we render a placeholder
 * until the package or build config is fixed. Same props as real SplineScene.
 */
interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ className }: SplineSceneProps) {
    return (
        <div
            className={className}
            style={{
                width: '100%',
                height: '100%',
                minHeight: 280,
                background: 'rgba(0,0,0,0.3)',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94a3b8',
                border: '1px solid rgba(255,255,255,0.06)',
            }}
        >
            <span>3D scene (Spline)</span>
        </div>
    )
}
