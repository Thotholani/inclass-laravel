<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\Password;

class RegisteredUserController extends Controller
{
    public function index()
    {
        return inertia('app/settings');
    }

    public function create()
    {
        return inertia('auth/register');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            "name" => ["required", "string", "max:255"],
            "email" => ["required", "email", "max:255", "unique:users"],
            "password" => ["required", Password::min(8)->mixedCase()->symbols()->numbers()],
            "agreed_to_terms" => ["accepted"],
        ]);

        $attributes = array_diff($validated, [true]);

        $new_user = User::create($attributes);

        Auth::login($new_user);

        return redirect("select-role");
    }
}
