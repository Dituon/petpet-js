export const CLIENT_ID = '65b3c999db80ac568989'

export const GITHUB_API_URL = 'https://api.github.com'

export const TEMPLATE_REPO_NAME = 'petpet-data'

export const TEMPLATE_REPO = 'Dituon/' + TEMPLATE_REPO_NAME

export const OAUTH_PROXY_URL = 'https://d2n.moe/github/oauth'

export const REDICRECT_URI = location.href

export const urlParam = new URL(location.href).searchParams

export const LOGIN_PARAM = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDICRECT_URI,
    scope: 'user repo'
})

export const LOGIN_URL = `https://github.com/login/oauth/authorize?${LOGIN_PARAM.toString()}`
