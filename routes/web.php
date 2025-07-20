<?php

use App\Http\Controllers\RegisteredUserController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\TutorController;
use App\Models\Tutor;

// Marketing Routes
Route::inertia('/', 'marketing/home');
Route::inertia('/privacy', 'marketing/privacy')->name('privacy');
Route::inertia('/terms', 'marketing/terms')->name("terms");
Route::inertia('/help', 'help');
Route::inertia('/become-a-tutor', 'marketing/become-a-tutor');
Route::inertia('/request-a-feature', 'marketing/request-a-feature');
Route::inertia('/whiteboard', 'app/whiteboard');

// ********* Authentication *********
// Login
Route::get('/login', [SessionController::class, 'create'])->name('login');
Route::post('/login', [SessionController::class, 'store']);

// Register
Route::get('/register', [RegisteredUserController::class, 'create']);
Route::post('/register', [RegisteredUserController::class, 'store']);

// Student Creation
Route::post("/student-register", [StudentController::class, "store"])->middleware("auth");
// Tutor Creation
Route::post("/tutor-register", [TutorController::class, "store"])->middleware("auth");

// Role Selection
//TODO: Imple
Route::middleware(['auth', 'profileIncomplete:user'])->group(function () {
    Route::get("/select-role", fn() => inertia('auth/select-role'))->name("select-role")->middleware("auth");
    Route::get("/select-role/student", [StudentController::class, "create"])->middleware("auth");
    Route::get("/select-role/tutor", [TutorController::class, "create"])->middleware("auth");
});
// Other
Route::inertia('/forgot-password', 'auth/forgot-password');
Route::post('/logout', [SessionController::class, 'destroy'])->middleware("auth");
// ********* Authentication *********


Route::get("/select-role/tutor/complete", function () {
    return inertia("auth/complete-tutor");
});

// Application Routes
Route::middleware(['auth', 'role:student,tutor'])->group(function () {
    Route::get('/dashboard', fn() => inertia('app/dashboard'))->name("dashboard");
    Route::get("/lessons", [\App\Http\Controllers\LessonController::class, "index"])->middleware("auth");
    Route::get("/find-a-tutor",
        function () {
            $tutors = Tutor::with('user')->orderByDesc("rating")->paginate(10);
//        dump(
//            Tutor::with('user')->paginate(5)->toArray()
//        );
//        dd($tutors);

            return inertia('app/find-a-tutor', ['tutors' => $tutors]);
        });
    Route::get("/find-a-tutor/{id}", function ($id) {
        $tutor = Tutor::with('user')->find($id);
        return inertia('app/tutor', ['tutor' => $tutor]);
    });
    Route::get("/wallet", fn() => inertia('app/wallet/index'));
    Route::get('/settings', [RegisteredUserController::class, 'index']);
});

// Student Routes
Route::get("/wallet/recharge", fn() => inertia('app/wallet/recharge'));
// Tutor Routes


// Tools Routes
Route::get("/lesson/{id}", function () {
    return inertia('app/lesson');
});

