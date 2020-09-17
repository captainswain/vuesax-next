
const setTheme = (forceTheme: string) => {
  document.body.classList.add('vso-remove-transition')
  const media = window.matchMedia('(prefers-color-scheme: dark)')

  let isThemeDark = media.matches

  if (localStorage.vsTheme) {
    isThemeDark = localStorage.vsTheme == 'dark'
  }

  if (isThemeDark) {
    document.body.setAttribute('vso-theme', 'dark')
  } else {
    document.body.removeAttribute('vso-theme')
  }

  if (forceTheme == 'dark') {
    document.body.setAttribute('vso-theme', 'dark')
  } else if (forceTheme == 'light') {
    document.body.removeAttribute('vso-theme')
  }

  localStorage.vsTheme = isThemeDark ? 'dark' : 'light'

  setTimeout(() => {
    document.body.classList.remove('vso-remove-transition')
  }, 100);

  return isThemeDark ? 'dark' : 'light'
}

const toggleTheme = (forceTheme: string) => {
  document.body.classList.add('vso-remove-transition')
  const media = window.matchMedia('(prefers-color-scheme: dark)')

  let isThemeDark = media.matches

  if (localStorage.vsTheme) {
    isThemeDark = localStorage.vsTheme == 'dark'
  }

  if (!isThemeDark) {
    document.body.setAttribute('vso-theme', 'dark')
  } else {
    document.body.removeAttribute('vso-theme')
  }

  if (forceTheme == 'dark') {
    document.body.removeAttribute('vso-theme')
  } else if (forceTheme == 'light') {
    document.body.setAttribute('vso-theme', 'dark')
  }

  localStorage.vsTheme = !isThemeDark ? 'dark' : 'light'

  setTimeout(() => {
    document.body.classList.remove('vso-remove-transition')
  }, 100);

  return !isThemeDark ? 'dark' : 'light'
}

export {
  toggleTheme,
  setTheme
}
