param([string]$Reference = 'F:/projects/Home.png')

# Export artwork from the supplied 1440px design. Text and page layout stay in React.
Add-Type -AssemblyName System.Drawing
$source = [System.Drawing.Bitmap]::FromFile($Reference)
$destination = Join-Path $PSScriptRoot '../public/assets/design'
New-Item -ItemType Directory -Force $destination | Out-Null
function Export-Region($Name, $X, $Y, $Width, $Height) {
    $rectangle = New-Object System.Drawing.Rectangle($X, $Y, $Width, $Height)
    $asset = $source.Clone($rectangle, $source.PixelFormat)
    try { $asset.Save((Join-Path $destination "$Name.png")) }
    finally { $asset.Dispose() }
}
try {
    Export-Region 'hero-artwork' 0 535 1440 490
    Export-Region 'hero-spring' 0 280 200 280
    Export-Region 'hero-small-spring' 210 500 125 135
    Export-Region 'hero-cylinder' 1270 245 170 320
    Export-Region 'hero-cone' 1125 480 140 150
    Export-Region 'logo-light' 120 34 175 36
    Export-Region 'logo-dark' 120 5924 175 36
    Export-Region 'growth-artwork' 720 3190 720 730
    Export-Region 'creator-artwork' 100 3880 600 700
    Export-Region 'course-figma' 136 1784 341 196
    Export-Region 'course-digital' 549 1784 341 196
    Export-Region 'course-data' 962 1784 341 196
    Export-Region 'course-office' 136 2208 341 196
    Export-Region 'course-finance' 549 2208 341 196
    Export-Region 'course-team' 962 2208 341 196
    Export-Region 'course-students' 245 2058 131 36
    Export-Region 'sarah' 142 5383 82 82
    Export-Region 'james' 557 5383 82 82
    Export-Region 'alex' 972 5383 82 82
    Export-Region 'partners' 145 1100 1150 55
    Export-Region 'cta-left-top' 0 4580 330 180
    Export-Region 'cta-right-top' 1100 4580 340 220
    Export-Region 'cta-left-bottom' 0 4810 315 258
    Export-Region 'cta-right-bottom' 1170 4800 270 268
} finally { $source.Dispose() }
