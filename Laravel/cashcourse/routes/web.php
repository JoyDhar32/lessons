<?php

use App\Http\Controllers\RegisterController;
use Illuminate\Support\Facades\Route;

Route::get('/register',[RegisterController::class,'index']) ->name('register');
Route::post('/register',[RegisterController::class,'store']);