import config from './github-oauth-config.json'

export default {
    async fetch(request, env) {
      const url = new URL(request.url)
      const authorizationCode = url.searchParams.get("code")
      if (!authorizationCode) {
        return new Response("Authorization code not found.", { status: 400 })
      }
      const accessToken = await exchangeAuthorizationCodeForAccessToken(authorizationCode, env)
      if (!accessToken) {
        return new Response("Authorization code errorr.", { status: 400 })
      }
      return new Response(JSON.stringify({ access_token: accessToken }), {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        }
      })
    }
  }
  
  async function exchangeAuthorizationCodeForAccessToken(authorizationCode, env) {
      const clientId = env.GH_CLIENT_ID || config.clientId
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
      const data = await response.json()
      return data.access_token
    }