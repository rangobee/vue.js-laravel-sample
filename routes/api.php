<?php

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Auth;

/*
  |--------------------------------------------------------------------------
  | API Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register API routes for your application. These
  | routes are loaded by the RouteServiceProvider within a group which
  | is assigned the "api" middleware group. Enjoy building your API!
  |
 */

Route::middleware('auth:api')->get('/logout', function (Request $request) {
    // try{
        \Auth::logout();
        // $request->user()->token()->revoke();

        // return $request->bearerToken();
    // }catch(\Exception $e){
    //     return $e->getMessage();
    // }
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->post('/message', function(Request $request) {
    return 'Your input message is "' . $request['message'] . '".';
});
