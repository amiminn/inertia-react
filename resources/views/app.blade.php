<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <title>{{ env('APP_NAME')}}</title>
    <link
      rel="icon"
      href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>😏</text></svg>"
    />
    <script>
      window.Laravel = {csrfToken: '{{ csrf_token() }}',app_key : '{{ env("APP_KEY") }}',url : '{{ env("APP_URL") }}'}
      @auth
        let user = {{ Js::from(auth()->user()) }};let token = {{ Js::from(session('token')) }};window.Auth = {user,token}
      @endauth
  </script>
    @viteReactRefresh 
    @vite(['resources/css/app.css','resources/js/app.jsx'])
    @inertiaHead
  </head>
  <body>
    @inertia
  </body>
</html>