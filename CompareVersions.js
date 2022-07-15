function compareVersions (version1, version2) {
    version1 = version1.split('.')
    version2 = version2.split('.')

    while (version1.length && version2.length) {
      const ver1 = Number(version1.shift())
      const ver2 = Number(version2.shift())
      
      if (ver1 !== ver2) {
        return ver1 > ver2
      }
    }
    
    return version2.length === 0
}