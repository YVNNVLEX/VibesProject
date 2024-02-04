<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia; // We are going to use this class to render React components

Route::get('/', function () {
    return Inertia::render('Acceuil'); 
});
Route::get('/SignUp', function () {
    return Inertia::render('SignUp'); 
});
Route::get('/SignIn', function () {
    return Inertia::render('SignIn'); 
});
Route::get('/Plateforme', function () {
    return Inertia::render('plateforme'); 
});