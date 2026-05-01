"use client"

import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageGalleryProps {
  images: string[]
  isOpen: boolean
  onClose: () => void
  initialIndex?: number
}

const ImageGallery = ({ images, isOpen, onClose, initialIndex = 0 }: ImageGalleryProps) => {
  const [[page, direction], setPage] = useState([initialIndex, 0])
  const [mounted, setMounted] = useState(false)
  const currentIndex = (page + images.length) % images.length

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    setPage([initialIndex, 0])
  }, [initialIndex])

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when gallery is open
      document.body.style.overflow = "hidden"
    } else {
      // Restore body scroll when gallery is closed
      document.body.style.overflow = "unset"
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          e.preventDefault()
          prevImage()
          break
        case "ArrowRight":
          e.preventDefault()
          nextImage()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex])

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  const nextImage = () => {
    paginate(1)
  }

  const prevImage = () => {
    paginate(-1)
  }

  const goToImage = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1
    setPage([index, newDirection])
  }

  if (!isOpen || images.length === 0) return null

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const swipeConfidenceThreshold = 5000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const content = (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        className="fixed inset-0 bg-black/95 z-[1000] flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Header with close button and counter */}
        <div className="flex justify-between items-center p-4 z-10">
          <div className="text-white text-sm bg-black/50 px-3 py-1 rounded-full">
            {currentIndex + 1} / {images.length}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Main image container */}
        <div className="flex-1 flex items-center justify-center relative px-4 pb-20 overflow-hidden">
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10 hidden md:flex"
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10 hidden md:flex"
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            </>
          )}

          {/* Main Image */}
          <motion.div
            className="absolute max-w-full max-h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            onClick={(e) => e.stopPropagation()}
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
          >
            <img
              src={images[currentIndex] || "/placeholder.svg"}
              alt={`Gallery image ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg select-none pointer-events-none"
              style={{ maxHeight: "calc(100vh - 200px)" }}
            />
          </motion.div>
        </div>

        {/* Thumbnail Navigation */}
        {images.length > 1 && (
          <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
            <div className="flex justify-center">
              <div className="flex space-x-2 max-w-full overflow-x-auto scrollbar-hide px-4 py-2">
                <div className="flex space-x-2 min-w-max">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation()
                        goToImage(index)
                      }}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        index === currentIndex
                          ? "border-white scale-110 shadow-lg"
                          : "border-white/30 hover:border-white/60 hover:scale-105"
                      }`}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Touch/Swipe indicators for mobile */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/60 text-xs hidden sm:block">
          Use ← → keys or swipe/click arrows to navigate
        </div>
      </motion.div>
    </AnimatePresence>
  )

  return createPortal(content, document.body)
}

export default ImageGallery