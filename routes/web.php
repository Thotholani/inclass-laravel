<?php

Route::get('/', fn() => inertia('home'));

Route::get("/privacy", fn() => inertia('privacy'));

Route::get("/terms", fn() => inertia('terms'));

Route::get("/login", fn() => inertia('login'));

Route::get("/register", fn() => inertia('register'));

Route::get("/forgot-password", fn() => inertia('forgot-password'));

Route::get("/help", fn() => inertia('help'));

Route::get("/find-a-tutor", fn() => inertia('find-a-tutor'));

Route::get("/become-a-tutor", fn() => inertia('become-a-tutor'));

Route::get("/request-a-feature", fn() => inertia('request-a-feature'));

Route::get("/whiteboard", fn() => inertia('whiteboard'));

Route::get("/select-role", fn() => inertia('auth/select-role'));

Route::get("/select-role/student", fn() => inertia('auth/student-register'));

Route::get("/select-role/tutor", fn() => inertia('auth/tutor-register'));

Route::get("/student/dashboard", fn() => inertia('student/dashboard'));
