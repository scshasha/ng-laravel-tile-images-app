<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


/**
 * NOTE (to self): Omit /api/... when writting a new api route. 
 * 
 *
 */



/**
 * Route for image storing (saves to the public directory and creates a record on the Db).
 *
 * @uses Route::get()
 * @example http://example.com/api/v1/image/store
 */
// Route::post("/v1/image/store/", "Controller@store")->middleware("cors"); // No need. Laravel 7.x has cors support/enabled by default.
Route::post("/v1/image/store/", "ImageController@store");
/**
 * Route for getting / requesting images to display.
 *
 * @uses Route::get()
 * @example http://example.com/api/v1/image/list
 */
Route::get("/v1/image/list", "ImageController@show");