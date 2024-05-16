<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <title>{{ env('APP_NAME')}}</title>
    
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