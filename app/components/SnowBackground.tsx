'use client'

import dynamic from 'next/dynamic'

const PixelSnow = dynamic(() => import('./PixelSnow'), { ssr: false })

export default function SnowBackground() {
    return (
        <div className="snow-bg-fixed">
            <PixelSnow
                color="#ffffff"
                flakeSize={0.01}
                minFlakeSize={1.25}
                pixelResolution={200}
                speed={1.25}
                depthFade={8}
                farPlane={20}
                brightness={1}
                gamma={0.4545}
                density={0.3}
                variant="snowflake"
                direction={125}
            />
        </div>
    )
}
