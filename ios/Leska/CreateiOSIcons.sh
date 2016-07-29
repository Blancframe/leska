#!/bin/sh

# iPhone
# Spotlight - iOS 5,6
# Settings - iOS 5-8
# 29pt - 1x,2x,3x
convert Icon-Input.png -resize 87x87 Images.xcassets/AppIcon.appiconset/Icon87.png
convert Icon-Input.png -resize 58x58  Images.xcassets/AppIcon.appiconset/Icon58.png
convert Images.xcassets/AppIcon.appiconset/Icon58.png -resize 29x29  Images.xcassets/AppIcon.appiconset/Icon29.png

# iPhone
# Spotlight - iOS 7-8
# 40pt 2x,3x
convert Icon-Input.png -resize 120x120  Images.xcassets/AppIcon.appiconset/Icon120.png
convert Icon-Input.png -resize 80x80  Images.xcassets/AppIcon.appiconset/Icon80.png

# iPhone
# App - iOS 5,6
# 57pt 1x,2x
convert Icon-Input.png -resize 114x114  Images.xcassets/AppIcon.appiconset/Icon114.png
convert Images.xcassets/AppIcon.appiconset/Icon114.png -resize 57x57  Images.xcassets/AppIcon.appiconset/Icon57.png

# iPhone
# App - iOS 7,8
# 60pt 2x,3x
convert Icon-Input.png -resize 180x180  Images.xcassets/AppIcon.appiconset/Icon180.png
#convert -resize 120x120 Icon-Input.png Images.xcassets/AppIcon.appiconset/Icon120.png # duplicate


# iPad
# Settings iOS 5-8
#convert -resize 58x58 Icon-Input.png Images.xcassets/AppIcon.appiconset/Icon58.png # duplicate
#convert -resize 29x29 Images.xcassets/AppIcon.appiconset/Icon58.png Images.xcassets/AppIcon.appiconset/Icon29.png # duplicate

# iPad
# Spotlight iOS 7,8
# 40pt 1x,2x
#convert -resize 80x80 Icon-Input.png Images.xcassets/AppIcon.appiconset/Icon80.png # duplicate
convert Images.xcassets/AppIcon.appiconset/Icon80.png -resize 40x40  Images.xcassets/AppIcon.appiconset/Icon40.png

# iPad
# Spotlight iOS 5,6
# 50pt 1x,2x
convert Icon-Input.png -resize 100x100  Images.xcassets/AppIcon.appiconset/Icon100.png
convert Images.xcassets/AppIcon.appiconset/Icon100.png -resize 50x50  Images.xcassets/AppIcon.appiconset/Icon50.png

# iPad
# App iOS 5,6
# 72pt 1x,2x
convert Icon-Input.png -resize 144x144  Images.xcassets/AppIcon.appiconset/Icon144.png
convert Images.xcassets/AppIcon.appiconset/Icon144.png -resize 72x72  Images.xcassets/AppIcon.appiconset/Icon72.png

# iPad
# App iOS 7,8
# 76pt 1x,2x
convert Icon-Input.png -resize 152x152  Images.xcassets/AppIcon.appiconset/Icon152.png
convert Images.xcassets/AppIcon.appiconset/Icon152.png -resize 76x76  Images.xcassets/AppIcon.appiconset/Icon76.png

# iPad Pro
# App iOS 9
# 167pt 2x
convert Icon-Input.png -resize 167x167  Images.xcassets/AppIcon.appiconset/Icon167.png


# CarPlay
# App iOS 8
# 120pt 1x
#convert -resize 120x120 Icon-Input.png Images.xcassets/AppIcon.appiconset/Icon120.png # duplicate


# Apple Watch
# Notification Center
# 38mm, 42mm
convert Icon-Input.png -resize 48x48  Images.xcassets/AppIcon.appiconset/Icon48.png
convert Icon-Input.png -resize 55x55  Images.xcassets/AppIcon.appiconset/Icon55.png

# Apple Watch
# Companion Settings
# 29pt 2x,3x
#convert -resize 58x58 Icon-Input.png Images.xcassets/AppIcon.appiconset/Icon58.png # duplicate
#convert -resize 87x87 Icon-Input.png Images.xcassets/AppIcon.appiconset/Icon87.png # duplicate

# Apple Watch
# Home Screen (All)
# Long Look (38mm)
#convert -resize 80x80 Icon-Input.png Images.xcassets/AppIcon.appiconset/Icon80.png # duplicate

# Apple Watch
# Long Look (42mm)
convert Icon-Input.png -resize 88x88  Images.xcassets/AppIcon.appiconset/Icon88.png

# Apple Watch
# Short Look
# 38mm, 42mm
convert Icon-Input.png -resize 172x172  Images.xcassets/AppIcon.appiconset/Icon172.png
convert Icon-Input.png -resize 196x196  Images.xcassets/AppIcon.appiconset/Icon196.png


# OS X
# 512pt 1x,2x
convert Icon-Input.png -resize 1024x1024  Images.xcassets/AppIcon.appiconset/Icon1024.png
convert Images.xcassets/AppIcon.appiconset/Icon1024.png -resize 512x512  Images.xcassets/AppIcon.appiconset/Icon512.png

# OS X
# 256pt 1x,2x
#convert -resize 512x512 Images.xcassets/AppIcon.appiconset/Icon1024.png Images.xcassets/AppIcon.appiconset/Icon512.png # duplicate
convert Images.xcassets/AppIcon.appiconset/Icon512.png -resize 256x256  Images.xcassets/AppIcon.appiconset/Icon256.png

# OS X
# 128pt 1x,2x
#convert -resize 256x256 Images.xcassets/AppIcon.appiconset/Icon512.png Images.xcassets/AppIcon.appiconset/Icon256.png # duplicate
convert Images.xcassets/AppIcon.appiconset/Icon256.png -resize 128x128  Images.xcassets/AppIcon.appiconset/Icon128.png

# OS X
# 32pt 1x,2x
convert Images.xcassets/AppIcon.appiconset/Icon128.png -resize 64x64  Images.xcassets/AppIcon.appiconset/Icon64.png
convert Images.xcassets/AppIcon.appiconset/Icon64.png -resize 32x32  Images.xcassets/AppIcon.appiconset/Icon32.png

# OS X
# 16pt 1x,2x
#convert -resize 32x32 Images.xcassets/AppIcon.appiconset/Icon64.png Images.xcassets/AppIcon.appiconset/Icon32.png # duplicate
convert Images.xcassets/AppIcon.appiconset/Icon32.png -resize 16x16  Images.xcassets/AppIcon.appiconset/Icon16.png
