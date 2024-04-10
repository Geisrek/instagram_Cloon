<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\userController;
use App\Http\Controllers\followsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/addUser',[userController::class,"addUser"]);
Route::post("/signin",[userController::class,"signin"]);
Route::post("/follow",[followsController::class,"addFollow"]);
Route::post("/join",[followsController::class,"freands"]);