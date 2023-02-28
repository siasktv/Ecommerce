type ImageType = Record<string, string>

async function loadImages(): Promise<ImageType> {
  const images: ImageType = {}
  const imageModules = import.meta.glob('./assets/*.{png,jpg,jpeg,svg}')
  const modulePaths = Object.keys(imageModules)

  await Promise.all(
    modulePaths.map(async (path) => {
      const url = await import(path)
      images[path] = url.default
    })
  )

  return images
}

export default loadImages
