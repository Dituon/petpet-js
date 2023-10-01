import config from './github-oauth-config.json'

export const defaultHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
}

export default {
    async fetch(request, env) {
      const url = new URL(request.url)
      const authorizationCode = url.searchParams.get("code")
      if (!authorizationCode) {
        return new Response("Authorization code not found.", { status: 400, headers: defaultHeaders })
      }
      try {
          const accessToken = await exchangeAuthorizationCodeForAccessToken(authorizationCode, env)
          if (!accessToken) {
              return new Response("Authorization code error.", { status: 400, headers: defaultHeaders })
          }
          return new Response(JSON.stringify({ access_token: accessToken }), {
              headers: defaultHeaders
          })
      } catch (ex) {
          return new Response(ex, {status: 400, headers: defaultHeaders})
      }
    }
}

async function exchangeAuthorizationCodeForAccessToken(authorizationCode, env) {
    const clientId = env.GH_CLIENT_SECRET || config.clientId
    const clientSecret = env.GH_CLIENT_SECRET || config.clientSecret

    const response = await fetch("https://github.com/login/oauth/access_token", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
            code: authorizationCode,
            client_id: clientId,
            client_secret: clientSecret
        }).toString()
    })
    if (response.status !== 200) {
        throw await response.text()
    }
    const { access_token } = await response.json()
    return access_token
}