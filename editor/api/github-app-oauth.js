import config from './github-oauth-config.json'

export const defaultHeaders = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url)
        const code = url.searchParams.get("code")
        if (!code) {
            return new Response("Authorization code not found.", {status: 400, headers: defaultHeaders})
        }
        try {
            const client_id = env.GH_CLIENT_ID || config.clientId
            const client_secret = env.GH_CLIENT_SECRET || config.clientSecret

            const response = await fetch(
                "https://github.com/login/oauth/access_token",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json",
                    },
                    body: JSON.stringify({client_id, client_secret, code})
                }
            )
            const result = await response.json()

            if (result.error) {
                return new Response(JSON.stringify(result), {status: 400, headers: defaultHeaders})
            }

            return new Response(JSON.stringify({
                access_token: result.access_token
            }), {
                headers: defaultHeaders
            })
        } catch (ex) {
            console.error(ex)
            return new Response(ex.message, {status: 500})
        }
    }
}