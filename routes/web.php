<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('work/work');
});

Route::get('/about', function () {
    return view('about/about');
});
Route::get('/vilnius-university-siauliai-academy', function () {
    return view('portfolio/vilnius-university-siauliai-academy');
});
Route::get('/chernobyl-lessons-to-europe', function () {
    return view('portfolio/chernobyl-lessons-to-europe');
});
Route::get('/vilnius-university-siauliai-academy-2', function () {
    return view('portfolio/vilnius-university-siauliai-academy-2');
});
Route::get('/freedom', function () {
    return view('portfolio/freedom');
});
Route::get('/overthinking', function () {
    return view('portfolio/overthinking');
});
Route::get('/music-addiction', function () {
    return view('portfolio/music-addiction');
});
Route::get('/missing-hat', function () {
    return view('portfolio/missing-hat');
});
Route::get('/the-tap', function () {
    return view('portfolio/the-tap');
});
Route::get('/hopes-of-the-lockdown-ending', function () {
    return view('portfolio/hopes-of-the-lockdown-ending');
});
Route::get('/seb-arena-1', function () {
    return view('portfolio/seb-arena-1');
});
Route::get('/seb-arena-2', function () {
    return view('portfolio/seb-arena-2');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');