<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class StudentController extends Controller
{
    public function create()
    {
        return inertia('auth/student-register');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'min:3'],
        ]);

        $user = User::findOrFail(Auth::id());
        $user->update(
            [
                "role" => "student",
                "name" => $validated["name"],
            ]
        );

        Student::create(
            [
                "user_id" => $user->id,
            ]
        );

        return redirect("dashboard");
    }
}
