import loadImage from 'blueimp-load-image'

export function loadImageAsync (fileOrBlobOrURL, opts) {
  return new Promise((resolve, reject) => {
    loadImage(
      fileOrBlobOrURL,
      function (img) {
        resolve(img)
      },
      opts
    )
  })
}

export function canvasToBlobAsync (canvas, mimeType, qualityArgument) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(function (blob) {
      resolve(blob)
    }, mimeType, qualityArgument)
  })
}
